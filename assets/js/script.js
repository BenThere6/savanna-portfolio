const parentElement = document.querySelector('#work-section');
const childElement = document.querySelector('#proj-one');

function updateChildPosition() {
    console.log(`Child Top Value: ${getComputedStyle(childElement).getPropertyValue('top')}`)
    const parentWidth = parentElement.clientWidth;
    console.log(`Parent Width: ${parentWidth}`)
    const topValue = parentWidth * 0.015;
    console.log(`New Top Value: ${topValue}`)
    childElement.style.top = `${topValue}px`;
    console.log(`Child Top Value: ${getComputedStyle(childElement).getPropertyValue('top')}`)
}

updateChildPosition();
window.addEventListener('resize', updateChildPosition);
