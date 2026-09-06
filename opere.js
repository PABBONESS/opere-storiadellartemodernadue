const OPERE_DATA = [
  {
    "id": 1,
    "titolo": "La città che sale",
    "autore": "Umberto Boccioni",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_1.jpg"
  },
  {
    "id": 2,
    "titolo": "Riposo durante la fuga in Egitto",
    "autore": "Caravaggio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_2.jpg"
  },
  {
    "id": 3,
    "titolo": "Ebe (Chatsworth)",
    "autore": "Antonio Canova",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_3.jpg"
  },
  {
    "id": 4,
    "titolo": "Château Noir",
    "autore": "Paul Cézanne",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_4.jpg"
  },
  {
    "id": 5,
    "titolo": "Battaglia di San Romano (Principale)",
    "autore": "Paolo Uccello",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_5.jpg"
  },
  {
    "id": 6,
    "titolo": "Tavola Bardi (San Francesco e storie della sua vita)",
    "autore": "Coppo di Marcovaldo",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_6.avif"
  },
  {
    "id": 7,
    "titolo": "Ricevimento dell'ambasciatore imperiale a Palazzo Ducale",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_7.jpg"
  },
  {
    "id": 8,
    "titolo": "Le tre Grazie (San Pietroburgo)",
    "autore": "Antonio Canova",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_8.jpg"
  },
  {
    "id": 9,
    "titolo": "Antonio Canova nel suo studio (Hugh Douglas Hamilton)",
    "autore": "Antonio Canova (ritratto da H. D. Hamilton)",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_9.jpg"
  },
  {
    "id": 10,
    "titolo": "La belle Angèle",
    "autore": "Paul Gauguin",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_10.jpg"
  },
  {
    "id": 11,
    "titolo": "L'Eco (Studio per Le Baigneurs)",
    "autore": "Georges Seurat",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_11.jpg"
  },
  {
    "id": 12,
    "titolo": "Lo Spinario (Palazzo dei Conservatori)",
    "autore": "Arte Romana",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_12.jpeg"
  },
  {
    "id": 13,
    "titolo": "Autoritratto col cappello",
    "autore": "Paul Gauguin",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_13.jpg"
  },
  {
    "id": 14,
    "titolo": "Madonna col Bambino (Empoli)",
    "autore": "Giovanni Pisano",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_14.jpg"
  },
  {
    "id": 15,
    "titolo": "Forme uniche della continuità nello spazio",
    "autore": "Umberto Boccioni",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_15.jpg"
  },
  {
    "id": 16,
    "titolo": "La risata",
    "autore": "Umberto Boccioni",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_16.jpg"
  },
  {
    "id": 17,
    "titolo": "Affreschi di Avignone",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_17.jpg"
  },
  {
    "id": 18,
    "titolo": "I bagnanti a Asnières",
    "autore": "Georges Seurat",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_18.jpg"
  },
  {
    "id": 19,
    "titolo": "Olympia",
    "autore": "Édouard Manet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_19.jpg"
  },
  {
    "id": 20,
    "titolo": "Mezzogiorno sulle Alpi",
    "autore": "Giovanni Segantini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_20.jpg"
  },
  {
    "id": 21,
    "titolo": "Vahine no te tiare (Donna col fiore)",
    "autore": "Paul Gauguin",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_21.jpg"
  },
  {
    "id": 22,
    "titolo": "Ufficio del cotone a Nuova Orleans",
    "autore": "Edgar Degas",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_22.jpg"
  },
  {
    "id": 23,
    "titolo": "Nudo di donna che cuce (Studio di nudo)",
    "autore": "Paul Gauguin",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_23.jpg"
  },
  {
    "id": 24,
    "titolo": "Ritratto di Victor Chocquet",
    "autore": "Paul Cézanne",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_24.jpg"
  },
  {
    "id": 25,
    "titolo": "Ritratto del dottor Gachet",
    "autore": "Vincent van Gogh",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_25.jpg"
  },
  {
    "id": 26,
    "titolo": "La casa dell'impiccato ad Auvers-sur-Oise",
    "autore": "Paul Cézanne",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_26.jpg"
  },
  {
    "id": 27,
    "titolo": "Una moderna Olympia",
    "autore": "Paul Cézanne",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_27.jpg"
  },
  {
    "id": 28,
    "titolo": "Natura morta con brioche",
    "autore": "Pablo Picasso",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_28.jpg"
  },
  {
    "id": 29,
    "titolo": "Una domenica pomeriggio sull'isola della Grande-Jatte",
    "autore": "Georges Seurat",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_29.jpg"
  },
  {
    "id": 30,
    "titolo": "Natura morta con brocca e frutta",
    "autore": "Paul Cézanne",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_30.jpg"
  },
  {
    "id": 31,
    "titolo": "Maestà del Louvre",
    "autore": "Cimabue",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_31.jpg"
  },
  {
    "id": 32,
    "titolo": "In risaia (Per ottantasei soldi!)",
    "autore": "Angelo Morbelli",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_32.jpg"
  },
  {
    "id": 33,
    "titolo": "Il mangiafagioli",
    "autore": "Annibale Carracci",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_33.jpg"
  },
  {
    "id": 34,
    "titolo": "La bottega del macellaio",
    "autore": "Annibale Carracci",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_34.jpg"
  },
  {
    "id": 35,
    "titolo": "Madonna col Bambino in trono e i Santi Giovanni, Evangelista e Caterina",
    "autore": "Annibale Carracci",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_35.jpg"
  },
  {
    "id": 36,
    "titolo": "Trionfo di Bacco e Arianna (Galleria Farnese)",
    "autore": "Annibale Carracci",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_36.jpg"
  },
  {
    "id": 37,
    "titolo": "Amore e Psiche giacenti",
    "autore": "Antonio Canova",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_37.jpg"
  },
  {
    "id": 38,
    "titolo": "Ebe (San Pietroburgo)",
    "autore": "Antonio Canova",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_38.jpg"
  },
  {
    "id": 39,
    "titolo": "Ebe (Berlino)",
    "autore": "Antonio Canova",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_39.jpg"
  },
  {
    "id": 40,
    "titolo": "Amore e Psiche stanti",
    "autore": "Antonio Canova",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_40.jpg"
  },
  {
    "id": 41,
    "titolo": "Annunciazione tra i santi Ansano e Margherita",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_41.jpg"
  },
  {
    "id": 42,
    "titolo": "Il bar delle Folies-Bergère",
    "autore": "Édouard Manet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_42.jpg"
  },
  {
    "id": 43,
    "titolo": "Rissa in galleria",
    "autore": "Umberto Boccioni",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_43.jpg"
  },
  {
    "id": 44,
    "titolo": "Polittico di Bologna",
    "autore": "Giotto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_44.jpg"
  },
  {
    "id": 45,
    "titolo": "Punizione dei ribelli (Cappella Sistina)",
    "autore": "Sandro Botticelli",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_45.jpg"
  },
  {
    "id": 46,
    "titolo": "Grande nudo",
    "autore": "Georges Braque",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_46.jpg"
  },
  {
    "id": 47,
    "titolo": "Sacrificio di Isacco (Formella del Battistero)",
    "autore": "Filippo Brunelleschi",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_47.jpg"
  },
  {
    "id": 48,
    "titolo": "Cacciata di Eliodoro dal tempio",
    "autore": "Raffaello Sanzio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_48.jpg"
  },
  {
    "id": 49,
    "titolo": "L'Arco di Costantino a Roma",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_49.jpg"
  },
  {
    "id": 50,
    "titolo": "Capriccio architettonico con rovine",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_50.jpg"
  },
  {
    "id": 51,
    "titolo": "Il Fonteghetto della Farina",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_51.jpg"
  },
  {
    "id": 52,
    "titolo": "La Piazzetta verso la Torre dell'Orologio",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_52.jpg"
  },
  {
    "id": 53,
    "titolo": "Il cortile dello scalpellino (Laboratorio dei marmi)",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_53.jpg"
  },
  {
    "id": 54,
    "titolo": "Il Bucintoro al molo il giorno dell'Ascensione (Ricevimento ambasciatore)",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_54.jpg"
  },
  {
    "id": 55,
    "titolo": "Campo San Zanipolo (San Giovanni e Paolo)",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_55.jpg"
  },
  {
    "id": 56,
    "titolo": "Veduta ideata con la Piramide Cestia",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_56.jpg"
  },
  {
    "id": 57,
    "titolo": "Il Canal Grande da Campo San Vio",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_57.jpg"
  },
  {
    "id": 58,
    "titolo": "Londra attraverso un arco del ponte di Westminster",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_58.jpeg"
  },
  {
    "id": 59,
    "titolo": "Canestra di frutta",
    "autore": "Caravaggio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_59.jpg"
  },
  {
    "id": 60,
    "titolo": "Cappella Brancacci (Vista d'insieme)",
    "autore": "Masaccio e Masolino",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_60.jpg"
  },
  {
    "id": 61,
    "titolo": "Enrico Scrovegni offre il modellino della cappella (Giudizio Universale)",
    "autore": "Giotto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_61.jpg"
  },
  {
    "id": 62,
    "titolo": "Cacciata dei progenitori dall'Eden",
    "autore": "Masaccio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_62.jpg"
  },
  {
    "id": 63,
    "titolo": "Giuditta e Oloferne",
    "autore": "Caravaggio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_63.jpg"
  },
  {
    "id": 64,
    "titolo": "I musicisti (Il concerto)",
    "autore": "Caravaggio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_64.jpg"
  },
  {
    "id": 65,
    "titolo": "Cena in Emmaus",
    "autore": "Caravaggio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_65.jpg"
  },
  {
    "id": 66,
    "titolo": "Cerchio cromatico della legge del contrasto simultaneo",
    "autore": "Michel-Eugène Chevreul",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_66.jpg"
  },
  {
    "id": 67,
    "titolo": "Maestà di Santa Trinita",
    "autore": "Cimabue",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_67.jpg"
  },
  {
    "id": 68,
    "titolo": "Crocifisso di Santa Croce",
    "autore": "Cimabue",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_68.jpg"
  },
  {
    "id": 69,
    "titolo": "Crocifisso di San Domenico ad Arezzo",
    "autore": "Cimabue",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_69.jpg"
  },
  {
    "id": 70,
    "titolo": "La terrazza a Sainte-Adresse",
    "autore": "Claude Monet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_70.jpg"
  },
  {
    "id": 71,
    "titolo": "Donne in giardino",
    "autore": "Claude Monet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_71.jpg"
  },
  {
    "id": 72,
    "titolo": "Crocifisso di San Gimignano",
    "autore": "Coppo di Marcovaldo",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_72.jpg"
  },
  {
    "id": 73,
    "titolo": "Madonna del Bordone",
    "autore": "Coppo di Marcovaldo",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_73.jpg"
  },
  {
    "id": 74,
    "titolo": "Un pittore che dipinge nella foresta di Fontainebleau",
    "autore": "Jean-Baptiste-Camille Corot",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_74.jpg"
  },
  {
    "id": 75,
    "titolo": "Colosso di Costantino (Dettaglio del globo)",
    "autore": "Arte Romana",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_75.jpeg"
  },
  {
    "id": 76,
    "titolo": "Colosso di Costantino (Dettaglio della mano)",
    "autore": "Arte Romana",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_76.jpeg"
  },
  {
    "id": 77,
    "titolo": "Colosso di Costantino (Testa)",
    "autore": "Arte Romana",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_77.jpeg"
  },
  {
    "id": 78,
    "titolo": "Boulevard du Temple (Prima fotografia con presenza umana)",
    "autore": "Louis Daguerre",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_78.jpg"
  },
  {
    "id": 79,
    "titolo": "Tramonto sulla costa marina",
    "autore": "Charles-François Daubigny",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_79.jpg"
  },
  {
    "id": 80,
    "titolo": "La Senna a Mantes",
    "autore": "Charles-François Daubigny",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_80.jpg"
  },
  {
    "id": 81,
    "titolo": "Napoleon al passo del Gran San Bernardo",
    "autore": "Jacques-Louis David",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_81.jpg"
  },
  {
    "id": 82,
    "titolo": "Il massacro di Scio",
    "autore": "Eugène Delacroix",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_82.jpg"
  },
  {
    "id": 83,
    "titolo": "La morte di Sardanapalo",
    "autore": "Eugène Delacroix",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_83.jpg"
  },
  {
    "id": 84,
    "titolo": "Liberazione di san Pietro dal carcere",
    "autore": "Raffaello Sanzio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_84.jpg"
  },
  {
    "id": 85,
    "titolo": "Disputa del Sacramento",
    "autore": "Raffaello Sanzio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_85.jpg"
  },
  {
    "id": 86,
    "titolo": "Ebe (Forlì)",
    "autore": "Antonio Canova",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_86.jpg"
  },
  {
    "id": 87,
    "titolo": "La famiglia Bellelli",
    "autore": "Edgar Degas",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_87.jpg"
  },
  {
    "id": 88,
    "titolo": "La Libertà che guida il popolo",
    "autore": "Eugène Delacroix",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_88.jpg"
  },
  {
    "id": 89,
    "titolo": "Prove di Mosè (Cappella Sistina)",
    "autore": "Sandro Botticelli",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_89.jpg"
  },
  {
    "id": 90,
    "titolo": "Stigmate di San Francesco",
    "autore": "Giotto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_90.jpg"
  },
  {
    "id": 91,
    "titolo": "Foresta di Fontainebleau",
    "autore": "Jean-Baptiste-Camille Corot",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_91.jpg"
  },
  {
    "id": 92,
    "titolo": "Pulpito del Duomo di Pisa",
    "autore": "Giovanni Pisano",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_92.jpg"
  },
  {
    "id": 93,
    "titolo": "La porta delle mura di Parigi",
    "autore": "Vincent van Gogh",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_93.jpg"
  },
  {
    "id": 94,
    "titolo": "Sacrificio di Isacco (Formella concorso Battistero)",
    "autore": "Lorenzo Ghiberti",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_94.jpg"
  },
  {
    "id": 95,
    "titolo": "La tempesta",
    "autore": "Giorgione",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_95.jpg"
  },
  {
    "id": 96,
    "titolo": "San Francesco predica davanti a papa Onorio III",
    "autore": "Giotto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_96.jpg"
  },
  {
    "id": 97,
    "titolo": "Polittico Stefaneschi (Verso - Lato posteriore)",
    "autore": "Giotto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_97.jpg"
  },
  {
    "id": 98,
    "titolo": "Polittico Stefaneschi (Recto - Dettaglio del Cardinale Stefaneschi)",
    "autore": "Giotto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_98.jpg"
  },
  {
    "id": 99,
    "titolo": "Polittico Baroncelli (Incoronazione della Vergine)",
    "autore": "Giotto e Taddeo Gaddi",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_99.jpeg"
  },
  {
    "id": 100,
    "titolo": "Madonna col Bambino (Cappella degli Scrovegni)",
    "autore": "Giovanni Pisano",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_100.jpg"
  },
  {
    "id": 101,
    "titolo": "Pulpito del Duomo di Pisa (Crocifissione)",
    "autore": "Giovanni Pisano",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_101.jpeg"
  },
  {
    "id": 102,
    "titolo": "Pulpito del Duomo di Pisa (Strage degli innocenti)",
    "autore": "Giovanni Pisano",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_102.jpeg"
  },
  {
    "id": 103,
    "titolo": "Pulpito di Sant'Andrea a Pistoia (Dettaglio struttura)",
    "autore": "Giovanni Pisano",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_103.jpg"
  },
  {
    "id": 104,
    "titolo": "Pulpito di Sant'Andrea a Pistoia (Annunciazione e Natività)",
    "autore": "Giovanni Pisano",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_104.jpg"
  },
  {
    "id": 105,
    "titolo": "Pulpito di Sant'Andrea a Pistoia (Giudizio Universale)",
    "autore": "Giovanni Pisano",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_105.jpg"
  },
  {
    "id": 106,
    "titolo": "Un funerale ad Ornans",
    "autore": "Gustave Courbet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_106.jpg"
  },
  {
    "id": 107,
    "titolo": "Dopocena ad Ornans",
    "autore": "Gustave Courbet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_107.jpg"
  },
  {
    "id": 108,
    "titolo": "Gargantua (Caricatura di Luigi Filippo)",
    "autore": "Honoré Daumier",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_108.jpg"
  },
  {
    "id": 109,
    "titolo": "Il vagone di terza classe",
    "autore": "Honoré Daumier",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_109.jpg"
  },
  {
    "id": 110,
    "titolo": "I giocatori di carte (Studio a d'acquerello)",
    "autore": "Paul Cézanne",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_110.jpg"
  },
  {
    "id": 111,
    "titolo": "I giocatori di carte",
    "autore": "Paul Cézanne",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_111.jpg"
  },
  {
    "id": 112,
    "titolo": "La bagnante di Valpinçon",
    "autore": "Jean-Auguste-Dominique Ingres",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_112.jpg"
  },
  {
    "id": 113,
    "titolo": "La grande odalisca",
    "autore": "Jean-Auguste-Dominique Ingres",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_113.jpg"
  },
  {
    "id": 114,
    "titolo": "L'Angelo (L'Angelus)",
    "autore": "Jean-François Millet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_114.jpg"
  },
  {
    "id": 115,
    "titolo": "Il giuramento degli Orazi",
    "autore": "Jacques-Louis David",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_115.jpg"
  },
  {
    "id": 116,
    "titolo": "La morte di Marat",
    "autore": "Jacques-Louis David",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_116.jpg"
  },
  {
    "id": 117,
    "titolo": "Napoleone che valica le Alpi (Charlottenburg)",
    "autore": "Jacques-Louis David",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_117.jpg"
  },
  {
    "id": 118,
    "titolo": "L'imperatore Napoleone nel suo studio alle Tuileries",
    "autore": "Jacques-Louis David",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_118.jpg"
  },
  {
    "id": 119,
    "titolo": "Lupa Capitolina",
    "autore": "Arte Romana / Etrusca",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_119.jpg"
  },
  {
    "id": 120,
    "titolo": "Maestà del Duomo di Siena",
    "autore": "Duccio di Buoninsegna",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_120.jpg"
  },
  {
    "id": 121,
    "titolo": "Le bagnanti",
    "autore": "Gustave Courbet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_121.jpg"
  },
  {
    "id": 122,
    "titolo": "Colazione sull'erba (Le déjeuner sur l'herbe)",
    "autore": "Édouard Manet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_122.gif"
  },
  {
    "id": 123,
    "titolo": "Trinità (Santa Maria Novella)",
    "autore": "Masaccio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_123.jpg"
  },
  {
    "id": 124,
    "titolo": "Trittico di San Giovenale",
    "autore": "Masaccio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_124.jpg"
  },
  {
    "id": 125,
    "titolo": "Il pagamento del tributo (Cappella Brancacci)",
    "autore": "Masaccio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_125.jpg"
  },
  {
    "id": 126,
    "titolo": "Sisto IV nomina Platina prefetto della biblioteca Vaticana",
    "autore": "Melozzo da Forlì",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_126.jpeg"
  },
  {
    "id": 127,
    "titolo": "Parnaso (Villa Albani)",
    "autore": "Anton Raphael Mengs",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_127.jpg"
  },
  {
    "id": 128,
    "titolo": "Vocazione di San Matteo",
    "autore": "Caravaggio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_128.jpg"
  },
  {
    "id": 129,
    "titolo": "La Grenouillère",
    "autore": "Claude Monet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_129.jpg"
  },
  {
    "id": 130,
    "titolo": "Colazione sull'erba (Monet)",
    "autore": "Claude Monet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_130.jpg"
  },
  {
    "id": 131,
    "titolo": "Impressione, levar del sole (Impression, soleil levant)",
    "autore": "Claude Monet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_131.jpg"
  },
  {
    "id": 132,
    "titolo": "La Rue Montorgueil a Parigi",
    "autore": "Claude Monet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_132.jpeg"
  },
  {
    "id": 133,
    "titolo": "Giorno di festa al Pio Albergo Trivulzio",
    "autore": "Angelo Morbelli",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_133.gif"
  },
  {
    "id": 134,
    "titolo": "I papaveri",
    "autore": "Claude Monet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_134.png"
  },
  {
    "id": 135,
    "titolo": "Visione dopo il sermone (Lotta di Giacobbe con l'angelo)",
    "autore": "Paul Gauguin",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_135.jpg"
  },
  {
    "id": 136,
    "titolo": "Vincent van Gogh mentre dipinge i girasoli",
    "autore": "Paul Gauguin",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_136.jpg"
  },
  {
    "id": 137,
    "titolo": "Le grandi bagnanti",
    "autore": "Paul Cézanne",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_137.jpg"
  },
  {
    "id": 138,
    "titolo": "Consegna delle chiavi a San Pietro",
    "autore": "Pietro Perugino",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_138.jpg"
  },
  {
    "id": 139,
    "titolo": "La fabbrica a Horta de Ebro",
    "autore": "Pablo Picasso",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_139.jpg"
  },
  {
    "id": 140,
    "titolo": "Natura morta al pianoforte",
    "autore": "Pablo Picasso",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_140.jpg"
  },
  {
    "id": 141,
    "titolo": "Ritratto di Ambroise Vollard",
    "autore": "Pablo Picasso",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_141.jpg"
  },
  {
    "id": 142,
    "titolo": "Ritratto di Daniel-Henry Kahnweiler",
    "autore": "Pablo Picasso",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_142.jpg"
  },
  {
    "id": 143,
    "titolo": "Paesaggio con due figure",
    "autore": "Pablo Picasso",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_143.jpg"
  },
  {
    "id": 144,
    "titolo": "La colazione dei canottieri",
    "autore": "Pierre-Auguste Renoir",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_144.jpg"
  },
  {
    "id": 145,
    "titolo": "Le Pont-Neuf",
    "autore": "Pierre-Auguste Renoir",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_145.jpg"
  },
  {
    "id": 146,
    "titolo": "Platone (Pavimento del Duomo di Siena)",
    "autore": "Maestri Senesi",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_146.jpg"
  },
  {
    "id": 147,
    "titolo": "Autoritratto con un amico",
    "autore": "Raffaello Sanzio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_147.jpg"
  },
  {
    "id": 148,
    "titolo": "Ritratto di Émile Zola",
    "autore": "Édouard Manet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_148.jpg"
  },
  {
    "id": 149,
    "titolo": "Autoritratto come pittore",
    "autore": "Vincent van Gogh",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_149.jpg"
  },
  {
    "id": 150,
    "titolo": "Battaglia di San Romano (Parigi - Louvre)",
    "autore": "Paolo Uccello",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_150.jpg"
  },
  {
    "id": 151,
    "titolo": "Sant'Anna Metterza",
    "autore": "Masaccio e Masolino",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_151.jpg"
  },
  {
    "id": 152,
    "titolo": "Sibilla Cumana (Pavimento del Duomo di Siena)",
    "autore": "Maestri Senesi",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_152.jpg"
  },
  {
    "id": 153,
    "titolo": "Polittico Orsini - Andata al Calvario",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_153.jpg"
  },
  {
    "id": 154,
    "titolo": "Polittico Orsini - Crocifissione",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_154.jpg"
  },
  {
    "id": 155,
    "titolo": "Polittico Orsini - Deposizione dalla Croce",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_155.jpg"
  },
  {
    "id": 156,
    "titolo": "Polittico Orsini - Vergine Annunciata",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_156.jpg"
  },
  {
    "id": 157,
    "titolo": "San Ludovico di Tolosa incorona re Roberto d'Angiò",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_157.jpg"
  },
  {
    "id": 158,
    "titolo": "Polittico Orsini - Lamentazione sul Cristo morto",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_158.jpg"
  },
  {
    "id": 159,
    "titolo": "Polittico Orsini - Angelo Annunciante",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_159.jpg"
  },
  {
    "id": 160,
    "titolo": "Guidoriccio da Fogliano all'assedio di Montemassi",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_160.jpg"
  },
  {
    "id": 161,
    "titolo": "Maestà del Palazzo Pubblico di Siena",
    "autore": "Simone Martini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_161.jpg"
  },
  {
    "id": 162,
    "titolo": "Lo Spinario (Galleria degli Uffizi)",
    "autore": "Arte Romana",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_162.jpg"
  },
  {
    "id": 163,
    "titolo": "I Girasoli",
    "autore": "Vincent van Gogh",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_163.jpg"
  },
  {
    "id": 164,
    "titolo": "Il pagliaio (Calotipo)",
    "autore": "William Henry Fox Talbot",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_164.jpg"
  },
  {
    "id": 165,
    "titolo": "La porta aperta (The Open Door - Calotipo)",
    "autore": "William Henry Fox Talbot",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_165.jpg"
  },
  {
    "id": 166,
    "titolo": "Tentazioni di Cristo (Cappella Sistina)",
    "autore": "Sandro Botticelli",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_166.jpg"
  },
  {
    "id": 167,
    "titolo": "La casa gialla",
    "autore": "Vincent van Gogh",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_167.jpg"
  },
  {
    "id": 168,
    "titolo": "La classe di danza",
    "autore": "Edgar Degas",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_168.jpg"
  },
  {
    "id": 169,
    "titolo": "Gli spaccapietre",
    "autore": "Gustave Courbet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_169.jpg"
  },
  {
    "id": 170,
    "titolo": "Corazziere ferito che abbandona il fuoco",
    "autore": "Théodore Géricault",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_170.jpg"
  },
  {
    "id": 171,
    "titolo": "Venere di Urbino",
    "autore": "Tiziano Vecellio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_171.jpg"
  },
  {
    "id": 172,
    "titolo": "Ritratto di Jozef Blok",
    "autore": "Vincent van Gogh",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_172.jpg"
  },
  {
    "id": 173,
    "titolo": "La camera di Vincent ad Arles",
    "autore": "Vincent van Gogh",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_173.jpg"
  },
  {
    "id": 174,
    "titolo": "I mangiatori di patate",
    "autore": "Vincent van Gogh",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_174.jpg"
  },
  {
    "id": 175,
    "titolo": "La zattera della Medusa (Dettaglio naufraghi 2)",
    "autore": "Théodore Géricault",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_175.jpg"
  },
  {
    "id": 176,
    "titolo": "La zattera della Medusa (Dettaglio naufraghi 1)",
    "autore": "Théodore Géricault",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_176.jpg"
  },
  {
    "id": 177,
    "titolo": "La zattera della Medusa (Dettaglio figura di spalle)",
    "autore": "Théodore Géricault",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_177.jpg"
  },
  {
    "id": 178,
    "titolo": "Autoritratto con cappello di feltro",
    "autore": "Vincent van Gogh",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_178.jpg"
  },
  {
    "id": 179,
    "titolo": "Scuola di Atene",
    "autore": "Raffaello Sanzio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_179.jpg"
  },
  {
    "id": 180,
    "titolo": "Napoleone Primo Console",
    "autore": "Antonio Canova",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_180.jpg"
  },
  {
    "id": 181,
    "titolo": "Velocità in motocicletta",
    "autore": "Giacomo Balla",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_181.jpg"
  },
  {
    "id": 182,
    "titolo": "La chiesa della Salute e la Dogana",
    "autore": "Canaletto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_182.jpg"
  },
  {
    "id": 183,
    "titolo": "Bacco",
    "autore": "Caravaggio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_183.jpg"
  },
  {
    "id": 184,
    "titolo": "Crocifisso della Basilica di San Francesco ad Assisi",
    "autore": "Cimabue",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_184.jpg"
  },
  {
    "id": 185,
    "titolo": "Polittico Baroncelli (Cuspide - Dio Padre e Angeli)",
    "autore": "Giotto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_185.jpg"
  },
  {
    "id": 186,
    "titolo": "Les Demoiselles d'Avignon",
    "autore": "Pablo Picasso",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_186.jpg"
  },
  {
    "id": 187,
    "titolo": "Autoritratto",
    "autore": "Gaetano Previati",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_187.jpg"
  },
  {
    "id": 188,
    "titolo": "Maternità",
    "autore": "Gaetano Previati",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_188.jpg"
  },
  {
    "id": 189,
    "titolo": "Nel prato",
    "autore": "Gaetano Previati",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_189.jpg"
  },
  {
    "id": 190,
    "titolo": "Crocifisso di Santa Maria Novella",
    "autore": "Giotto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_190.jpg"
  },
  {
    "id": 191,
    "titolo": "Polittico Stefaneschi (Vista d'insieme)",
    "autore": "Giotto",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_191.jpg"
  },
  {
    "id": 192,
    "titolo": "La miniera abbandonata",
    "autore": "Jean-Baptiste-Camille Corot",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_192.jpg"
  },
  {
    "id": 193,
    "titolo": "Vista dalla finestra a Le Gras (Prima fotografia)",
    "autore": "Joseph Nicéphore Niépce",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_193.jpg"
  },
  {
    "id": 194,
    "titolo": "Trittico della Natura - La vita",
    "autore": "Giovanni Segantini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_194.jpg"
  },
  {
    "id": 195,
    "titolo": "Trittico della Natura - La morte",
    "autore": "Giovanni Segantini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_195.jpg"
  },
  {
    "id": 196,
    "titolo": "Trittico della Natura - La natura",
    "autore": "Giovanni Segantini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_196.jpg"
  },
  {
    "id": 197,
    "titolo": "Ritratto di Jean-Baptiste-Camille Corot",
    "autore": "Jean-Baptiste-Camille Corot",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_197.jpg"
  },
  {
    "id": 198,
    "titolo": "Piazza Caricamento a Genova",
    "autore": "Plinio Nomellini",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_198.jpg"
  },
  {
    "id": 199,
    "titolo": "Battaglia di San Romano (Londra - National Gallery)",
    "autore": "Paolo Uccello",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_199.jpg"
  },
  {
    "id": 200,
    "titolo": "Polittico di Pisa (Ricostruzione)",
    "autore": "Masaccio",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_200.png"
  },
  {
    "id": 201,
    "titolo": "Ritratto di Stéphane Mallarmé",
    "autore": "Édouard Manet",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_201.jpg"
  },
  {
    "id": 202,
    "titolo": "Il Quarto Stato",
    "autore": "Giuseppe Pellizza da Volpedo",
    "tecnica": "Non specificata",
    "periodo": "Non specificato",
    "parte": 1,
    "immagine": "images/opera_202.jpg"
  }
];