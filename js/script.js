// Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Двигаем белую точку за мышкой
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


// Показываем системный курсор, скрываем белую точку
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hidden'); // скрыть белую точку
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hidden'); // вернуть белую точку
    });
});

// SCROLLSMOOTHER

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
        wrapper: ".smooth-wrapper",
        content: ".smooth-content",
        smooth: 2, // можно увеличить до 3–5, но 2 — уже плавно
        effects: true,
        normalizeScroll: true
    });

    // пример: если есть ScrollTrigger анимации
    // gsap.from('.hero__title', {
    //     scrollTrigger: {
    //         trigger: '.hero__title',
    //         start: 'top 80%',
    //         end: 'top 50%',
    //         scrub: true
    //     },
    //     y: 50,
    //     opacity: 0,
    //     duration: 1
    // });
});




// Preloader

// Прелоадер: анимация колец
window.addEventListener('DOMContentLoaded', () => {
    const rings = gsap.utils.toArray('.ring');
    const audiText = document.querySelector('.audi-text');

    const tl = gsap.timeline({
        repeat: 0,
        defaults: { duration: 0.4, ease: 'power2.out' },
        onComplete: () => {
            // Появление текста "Audi"
            gsap.to(audiText, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                delay: 0.2,
                onComplete: () => {
                    // Скрытие прелоадера
                    gsap.to('#preloader', {
                        opacity: 0,
                        duration: 0.5,
                        delay: 1,
                        onComplete: () => {
                            document.getElementById('preloader').remove();
                        }
                    });
                }
            });
        }
    });

    // Поочерёдное загорание колец
    tl.to(rings[0], { stroke: '#fff', scale: 1.1, transformOrigin: 'center' })
        .to(rings[0], { scale: 1, delay: 0.1 })
        .to(rings[1], { stroke: '#fff', scale: 1.1, transformOrigin: 'center' })
        .to(rings[1], { scale: 1, delay: 0.1 })
        .to(rings[2], { stroke: '#fff', scale: 1.1, transformOrigin: 'center' })
        .to(rings[2], { scale: 1, delay: 0.1 })
        .to(rings[3], { stroke: '#fff', scale: 1.1, transformOrigin: 'center' })
        .to(rings[3], { scale: 1, delay: 0.1 });
});




const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

gsap.registerPlugin(ScrollTrigger);



document.querySelectorAll('.menu__links a').forEach(link => {
    const chars = link.textContent.trim().split('');
    link.innerHTML = '';
    chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${i * 50}ms`;
        link.appendChild(span);
    });
    setTimeout(() => link.classList.add('show'), 100);
});




// HERO PARALLAX
const heroContent = document.querySelector('.hero__content');
gsap.to(heroContent, {
    y: () => -(parseFloat(heroContent.dataset.speed) * 100),
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// HERO TITLE — эффект "вылета"
gsap.to(".hero__title", {
    scale: 3,
    yPercent: -150,
    opacity: 0,
    filter: "blur(6px)",
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

// HERO PARAGRAPH
gsap.from(".hero__content p", {
    y: 60,
    opacity: 0,
    duration: 1.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".hero__content p",
        start: "top 95%",
    }
});

// HERO BUTTON
gsap.from(".hero__button", {
    y: 50,
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: ".hero__button",
        start: "top 95%",
    }
});

// ABOUT HEADER
gsap.fromTo(".about h2",
    { y: 60, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about h2",
            start: "top 90%",
            end: "bottom 10%",
            scrub: true,
        }
    }
);

// ABOUT PARAGRAPH
gsap.fromTo(".about p",
    { y: 60, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about p",
            start: "top 90%",
            end: "bottom 10%",
            scrub: true,
        }
    }
);

// ABOUT IMAGE SCALE
gsap.fromTo(".about__image",
    { scale: 1.2, opacity: 0 },
    {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about__image",
            start: "top 90%",
            end: "bottom 10%",
            scrub: true,
        }
    }
);

// LEFT CONTAINERS
const leftItems = gsap.utils.toArray('.about__container--left');
leftItems.forEach(container => {
    const image = container.querySelector('.about__image-wrapper');
    const text = container.querySelector('.about__text');

    gsap.fromTo(image,
        { x: -120, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                end: 'bottom 10%',
                scrub: true,
            }
        }
    );

    gsap.fromTo(text,
        { x: 120, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                end: 'bottom 10%',
                scrub: true,
            }
        }
    );
});

// RIGHT CONTAINERS
const rightItems = gsap.utils.toArray('.about__container--right');
rightItems.forEach(container => {
    const image = container.querySelector('.about__image-wrapper');
    const text = container.querySelector('.about__text');

    gsap.fromTo(image,
        { x: 120, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                end: 'bottom 10%',
                scrub: true,
            }
        }
    );

    gsap.fromTo(text,
        { x: -120, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                end: 'bottom 10%',
                scrub: true,
            }
        }
    );
});

// MODEL BLOCKS
gsap.utils.toArray(".model").forEach((model) => {
    gsap.fromTo(model,
        { opacity: 0, y: 100 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: model,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        }
    );
});



gsap.registerPlugin(ScrollTrigger);

// Эффект "выезда" картинки Audi прямо в лицо
gsap.fromTo(".why-audi__bg",
    {
        scale: 1,
        yPercent: 0,
        filter: "brightness(0.6)",
    },
    {
        scale: 1.4,
        yPercent: -10,
        filter: "brightness(1)",
        scrollTrigger: {
            trigger: "#why-audi",
            start: "top bottom", // когда секция только появляется
            end: "bottom top",   // до полного скролла
            scrub: true
        }
    }
);

// Вылетающий и увеличивающийся текст
gsap.fromTo(".why-audi__content",
    { opacity: 0, y: 200, scale: 0.8 },
    {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
            trigger: "#why-audi",
            start: "top center",
            end: "bottom top",
            scrub: true
        }
    }
);




// Функция для анимации чисел
function animateCounters() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        const isDecimal = target % 1 !== 0;

        gsap.fromTo(counter, {
            innerText: 0
        }, {
            innerText: target,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: isDecimal ? 0.1 : 1 },
            onUpdate: function () {
                counter.innerText = isDecimal
                    ? parseFloat(counter.innerText).toFixed(1)
                    : Math.floor(counter.innerText);
            }
        });
    });
}

// Триггерим анимацию, когда секция с моделями входит в зону видимости
ScrollTrigger.create({
    trigger: "#models",
    start: "top 80%",
    once: true,
    onEnter: animateCounters
});







// Хвиля
gsap.to("#wave", {
    opacity: 0.5,
    scaleY: 2,
    scrollTrigger: {
        trigger: "#acceleration",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Машина: просто виїжджає з правого краю і стає в центр
gsap.set(".acceleration__car", {
    xPercent: 150,
    opacity: 0,
    scale: 1
});

gsap.to(".acceleration__car", {
    xPercent: -5,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#acceleration",
        start: "top 80%", // коли секція дійсно з’являється
        toggleActions: "restart none none none"
    }
});

// Текст
gsap.to(".acceleration__text", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#acceleration",
        start: "20% center",
        end: "bottom top",
        scrub: true
    }
});

// POPUP

const popup = document.getElementById("popup");
const popupContent = popup.querySelector(".popup__content");
const openButtons = document.querySelectorAll(".model__button");
const closeBtn = popup.querySelector(".popup__close");
const overlay = popup.querySelector(".popup__overlay");

openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        popup.classList.add("show");
        gsap.fromTo(
            popupContent,
            { rotateY: -90, scale: 0.5, opacity: 0 },
            {
                rotateY: 0,
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            }
        );
    });
});

function closePopup() {
    gsap.to(popupContent, {
        rotateY: 90,
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => popup.classList.remove("show")
    });
}

closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

const steps = document.querySelectorAll(".form-step");
let currentStep = 0;

const showStep = (index) => {
    steps.forEach((step, i) => {
        if (i === index) {
            step.classList.add("active");
            gsap.fromTo(step,
                { rotateY: -90, opacity: 0, scale: 0.9 },
                { rotateY: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
            );
        } else {
            step.classList.remove("active");
        }
    });
};

document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const currentInput = steps[currentStep].querySelector("input");

        // Проверка валидности
        if (!currentInput.checkValidity()) {
            currentInput.reportValidity(); // Показывает стандартное сообщение
            return;
        }

        // Если всё ок — переход к следующему шагу
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
});

document.querySelectorAll(".prev-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

const form = document.getElementById("testDriveForm");
const message = document.getElementById("popupMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const phoneInput = steps[2].querySelector("input");

    if (!phoneInput.checkValidity()) {
        phoneInput.reportValidity();
        return;
    }

    gsap.to(popupContent, {
        rotateY: 90,
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
            popup.classList.remove("show");

            // Показываем сообщение
            gsap.fromTo(
                message,
                { opacity: 0, bottom: "-60px" },
                {
                    opacity: 1,
                    bottom: "20px",
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => {
                        setTimeout(() => {
                            gsap.to(message, {
                                opacity: 0,
                                bottom: "-60px",
                                duration: 0.5,
                                ease: "power2.in"
                            });
                        }, 3000);
                    }
                }
            );

            // Сброс формы и шага
            form.reset();
            currentStep = 0;
            showStep(currentStep);
        }
    });
});






// Звук
ScrollTrigger.create({
    trigger: "#acceleration",
    start: "top center",
    onEnter: () => {
        const audio = document.getElementById("engine-sound");
        if (audio) audio.play();
    }
});




gsap.registerPlugin(ScrollTrigger);

// Параллакс для фонового изображения
gsap.to(".contact__image", {
    scale: 1.3,
    y: -150,
    x: -50,
    ease: "none",
    scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Анимация появления формы
gsap.from(".contact__form-wrapper", {
    opacity: 0,
    x: 100,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});


// Footer

gsap.registerPlugin(ScrollTrigger);

// Футер параллакс
gsap.from(".footer", {
    opacity: 0,
    y: 100,
    scale: 0.95,
    scrollTrigger: {
        trigger: "#footer",
        start: "top 90%",
        end: "top 70%",
        scrub: true,
    },
});

// Анимация линий
gsap.to(".footer__line", {
    width: "80%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#footer",
        start: "top 95%",
    },
});

