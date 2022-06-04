const pageLoader = document.querySelector('.page-preloader');
function closePageLoader() {
    pageLoader.classList.add('page-loaded');
}
window.addEventListener('load', closePageLoader);

const datepickerElements = document.querySelectorAll('.form-datepicker');
datepickerElements.forEach(element => {
    const datepicker = new Datepicker(element, {
        // ...options
        format: 'yyyy/mm/dd',
        language: 'ar',
        weekStart: '6',
        orientation: 'left'
    });
});

const fileInputs = document.querySelectorAll('.form-file');
function getFileName() {
    let fullPath = this.value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        this.nextElementSibling.querySelector('.form-file__label').textContent = filename;
    } else {
        let bodyElement = document.querySelector('body');
        let direction;

        if (window.getComputedStyle) {
            // all browsers
            direction = window.getComputedStyle(bodyElement, null).getPropertyValue('direction');
        } else {
            // IE5-8
            direction = bodyElement.currentStyle.direction;
        }

        if (direction == 'rtl') {
            this.nextElementSibling.querySelector('.form-file__label').textContent = 'اختر صورة للمنتج';
        } else {
            this.nextElementSibling.querySelector('.form-file__label').textContent = 'Choose an image for the product';
        }
    }
}
if (fileInputs) {
    fileInputs.forEach(fileInput => fileInput.addEventListener('change', getFileName));
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

const searchBarDropdownItems = document.querySelectorAll('.search__bar__dropdown .dropdown-item');
if (searchBarDropdownItems) {
    searchBarDropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            item.closest('.search__bar__dropdown').querySelector('.dropdown__selected-value').textContent = item.textContent;
        });
    });
}

const checkoutToggle = document.querySelector('.checkout__slide__toggle');
if (checkoutToggle) {
    checkoutToggle.addEventListener('click', (e) => {
        e.preventDefault();
        checkoutToggle.closest('.checkout').classList.toggle('slide');
    });
}

const tableCheck = document.querySelectorAll('table tbody [type="checkbox"]');
const tableRadio = document.querySelectorAll('table tbody [type="radio"]');
function checkTableRow() {
    if (this.checked) {
        this.closest('tr').classList.add('selected');
    } else {
        this.closest('tr').classList.remove('selected');
    }
}
function selectTableRow() {
    if (this.checked) {
        this.closest('tbody').querySelectorAll('.selected').forEach(radio => {
            radio.classList.remove('selected');
        });
        this.closest('tr').classList.add('selected');
    }
}
if (tableCheck) {
    tableCheck.forEach(check => check.addEventListener('change', checkTableRow));
}
if (tableRadio) {
    tableRadio.forEach(radio => radio.addEventListener('change', selectTableRow));
}

const paymentBtns = document.querySelectorAll('[data-target="payment"]');
const paymentBackBtns = document.querySelectorAll('.payment .back-btn');

if (paymentBtns) {
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('body').classList.add('payment--shown');
        });
    });
}
if (paymentBackBtns) {
    paymentBackBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('body').classList.remove('payment--shown');
        });
    });
}

if (document.querySelector('.swiper')) {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
}