function proximaTelaUsuario(){
   
    document.getElementById("forms-1").style.display = "none"
    document.getElementById("forms-2").style.display = "block"
}
function proximaTelaEmpresa(){
    document.getElementById("empresa-forms-1").style.display = "none"
    document.getElementById("empresa-forms-2").style.display = "block"
}
function voltarTelaEmpresa(){
    document.getElementById("empresa-forms-2").style.display = "none"
    document.getElementById("empresa-forms-1").style.display = "block"
}
function voltarTelaUsuario(){
    document.getElementById("forms-2").style.display = "none"
    document.getElementById("forms-1").style.display = "block"
}


function openTab(evento,escolha){
    var i, tabContent, tabs;
  
    tabContent = document.getElementsByClassName("cadastro");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tabs-p");
    
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }
  
    document.getElementById(escolha).style.display = "block";
    evento.currentTarget.className += " active";
  }