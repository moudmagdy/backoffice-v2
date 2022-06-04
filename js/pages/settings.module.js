const showPasswordBtn = document.querySelectorAll('.show__password');

if (showPasswordBtn) {
    showPasswordBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            let inputs = btn.closest('.password__field').querySelectorAll('.form-control');

            btn.closest('.password__field').classList.toggle('password--shown');

            if (btn.closest('.password__field').classList.contains('password--shown')) {
                inputs.forEach(input => {
                    input.setAttribute('type', 'text');
                });
            } else {
                inputs.forEach(input => {
                    input.setAttribute('type', 'password');
                });
            }
        });
    });
}

const passcodeInputs = document.querySelectorAll('.code__inputs .form-control');

if (passcodeInputs) {
    passcodeInputs.forEach(input => {
        let maxLengthAttr = input.getAttribute('maxlength');
        input.addEventListener('keyup', (e) => {
            if (input.value != input.value.replace(/[^0-9\.]/g, '')) {
                input.value = input.value.replace(/[^0-9\.]/g, '');
            }

            if (input.nextElementSibling) {
                if (input.value.length == maxLengthAttr) {
                    input.nextElementSibling.focus();
                }
            }
            if (input.previousElementSibling) {
                if (e.keyCode == 8) {
                    if (input.value.length == 0) {
                        input.previousElementSibling.focus();
                    }
                }
            }
        });
    });
}

const userPhotoInput = document.querySelector('.user-photo__input');
const userPhotoIMG = document.querySelector('.user-photo__img');

function loadIMG(e) {
    let reader = new FileReader();
    reader.onload = function () {
        userPhotoIMG.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}

userPhotoInput.addEventListener('change', loadIMG);