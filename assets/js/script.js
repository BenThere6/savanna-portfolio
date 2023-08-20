document.addEventListener("DOMContentLoaded",function() {
    // resizeAboutMeSection();
    // updateFontSizes();
})

window.addEventListener("resize",function() {
    // resizeAboutMeSection();
})

function resizeAboutMeSection() {
    aboutMeSection = document.getElementById('about-me-section');
    pars = document.querySelectorAll('.pars');

    let totalHeight = 0;
    let count = 0;
    pars.forEach((par) => {
        count ++;
        if (count != 1) {
            totalHeight += par.clientHeight;
        }
        
    });
    totalHeight *= 1.38;
    aboutMeSection.style.height = `${totalHeight}px`;
}

// Function to update font sizes based on screen size
function updateFontSizes() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 980) {
        const fontSizeIncrement = 4;
  
        const elementsToUpdate = [
            document.getElementById('name'),
            ...document.querySelectorAll('nav > ul'),
            ...document.querySelectorAll('.section-title'),
            document.getElementById('about-me-paragraph'),
            ...document.querySelectorAll('.par-title'),
            ...document.querySelectorAll('.project-card'),
            ...document.querySelectorAll('.project-title > a')
        ];
  
    elementsToUpdate.forEach(element => {
        const currentFontSize = parseInt(getComputedStyle(element).fontSize);
        const newFontSize = currentFontSize + fontSizeIncrement + 'px';
        element.style.fontSize = newFontSize;
    });
    } else {
      const originalFontSizes = {
        '#name': '60px',
        '.nav ul': '22px',
        '.section-title': '40px',
        '#about-me-paragraph': '22px',
        '.par-title': '28px',
        '.project-card': '22px',
        '.project-title a': '48px'
        };

        for (const selector in originalFontSizes) {
            const element = document.querySelector(selector);
            console.log(selector);
            console.log(element)
            element.style.fontSize = originalFontSizes[selector];
        }
    }   
}
