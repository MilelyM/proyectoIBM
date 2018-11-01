 function regularizarBtn() {
    inputs.style.display="none"
login.style.display="none"
     carousel.style.display="none";
    botones.style.display="none";
    loginContent.style.display = "none";
    regulariz.style.display="block";
 }
 function inicio() {
    carousel.style.display="block";
     botones.style.display="block";
    regulariz.style.display="none";
    login.style.display="none";
}
    document.getElementById("out").addEventListener("click", function(){    
    carousel.style.display="none";
     botones.style.display="none";
    regulariz.style.display="none";
    titulo.style.display="none";
    });

