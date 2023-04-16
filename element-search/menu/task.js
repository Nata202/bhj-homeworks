'use strict'

let menuLink = document.querySelectorAll("menu__link");

//Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
for (let i = 0; i < menuLink.length; i++) {
    menuLink.addEventListener('click', function () {
        menuLink = menu_active; //Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
      });
}

//Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.
