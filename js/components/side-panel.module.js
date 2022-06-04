const sidePanelBtns = document.querySelectorAll('.side-panel--btn');
const dismissBtns = document.querySelectorAll('.side-panel__dismiss--btn');



if (sidePanelBtns) {
    sidePanelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let btnDataAttr = btn.getAttribute('data-panel');
            document.querySelector('body').classList.add('side-panel--shown');
            document.querySelector('.side-panel[data-panel="' + btnDataAttr + '"]').classList.add('move-panel');
        });
    });
}

if (dismissBtns) {
    dismissBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('body').classList.remove('side-panel--shown');
            btn.closest('.side-panel').classList.remove('move-panel');
        });
    });
}

// Control panel filters
const contentFilter = document.querySelectorAll('.content__filter__item');
const invoiceList = document.querySelector('.invoice__list');
function loadFilteredContent() {
    let selectedFilterDataAttr = document.querySelector('.selected--filter').getAttribute('data-filter');

    invoiceList.querySelectorAll('.invoice__item[data-filter="' + selectedFilterDataAttr + '"]').forEach(item => {
        item.classList.add('item--shown');
    });
}
function filterContent(e) {
    e.preventDefault();

    let filterDataAttr = this.getAttribute('data-filter');

    document.querySelector('.content__filter__item.selected--filter').classList.remove('selected--filter');
    this.classList.add('selected--filter');

    invoiceList.querySelectorAll('.invoice__item').forEach(item => {
        item.classList.remove('item--shown');
    });

    invoiceList.querySelectorAll('.invoice__item[data-filter="' + filterDataAttr + '"]').forEach(item => {
        item.classList.add('item--shown');
    });
}
window.addEventListener('load', loadFilteredContent);
contentFilter.forEach(filter => filter.addEventListener('click', filterContent));