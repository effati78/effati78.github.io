let galleries = [...document.getElementsByClassName("lightgallery")];
galleries.forEach(item => {
    lightGallery(item, {mode: 'lg-fade'})
})