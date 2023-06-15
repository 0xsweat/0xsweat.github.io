const dropdownLink = document.querySelector('.dropdown > .nav-but');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownLink2 = document.querySelector('.dropdown2 > .nav-but');
const dropdownContent2 = document.querySelector('.dropdown-content2');

const dropdownLinks = dropdownContent.querySelectorAll('a');
const dropdownLinks2 = dropdownContent2.querySelectorAll('a');

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

dropdownLink2.addEventListener('click', () => {
    const isDisplayed = dropdownContent2.classList.contains('show');

    if (isDisplayed) {
        dropdownContent2.classList.remove('show');
        dropdownLink2.innerHTML = '<i class="bx bx-menu"></i>';
    } else {
        dropdownContent2.classList.add('show');
        dropdownLink2.innerHTML = '<i class="bx bx-exit-fullscreen"></i>';
    }

    dropdownContent2.classList.add('animate__animated', 'animate__fadeInDown');
});

dropdownLinks2.forEach(link => {
    link.addEventListener('click', () => {
        dropdownContent2.classList.remove('show');
        dropdownLink2.innerHTML = '<i class="bx bx-menu"></i>';
        dropdownContent2.classList.remove('animate__animated', 'animate__fadeInDown');
    });
});
