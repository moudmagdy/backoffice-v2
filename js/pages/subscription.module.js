const planBtn = document.querySelectorAll('.plan .btn');

planBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.closest('.plan').classList.add('selected');
        if (btn.closest('.plan').classList.contains('selected')) {
            btn.innerHTML = `<svg viewBox="0 0 22 22">
                                <path fill="#DCEBFF" d="M11,0c6.1,0,11,4.9,11,11s-4.9,11-11,11S0,17,0,11S4.9,0,11,0z"/>
                                <path fill="#1877F2" d="M10.1,16l-5.2-4.6L6.2,10l3.7,3.2l5.7-7.2l1.6,1.2L10.1,16z"/>
                            </svg>
                            <span>تم الاختيار</span>`;
        }
    });
});