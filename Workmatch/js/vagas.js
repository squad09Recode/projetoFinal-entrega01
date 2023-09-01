function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    document.body.style.backgroundColor = "black";
}
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("left").style.backgroundColor = "black";
}

function openTab(evento,escolha){
  var i, tabContent, tabs;

  tabContent = document.getElementsByClassName("right-content");
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
function accordionClick(){
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

window.onload = function(){ 
  
  const dragElement = (element, dragzone) => {
    let Xinit, Yinit;
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    const dragMouseUp = () => {
      
      document.onmouseup = null;
      document.onmousemove = null;
      element.style.top = `10rem`
      element.style.left = `12%`
      element.style.transform = `translate(0px) rotate(${0}deg)`;
    };

    const dragMouseMove = (event) => {
      
      event.preventDefault();
      Xinit =event.clientX;
      Yinit = event.clienty;
      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;
      element.style.transform = `translate(${pos1}px, ${pos1}px) rotate(${pos1*-0.3 }deg)`;
      element.style.top = `${element.offsetTop - pos2}px`;
      element.style.left = `${element.offsetLeft - pos1}px`;
      
    };
    
    const dragMouseDown = (event) => {
      event.preventDefault();

      pos3 = event.clientX;
      pos4 = event.clientY;
      
      
      element.classList.add("drag");

      document.onmouseup = dragMouseUp;
      document.onmousemove = dragMouseMove;
      console.log(element.style.left)
      
    };

    dragzone.onmousedown = dragMouseDown;
  };
  
  const dragable = document.getElementById("Vaga"),
    dragzone = document.getElementById("left");

  dragElement(dragable, dragzone);
}

