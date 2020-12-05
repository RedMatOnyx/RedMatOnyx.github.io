// ::::::::::::::: FAULTY / ALTERNATE CODE FOR LAZYLOAD :::::::::::::::::::::
const images = document.querySelectorAll('[data-src]');

    function preloadImage(img) {
        const src = img.getAttribute("data-src");
        if(!src) {
            return;
        }
        img.src = src;
        img.removeAttribute("data-src") // testing
    }    
        // const loadImages = (image) => {
    //     image.setAttribute('src', image.getAttribute('data-src'));
    //     image.onload = () => {image.removeAttribute('data-src');
    //     };
    // };
const imgOptions = {
threshold: 1,
rootMargin: "0px 0px 50px 0px"
};
// if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver => {
    items.forEach(item => {
        if(!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            imgObserver.unobserve(item.target);        
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

imagesToLoad.forEach((img) => {
        loadImages(img);
});
