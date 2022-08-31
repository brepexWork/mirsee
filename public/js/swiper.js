$(document).ready(() => {

    let servicesSwiper
    let swiper_contacts
    let swiper_decoration
    let swiper_romania

    let decorationSwiper = $('.cardDecoration .wrapper-swiper')
    let swiper = $('.ourServices .container-swiper')
    let contactsSteps = $('.contactsSteps .container-swiper')
    let romania_element = $('.romaniaAdvantages .container-swiper')


    const checkServicesMobile = () => {
        if($(window).width() < 820 && swiper.attr('data-swiper') === 'false') {

            servicesSwiper = new Swiper('.ourServices .container-swiper', {
                wrapperClass: 'swiper-wp',
                slideClass: 'slide',
                slidesPerView: 1,
                breakpoints: {
                    530: {
                        slidesPerView: 2
                    }
                },
                navigation: {
                    nextEl: '#services_arrow_next',
                    prevEl: '#services_arrow_prev'
                }

            })

            swiper.attr('data-swiper', 'true')
        }

        if($(window).width() > 820 && swiper.attr('data-swiper') === 'true') {

            swiper.attr('data-swiper', 'false')
            servicesSwiper.destroy()

        }
    }

    const checkMobile = () => {

        if($(window).width() < 900 && decorationSwiper.data('mobile') === false) {
            swiper_decoration = new Swiper('.cardDecoration .wrapper-swiper', {
                wrapperClass: 'swiper-wrapper',
                slideClass: 'slide',
                width: 280,
                spaceBetween: 30,
                navigation: {
                    prevEl: '#decoration_prev',
                    nextEl: '#decoration_next'
                },
                breakpoints: {
                    400: {
                        width: 300
                    }
                }
            })

            decorationSwiper.data('mobile', true)
        }

        if($(window).width() > 900 && decorationSwiper.data('mobile') === true) {
            decorationSwiper.data('mobile', false)

            swiper_decoration.destroy()
        }
    }

    const contactsSwiper = () => {
        if($(window).width() < 1300 && contactsSteps.attr('data-mobile') === 'false') {
            swiper_contacts= new Swiper('.container-swiper', {
                wrapperClass: 'swiper-wrapper',
                slideClass: 'slide',
                slidesPerView: 1,
                autoHeight: true,
                spaceBetween: 50,
                breakpoints: {
                    1020: {
                        slidesPerView: 3
                    },
                    520: {
                        slidesPerView: 2
                    }
                }

            })

            contactsSteps.attr('data-mobile', 'true')
        }

        if($(window).width() > 1300 && contactsSteps.attr('data-mobile') === 'true') {
            swiper_contacts.destroy()

            contactsSteps.attr('data-mobile', 'false')
        }
    }

    const mobileAdvantages = () => {

        if(romania_element.attr('data-mobile') === 'false' && $(window).width() < 600) {

            swiper_romania = new Swiper('.romaniaAdvantages .container-swiper', {
                wrapperClass: 'swiper-wrapper',
                slideClass: 'slide',
                slidesPerView: 1,
                speed: 500,
                navigation: {
                    nextEl: '#romania_next',
                    prevEl: '#romania_prev'
                }

            })

            romania_element.attr('data-mobile', 'true')
        }

        if(romania_element.attr('data-mobile') === 'true' && $(window).width() > 600) {
            swiper_romania.destroy()

            romania_element.attr('data-mobile', 'false')
        }
    }

    let componentSwiper = new Swiper('.componentSwiper-container .container-swiper', {
        wrapperClass: 'swiper-wp',
        slideClass: 'slide',
        width: 250,
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: '#componentSwiper_next',
            prevEl: '#componentSwiper_prev'
        },
        breakpoints: {
            1300: {
            }

        }

    })

    let reviewsSwiper = new Swiper('.reviews .wrapper-swiper', {
        wrapperClass: 'swiper-wp',
        slideClass: 'slide',
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 100,
        pagination: {
            el: '.reviews .pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '#reviews_next',
            prevEl: '#reviews_prev'
        },
        breakpoints: {
            580: {
              slidesPerView: 2
            },
            950: {
                slidesPerView: 3
            }
        }
    })



    $(window).resize(() => {
        checkServicesMobile()
        checkMobile()
        contactsSwiper()
        mobileAdvantages()
    })

    checkServicesMobile()
    checkMobile()
    contactsSwiper()
    mobileAdvantages()

})