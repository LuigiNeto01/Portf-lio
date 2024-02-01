function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



document.addEventListener("scroll", function(){
    
    const EntraceElement = document.querySelector('.Entrace');
    const principalPosition = EntraceElement.getBoundingClientRect().y;
    console.log(principalPosition)
    const SobreMimElement = document.querySelector('.contentMain');
    const SecundarioPosition = SobreMimElement.getBoundingClientRect().y;

    const ContatoElement = document.querySelector('.ContatoClass');
    const QuartaPosition = ContatoElement.getBoundingClientRect().y;
    var pixel = 200
    if (principalPosition <= 0) {
        document.getElementById('home').classList.add('active');
        document.getElementById('SobreMim').classList.remove('active');
        document.getElementById('Contato').classList.remove('active');


    } 
    if (pixel< SecundarioPosition <= 0)
    {
        document.getElementById('home').classList.remove('active');
        document.getElementById('SobreMim').classList.add('active');
        document.getElementById('Contato').classList.remove('active');
    }
    if (pixel<QuartaPosition <= 0)
    {
        document.getElementById('home').classList.remove('active');
        document.getElementById('SobreMim').classList.remove('active');
        document.getElementById('Contato').classList.add('active');
    }
});
  
var icone = document.getElementById('linkedin');

// Adicione um ouvinte de evento para o clique no ícone
icone.addEventListener('click', function() {
    // URL que você deseja abrir em uma nova guia
    var url = 'https://www.linkedin.com/in/luiginetoo/';
    // Abre a URL em uma nova guia
    window.open(url, '_blank');
});

var icone = document.getElementById('whats');

// Adicione um ouvinte de evento para o clique no ícone
icone.addEventListener('click', function() {
    // URL que você deseja abrir em uma nova guia
    var url = 'https://www.example.com';
    // Abre a URL em uma nova guia
    window.open(url, '_blank');
});
var icone = document.getElementById('git');

// Adicione um ouvinte de evento para o clique no ícone
icone.addEventListener('click', function() {
    // URL que você deseja abrir em uma nova guia
    var url = 'https://github.com/LuigiNeto01';
    // Abre a URL em uma nova guia
    window.open(url, '_blank');
});