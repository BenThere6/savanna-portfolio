document.addEventListener("DOMContentLoaded",function() {
    resizeAboutMeSection();
})

window.addEventListener("resize",function() {
    resizeAboutMeSection();
})

function resizeAboutMeSection() {
    aboutMeSection = document.getElementById('about-me-section');
    pars = document.querySelectorAll('.pars');

    let totalHeight = 0;
    let count = 0;
    pars.forEach((par) => {
        count ++;
        // console.log(totalHeight)
        // console.log(par.clientHeight)
        // console.log(par)
        if (count != 1) {
            console.log(totalHeight)
            totalHeight += par.clientHeight;
        }
        
    });
    totalHeight += 650;
    aboutMeSection.style.height = `${totalHeight}px`;
}