axios({
    url: 'https://youtour.bitrix24.ru/rest/33301/fzphxemjnxmj7ogn/crm.lead.productrows.get',
    method: 'post',
    data: {
        id: 136281
    }
}).then((res) => {
    console.log(res)
})

//Якоря
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//End anchors

$('.cost .wrapper-container button').click((e) => {
    let index = $(e.currentTarget).index()

    $('.cost .container-body .element').hide()
    $('.cost .container-body .element').eq(index).show()

    $('.cost .wrapper-container button').css({'background': 'white', 'color': 'black'})

    $(e.currentTarget).css({'background': '#E8B11E', 'color': 'white'})
})

/**/

$('#burger').click((e) => {
    let scrollTop = $(window).scrollTop()

    if ($(e.currentTarget).hasClass('burger-active')) {
        $(e.currentTarget).removeClass('burger-active')
        $('.header_mobile').hide(200)

        $(window).off('scroll', scrollOff())

        header_menu()
    } else {
        $(e.currentTarget).addClass('burger-active')
        $('.header_mobile').show(200)

        $(window).on('scroll', scrollOff(scrollTop))
    }
})

//This is function ScrollOff
const scrollOff = (scrollTop = 0) => {
    $(window).scroll(() => {
        $(window).scrollTop(scrollTop)
    })
}

/*autoheight blocks*/

const autoheight = () => {
    for (let i = 0; i < $('*[autoheight]').length; i++) {
        let width = $('*[autoheight]').eq(i).width()

        $('*[autoheight]').eq(i).height(width)
    }

    for (let i = 0; i < $('*[autoheight2]').length; i++) {
        let width = $('*[autoheight2]').eq(i).width()

        $('*[autoheight2]').eq(i).height(width / 1.9)
    }
}

autoheight()

/*End autoheight blocks*/

/*закрытие модального окна с видео / открытие*/

$('.componentModal_video').click((e) => {
    if ($(e.target).prop('className') == 'componentModal_video') {
        $(e.currentTarget).hide()
    }
})

$('#open_video').click(() => {
    $('.componentModal_video').show()
    autoheight()
})

/**/

//Модальные окна

$('div[modal] input').keyup((e) => {
    if (e.keyCode == 27) {
        $(e.currentTarget).parents('div[modal]').hide(100)
    }
})

$('div[modal] .close').click((e) => {
    $(e.currentTarget).parents('div[modal]').hide(100)
})

$('button[button_short]').click((e) => {

    let button_text = $(e.currentTarget).text()

    $('.modalShort .wrapper-button').text(button_text)

    $('.modalShort').show(100)
})

$('button[button_full]').click((e) => {
    $('.modalFull').show(100)

    let button_text = $(e.currentTarget).text()

    $('.modalFull .wrapper-button').text(button_text)
})

//блок отвечающий за выбор ивывод определенной формы

$('.templateCosts .services-lists .list').click((e) => {
    let id = $(e.currentTarget).index()
    let length = $('.templateCosts .services-lists .list').length

    $('.templateCosts .services-lists .list').removeClass('active')

    $(e.currentTarget).addClass('active')

    $('.templateCosts .services-details .detail').hide()
    $('.templateCosts .services-details .detail').eq(id).show()


})

//блок faq

$('.componentFaq .wrapper-faq .faq').click((e) => {
    if ($(e.currentTarget).find('.plus').hasClass('active')) {
        $(e.currentTarget).find('.plus').removeClass('active')
        $(e.currentTarget).find('.answer').hide(100)

    } else {
        $(e.currentTarget).find('.plus').addClass('active')
        $(e.currentTarget).find('.answer').show(100)
    }
})

/* Header fixed menu */

const header_menu = () => {

    $(window).scroll(() => {
        let scrollTopHeader = $(document).scrollTop()
        let header_menu = $('.componentMain').height()

        let header_menu_fixed = $('header')

        if($(window).width() > 1000) {
            if(header_menu_fixed.height() + 100 < $(window).scrollTop() && !header_menu_fixed.hasClass('active')) {
                header_menu_fixed.addClass('active')
            }

            if(header_menu_fixed.hasClass('active') && (header_menu_fixed.height() > $(window).scrollTop())) {
                header_menu_fixed.removeClass('active')
            }
        }

        if (scrollTopHeader > header_menu && $(window).width() < 950) {
            $('header').attr('header_active', '')
        }
        if (scrollTopHeader < header_menu && $(window).width() < 950) {
            $('header').removeAttr('header_active')
        }
    })
}

header_menu()

/* end header fixed menu */

//cookie

if($('.cookie').attr('set_cookie') != true) {
    setTimeout(() => {
        $('.cookie').show(300)
    }, 6000)
}

$('.cookie button').click(() => {

    $.ajax({
        url: '/public/php/set_cookie.php',
        type: 'POST',
        cache: false,
        success: (data) => {
            $('.cookie').hide(300)
            console.log(true)
        }
    })
})

//END

$(window).resize(() => {
    autoheight()
})

