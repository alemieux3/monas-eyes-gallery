    const works = [
        { chapter: "1", painter: "Sandro Botticelli", painting: "Venus and the Three Graces", year: "1483-1486", period: "Renaissance", description: "The artwork depicts Venus and her attendants offering gifts to a young woman, symbolizing the transmission of beauty and grace.", thumb: "1-Botticelli-Venus-and-the-Three-Graces-Presenting-Gifts-to-a-Young-Woman-(1).jpg", full: "1-Botticelli Venus and the Three Graces Presenting Gifts to a Young Woman (1).webp" },
        { chapter: "2", painter: "Leonardo da Vinci", painting: "Mona Lisa", year: "1503-1506", period: "Renaissance", description: "Perhaps the most famous portrait in the world, known for the subject's elusive expression and the artist's mastery of sfumato.", thumb: "2-mona-lisa.jpg", full: "2-mona-lisa.jpg" },
        { chapter: "3", painter: "Raphael", painting: "The Beautiful Gardener", year: "1507-1508", period: "Renaissance", description: "Madonna and child with St. John the Baptist in a landscape.", thumb: "3-the-beautiful-gardener-raphael.jpg", full: "3-the-beautiful-gardener-raphael.jpg" },
        { chapter: "4", painter: "Titian", painting: "The Pastoral Concert", year: "1509", period: "Renaissance", description: "Two young men and two nude women in a sunset landscape.", thumb: "4-pastoral-concert-titian.jpg", full: "4-pastoral-concert-titian.jpg" },
        { chapter: "5", painter: "Michelangelo", painting: "The Dying Slave", year: "1513-1516", period: "Renaissance", description: "A marble figure created for the tomb of Pope Julius II.", thumb: "5-michelangelo-the-dying-slave.jpg", full: "5-michelangelo-the-dying-slave.webp" },
        { chapter: "6", painter: "Frans Hals", painting: "The Gypsy Girl", year: "1628", period: "Baroque", description: "A tronie studying facial expression and unusual costume.", thumb: "6-frans-hals-the-gypsy-girl.jpg", full: "6-frans-hals-the-gypsy-girl.jpeg" },
        { chapter: "7", painter: "Rembrandt", painting: "Self-Portrait at the Easel", year: "1660", period: "Baroque", description: "A poignant, somber masterpiece painted in the artist's later years.", thumb: "7-rembrandt-self-portrait-at-the-easel.jpg", full: "7-rembrandt-self-portrait-at-the-easel.jpg" },
        { chapter: "8", painter: "Johannes Vermeer", painting: "The Astronomer", year: "1668", period: "Baroque", description: "A scientist contemplating his celestial globe.", thumb: "8-Johannes_Vermeer_-_The_Astronomer_-_1668.jpg", full: "8-Johannes_Vermeer_-_The_Astronomer_-_1668.jpg" },
        { chapter: "9", painter: "Nicolas Poussin", painting: "The Arcadian Shepherds", year: "1637-1638", period: "Baroque", description: "Shepherds gathered around a tomb with the words 'Et in Arcadia Ego'.", thumb: "9-Nicolas_Poussin_-_Et_in_Arcadia_ego.jpg", full: "9-Nicolas_Poussin_-_Et_in_Arcadia_ego.jpg" },
        { chapter: "10", painter: "Philippe de Champaigne", painting: "Ex-Voto", year: "1662", period: "Baroque", description: "A votive offering depicting a miracle in a convent.", thumb: "10-La_Mere_Catherine-Agnes_Arnault_et_la_sœur_Catherine_de_Sainte_Suzanne_de_Champaigne.jpg", full: "10-La_Mere_Catherine-Agnes_Arnault_et_la_sœur_Catherine_de_Sainte_Suzanne_de_Champaigne.jpg" },
        { chapter: "11", painter: "Antoine Watteau", painting: "Pierrot", year: "1718-1719", period: "Rococo", description: "A melancholic clown from the Commedia dell'arte.", thumb: "11-Pierrot_-_Antoine_Watteau_-_Musee_du_Louvre_Peintures_MI_1121_-_apres_restauration_2024.jpg", full: "11-Pierrot_-_Antoine_Watteau_-_Musee_du_Louvre_Peintures_MI_1121_-_apres_restauration_2024.jpg" },
        { chapter: "12", painter: "Canaletto", painting: "The Molo", year: "1730", period: "Rococo", description: "A detailed cityscape of Venice's waterfront.", thumb: "12-Giovanni_Antonio_Canal,_il_Canaletto_-_The_Molo,_Seen_from_the_Bacino_di_San_Marco_-_WGA03903.jpg", full: "12-Giovanni_Antonio_Canal,_il_Canaletto_-_The_Molo,_Seen_from_the_Bacino_di_San_Marco_-_WGA03903.jpg" },
        { chapter: "13", painter: "Thomas Gainsborough", painting: "Conversation in a Park", year: "1746", period: "Rococo", description: "A young couple in a lush, romantic landscape.", thumb: "13-Thomas_Gainsborough_-_Conversation_in_a_Park_(1746).jpg", full: "13-Thomas_Gainsborough_-_Conversation_in_a_Park_(1746).jpg" },
        { chapter: "14", painter: "Margarite Gérard", painting: "The Interesting Student", year: "1786-1787", period: "Rococo", description: "A female student engaged in her studies.", thumb: "14-margarite-gerard-the-interesting-student.jpg", full: "14-margarite-gerard-the-interesting-student.jpeg" },
        { chapter: "15", painter: "Jacques-Louis David", painting: "Oath of the Horatii", year: "1784-1785", period: "Neoclassicism", description: "A scene of Roman duty and patriotism.", thumb: "15-Oath-of-the-Horatii-Jacques-Louis-David-1784.jpg", full: "15-Oath-of-the-Horatii-Jacques-Louis-David-1784.webp" },
        { chapter: "16", painter: "Marie-Guillemine Benoist", painting: "Portrait of Madeleine", year: "1800", period: "Neoclassicism", description: "A landmark portrait of a Black woman in French art.", thumb: "16-Benoist_Portrait_Madeleine_Detail.jpg", full: "16-Benoist_Portrait_Madeleine_Detail.jpg" },
        { chapter: "17", painter: "Francisco Goya", painting: "Still Life: Lamb’s Head", year: "1808-1812", period: "Romanticism", description: "A visceral still life reflecting wartime despair.", thumb: "17-Bodegon_con_costillas_y_cabeza_de_cordero_por_Francisco_de_Goya.jpg", full: "17-Bodegon_con_costillas_y_cabeza_de_cordero_por_Francisco_de_Goya.jpg" },
        { chapter: "18", painter: "Caspar David Friedrich", painting: "The Tree of Crows", year: "1822", period: "Romanticism", description: "A moody landscape symbolic of death and renewal.", thumb: "18-caspar-david-friedrich-the-tree-of-crows.jpg", full: "18-caspar-david-friedrich-the-tree-of-crows.jpeg" },
        { chapter: "19", painter: "William Turner", painting: "Landscape with a River", year: "1835-1840", period: "Romanticism", description: "Light and atmosphere dissolving form.", thumb: "19-Joseph_Mallord_William_Turner_-_Landscape_with_a_River_and_a_Bay_in_the_Background_-_WGA23174.jpg", full: "19-Joseph_Mallord_William_Turner_-_Landscape_with_a_River_and_a_Bay_in_the_Background_-_WGA23174.jpg" },
        { chapter: "20", painter: "Gustave Courbet", painting: "A Burial At Ornans", year: "1849-1850", period: "Realism", description: "A monumental painting of a provincial funeral.", thumb: "20-gustave-courbet-a-burial-at-ornans.jpg", full: "20-gustave-courbet-a-burial-at-ornans.jpeg" },
        { chapter: "21", painter: "Henri Fantin-Latour", painting: "Homage to Delacroix", year: "1864", period: "Realism", description: "Artists gathered in honor of a master.", thumb: "21-Fantin-Latour_Homage_to_Delacroix.jpg", full: "21-Fantin-Latour_Homage_to_Delacroix.jpg" },
        { chapter: "22", painter: "Rosa Bonheur", painting: "Ploughing in the Nivernais", year: "1849", period: "Realism", description: "An celebration of agricultural labor and animals.", thumb: "22-Rosa_Bonheur_-_Ploughing_in_Nevers_-_Google_Art_Project.jpg", full: "22-Rosa_Bonheur_-_Ploughing_in_Nevers_-_Google_Art_Project.jpg" },
        { chapter: "23", painter: "James Whistler", painting: "Whistler’s Mother", year: "1871", period: "Realism", description: "An icon of austerity and motherhood.", thumb: "23-james-whistler-whistlers-mother.jpg", full: "23-james-whistler-whistlers-mother.jpg" },
        { chapter: "24", painter: "Julia Margaret Cameron", painting: "Mrs Herbert Duckworth", year: "1867", period: "Victorian", description: "A portrait using dramatic light and soft focus.", thumb: "24-julia-margaret-cameron-mrs-herbert-duckworth.jpg", full: "24-julia-margaret-cameron-mrs-herbert-duckworth.jpg" },
        { chapter: "25", painter: "Édouard Manet", painting: "A Sprig of Asparagus", year: "1880", period: "Impressionism", description: "A small but brilliant study of light on matter.", thumb: "25-Edouard_Manet_-_Asparagus_-_Google_Art_Project.jpg", full: "25-Edouard_Manet_-_Asparagus_-_Google_Art_Project.jpg" },
        { chapter: "26", painter: "Claude Monet", painting: "The Saint-Lazare Station", year: "1877", period: "Impressionism", description: "Capturing the steam and energy of a train station.", thumb: "26-La_Gare_Saint-Lazare_-_Claude_Monet.jpg", full: "26-La_Gare_Saint-Lazare_-_Claude_Monet.jpg" },
        { chapter: "27", painter: "Edgar Degas", painting: "The Star", year: "1878", period: "Impressionism", description: "A luminous ballerina on stage.", thumb: "27-edgar-degas-the-star.jpg", full: "27-edgar-degas-the-star.webp" },
        { chapter: "28", painter: "Paul Cézanne", painting: "Montagne Sainte-Victoire", year: "1902-1906", period: "Post-Impressionism", description: "A structural landscape bridging into modernism.", thumb: "28-Paul_Cezanne_-_Montagne_Saint-victoire_-_Google_Art_Project.jpg", full: "28-Paul_Cezanne_-_Montagne_Saint-victoire_-_Google_Art_Project.jpg" },
        { chapter: "29", painter: "Edward Burne-Jones", painting: "The Wheel of Fortune", year: "1883", period: "Symbolism", description: "Allegory showing the giant wheel of life.", thumb: "29-Edward_Burne-Jones_-_La_ruota_della_fortuna,_1875-83.jpg", full: "29-Edward_Burne-Jones_-_La_ruota_della_fortuna,_1875-83.jpg" },
        { chapter: "30", painter: "Vincent van Gogh", painting: "The Church at Auvers", year: "1890", period: "Post-Impressionism", description: "A church vibrating with emotional energy.", thumb: "30-Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise,_View_from_the_Chevet_-_Google_Art_Project.jpg", full: "30-Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise,_View_from_the_Chevet_-_Google_Art_Project.jpg" },
        { chapter: "31", painter: "Camille Claudel", painting: "The Age of Maturity", year: "1890-1899", period: "Symbolism", description: "A dramatic bronze group showing the passage of time.", thumb: "31-camille-claudel-the-age-of-maturity.jpg", full: "31-camille-claudel-the-age-of-maturity.jpg" },
        { chapter: "32", painter: "Gustav Klimt", painting: "Rosebushes Under Trees", year: "1905", period: "Symbolism", description: "Decorative mosaic-like patterns in nature.", thumb: "32-gustav-klimt-rosebushes-under-the-trees.jpg", full: "32-gustav-klimt-rosebushes-under-the-trees.jpg" },
        { chapter: "33", painter: "Vilhelm Hammershøi", painting: "Rest", year: "1905", period: "Realism", description: "A quiet, meditative Danish interior.", thumb: "33-Wilhelm_Hammershøi_-_Rest_-_Google_Art_Project.jpg", full: "33-Wilhelm_Hammershøi_-_Rest_-_Google_Art_Project.jpg" },
        { chapter: "34", painter: "Piet Mondrian", painting: "Haystacks III", year: "1908", period: "Modernism", description: "Early landscape experiment with color and form.", thumb: "34-Piet_Mondriaan_-_Haystacks_III_-_RF_MO_P_2018_6_-_Musee_dOrsay.jpg", full: "34-Piet_Mondriaan_-_Haystacks_III_-_RF_MO_P_2018_6_-_Musee_dOrsay.jpg" },
        { chapter: "35", painter: "Vassily Kandinsky", painting: "Der Blaue Reiter Study", year: "1911", period: "Expressionism", description: "Abstract cover study for the Blue Rider Almanac.", thumb: "35-Kandinsky,_Wassily_-_Study_for_the_Cover_of_Der_Blaue_Reiter_Almanach,_1911,_GAC.jpg", full: "35-Kandinsky,_Wassily_-_Study_for_the_Cover_of_Der_Blaue_Reiter_Almanach,_1911,_GAC.jpg" },
        { chapter: "36", painter: "Marcel Duchamp", painting: "Bottle Rack", year: "1914", period: "Dada", description: "An early readymade challenging artistic definition.", thumb: "36-Bottle_Rack_-_Marcel_Duchamp.jpg", full: "36-Bottle_Rack_-_Marcel_Duchamp.jpg" },
        { chapter: "37", painter: "Kazimir Malevich", painting: "Black Cross", year: "1923", period: "Suprematism", description: "Pure geometric abstraction.", thumb: "37-kazimir-malevich-black-cross.jpg", full: "37-kazimir-malevich-black-cross.webp" },
        { chapter: "38", painter: "Georgia O’Keefe", painting: "Red, Yellow and Black Streak", year: "1924", period: "Modernism", description: "Flowing abstract lines inspired by the American landscape.", thumb: "38-georgia-okeefe-red-yellow-and-black-street.jpg", full: "38-georgia-okeefe-red-yellow-and-black-street.jpg" },
        { chapter: "39", painter: "René Magritte", painting: "The Red Model", year: "1935", period: "Surrealism", description: "Boots that turn into feet, blending reality and dream.", thumb: "39-rene-magritte-the-red-model.jpg", full: "39-rene-magritte-the-red-model.webp" },
        { chapter: "40", painter: "Constantin Brâncuși", painting: "Bird in Space", year: "1928", period: "Modernism", description: "A sleek sculpture representing the essence of flight.", thumb: "40-constantin-brancusi-bird-in-space.jpg", full: "40-constantin-brancusi-bird-in-space.jpg" },
        { chapter: "41", painter: "Hannah Höch", painting: "Mother", year: "1930", period: "Dada", description: "A satirical photomontage exploring social roles.", thumb: "41-hannah-hoch-mother.jpg", full: "41-hannah-hoch-mother.jpg" },
        { chapter: "42", painter: "Frida Kahlo", painting: "The Frame", year: "1938", period: "Surrealism", description: "A vibrant self-portrait set in a traditional frame.", thumb: "42-frida-kahlo-the-frame.jpg", full: "42-frida-kahlo-the-frame.jpg" },
        { chapter: "43", painter: "Pablo Picasso", painting: "The Aubade", year: "1942", period: "Cubism", description: "A fragmented, wartime serenade.", thumb: "43-pablo-picasso-the-aubade.jpg", full: "43-pablo-picasso-the-aubade.jpg" },
        { chapter: "44", painter: "Jackson Pollock", painting: "Painting (Silver over Black)", year: "1948", period: "Abstract Expressionism", description: "A layered web of dripped silver and yellow paint.", thumb: "44-silver-over-black-white-yellow-and-red-jackson-pollock.jpg", full: "44-silver-over-black-white-yellow-and-red-jackson-pollock.jpg" },
        { chapter: "45", painter: "Niki de Saint Phalle", painting: "The Bride", year: "1963", period: "Contemporary", description: "A grotesque and powerful take on bridal conventions.", thumb: "45-niki-de-saint-phalle-the-bride.jpg", full: "45-niki-de-saint-phalle-the-bride.jpeg" },
        { chapter: "46", painter: "Hans Hartung", painting: "T 1964-H45", year: "1964", period: "Lyrical Abstraction", description: "Dynamic calligraphic strokes on a blue field.", thumb: "46-hans-hartung-t-1964-h45.jpg", full: "46-hans-hartung-t-1964-h45.jpg" },
        { chapter: "47", painter: "Anna-Eva Bergman", painting: "Black Prow", year: "1976", period: "Abstraction", description: "A sharp, minimalist dark form against light.", thumb: "47-anna-eva-bergman-black-prow.jpg", full: "47-anna-eva-bergman-black-prow.jpg" },
        { chapter: "48", painter: "Jean-Michel Basquiat", painting: "Untitled", year: "1982", period: "Neo-Expressionism", description: "Raw, energetic symbols and text.", thumb: "48-basquiat_untitled.jpg.jpg", full: "48-basquiat_untitled.jpg.webp" },
        { chapter: "49", painter: "Louise Bourgeois", painting: "Precious Liquids", year: "1992", period: "Contemporary", description: "A cell-like space containing psychological objects.", thumb: "49-louise-bourgeois-precious-liquids.jpg", full: "49-louise-bourgeois-precious-liquids.jpeg" },
        { chapter: "50", painter: "Marina Abramović", painting: "Boat Emptying", year: "1988", period: "Contemporary", description: "A performance still exploring physical presence.", thumb: "50-marina-abramovic-boat-emptying-stream-entering.jpg", full: "50-marina-abramovic-boat-emptying-stream-entering.jpeg" },
        { chapter: "51", painter: "Christian Boltanski", painting: "La vie impossible", year: "2001", period: "Contemporary", description: "A conceptual biography made of photographs and boxes.", thumb: "51-la_vie_impossible_de_c.b_2001_c_philippe_migeat.jpg", full: "51-la_vie_impossible_de_c.b_2001_c_philippe_migeat.jpg" },
        { chapter: "52", painter: "Pierre Soulages", painting: "Painting 22nd April 2002", year: "2002", period: "Contemporary Abstraction", description: "Exploring the 'outrenoir' or beyond-black texture.", thumb: "52-pierre-soulages-painting-200x220cm-22nd-april-2002.jpg", full: "52-pierre-soulages-painting-200x220cm-22nd-april-2002.jpg" }
    ];

    const grid = document.getElementById('mainGrid');
    const periodFilter = document.getElementById('periodFilter');
    const artistFilter = document.getElementById('artistFilter');
    const clearBtn = document.getElementById('clearFilters');

    // 1. Initial setup to populate the dropdowns
    function initFilters() {
        const periods = [...new Set(works.map(w => w.period))].sort();
        const artists = [...new Set(works.map(w => w.painter))].sort();

        // Clear existing except first option
        periodFilter.innerHTML = '<option value="all">Filter by Period: All</option>';
        artistFilter.innerHTML = '<option value="all">Filter by Artist: All</option>';

        periods.forEach(p => periodFilter.add(new Option(p, p)));
        artists.forEach(a => artistFilter.add(new Option(a, a)));
    }

    // 2. The Dynamic Filtering Logic
    function updateFilters() {
        const selectedPeriod = periodFilter.value;
        const selectedArtist = artistFilter.value;

        // Filter the works
        const filteredWorks = works.filter(w => {
            return (selectedPeriod === 'all' || w.period === selectedPeriod) &&
                   (selectedArtist === 'all' || w.painter === selectedArtist);
        });

        // Update the Artist list based on selected Period
        const availableArtists = [...new Set(works
            .filter(w => selectedPeriod === 'all' || w.period === selectedPeriod)
            .map(w => w.painter))].sort();

        // Update the Period list based on selected Artist
        const availablePeriods = [...new Set(works
            .filter(w => selectedArtist === 'all' || w.painter === selectedArtist)
            .map(w => w.period))].sort();

        // Refresh Artist Dropdown
        artistFilter.innerHTML = '<option value="all">Filter by Artist: All</option>';
        availableArtists.forEach(a => {
            const opt = new Option(a, a);
            if(a === selectedArtist) opt.selected = true;
            artistFilter.add(opt);
        });

        // Refresh Period Dropdown
        periodFilter.innerHTML = '<option value="all">Filter by Period: All</option>';
        availablePeriods.forEach(p => {
            const opt = new Option(p, p);
            if(p === selectedPeriod) opt.selected = true;
            periodFilter.add(opt);
        });

        render(filteredWorks);
    }

    // 3. Clear Function
    function clearAll() {
        // We have to re-initialize the full lists
        initFilters(); 
        periodFilter.value = 'all';
        artistFilter.value = 'all';
        render(works);
    }

    // Event Listeners
    periodFilter.addEventListener('change', updateFilters);
    artistFilter.addEventListener('change', updateFilters);
    clearBtn.addEventListener('click', clearAll);

    function render(data) {
        grid.innerHTML = '';
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'painting-card';
            card.onclick = () => openOverlay(item);
            card.innerHTML = `<img src="thumbnails/${item.thumb}"><p>${item.painting}</p>`;
            grid.appendChild(card);
        });
    }

    // Overlay logic stays the same...
    function openOverlay(item) {
        document.getElementById('dataSide').innerHTML = `
            <div class="field"><span class="label">Chapter</span><div class="value">${item.chapter}</div></div>
            <h2>${item.painting}</h2>
            <div class="field"><span class="label">Artist</span><div class="value">${item.painter}</div></div>
            <div class="field"><span class="label">Year</span><div class="value">${item.year}</div></div>
            <div class="field"><span class="label">Period</span><div class="value">${item.period}</div></div>
            <div class="desc">${item.description}</div>
        `;
        document.getElementById('fullImg').src = `full/${item.full}`;
        document.getElementById('overlay').style.display = 'block';
    }

    function closeOverlay() { document.getElementById('overlay').style.display = 'none'; }

    // Start the app
    initFilters();
    render(works);