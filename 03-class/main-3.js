// Объект со сведениями о произошедшем событии
// в качестве параметра передаётся в обработчик


const sml = document.getElementById('small')
const mdm = document.getElementById('medium')
const big = document.getElementById('big')
const a = document.getElementById('a')

function onClickHandler(e) {
    e.preventDefault()
    console.dir(`${e.currentTarget.tagName}`)
}

// sml.onclick = onClickHandler //onClickHandler({.....})
// mdm.onclick = onClickHandler
// big.onclick = onClickHandler

// sml.addEventListener('click', onClickHandler, false)
// mdm.addEventListener('click', onClickHandler, false)
// big.addEventListener('click', onClickHandler, false)
// big.removeEventListener('click', onClickHandler)

a.addEventListener('click', onClickHandler)

sml.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        console.log(e.target.id)
    }
})
