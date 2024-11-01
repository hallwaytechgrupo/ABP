const accordions = document.querySelectorAll('.accordion');

for (const accordion of accordions) {
  accordion.addEventListener('click', () => {
    for (const otherAccordion of accordions) {
      if (otherAccordion !== accordion) {
        const otherBody = otherAccordion.querySelector('.accordion-body');
        const otherHeader = otherAccordion.querySelector('.accordion-header');
        otherBody.classList.remove('active');
        otherHeader.classList.remove('active');
      }
    }

    const body = accordion.querySelector('.accordion-body');
    const header = accordion.querySelector('.accordion-header');
    body.classList.toggle('active');
    header.classList.toggle('active');
  });
}
