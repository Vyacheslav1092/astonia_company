import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const contactsForm = document.querySelector('.contacts-form');
    const textarea = document.getElementById('textarea');
    const burger = document.querySelector('.burger');
    const headerHide = document.querySelector('.header-wrap');

    if (slider) {
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            loop: true,

            pagination: {
                el: '.slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    if (contactsForm) {
        if (textarea.value.length > 0) {
            textarea.value = '';
        }
        contactsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Форма успешно отправлена');
            e.target.reset();
        });
    }

    burger.addEventListener('click', () => {
        headerHide.classList.toggle('burger-active');
    });
});
