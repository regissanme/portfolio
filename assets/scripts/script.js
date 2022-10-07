function handleMouseEnter() {
    this.classList.add('p-card--hovered');
    document.body.id = `${this.id}-hovered`;
    // console.log('mouse entered...');
}

function handleMouseLeave() {
    this.classList.remove('p-card--hovered');
    document.body.id = '';
    // console.log('mouse leaved...')
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('p-card');

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);        
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.p-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.p-controller__button--active');
    activeButtonElement.classList.remove('p-controller__button--active');
    selectedButtonElement.classList.add('p-controller__button--active');
}
