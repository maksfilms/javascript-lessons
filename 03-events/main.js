// https://developer.mozilla.org/ru/docs/Web/Events справочник по событиям

// Как браузер реагирует на событие:
//1. Проверяет есть ли слушатель (обработчик, подписчик) ->  listener (function)
//2. Формирует объект со сведениями о событии о произошедшем событие -> это (event, ev, e) это объект
//3. listener( event) => вызов обработчика с объектом e event в качестве параметра

//мы можем наше событие рассматривать как погружающее или как всплывающее (95% что событие всплывающее) div-> body-> html


const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")


/*const onClickHandler = (event) => {
    console.dir(event)
    if(event.altKey)alert("ALT key was pressed!")
}*/

const onClickHandlerPlus = (event) => {
    event.stopPropagation() // (предотвратить всплытие события) показывает только тот элемент на котором срабатывает событие
    console.dir(event.currentTarget) //
}

/*sm.onclick = onClickHandler
sm.onclick = onClickHandlerPlus; // перезатрет обработчик (так не делают в современном JS*/

// addEventListener лучше использовать, потому что можно несколько событий повесить и они не перезатираются

sm.addEventListener("click", onClickHandlerPlus, true)
md.addEventListener("click", onClickHandlerPlus, true)
bg.addEventListener("click", onClickHandlerPlus , true)
// позволяет повесть несколько обработчиков на одно событие и позволяет рассматривать событие на стадии погружения, с
// помощью 3 параметра мы можем изменить погружение события (в большинстве случаев это не нужно)

///sdfsf


