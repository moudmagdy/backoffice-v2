const sidePanelContainer = document.querySelector('.side-panel__tabs');
const sidePanelTabs = document.querySelectorAll('.side-panel__tabs a');
const selectedIndicator = document.querySelector('.selected__indicator');


function loadIndicator() {
    const selectedTab = document.querySelector('.selected--tab');
    const selectedTabLeftPosition = selectedTab.offsetLeft;
    const selectedTabWidth = selectedTab.offsetWidth;

    selectedIndicator.style.width = selectedTabWidth + 'px';
    selectedIndicator.style.left = selectedTabLeftPosition + 'px';
}

if (sidePanelContainer) {
    window.addEventListener('load', loadIndicator);
    window.addEventListener('resize', loadIndicator);
}

sidePanelTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const tabViewTarget = tab.getAttribute('data-tab');
        document.querySelector('[data-content].content--shown').classList.remove('content--shown');
        document.querySelector('[data-content="' + tabViewTarget + '"]').classList.add('content--shown');

        const tabLeftPosition = tab.offsetLeft;
        const tabWidth = tab.offsetWidth;
        selectedIndicator.style.width = tabWidth + 'px';
        selectedIndicator.style.left = tabLeftPosition + 'px';

        tab.closest('.side-panel__tabs').querySelector('.selected--tab').classList.remove('selected--tab');
        tab.classList.add('selected--tab');
    });
});