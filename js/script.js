var hotelSearch = document.querySelector(".hotel-search-button");//выбираем кнопку вызова формы
var popup = document.querySelector(".modal-search");//выбираем окно где надодится форма
var dateArrive = popup.querySelector("[name=date-arrive]");//выбираем поле ввода даты приезда
var form = popup.querySelector(".hotel-search-form");//выбираем саму форму для отлова собития отправки
var dateLeave = popup.querySelector("[name=date-leave]");//выбираем проле ввода даты выезда
var adultsAmount = popup.querySelector("[name=adults-number]");//выбор поля ввода количества взрослых отдыхающих

 popup.classList.add("modal-search-hide");// как вызвать эту функцию по загрузке страницы?

hotelSearch.addEventListener("click",function (evt) {//ловим клик по кнопке которая вызывает форму
  evt.preventDefault();// предотвращаем действие по умолчанию, которого сейчас нет
  popup.classList.toggle("modal-search-hide");//присваиваем или снимаем класс который прячет форму
  // console.log(popup.classList.contains());
  dateArrive.focus();//делаем фокус на дате заезда

  popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {//ловим момент отправки формы, не по клику - так как может еще по нажатию ентер с фокуса
  //console.log(dateArrive.value); //выводим в консоль значение поля дата заезда
  //console.log(dateLeave.value);
  if (!dateArrive.value || !dateLeave.value || !adultsAmount.value) {// условие один из полей не введено значение
    evt.preventDefault();//отмена действия по умолчанию тк отправляет как раз не нажатие а функция action - ее и отменяем
    //console.log("Заполните поля");
    popup.classList.add("modal-error");//поля не заполнены вкл анимация об невозможности отправить
    if (!dateArrive.value){// устанавливаем фокус на пустые поля
      dateArrive.focus();
    }
    if (!dateLeave.value){
      dateLeave.focus();
    }
    if (!adultsAmount.value){
      adultsAmount.focus();
    }
  }
});

// window.addEventListener("keydown", function(evt){ //закрываем форму при нажатии на esc
//   if (evt.keyCode === 27) {//код клавиши esc в api
//     if (popup.classList.contains("modal-search-hide")) {
//       evt.preventDefault();
//     } else {
//       popup.classList.remove("modal-search-hide");
//     }
//   }
// });
