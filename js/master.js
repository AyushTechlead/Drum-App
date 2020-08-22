for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",ClickHandler);
}

function ClickHandler(){
  var track = "sounds/" + this.innerHTML.toLowerCase() + ".mp3";
  var audio = new Audio(track);
  audio.play();
  var activatedButton = document.querySelector("." + this.innerHTML.toLowerCase());
  activatedButton.classList.add("pressed");
  setTimeout(function(){activatedButton.classList.remove("pressed");},100);
}

document.addEventListener("keypress",ClickHandler2);
function ClickHandler2(event){
  switch (event.key) {
    case 'a':
      var track = "sounds/sa.mp3";
      var activatedButton = document.querySelectorAll("button")[0];
      break;
    case 's':
      var track = "sounds/re.mp3";
      var activatedButton = document.querySelectorAll("button")[1];
      break;
    case 'd':
      var track = "sounds/ga.mp3";
      var activatedButton = document.querySelectorAll("button")[2];
      break;
    case 'f':
      var track = "sounds/ma.mp3";
      var activatedButton = document.querySelectorAll("button")[3];
      break;
    case 'g':
      var track = "sounds/pa.mp3";
      var activatedButton = document.querySelectorAll("button")[4];
      break;
    case 'h':
      var track = "sounds/da.mp3";
      var activatedButton = document.querySelectorAll("button")[5];
      break;
      case 'j':
        var track = "sounds/ne.mp3";
        var activatedButton = document.querySelectorAll("button")[6];
        break;
      case 'k':
        var track = "sounds/sa.mp3";
        var activatedButton = document.querySelectorAll("button")[7];
        break;

    default:
    console.log(event.key);
  }
  var audio = new Audio(track);
  audio.play();
  activatedButton.classList.add("pressed");
  setTimeout(function(){activatedButton.classList.remove("pressed");},100);
}
