let image = document.getElementById("rotate");
window.addEventListener('scroll',function(){
    let element = window.scrollY * 0.35;
    image.style.transform = `rotate(${element}deg)`
});