const body = document.querySelector('body');
const mainMenu = document.querySelector('.main-menu');
const mainMenuToggles = document.querySelectorAll('.main-menu__toggle');
const subMenuToggles = document.querySelectorAll('.has--submenu > a');
const profileMenuToggle = document.querySelector('.main-menu__profile > a');
const notificationsToggle = document.querySelector('.main-menu__notifications');

function openMenuOnMouseEnter() {
    body.classList.add('main-menu--hover-opened');
    if (body.classList.contains('main-menu--hover-opened')) {
        if (document.getElementsByClassName('submenu').length > 0) {
            document.querySelectorAll('.submenu--opened .submenu').forEach(submenu => {
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            });
        }
    }
}

function closeMenuOnMouseLeave() {
    body.classList.remove('main-menu--hover-opened');
    if (!body.classList.contains('main-menu--hover-opened') && !body.classList.contains('main-menu--opened')) {
        if (document.getElementsByClassName('submenu').length > 0) {
            document.querySelectorAll('.submenu--opened .submenu').forEach(submenu => {
                submenu.style.maxHeight = 0;
            });
        }
        document.querySelector('.main-menu__profile').classList.remove('menu--shown');
    }
}

function toggleOpenMenu(e) {
    e.preventDefault();
    body.classList.toggle('main-menu--opened');
    if (body.classList.contains('main-menu--opened') || body.classList.contains('main-menu--hover-opened')) {
        if (document.getElementsByClassName('submenu').length > 0) {
            document.querySelectorAll('.submenu--opened .submenu').forEach(submenu => {
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            });
        }
    } else {
        if (document.getElementsByClassName('submenu').length > 0) {
            document.querySelectorAll('.submenu--opened .submenu').forEach(submenu => {
                submenu.style.maxHeight = 0;
            });
        }
        document.querySelector('.main-menu__profile').classList.remove('menu--shown');
    }
}

function openSubMenu(e) {
    e.preventDefault();

    let getParentSiblings = function (elem) {
        // Setup siblings array and get the first sibling
        let siblings = [];
        // let sibling = elem.closest('.menu__list').firstChild;
        let sibling = elem.closest('.menu__list').firstChild;

        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem && sibling.classList.contains('submenu--opened')) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling
        }
        return siblings;
    };

    let siblings = getParentSiblings(this);

    if (!this.closest('.has--submenu').classList.contains('submenu--opened')) {
        siblings.forEach(sibling => {
            if (!sibling.querySelector('.submenu').getElementsByClassName('active').length > 0) {
                sibling.classList.remove('submenu--opened');
                sibling.querySelector('a').classList.remove('active');
                sibling.querySelector('.submenu').style.maxHeight = 0;
            }
        });

        this.closest('.has--submenu').classList.add('submenu--opened');
        this.classList.add('active');
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';

        setTimeout(function () {
            let scrollPos = document.querySelector('.menu__nav').scrollTop + document.querySelector('.submenu--opened .submenu').scrollHeight;
            document.querySelector('.menu__nav').scrollTo({ top: scrollPos, behavior: 'smooth' });
        }, 300);
    } else {
        this.closest('.has--submenu').classList.remove('submenu--opened');
        if (!this.nextElementSibling.getElementsByClassName('active').length > 0) {
            this.classList.remove('active');
        }
        this.nextElementSibling.style.maxHeight = 0;
    }
}

function openProfileMenu(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('menu--shown');
    document.querySelector('body').classList.remove('panel--shown');
}

function openNotificationsPanel(e) {
    e.preventDefault();
    document.querySelector('body').classList.toggle('panel--shown');
    document.querySelector('.main-menu__profile').classList.remove('menu--shown');
}

mainMenu.addEventListener('mouseenter', openMenuOnMouseEnter);
mainMenu.addEventListener('mouseleave', closeMenuOnMouseLeave);
mainMenuToggles.forEach(mainMenuToggle => mainMenuToggle.addEventListener('click', toggleOpenMenu));
subMenuToggles.forEach(subMenuToggle => subMenuToggle.addEventListener('click', openSubMenu));
profileMenuToggle.addEventListener('click', openProfileMenu);
notificationsToggle.addEventListener('click', openNotificationsPanel);