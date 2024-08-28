
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso =document.querySelector(".texto-aviso");

btnEncriptar.addEventListener("clik", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(txt);

    if(texto == "") {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        },1500);
    }
         

   

})

