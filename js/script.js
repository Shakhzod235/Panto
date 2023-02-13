const wrapper = document.querySelector('.wrapper');
const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown-list');
const colorPicker = document.querySelector('.colorpicker');
const dropupList = document.querySelector('.dropup-list');
const dropupListItem = document.querySelectorAll('.dropup-list__item');
const dropupListItemBrown = document.querySelector('.dropup-list__item_color_brown');
const dropupListItemRed = document.querySelector('.dropup-list__item_color_red');
const dropupListItemGray = document.querySelector('.dropup-list__item_color_gray');
const dropMenu = (menu) => {
    return menu.classList.toggle('show');
}
dropdown.addEventListener('click', () => dropMenu(dropdownList));
colorPicker.addEventListener('click', () => dropMenu(dropupList));
dropupListItemBrown.addEventListener('click', () => wrapper.style.backgroundImage = "url(../img/brown-bg.png)")
dropupListItemRed.addEventListener('click', () => wrapper.style.backgroundImage = "url(../img/red-bg.png)")
dropupListItemGray.addEventListener('click', () => wrapper.style.backgroundImage = "url(../img/gray-bg.png)")
for(let i = 0; i < dropupListItem.length; i++) {
    dropupListItem[i].addEventListener('click', function() {
        let current = document.getElementsByClassName("dropup-list__item_active");
        current[0].className = current[0].className.replace(" dropup-list__item_active", "");
        this.className += " dropup-list__item_active";
    });
}