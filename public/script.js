const burgerButton = document.getElementById('burger-button');
const menuDropdown = document.getElementById('dropdown');

burgerButton.addEventListener('click', () => {
menuDropdown.classList.toggle('hidden');
});
