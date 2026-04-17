// Contador carrinho
// Variáveis iniciais
const cartDisplay = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.btn-add-cart');
let count = 0;

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Aumenta o contador 
        count++;
        // Atualiza o texto na tela
        cartDisplay.innerText = count;
        // Faz o balãozinho aparecer no primeiro clique
        if (count > 0) {
            cartDisplay.style.display = 'flex';
}
const originalText = button.innerText;
button.innerText = "ADICIONADO! ✓";
button.style.backgroundColor = "#27ae60";

setTimeout(() => {
    button.innerText = originalText;
    button.style.backgroundColor = "#000";
}, 1500)
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

const hearts = document.querySelectorAll('.wishlist-icon')

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        // Alterna entre o coração vazio e o preenchido
        if (heart.innerText === '♥') {
            heart.innerText = '♡';
            heart.style.color = '#666';
        } else {
            heart.innerText = '♥';
            heart.style.color = '#FF00FF';
        }
    });
});