// Объект со сведениями о произошедшем событии
// в качестве параметра передаётся в обработчик


const sml = document.getElementById('small')

function onClickHandler() {
    alert('hey!!!')
    console.dir(arguments)
}

sml.onclick = onClickHandler