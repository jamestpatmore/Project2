window.onload = () => {
    const grid = document.querySelector('.grid');

    const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 10,
        gutter: 25,
        isFitWidth: true
    });
}