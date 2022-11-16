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
    if (up.classList.contains("upvote-active")) {
        count--;
        up.classList.remove("upvote-active");
        voter();
    } if (down.classList.contains("downvote-active")) {
        count++;
        down.classList.remove("downvote-active");
        voter();
    } else {
        count++;
        up.classList.add("upvote-active");
        voter();
    }
})

down.addEventListener("click", ()=>{
    if (down.classList.contains("downvote-active")) {
        count++;
        down.classList.remove("downvote-active");
        voter();
    } if (up.classList.contains("upvote-active")) {
        count--;
        up.classList.remove("upvote-active");
        voter();
    } else {
        count--;
        down.classList.add("downvote-active");
        voter();
    }
})

function voter(){
    poll.innerHTML = count;
}
// Upload functionality
// Using image URLs to save on server space
