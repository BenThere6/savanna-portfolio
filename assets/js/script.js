const parentElement = document.querySelector('#work-section');
const childElement = document.querySelector('#proj-one');

function updateChildPosition() {
    const parentWidth = parentElement.clientWidth;
    const topValue = parentWidth * 0.015;
    childElement.style.top = `${topValue}px`;
}

// updateChildPosition();
// window.addEventListener('resize', updateChildPosition);
