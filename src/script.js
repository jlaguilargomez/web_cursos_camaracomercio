// Get "menu" elements
let hamburguerBtn = document.getElementById('hamburguer-btn');
let menu = document.getElementById('menu-items');
let showMenu = false;

// Get "resources" elements
let resources = document.getElementById('material');
let passBox = document.getElementById('pass');
let submit = document.getElementById('pass-submit');
let insertText = document.getElementById('insert-text');

// DOM Interaction

let DOMinteraction = {

    displayMenu(){
        showMenu = !showMenu;
        if(showMenu){
            menu.style.display = "flex";
        }else{
            menu.style.display = "none";
        }
        return showMenu; 
    },

    showResources(){
        const password = '1234';
        let passInput = document.getElementById('pass').value;

        if(passInput == password){
            insertText.style.display = "none";
            resources.style.display ="flex";
        }else if(insertText.innerHTML == "Introduce la contraseña correcta"){
            insertText.innerHTML = "Tí@, no insistas, el sistema de encriptación sigue un algoritmo ultra complejo";
        }else if(insertText.innerHTML == "Tí@, no insistas, el sistema de encriptación sigue un algoritmo ultra complejo"){
            insertText.innerHTML = "En serio, ¿no tienes nada mejor que hacer?";
        }else{
            insertText.innerHTML = "Introduce la contraseña correcta";
        }

        passBox.value='';

    }

}

hamburguerBtn.addEventListener('click',DOMinteraction.displayMenu)
submit.addEventListener('click', DOMinteraction.showResources)







// hamburguerBtn.addEventListener('click',() => {
//     showMenu = !showMenu;
//     if(showMenu){
//         menu.style.display = "flex";
//     }else{
//         menu.style.display = "none";
//     }
//     return showMenu; 
// });


// submit.addEventListener('click', () =>{
//     const password = '1234';
//     let passInput = document.getElementById('pass').value;
//     console.log(passInput);

//     if(passInput == password){
//         resources.style.display ="flex"
//     }else{
//         console.log('sigue intentándolo')
//     }
// })




