// STATE MANAGEMENT
let deck = [];
let currentIndex = 0;
let isFlipped = false;
let isShuffled = false;
let studyFilter = 'all'; // 'all', 'known', 'unknown', 'starred'
let selectedPart = 'all'; // 'all', '1', '2'

// User sets (stored by item ID)
let knownSet = new Set();
let unknownSet = new Set();
let starredSet = new Set();

// DOM ELEMENTS
const btnStudyMode = document.getElementById('btn-study-mode');
const btnLibraryMode = document.getElementById('btn-library-mode');
const viewStudy = document.getElementById('view-study');
const viewLibrary = document.getElementById('view-library');
const btnThemeToggle = document.getElementById('btn-theme-toggle');

// Flashcard elements
const flashcard = document.getElementById('flashcard');
const cardImage = document.getElementById('card-image');
const cardBackImage = document.getElementById('card-back-image');
const cardNumber = document.getElementById('card-number');
const cardAuthor = document.getElementById('card-author');
const cardTitle = document.getElementById('card-title');
const cardTechnique = document.getElementById('card-technique');
const cardPeriod = document.getElementById('card-period');
const btnStarCard = document.getElementById('btn-star-card');

// Progress & Stats
const progressCount = document.getElementById('progress-count');
const progressPercent = document.getElementById('progress-percent');
const progressBarFill = document.getElementById('progress-bar-fill');
const statKnownCount = document.getElementById('stat-known-count');
const statUnknownCount = document.getElementById('stat-unknown-count');
const statStarredCount = document.getElementById('stat-starred-count');
const filterStarredCount = document.getElementById('filter-starred-count');

// Controls
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnCorrect = document.getElementById('btn-correct');
const btnIncorrect = document.getElementById('btn-incorrect');
const btnShuffle = document.getElementById('btn-shuffle');
const btnResetStats = document.getElementById('btn-reset-stats');
const btnFilterStarred = document.getElementById('btn-filter-starred');

// Library & Filters
const librarySearch = document.getElementById('library-search');
const filterAuthor = document.getElementById('filter-author');
const filterPeriod = document.getElementById('filter-period');
const filterTechnique = document.getElementById('filter-technique');
const btnClearFilters = document.getElementById('btn-clear-filters');
const libraryGrid = document.getElementById('library-grid');
const libraryResultsCount = document.getElementById('library-results-count');

// Modal Elements
const detailModal = document.getElementById('detail-modal');
const modalImage = document.getElementById('modal-image');
const modalAuthor = document.getElementById('modal-author');
const modalTitle = document.getElementById('modal-title');
const modalTechnique = document.getElementById('modal-technique');
const modalPeriod = document.getElementById('modal-period');
const modalIndex = document.getElementById('modal-index');
const modalClose = document.getElementById('modal-close');
const modalCloseBackdrop = document.getElementById('modal-close-backdrop');

// ==========================================================================
// INITIALIZATION
// ==========================================================================
function init() {
  loadState();
  loadTheme();
  
  // Set active class on loaded part button
  const activeBtn = document.querySelector(`.part-btn[data-part="${selectedPart}"]`);
  if (activeBtn) {
    document.querySelectorAll('.part-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }
  
  buildFilters();
  initDeck();
  renderCard();
  renderLibraryGrid();
  updateStats();
  setupEventListeners();
}

// Load sets from localStorage
function loadState() {
  try {
    const known = localStorage.getItem('gagliano_known');
    const unknown = localStorage.getItem('gagliano_unknown');
    const starred = localStorage.getItem('gagliano_starred');
    selectedPart = localStorage.getItem('gagliano_selected_part') || 'all';
    
    if (known) knownSet = new Set(JSON.parse(known));
    if (unknown) unknownSet = new Set(JSON.parse(unknown));
    if (starred) starredSet = new Set(JSON.parse(starred));
  } catch (e) {
    console.error("Errore nel caricamento del progresso:", e);
  }
}

// Save sets to localStorage
function saveState() {
  try {
    localStorage.setItem('gagliano_known', JSON.stringify([...knownSet]));
    localStorage.setItem('gagliano_unknown', JSON.stringify([...unknownSet]));
    localStorage.setItem('gagliano_starred', JSON.stringify([...starredSet]));
  } catch (e) {
    console.error("Errore nel salvataggio del progresso:", e);
  }
}

// Load theme preference
function loadTheme() {
  if (!btnThemeToggle) return;
  
  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('gagliano_theme') || 'dark';
  } catch (e) {
    console.warn("Storage non accessibile, uso tema notte come default:", e);
  }
  
  const sunIcon = btnThemeToggle.querySelector('.sun-icon');
  const moonIcon = btnThemeToggle.querySelector('.moon-icon');
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
  } else {
    document.body.classList.remove('light-theme');
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
  }
}

// Toggle between light and dark themes
function toggleTheme() {
  if (!btnThemeToggle) return;
  
  const isLight = document.body.classList.toggle('light-theme');
  const sunIcon = btnThemeToggle.querySelector('.sun-icon');
  const moonIcon = btnThemeToggle.querySelector('.moon-icon');
  
  try {
    localStorage.setItem('gagliano_theme', isLight ? 'light' : 'dark');
  } catch (e) {
    console.warn("Storage non accessibile, preferenza non salvata:", e);
  }
  
  if (isLight) {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
  } else {
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
  }
}

// Build dropdown options dynamically from OPERE_DATA, filtered by selectedPart
function buildFilters() {
  // Salva i valori attualmente selezionati
  const prevAuthor = filterAuthor ? filterAuthor.value : '';
  const prevPeriod = filterPeriod ? filterPeriod.value : '';
  const prevTech = filterTechnique ? filterTechnique.value : '';

  if (filterAuthor) filterAuthor.innerHTML = '<option value="">Tutti gli autori</option>';
  if (filterPeriod) filterPeriod.innerHTML = '<option value="">Tutti i periodi</option>';
  if (filterTechnique) filterTechnique.innerHTML = '<option value="">Tutte le tecniche</option>';

  const authors = new Set();
  const periods = new Set();
  const techniques = new Set();
  
  const filteredData = selectedPart === 'all' 
    ? OPERE_DATA 
    : OPERE_DATA.filter(item => item.parte === parseInt(selectedPart, 10));

  filteredData.forEach(item => {
    if (item.autore) authors.add(item.autore);
    if (item.periodo && item.periodo !== "Non specificato") periods.add(item.periodo);
    if (item.tecnica && item.tecnica !== "Non specificata") techniques.add(item.tecnica);
  });
  
  const sortedAuthors = [...authors].sort();
  const sortedPeriods = [...periods].sort();
  const sortedTechniques = [...techniques].sort();
  
  if (filterAuthor) {
    sortedAuthors.forEach(author => {
      const opt = document.createElement('option');
      opt.value = author;
      opt.textContent = author;
      filterAuthor.appendChild(opt);
    });
  }
  
  if (filterPeriod) {
    sortedPeriods.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      filterPeriod.appendChild(opt);
    });
  }
  
  if (filterTechnique) {
    sortedTechniques.forEach(tech => {
      const opt = document.createElement('option');
      opt.value = tech;
      opt.textContent = tech.length > 50 ? tech.substring(0, 50) + "..." : tech;
      opt.title = tech;
      filterTechnique.appendChild(opt);
    });
  }

  if (filterAuthor && [...filterAuthor.options].some(o => o.value === prevAuthor)) filterAuthor.value = prevAuthor;
  if (filterPeriod && [...filterPeriod.options].some(o => o.value === prevPeriod)) filterPeriod.value = prevPeriod;
  if (filterTechnique && [...filterTechnique.options].some(o => o.value === prevTech)) filterTechnique.value = prevTech;
}

// ==========================================================================
// DECK CONFIGURATION
// ==========================================================================
function initDeck() {
  let tempDeck = [...OPERE_DATA];
  
  // Applica filtro parte se applicabile
  if (selectedPart !== 'all') {
    const partNum = parseInt(selectedPart, 10);
    const partFiltered = tempDeck.filter(item => item.parte === partNum);
    if (partFiltered.length > 0) {
      tempDeck = partFiltered;
    }
  }
  
  // Apply current study filter
  if (studyFilter === 'known') {
    const knownFiltered = tempDeck.filter(item => knownSet.has(item.id));
    if (knownFiltered.length > 0) {
      tempDeck = knownFiltered;
    } else {
      studyFilter = 'all';
    }
  } else if (studyFilter === 'unknown') {
    const unknownFiltered = tempDeck.filter(item => unknownSet.has(item.id));
    if (unknownFiltered.length > 0) {
      tempDeck = unknownFiltered;
    } else {
      studyFilter = 'all';
    }
  } else if (studyFilter === 'starred') {
    const starredFiltered = tempDeck.filter(item => starredSet.has(item.id));
    if (starredFiltered.length > 0) {
      tempDeck = starredFiltered;
    } else {
      studyFilter = 'all';
    }
  }

  if (!tempDeck || tempDeck.length === 0) {
    tempDeck = [...OPERE_DATA];
  }
  
  deck = tempDeck;
  if (currentIndex >= deck.length) {
    currentIndex = 0;
  }
  
  // Shuffle if active
  if (isShuffled) {
    deck = fisherYatesShuffle(tempDeck);
    btnShuffle.classList.add('active');
  } else {
    deck = tempDeck.sort((a, b) => a.id - b.id);
    btnShuffle.classList.remove('active');
  }
  
  currentIndex = 0;
  syncStudyFilterUI();
}

// Helper to toggle study filters
function toggleStudyFilter(filter) {
  if (studyFilter === filter) {
    studyFilter = 'all';
  } else {
    studyFilter = filter;
  }
  initDeck();
  renderCard();
}

// Sync visual active states for dashboard and banner
function syncStudyFilterUI() {
  const cardKnown = document.querySelector('.stat-card.known');
  const cardUnknown = document.querySelector('.stat-card.unknown');
  const cardStarred = document.querySelector('.stat-card.starred');
  
  cardKnown.classList.remove('active');
  cardUnknown.classList.remove('active');
  cardStarred.classList.remove('active');
  
  const banner = document.getElementById('study-filter-banner');
  const bannerText = document.getElementById('study-filter-text');
  
  banner.className = 'study-filter-banner';
  
  if (studyFilter === 'all') {
    banner.style.display = 'none';
  } else {
    banner.style.display = 'flex';
    if (studyFilter === 'known') {
      cardKnown.classList.add('active');
      bannerText.textContent = "Lo So 👍";
      banner.classList.add('filter-known');
    } else if (studyFilter === 'unknown') {
      cardUnknown.classList.add('active');
      bannerText.textContent = "Da Rivedere 👎";
      banner.classList.add('filter-unknown');
    } else if (studyFilter === 'starred') {
      cardStarred.classList.add('active');
      bannerText.textContent = "Salvati ⭐";
      banner.classList.add('filter-starred');
    }
  }
  
  if (btnFilterStarred) {
    btnFilterStarred.classList.toggle('active', studyFilter === 'starred');
  }
}

// Fisher-Yates Shuffle Algorithm
function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ==========================================================================
// RENDER FLASHCARD
// ==========================================================================
function renderCard() {
  if (deck.length === 0) {
    if (cardNumber) cardNumber.textContent = "Nessuna opera";
    if (cardAuthor) cardAuthor.textContent = "--";
    if (cardTitle) cardTitle.textContent = "--";
    if (cardTechnique) cardTechnique.textContent = "--";
    if (cardPeriod) cardPeriod.textContent = "--";
    if (cardImage) cardImage.src = "";
    if (cardBackImage) cardBackImage.src = "";
    return;
  }
  
  const item = deck[currentIndex];
  
  // Reset card visual state
  isFlipped = false;
  flashcard.classList.remove('flipped');
  
  // Load card metadata
  if (cardNumber) cardNumber.textContent = `Opera ${item.id} (Scheda ${currentIndex + 1} di ${deck.length})`;
  if (cardAuthor) cardAuthor.textContent = item.autore || "Autore Ignoto";
  if (cardTitle) cardTitle.textContent = item.titolo || "Senza Titolo";
  if (cardTechnique) cardTechnique.textContent = item.tecnica || "Tecnica non specificata";
  if (cardPeriod) cardPeriod.textContent = item.periodo || "Periodo non specificato";
  
  // Update star button state
  if (starredSet.has(item.id)) {
    btnStarCard.classList.add('active');
  } else {
    btnStarCard.classList.remove('active');
  }
  
  // Smooth image loading with loading spinner
  const imgWrapper = cardImage.parentElement;
  const loader = imgWrapper.querySelector('.image-loader');
  
  if (loader) loader.classList.add('loading');
  
  // Helper for image loading with bidirectional fallback (root path vs images/ folder)
  const loadImageWithFallback = function(imgEl, initialSrc) {
    imgEl.dataset.fallbackTried = "false";
    imgEl.onload = () => {
      if (loader) loader.classList.remove('loading');
    };
    imgEl.onerror = function() {
      if (loader) loader.classList.remove('loading');
      
      if (this.dataset.fallbackTried !== "true") {
        this.dataset.fallbackTried = "true";
        if (this.src.includes('images/')) {
          // Try root path: "images/opera_1.jpg" -> "opera_1.jpg"
          this.src = this.src.replace('images/', '');
        } else {
          // Try subfolder path: "opera_1.jpg" -> "images/opera_1.jpg"
          const filename = initialSrc.split('/').pop();
          this.src = 'images/' + filename;
        }
      } else {
        // Ultimate fallback: SVG placeholder card
        this.onerror = null;
        this.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='100%' height='100%' fill='%231f2937'/><text x='50%' y='45%' font-family='sans-serif' font-size='20' fill='%239ca3af' text-anchor='middle'>🖼️ Immagine non trovata</text><text x='50%' y='58%' font-family='sans-serif' font-size='14' fill='%236b7280' text-anchor='middle'>Verifica che il file sia presente su GitHub</text></svg>";
      }
    };
    imgEl.src = initialSrc;
  };

  loadImageWithFallback(cardImage, item.immagine);
  if (cardBackImage) {
    loadImageWithFallback(cardBackImage, item.immagine);
  }
  
  updateProgressBar();
}

// Flip flashcard
function flipCard() {
  isFlipped = !isFlipped;
  flashcard.classList.toggle('flipped', isFlipped);
}

// Go to next card
function nextCard() {
  if (deck.length === 0) return;
  currentIndex = (currentIndex + 1) % deck.length;
  renderCard();
}

// Go to previous card
function prevCard() {
  if (deck.length === 0) return;
  currentIndex = (currentIndex - 1 + deck.length) % deck.length;
  renderCard();
}

// ==========================================================================
// ASSESSMENT & STATISTICS
// ==========================================================================
function assessCard(isCorrect) {
  if (deck.length === 0) return;
  const item = deck[currentIndex];
  
  if (isCorrect) {
    knownSet.add(item.id);
    unknownSet.delete(item.id);
  } else {
    unknownSet.add(item.id);
    knownSet.delete(item.id);
  }
  
  saveState();
  updateStats();
  
  // If card is flipped, flip it back and transition to the next card
  if (isFlipped) {
    flipCard();
    setTimeout(() => {
      nextCard();
    }, 250);
  } else {
    nextCard();
  }
}

// Toggle star (favorite) status
function toggleStar() {
  if (deck.length === 0) return;
  const item = deck[currentIndex];
  
  if (starredSet.has(item.id)) {
    starredSet.delete(item.id);
    btnStarCard.classList.remove('active');
  } else {
    starredSet.add(item.id);
    btnStarCard.classList.add('active');
  }
  
  saveState();
  updateStats();
  
  // If we are studying only starred items and we unstarred the last one,
  // we need to rebuild the deck.
  if (studyFilter === 'starred' && !starredSet.has(item.id)) {
    setTimeout(() => {
      initDeck();
      renderCard();
    }, 300);
  }
}

// Reset stats
function resetStats() {
  if (confirm("Sei sicuro di voler resettare tutte le statistiche di studio (Lo So / Da Rivedere)? Le opere salvate rimarranno.")) {
    knownSet.clear();
    unknownSet.clear();
    saveState();
    updateStats();
    initDeck();
    renderCard();
  }
}

// Update UI stats indicators
function updateStats() {
  // Contiamo le opere nel mazzo filtrato per parte
  const filteredIDs = new Set(
    selectedPart === 'all'
      ? OPERE_DATA.map(item => item.id)
      : OPERE_DATA.filter(item => item.parte === parseInt(selectedPart, 10)).map(item => item.id)
  );

  let knownPartCount = 0;
  let unknownPartCount = 0;
  let starredPartCount = 0;

  knownSet.forEach(id => { if (filteredIDs.has(id)) knownPartCount++; });
  unknownSet.forEach(id => { if (filteredIDs.has(id)) unknownPartCount++; });
  starredSet.forEach(id => { if (filteredIDs.has(id)) starredPartCount++; });

  statKnownCount.textContent = knownPartCount;
  statUnknownCount.textContent = unknownPartCount;
  statStarredCount.textContent = starredPartCount;
  filterStarredCount.textContent = starredPartCount;
}

// Update Progress Bar
function updateProgressBar() {
  if (deck.length === 0) {
    progressCount.textContent = "0 / 0";
    progressPercent.textContent = "0%";
    progressBarFill.style.width = "0%";
    return;
  }
  
  // We count the total items evaluated in this study session relative to total items in this part
  const filteredIDs = new Set(
    selectedPart === 'all'
      ? OPERE_DATA.map(item => item.id)
      : OPERE_DATA.filter(item => item.parte === parseInt(selectedPart, 10)).map(item => item.id)
  );
  
  let studiedInPart = 0;
  filteredIDs.forEach(id => {
    if (knownSet.has(id) || unknownSet.has(id)) studiedInPart++;
  });
  
  const totalItemsInPart = filteredIDs.size;
  
  // Progress in current deck
  const currentNum = currentIndex + 1;
  progressCount.textContent = `${currentNum} / ${deck.length}`;
  
  // Global completion percentage for this part
  const globalPercent = Math.min(Math.round((studiedInPart / totalItemsInPart) * 100), 100);
  progressPercent.textContent = `${globalPercent}%`;
  
  // Progress bar based on current card index progress
  const progressBarPercent = Math.round((currentNum / deck.length) * 100);
  progressBarFill.style.width = `${progressBarPercent}%`;
}

// ==========================================================================
// LIBRARY GRID & FILTERING
// ==========================================================================
function renderLibraryGrid() {
  // Clear grid
  libraryGrid.innerHTML = '';
  
  const searchVal = librarySearch ? librarySearch.value.toLowerCase().trim() : '';
  const selectedAuthor = filterAuthor ? filterAuthor.value : '';
  const selectedPeriod = filterPeriod ? filterPeriod.value : '';
  const selectedTech = filterTechnique ? filterTechnique.value : '';
  
  let matches = OPERE_DATA.filter(item => {
    // Applica filtro parte globale in Galleria
    if (selectedPart !== 'all') {
      const partNum = parseInt(selectedPart, 10);
      if (item.parte !== partNum) return false;
    }
    
    // Search match (checks author, title, technique, period, ID)
    const matchesSearch = !searchVal || 
      (item.autore && item.autore.toLowerCase().includes(searchVal)) ||
      (item.titolo && item.titolo.toLowerCase().includes(searchVal)) ||
      (item.tecnica && item.tecnica.toLowerCase().includes(searchVal)) ||
      (item.periodo && item.periodo.toLowerCase().includes(searchVal)) ||
      String(item.id) === searchVal;
      
    // Dropdown matches
    const matchesAuthor = !selectedAuthor || item.autore === selectedAuthor;
    const matchesPeriod = !selectedPeriod || item.periodo === selectedPeriod;
    const matchesTech = !selectedTech || item.tecnica === selectedTech;
    
    return matchesSearch && matchesAuthor && matchesPeriod && matchesTech;
  });
  
  libraryResultsCount.textContent = matches.length;
  
  // Aggiorna il totale dinamico
  const totalCountEl = document.getElementById('library-total-count');
  if (totalCountEl) {
    if (selectedPart === 'all') {
      totalCountEl.textContent = OPERE_DATA.length;
    } else {
      totalCountEl.textContent = OPERE_DATA.filter(item => item.parte === parseInt(selectedPart, 10)).length;
    }
  }
  
  if (matches.length === 0) {
    libraryGrid.innerHTML = `
      <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <svg viewBox="0 0 24 24" width="48" height="48" style="margin-bottom: 12px; opacity: 0.5;"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/></svg>
        <p>Nessuna opera corrisponde ai filtri selezionati.</p>
      </div>
    `;
    return;
  }
  
  matches.forEach(item => {
    const cardEl = document.createElement('div');
    cardEl.className = 'library-card';
    cardEl.innerHTML = `
      <div class="lib-card-image-box">
        <img src="${item.immagine}" alt="${item.titolo}" loading="lazy">
      </div>
      <div class="lib-card-info">
        <span class="lib-card-id">Opera ${item.id}</span>
        <h3 class="lib-card-title">${item.titolo || 'Senza Titolo'}</h3>
        <p class="lib-card-author">${item.autore || 'Autore Ignoto'}</p>
      </div>
    `;
    
    const gImg = cardEl.querySelector('img');
    if (gImg) {
      gImg.dataset.fallbackTried = "false";
      gImg.onerror = function() {
        if (this.dataset.fallbackTried !== "true" && this.src && this.src.includes('images/')) {
          this.dataset.fallbackTried = "true";
          this.src = this.src.replace('images/', '');
        } else {
          this.onerror = null;
          this.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='100%' height='100%' fill='%231f2937'/><text x='50%' y='50%' font-family='sans-serif' font-size='14' fill='%239ca3af' text-anchor='middle'>🖼️ Immagine assente</text></svg>";
        }
      };
    }
    
    // Open modal on click
    cardEl.addEventListener('click', () => {
      openModal(item);
    });
    
    libraryGrid.appendChild(cardEl);
  });
}

function clearFilters() {
  librarySearch.value = '';
  filterAuthor.value = '';
  filterPeriod.value = '';
  filterTechnique.value = '';
  renderLibraryGrid();
}

// ==========================================================================
// DETAIL MODAL LOGIC
// ==========================================================================
function openModal(item) {
  if (modalImage) {
    modalImage.dataset.fallbackTried = "false";
    modalImage.onerror = function() {
      if (this.dataset.fallbackTried !== "true" && this.src && this.src.includes('images/')) {
        this.dataset.fallbackTried = "true";
        this.src = this.src.replace('images/', '');
      } else {
        this.onerror = null;
        this.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='100%' height='100%' fill='%231f2937'/><text x='50%' y='45%' font-family='sans-serif' font-size='20' fill='%239ca3af' text-anchor='middle'>🖼️ Immagine non disponibile</text><text x='50%' y='58%' font-family='sans-serif' font-size='14' fill='%236b7280' text-anchor='middle'>Verifica che il file sia presente su GitHub</text></svg>";
      }
    };
    modalImage.src = item.immagine;
  }
  if (modalAuthor) modalAuthor.textContent = item.autore || "Autore Ignoto";
  if (modalTitle) modalTitle.textContent = item.titolo || "Senza Titolo";
  if (modalTechnique) modalTechnique.textContent = item.tecnica || "Tecnica non specificata";
  if (modalPeriod) modalPeriod.textContent = item.periodo || "Periodo non specificato";
  if (modalIndex) modalIndex.textContent = `Opera ${item.id} di ${OPERE_DATA.length}`;
  
  detailModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
}

function closeModal() {
  detailModal.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// EVENT LISTENERS Setup
// ==========================================================================
function setupEventListeners() {
  // Theme Switcher Click Handler
  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', toggleTheme);
  }

  // Part Selector buttons click listeners
  const partBtns = document.querySelectorAll('.part-btn');
  partBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      partBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      selectedPart = btn.getAttribute('data-part');
      try {
        localStorage.setItem('gagliano_selected_part', selectedPart);
      } catch (err) {
        console.warn("Storage non accessibile, preferenza parte non salvata:", err);
      }
      
      // Re-initialize and update views
      initDeck();
      renderCard();
      buildFilters(); // Rebuild dropdown options for selected part
      renderLibraryGrid();
      updateStats(); // Update dashboard and progress
    });
  });

  // Navigation Tabs
  btnStudyMode.addEventListener('click', () => {
    btnStudyMode.classList.add('active');
    btnLibraryMode.classList.remove('active');
    viewStudy.classList.add('active');
    viewLibrary.classList.remove('active');
  });
  
  btnLibraryMode.addEventListener('click', () => {
    btnLibraryMode.classList.add('active');
    btnStudyMode.classList.remove('active');
    viewLibrary.classList.add('active');
    viewStudy.classList.remove('active');
    renderLibraryGrid(); // Refresh grid layout
  });
  
  // Flashcard Actions
  flashcard.addEventListener('click', (e) => {
    // Ignore clicks on star button
    if (e.target.closest('#btn-star-card')) return;
    
    if (isFlipped) {
      // If already flipped, click image to open modal detail at full screen
      if (e.target.closest('.card-back-image-preview')) {
        const item = deck[currentIndex];
        openModal(item);
        return;
      }
    }
    flipCard();
  });
  
  btnStarCard.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleStar();
  });
  
  // Controls
  btnPrev.addEventListener('click', prevCard);
  btnNext.addEventListener('click', nextCard);
  btnCorrect.addEventListener('click', () => assessCard(true));
  btnIncorrect.addEventListener('click', () => assessCard(false));
  
  // Shuffle Toggle
  btnShuffle.addEventListener('click', () => {
    isShuffled = !isShuffled;
    initDeck();
    renderCard();
  });
  
  // Dashboard Stat Cards Filtering Click Handlers
  document.querySelector('.stat-card.known').addEventListener('click', () => toggleStudyFilter('known'));
  document.querySelector('.stat-card.unknown').addEventListener('click', () => toggleStudyFilter('unknown'));
  document.querySelector('.stat-card.starred').addEventListener('click', () => toggleStudyFilter('starred'));
  
  // Active Filter Banner Clear Link
  document.getElementById('btn-clear-study-filter').addEventListener('click', () => toggleStudyFilter('all'));
  
  // Filter Starred Toggle (from secondary controls)
  btnFilterStarred.addEventListener('click', () => {
    toggleStudyFilter('starred');
  });
  
  // Reset Stats
  btnResetStats.addEventListener('click', resetStats);
  
  // Library filtering
  if (librarySearch) librarySearch.addEventListener('input', renderLibraryGrid);
  if (filterAuthor) filterAuthor.addEventListener('change', renderLibraryGrid);
  if (filterPeriod) filterPeriod.addEventListener('change', renderLibraryGrid);
  if (filterTechnique) filterTechnique.addEventListener('change', renderLibraryGrid);
  btnClearFilters.addEventListener('click', clearFilters);
  
  // Modal close handlers
  modalClose.addEventListener('click', closeModal);
  modalCloseBackdrop.addEventListener('click', closeModal);
  
  // Keyboard Shortcuts Handler
  document.addEventListener('keydown', (e) => {
    // If typing in filter inputs, ignore shortcuts
    const isTyping = document.activeElement.tagName === 'INPUT' || 
                     document.activeElement.tagName === 'SELECT' || 
                     document.activeElement.tagName === 'TEXTAREA';
                     
    if (isTyping) return;
    
    // Modal is open, Escape should close it
    if (detailModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeModal();
      }
      return;
    }
    
    // Only handle study hotkeys if study view is active
    if (viewStudy.classList.contains('active')) {
      switch (e.key) {
        case ' ': // Spacebar
        case 'Enter':
          e.preventDefault();
          flipCard();
          break;
        case 'ArrowLeft':
          prevCard();
          break;
        case 'ArrowRight':
          nextCard();
          break;
        case 'ArrowUp':
        case 'a':
        case 'A':
          assessCard(true);
          break;
        case 'ArrowDown':
        case 'd':
        case 'D':
          assessCard(false);
          break;
        case 's':
        case 'S':
          toggleStar();
          break;
        case 'm':
        case 'M':
          isShuffled = !isShuffled;
          initDeck();
          renderCard();
          break;
        case 'Escape':
          if (isFlipped) flipCard();
          break;
      }
    }
  });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
