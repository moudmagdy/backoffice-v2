const collapseToggles = document.querySelectorAll('.collapse__toggle:not(.multi-collapse)');
const collapseContainers = document.querySelectorAll('.collapse__container');
const multiCollapse = document.querySelectorAll('.collapse__toggle.multi-collapse');

collapseContainers.forEach(container => {
    window.addEventListener('load', () => {
        if (container.parentNode.classList.contains('collapsed')) {
            container.style.maxHeight = 0;
            container.style.overflowY = 'clip';
        } else {
            container.style.maxHeight = container.scrollHeight + 'px';
            container.style.overflowY = 'visible';
        }
    });
});

collapseContainers.forEach(container => {
    window.addEventListener('resize', () => {
        if (!container.parentNode.classList.contains('collapsed')) {
            container.style.maxHeight = container.scrollHeight + 'px';
            container.style.overflowY = 'visible';
        }
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    if (modal.querySelectorAll('.collapsible').length > 0) {
        modal.addEventListener('shown.bs.modal', function () {
            if (modal.querySelector('.collapsible').classList.contains('collapsed')) {
                modal.querySelector('.collapsible .collapse__container').style.maxHeight = 0;
            } else {
                modal.querySelector('.collapsible .collapse__container').style.maxHeight = modal.querySelector('.collapsible .collapse__container').scrollHeight + 'px';
            }
        });
    }
});

collapseToggles.forEach(collapseToggle => {
    collapseToggle.addEventListener('click', (e) => {
        e.preventDefault();

        const parentCollapsible = collapseToggle.closest('.collapsible');
        const siblingCollapseContainer = collapseToggle.parentNode.nextElementSibling;

        let getSiblings = function (elem) {
            // Setup siblings array and get the first sibling
            let siblings = [];
            let sibling = elem.parentNode.firstChild;

            // Loop through each sibling and push to the array
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling
            }
            return siblings;
        };

        let siblings = getSiblings(parentCollapsible);

        for (let sibling of siblings) {
            if (sibling.classList.contains('collapsible')) {
                if (!sibling.classList.contains('collapsed')) {
                    sibling.classList.add('collapsed');
                    sibling.querySelector('.collapse__container').style.maxHeight = 0;
                    sibling.querySelector('.collapse__container').style.overflowY = 'clip';
                    sibling.querySelector('.collapse__toggle').setAttribute('aria-expanded', 'false');
                }
            }
        }

        if (!parentCollapsible.classList.contains('collapsed')) {
            parentCollapsible.classList.add('collapsed');
            siblingCollapseContainer.style.maxHeight = 0;
            siblingCollapseContainer.style.overflowY = 'clip';
            collapseToggle.setAttribute('aria-expanded', 'false');
        } else {
            parentCollapsible.classList.remove('collapsed');
            siblingCollapseContainer.style.maxHeight = siblingCollapseContainer.scrollHeight + 'px';
            setTimeout(function () {
                siblingCollapseContainer.style.overflowY = 'visible';
            }, 350);
            collapseToggle.setAttribute('aria-expanded', 'true');
        }
    });
});

multiCollapse.forEach(servicesCollapseToggle => {
    servicesCollapseToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parentCollapsible = servicesCollapseToggle.closest('.collapsible');
        const siblingCollapseContainer = servicesCollapseToggle.parentNode.nextElementSibling;
        if (!parentCollapsible.classList.contains('collapsed')) {
            parentCollapsible.classList.add('collapsed');
            siblingCollapseContainer.style.maxHeight = 0;
            servicesCollapseToggle.setAttribute('aria-expanded', 'false');
            siblingCollapseContainer.style.removeProperty('overflow-y');
        } else {
            parentCollapsible.classList.remove('collapsed');
            siblingCollapseContainer.style.maxHeight = siblingCollapseContainer.scrollHeight + 'px';
            servicesCollapseToggle.setAttribute('aria-expanded', 'true');
            setTimeout(function () {
                siblingCollapseContainer.style.overflowY = 'visible';
            }, 350);
        }
    });
});

const rowToggles = document.querySelectorAll('.row__toggle');

rowToggles.forEach(rowToggle => {
    rowToggle.addEventListener('click', (e) => {
        e.preventDefault();
        if (!rowToggle.closest('.flex-table__row').classList.contains('row__data--shown')) {
            rowToggle.closest('.flex-table__row').classList.add('row__data--shown');
            rowToggle.setAttribute('aria-expanded', 'true');
            rowToggle.closest('.flex-table__row').querySelector('.flex-table__row__data').style.maxHeight = rowToggle.closest('.flex-table__row').querySelector('.flex-table__row__data').scrollHeight + 'px';
        } else {
            rowToggle.closest('.flex-table__row').classList.remove('row__data--shown');
            rowToggle.setAttribute('aria-expanded', 'false');
            rowToggle.closest('.flex-table__row').querySelector('.flex-table__row__data').style.maxHeight = 0;
        }
    });
});