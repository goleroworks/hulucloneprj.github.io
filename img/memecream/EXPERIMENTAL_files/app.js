// DOM
let hamBtn = document.querySelector(".hamburger");
let modalMenu = document.querySelector(".modal-menu");
let icon = document.querySelector(".icons");
let listing = document.querySelector(".listing");
let subListingOne = document.querySelector(".sub-listing-one");
let subListingTwo = document.querySelector(".sub-listing-two");
let subListingThree = document.querySelector(".sub-listing-three");


// turning it into an array 

// let SubNavigation = document.querySelector(".sub-navigation-btns");
// let SubNavigatione = document.querySelector(".sub-navigation-btnse");
// let SubNavigationes = document.querySelector(".sub-navigation-btnses");
// let iconos = document.querySelector(".iconos");
// let iconost = document.querySelector(".iconost");


// Array.from(subListing).forEach((list)=>{
//     // list.classList.toggle("show");
//     this.subListing.addEventListener('onclick', ()=>{
//         list.classList.toggle("show");
//     })
    
// })


// EVENT LISTENERS
hamBtn.addEventListener('click', () => {
    modalMenu.classList.toggle("show");
    
});

listing.addEventListener('click', ()=>{
    subListingOne.classList.toggle("show");
})


// listing.addEventListener('click', () => {
//     subListing.style.display = "block";

// });
    




// listing.addEventListener('click', showListing);
// icon.addEventListener('click', arrows);
// iconos.addEventListener('click', flecha);
// iconost.addEventListener('click', flech);



// FUNCTIONS 

// function hamDisplay(e) {
//     e.preventDefault();
    
    
//     // modalMenu.style.visibility = "visible"; 
// };


// function showListing (e) {
//     e.preventDefault();
    
//         subListing.style.display = "block";
        

// }
    



// // OUTSIDE CLICK

// // CONTROLS OF ARROW 



// function arrows(e) {
//     e.preventDefault();
//     icon.style.transform = ("rotate(180deg)");
//     SubNavigation.classList.toggle("sub-navigation-off");

//     if (SubNavigation.classList.contains("sub-navigation-off")) {
//         icon.style.transform = ("rotate(0deg)");
//     }


// };


// function flecha(e) {
//     e.preventDefault();
//     iconos.style.transform = ("rotate(180deg)");
//     SubNavigatione.classList.toggle("sub-navigation-offe");

//     if (SubNavigatione.classList.contains("sub-navigation-offe")) {
//         iconos.style.transform = ("rotate(0deg)");
//     }


// };


// function flech(e) {
//     e.preventDefault();
//     iconost.style.transform = ("rotate(180deg)");
//     SubNavigationes.classList.toggle("sub-navigation-offes");

//     if (SubNavigationes.classList.contains("sub-navigation-offes")) {
//         iconost.style.transform = ("rotate(0deg)");
//     }


// };













// EXPERIMENAL


// let hamBtn = document.querySelector(".hamburger");
// const modal = document.querySelector(".modal-menu");



// hamBtn.addEventListener('click', openModal);


// function openModal(){
// modal.style.display = "block";
// };


