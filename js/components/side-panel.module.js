const sidePanelTriggers = document.querySelectorAll('[data-panel-target]');
const dismissBtns = document.querySelectorAll('[data-dismiss="panel"]');

function openPanel(e) {
    e.preventDefault();
    let triggerDataAttr = this.getAttribute('data-panel-target');
    if (!document.querySelector('body').classList.contains('side-panel--shown')) {
        document.querySelector('body').classList.add('side-panel--shown');
    }
    document.querySelector('.side-panel[data-panel="' + triggerDataAttr + '"]').dataset.panelHidden = 'false';
    document.querySelector('.side-panel[data-panel="' + triggerDataAttr + '"]').setAttribute('aria-hidden', 'false');
}

function closePanel(e) {
    e.preventDefault();
    this.closest('.side-panel').dataset.panelHidden = 'true';
    this.closest('.side-panel').setAttribute('aria-hidden', 'true');
    if (document.querySelectorAll('[data-panel-hidden="false"]').length == 0) {
        document.querySelector('body').classList.remove('side-panel--shown');
    }
}

sidePanelTriggers ? sidePanelTriggers.forEach(trigger => trigger.addEventListener('click', openPanel)) : '';
dismissBtns ? dismissBtns.forEach(btn => btn.addEventListener('click', closePanel)) : '';