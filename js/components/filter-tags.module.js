const filterTagsNavBtns = document.querySelectorAll('.filter-tags__nav-btn');

if (filterTagsNavBtns) {
    filterTagsNavBtns.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();

            const tagsContainer = control.parentNode.previousElementSibling;
            const pageDirection = document.querySelector('html').getAttribute('dir');
            const btnPrevDirection = pageDirection == 'rtl' ? 'right' : 'left';
            const btnNextDirection = pageDirection == 'rtl' ? 'left' : 'right';

            if (control.classList.contains('btn--prev')) {
                // tagsContainer.scrollBy({
                //     left: 150,
                //     behavior: 'smooth'
                // });

                sideScroll(tagsContainer, btnPrevDirection, 15, 150, 10);
                setTimeout(function () {
                    if (pageDirection == 'ltr') {
                        if (tagsContainer.scrollLeft == 0) {
                            control.parentElement.classList.add('prev-disabled');
                        }
                        if (tagsContainer.scrollLeft + tagsContainer.clientWidth <= tagsContainer.scrollWidth) {
                            control.parentElement.classList.remove('next-disabled');
                        }
                    } else {
                        if (Math.floor(tagsContainer.scrollLeft) >= 0) {
                            control.parentElement.classList.add('prev-disabled');
                        }
                        if (Math.floor(tagsContainer.scrollWidth + tagsContainer.scrollLeft) > tagsContainer.clientWidth) {
                            control.parentElement.classList.remove('next-disabled');
                        }
                    }
                }, 150);
            }
            if (control.classList.contains('btn--next')) {
                sideScroll(tagsContainer, btnNextDirection, 15, 150, 10);
                setTimeout(function () {
                    if (pageDirection == 'ltr') {
                        if (tagsContainer.scrollWidth - tagsContainer.scrollLeft == tagsContainer.clientWidth) {
                            control.parentElement.classList.add('next-disabled');
                        }
                        if (tagsContainer.scrollLeft > 0) {
                            control.parentElement.classList.remove('prev-disabled');
                        }
                    } else {
                        if (Math.floor(tagsContainer.scrollWidth + tagsContainer.scrollLeft) == tagsContainer.clientWidth) {
                            control.parentElement.classList.add('next-disabled');
                        }
                        if (Math.floor(tagsContainer.scrollLeft) < 0) {
                            control.parentElement.classList.remove('prev-disabled');
                        }
                    }
                }, 150);
            }
        });
    });
}
function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}