// Get "menu" elements
let hamburguerBtn = document.getElementById('hamburguer-btn');
let menu = document.getElementById('menu-items');
let navbar = document.getElementById('navbar');
let showMenu = false;



// Get "resources" elements
let resources = document.getElementById('material');
let passBox = document.getElementById('pass');
let submit = document.getElementById('pass-submit');
let insertText = document.getElementById('insert-text');

// Slack box
let slackBox = document.getElementById('slack');
let currentSlackBox = false;

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

    hideMenu(){
        menu.style.display = "none"
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
    },

    displaySlackBox(){
        currentSlackBox = !currentSlackBox;
        if(currentSlackBox){
            slackBox.style.display = "flex";
        }else{
            slackBox.style.display = "none";
        }
        return showMenu; 
    }


}

hamburguerBtn.addEventListener('click',DOMinteraction.displayMenu);
submit.addEventListener('click', DOMinteraction.showResources);
// navbar.addEventListener('mouseleave',DOMinteraction.hideMenu);


setTimeout(DOMinteraction.displaySlackBox, 3000);
setTimeout(DOMinteraction.displaySlackBox, 9000);



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




