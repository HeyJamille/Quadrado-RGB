function alterarLargura(){
  const lbl = document.querySelector("#lblLargura");
  const ipt = document.querySelector("#iptLargura");
  lbl.innerHTML= ipt.value;

  const divBox = document.querySelector("#box");
  divBox.style.width = ipt.value+"px";    
}

function alterarAltura(){
  const lbl = document.querySelector("#lblAltura");
  const ipt = document.querySelector("#iptAltura");
  lbl.innerHTML= ipt.value;

  const divBox = document.querySelector("#box");
  divBox.style.height = ipt.value+"px";
}

function alterarTopo(){
  const lbl = document.querySelector("#lblTopo");
  const ipt = document.querySelector("#iptTopo");
  lbl.innerHTML= ipt.value;

  const divBox = document.querySelector("#box");
  divBox.style.marginTop = ipt.value+"px";
}

function alterarEsquerda(){
  const lbl = document.querySelector("#lblEsquerda");
  const ipt = document.querySelector("#iptEsquerda");
  lbl.innerHTML= ipt.value;

  const divBox = document.querySelector("#box");
  divBox.style.marginLeft = ipt.value+"px";
}

function alterarVermelho(){
  const lbl = document.querySelector("#lblVermelho");
  const ipt = document.querySelector("#iptVermelho");
  lbl.innerHTML= ipt.value;
}

function alterarVerde(){
  const lbl = document.querySelector("#lblVerde");
  const ipt = document.querySelector("#iptVerde");
  lbl.innerHTML= ipt.value;
}

function alterarAzul(){
  const lbl = document.querySelector("#lblAzul");
  const ipt = document.querySelector("#iptAzul");
  lbl.innerHTML= ipt.value;
}

function cores() {
  var vermelho =   
  document.getElementById('iptVermelho').value;
    
  var verde = 
  document.getElementById('iptVerde').value;
  
  var azul = document.getElementById('iptAzul').value;
  
  var cor = 'rgb(' + vermelho + ',' + verde + ',' + azul + ')';

  const divBox = document.querySelector("#box");
  divBox.style.backgroundColor = cor;
}

document.getElementById('iptVermelho').addEventListener('input', cores);

document.getElementById('iptVerde').addEventListener('input', cores);

document.getElementById('iptAzul').addEventListener('input', cores);

