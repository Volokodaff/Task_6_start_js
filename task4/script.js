const userText = document.querySelector('a');
var pr;
userText.addEventListener('click', () => {
   pr = prompt('Введите новый текст ссылки')
   userText.textContent=(pr);
   });
   userText.addEventListener('click', (event) => {
    alert('Будет произведена замена текста ссылки');
    event.preventDefault();
    });
   

