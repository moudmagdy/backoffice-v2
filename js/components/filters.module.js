const pageFiltersTrigger = document.querySelector('.page-filters__trigger');
const pageFiltersContainer = document.querySelector('.page-filters-container')
const pageFilters = document.querySelector('.page-filters')

function openFilters(e) {
    e.preventDefault();
    e.target.closest('body').classList.toggle('filters-shown');

    if (document.querySelector('body').classList.contains('filters-shown')) {
        pageFiltersContainer.style.maxHeight = pageFiltersContainer.scrollHeight + 'px';
    } else {
        pageFiltersContainer.removeAttribute('style');
    }
}

function recalculateHeight() {
    if (document.querySelector('body').classList.contains('filters-shown')) {
        pageFiltersContainer.style.maxHeight = pageFilters.scrollHeight + 'px';
    }
}

pageFiltersTrigger ? pageFiltersTrigger.addEventListener('click', openFilters) : '';
pageFiltersContainer ? window.addEventListener('resize', recalculateHeight) : '';