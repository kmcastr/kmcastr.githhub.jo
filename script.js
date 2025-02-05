function search() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    
   
    var sectionToScroll = buscarEnContenido(searchTerm);
    
    if (sectionToScroll) {
        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log('Sección no encontrada');
    }
}

function buscarEnContenido(term) {
    var sections = document.querySelectorAll('section[class^="section-"]');
    var sectionToScroll = null;

    sections.forEach(function(section) {
        var sectionContent = section.textContent.toLowerCase();

        if (sectionContent.includes(term)) {
            sectionToScroll = section;
        }
    });

    return sectionToScroll;
}

function redirectToPage() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    
    // Lógica para redirigir a las páginas enlazadas
    switch (searchTerm) {
        case "besskin":
            window.location.href = "beeskin.html";
            break;
        case "productos":
            window.location.href = "productos.html";
            break;
        case "contacto":
            window.location.href = "contacto.html";
            break;
        case "sobre nosotros":
            window.location.href = "Sobrenosotros.html";
            break;
            case "rutinas":
                window.location.href = "rutinas.html";
                break;

        default:
            console.log('Página no encontrada');
    }
}

function autocomplete() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var suggestions = [];

    // Lógica de autocompletado, puedes personalizar según tus necesidades
    if (searchTerm.startsWith("b")) {
        suggestions.push("beeskin");
    }
    if (searchTerm.startsWith("c")) {
        suggestions.push("contacto");
    }
    if (searchTerm.startsWith("p")) {
        suggestions.push("productos");
    }
    if (searchTerm.startsWith("s")) {
        suggestions.push("sobre nosotros");
    }
    if (searchTerm.startsWith("r")) {
        suggestions.push("rutinas");
    }

    // Mostrar sugerencias en un cuadro de autocompletado
    showSuggestions(suggestions);
}

function showSuggestions(suggestions) {
    var autocompleteBox = document.getElementById("autocomplete-box");

    // Limpia las sugerencias anteriores
    autocompleteBox.innerHTML = "";

    // Muestra las nuevas sugerencias
    suggestions.forEach(function(suggestion) {
        var suggestionItem = document.createElement("div");
        suggestionItem.textContent = suggestion;
        suggestionItem.addEventListener("click", function() {
            document.getElementById("search-input").value = suggestion;
            search(); // llamar a la función de búsqueda al hacer clic en una sugerencia
        });
        autocompleteBox.appendChild(suggestionItem);
    });

    // Muestra el cuadro de autocompletado
    autocompleteBox.style.display = suggestions.length > 0 ? "block" : "none";
}

// Agrega un evento de entrada a la barra de búsqueda para el autocompletado
document.getElementById("search-input").addEventListener("input", autocomplete);


function toggleSearch() {
    const search = document.querySelector('.search');
    search.classList.toggle('active');
  }


