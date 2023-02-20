var carta1 = {
    nome: "Bulbasauro",
    imagem:
      "http://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_00.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Dath vader",
    imagem:
      "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus-1024x576.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  
  var carta3 = {
    nome: "Shiryu de dragão",
    imagem: "https://s.aficionados.com.br/imagens/shiryu.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
  
  var listaCartas = [carta1, carta2, carta3];
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    cartaMaquina = listaCartas[parseInt(Math.random() * 3)];
    cartaJogador = listaCartas[parseInt(Math.random() * 3)];
    while (cartaMaquina == cartaJogador) {
      sortearCarta();
    }
    console.log(cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    //exibirOpcoes();
    exibirCartaJogador();
  }
  
  function obtenAtributoSelecionado() {
    var radioSelecionado = document.getElementsByName("atributos");
  
    for (var i = 0; i < radioSelecionado.length; i++) {
      if (radioSelecionado[i].checked == true) {
        return radioSelecionado[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtenAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    var resultado = "";
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      resultado = "<p class='resultado-final'>Ganhou!</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
      resultado = "<p class='resultado-final'>Perdeu!</p>";
    } else {
      resultado = "<p class='resultado-final'>Empatou!</p>";
    }
    divResultado.innerHTML = resultado;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    for (var atributo in cartaJogador.atributos) {
      tagHTML +=
        "<input type='radio' name='atributos' value=" +
        atributo +
        ">" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    divCartaJogador.innerHTML = moldura + nome + tagHTML + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    for (var atributo in cartaMaquina.atributos) {
      tagHTML +=
        "<p name='atributos'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo];
    }
    divCartaMaquina.innerHTML = moldura + nome + tagHTML;
  }
  