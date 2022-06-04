const showPasswordBtn = document.querySelectorAll('.show__password');

showPasswordBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.closest('.password__field').classList.toggle('password--shown');
        if (btn.closest('.password__field').classList.contains('password--shown')) {
            btn.closest('.password__field').querySelector('.form-control').setAttribute('type', 'text');
        } else {
            btn.closest('.password__field').querySelector('.form-control').setAttribute('type', 'password');
        }
    });
});