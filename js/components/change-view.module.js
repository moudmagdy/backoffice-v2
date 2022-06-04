const changeViewDropdownItems = document.querySelectorAll('.layout__feature + ul li a');
const productsList = document.querySelector('.products__list');
const products = document.querySelectorAll('.product');

function animateProducts() {
    let a = 0;
    products.forEach((product) => {
        setTimeout(function () {
            product.classList.add('animate__animated', 'animate__fadeInUp');
            product.style.opacity = '1';
        }, a);
        a = a + 100;

        product.addEventListener('animationend', () => {
            product.classList.remove('animate__animated', 'animate__fadeInUp');
        });
    });
}

changeViewDropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.closest('ul').querySelector('.active').classList.remove('active');
        item.classList.add('active');
        let clickedItem = item.getAttribute('data-view');
        products.forEach((product) => {
            product.removeAttribute('style');
        });

        document.querySelector('.products__list').parentElement.scrollTo({ top: 0, behavior: 'smooth' });

        switch (clickedItem) {
            case 'grid-view':
                productsList.classList.remove('list-view');
                productsList.classList.remove('grid-view--no-title');
                localStorage.setItem('view', clickedItem);
                animateProducts();
                break;
            case 'grid-view--no-title':
                productsList.classList.add('grid-view--no-title');
                productsList.classList.remove('list-view');
                localStorage.setItem('view', clickedItem);
                animateProducts();
                break;
            case 'list-view':
                productsList.classList.add('list-view');
                productsList.classList.remove('grid-view--no-title');
                localStorage.setItem('view', clickedItem);
                animateProducts();
                break;
        }
    });
});

function getSavedView() {
    const savedView = localStorage.getItem('view') ? localStorage.getItem('view') : null;
    if (savedView) {
        document.querySelector('.layout__feature + ul li a').classList.remove('active');
        if (savedView == 'grid-view') {
            productsList.classList.remove('list-view');
            productsList.classList.remove('grid-view--no-title');
            document.querySelector('.layout__feature + ul li a[data-view="grid-view"]').classList.add('active');
        } else if (savedView == 'grid-view--no-title') {
            productsList.classList.add('grid-view--no-title');
            productsList.classList.remove('list-view');
            document.querySelector('.layout__feature + ul li a[data-view="grid-view--no-title"]').classList.add('active');
        } else if (savedView == 'list-view') {
            productsList.classList.add('list-view');
            productsList.classList.remove('grid-view--no-title');
            document.querySelector('.layout__feature + ul li a[data-view="list-view"]').classList.add('active');
        }
    }
}

window.addEventListener('load', animateProducts);
window.addEventListener('load', getSavedView);