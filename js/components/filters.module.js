const pageFiltersTrigger = document.querySelector('.page-filters__trigger');
const pageFiltersContainer = document.querySelector('.page-filters-container')

function openFilters(e) {
    e.preventDefault();
    e.target.closest('body').classList.toggle('filters-shown');

    if (document.querySelector('body').classList.contains('filters-shown')) {
        pageFiltersContainer.style.maxHeight = pageFiltersContainer.scrollHeight + 'px';
    } else {
        pageFiltersContainer.removeAttribute('style');
    }
}

// if (pageFiltersContainer) {
//     window.addEventListener('resize', () => {
//         if (document.querySelector('body').classList.contains('filters-shown')) {
//             pageFiltersContainer.style.maxHeight = pageFiltersContainer.scrollHeight + 'px';
//         }
//     });
// }

if (pageFiltersTrigger) {
    pageFiltersTrigger.addEventListener('click', openFilters);
}



// const filtersFeatureBtn = document.querySelector('.filters__feature');

// if (filtersFeatureBtn) {
//     filtersFeatureBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         e.target.closest('body').classList.toggle('filters-shown');
//         if (document.querySelector('body').classList.contains('filters-shown')) {
//             pageFiltersContainer.style.maxHeight = pageFiltersContainer.scrollHeight + 'px';
//         } else {
//             pageFiltersContainer.removeAttribute('style');
//         }
//     });
// }

