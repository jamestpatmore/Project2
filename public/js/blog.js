// Masonry
window.onload = () => {
    const grid = document.querySelector('.grid');

    const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 10,
        gutter: 25,
        isFitWidth: true
    });
}
// Keep track of rating
const up = document.getElementById("up");
const down = document.getElementById("down");
const poll = document.getElementById("poll");

let count = 0;

voter();

up.addEventListener("click", ()=>{
    count++;
    voter();
})

down.addEventListener("click", ()=>{
    count--;
    voter();
})

function voter(){
    poll.innerHTML = count;
}
// Upload functionality
// Using image URLs to save on server space
const goad = document.getElementById("goad");
const bigPlus = document.getElementById("bigPlus");
const uploader = document.getElementById("upload")

bigPlus.addEventListener("click", ()=>{
    goad.classList.add("hide");
    bigPlus.classList.add("hide");
    uploader.classList.remove("hide");
})