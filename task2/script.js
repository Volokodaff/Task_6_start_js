const consolelog = document.querySelector('#consoleLog');
const consolelog2 =  document.querySelector('#alert')
const consolelog3 =  document.querySelector('#prompt')

consolelog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});

consolelog2.addEventListener('click', () => {
    alert('Служит для вывода на экран окна с каким-либо сообщением');
});

consolelog3.addEventListener('click', () => {
    alert('Служит для вывода диалогового окна сообщением');
});

