export const menuToggle = () => {
    let button_toggle = document.getElementById('btn-menu-lateral')
    let menu_lateral = document.getElementById('menu-lateral')
    let title_button = document.getElementById('title-button-menu')
    let icon_toggle = button_toggle.querySelector('.oc-header__button-menu-lateral')

    let open_menu = false; 
    button_toggle.addEventListener('click', function(e){
        e.preventDefault();

        if (!open_menu) {
            menu_lateral.classList.add('menu-active');
            title_button.innerText = "Ocultar";
            icon_toggle.style.backgroundPosition = "-34px"
            open_menu = true;
        } else {
            menu_lateral.classList.remove('menu-active');
            title_button.innerText = "Menú";
            icon_toggle.style.backgroundPosition = "3px"
            open_menu = false;
        }
    })   
}

export const itemActive = () =>{
    let title_page = document.title
    let items_menu = document.querySelectorAll('.oc-subheader .nav-link')

    for(let item of items_menu){
        let title_item = item.textContent

        if (title_item == title_page) {
            item.classList.add('active')
        }
    }
}

export const desplaceMenu = () =>{
    let nav_menu = document.querySelector('.oc-subheader nav')
    let nav_links = nav_menu.querySelectorAll('.nav-link')

    let counter = 0;

    for (const item of nav_links) {
        counter++;
        const translate_x = 150;

        if (item.classList.contains('active')) {
            let vlr_translate_x = translate_x * counter
            nav_menu.scrollLeft += vlr_translate_x - 140
        }
    }

}