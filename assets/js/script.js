document.addEventListener("DOMContentLoaded",function() {
    aboutMeSection = document.getElementById('about-me-section');
    pars = document.querySelectorAll('.pars');

    let totalRelativeOffset = 0;
    pars.forEach((par) => {
        totalRelativeOffset += Math.abs(parseFloat(par.style.top) || 0);
    })
    aboutMeSection.style.height = `calc(100% - ${totalRelativeOffset}px)`;
})

