// function IniciarSesion() {
//     login.style.display = "none"
//     navBar.style.display = "block";
//     regulariz.style.display = "block";
//     carousel.style.display = "block"; 
//     chat-btn.style.display = "block";
//     botones.style.display = "block";
// }
// document.getElementById("firebaseui-auth-container").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML =      login.style.display = "none"
//          navBar.style.display = "block";
//         regulariz.style.display = "block";
//        carousel.style.display = "block"; 
//          botones.style.display = "block";
//          login.style.display= "none"
// });

// function iniciarChat() {
//     chat.style.display = "block";
//     regulariz.style.display = "none";
//     carousel.style.display = "none"; 
//     chatBtn.style.display = "none";
//     botones.style.display = "none";
// }

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();
    setInterval(function(){
    }, 4000);

    $('.dropdown-trigger').dropdown({
      constrainWidth: false
    });
    
    $('.fixed-action-btn').floatingActionButton();
  });