const dropdownLink = document.querySelector('.dropdown > .nav-but');
const dropdownContent = document.querySelector('.dropdown-content');

const dropdownLinks = dropdownContent.querySelectorAll('a');

dropdownLink.addEventListener('click', () => {
    const isDisplayed = dropdownContent.classList.contains('show');

    if (isDisplayed) {
        dropdownContent.classList.remove('show');
        dropdownLink.innerHTML = '<i class="bx bx-menu"></i>';
    } else {
        dropdownContent.classList.add('show');
        dropdownLink.innerHTML = '<i class="bx bx-exit-fullscreen"></i>';
    }

    dropdownContent.classList.add('animate__animated', 'animate__fadeInDown');
});

dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdownContent.classList.remove('show');
        dropdownLink.innerHTML = '<i class="bx bx-menu"></i>';
        dropdownContent.classList.remove('animate__animated', 'animate__fadeInDown');
    });
});
