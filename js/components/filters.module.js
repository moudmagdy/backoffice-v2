const filtersOpen = document.querySelector('.filters-open');
const filtersClose = document.querySelector('.filters-close');
const filtersFeatureBtn = document.querySelector('.filters__feature');
const pageFiltersContainer = document.querySelector('.page-filters-container')

if (filtersOpen) {
    filtersOpen.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('body').classList.add('filters-shown');
        if (document.querySelector('body').classList.contains('filters-shown')) {
            pageFiltersContainer.style.maxHeight = pageFiltersContainer.scrollHeight + 'px';
        } else {
            // pageFiltersContainer.style.maxHeight = '0';
            pageFiltersContainer.removeAttribute('style');
        }
    });
}

if (filtersClose) {
    filtersClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.closest('body').classList.remove('filters-shown');
        if (document.querySelector('body').classList.contains('filters-shown')) {
            pageFiltersContainer.style.maxHeight = pageFiltersContainer.scrollHeight + 'px';
        } else {
            // pageFiltersContainer.style.maxHeight = '0';
            pageFiltersContainer.removeAttribute('style');
        }
    });
}

if (filtersFeatureBtn) {
    filtersFeatureBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('body').classList.toggle('filters-shown');
        if (document.querySelector('body').classList.contains('filters-shown')) {
            pageFiltersContainer.style.maxHeight = pageFiltersContainer.scrollHeight + 'px';
        } else {
            // pageFiltersContainer.style.maxHeight = '0';
            pageFiltersContainer.removeAttribute('style');
        }
    });
}

if (pageFiltersContainer) {
    window.addEventListener('resize', () => {
        if (document.querySelector('body').classList.contains('filters-shown')) {
            pageFiltersContainer.style.maxHeight = pageFiltersContainer.scrollHeight + 'px';
        }
    });
}