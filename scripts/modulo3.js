const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        const header = accordion.querySelector('.accordion-header');
        
        // Alterna a classe 'active' para o conteúdo e o cabeçalho
        body.classList.toggle('active');
        header.classList.toggle('active');
    });    
});
