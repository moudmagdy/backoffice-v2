// const LayoutTabs = document.querySelectorAll('.layout__tabs');
// const LayoutTabsNav = document.querySelectorAll('.layout__tabs__nav');
const LayoutTabsItem = document.querySelectorAll('.layout__tabs__nav a');

LayoutTabsItem.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const tabDataAttr = tab.dataset.tab;
        const activeTabParent = document.querySelector('.layout__tab__content[data-tab="' + tabDataAttr + '"]');


        tab.closest('.layout__tabs').querySelector('.active--tab').classList.remove('active--tab');
        tab.classList.add('active--tab');


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

        let siblings = getSiblings(activeTabParent);

        for (let sibling of siblings) {
            sibling.classList.remove('active--tab')
        }

        document.querySelector('.layout__tab__content[data-tab="' + tabDataAttr + '"]').classList.add('active--tab');
    });
});