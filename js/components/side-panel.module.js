const sidePanelTriggers = document.querySelectorAll('[data-panel-target]');
const dismissBtns = document.querySelectorAll('[data-dismiss="panel"]');

function openPanel(e) {
    e.preventDefault();
    let triggerDataAttr = this.getAttribute('data-panel-target');
    document.querySelector('body').classList.add('side-panel--shown');
    document.querySelector('.side-panel[data-panel="' + triggerDataAttr + '"]').classList.add('move-panel');
}

function closePanel(e) {
    e.preventDefault();
    document.querySelector('body').classList.remove('side-panel--shown');
    this.closest('.side-panel').classList.remove('move-panel');
}

sidePanelTriggers ? sidePanelTriggers.forEach(trigger => trigger.addEventListener('click', openPanel)) : '';
dismissBtns ? dismissBtns.forEach(btn => btn.addEventListener('click', closePanel)) : '';