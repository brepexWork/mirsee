<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!--Connection google fonst 'Monserat'-->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">

    <link rel="stylesheet" href="/public/font/stylesheet.css">
    <link rel="stylesheet" href="/public/font/gilroy/stylesheet.css">

    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&amp;display=swap" rel="stylesheet">

    <!--End connection google fonts-->

    <!--Link styles-->
    <link rel="stylesheet" href="/public/css/style.min.css">
    <link rel="stylesheet" href="/public/css/adaptation.min.css">

    <link rel="stylesheet" href="/public/css/viza.min.css">
    <link rel="stylesheet" href="/public/css/viza.adaptation.min.css">

    <link rel="stylesheet" href="/public/css/components.min.css">
    <link rel="stylesheet" href="/public/css/components.adaptation.min.css">

    <link rel="stylesheet" href="/public/css/cards.min.css">
    <link rel="stylesheet" href="/public/css/cards.adaptation.min.css">

    <link rel="stylesheet" href="/public/css/contact.min.css">
    <link rel="stylesheet" href="/public/css/contact.adaptation.min.css">

    <link rel="stylesheet" href="/public/css/romania.min.css">
    <link rel="stylesheet" href="/public/css/romania.adaptation.min.css">

    <link rel="stylesheet" href="/public/css/template.min.css">
    <link rel="stylesheet" href="/public/css/template.adaptation.min.css">


    <!--End Link styles-->

    <!--Connection library axios-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"
            integrity="sha512-xIPqqrfvUAc/Cspuj7Bq0UtHNo/5qkdyngx6Vwt+tmbvTLDszzXM0G6c91LXmGrRx8KEPulT+AfOOez+TeVylg=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!--End connection library-->

    <!--Connection library JQuery-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>
    <!--End connection library JQuery-->

    <!--Connection library wiper-->
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <!--End connection library wiper-->

    <title>Document</title>
</head>
<body>

<div class="header_mobile">
    <div class="header_mobile-wrapper">
        <ul>
            <li><a href="/public/">Главная</a></li>
            <li><a href="/public/romania">Гражданство Румынии</a></li>
            <li><a href="/public/viza">Визы</a></li>
            <li><a href="/public/cards">Карты</a></li>
            <li><a href="/public/contacts">Контакты</a></li>
        </ul>
    </div>
</div>

<header>
    <div class="content">
        <div class="header-wrapper">
            <a href="/public" class="wrapper-logo">
                <img src="/public/image/logo_footer.png" alt="">
            </a>

            <ul class="wrapper-menu">
                <li><a href="/public">Главная</a></li>
                <li><a href="/public/romania">Гражданство Румынии</a></li>
                <li><a href="/public/viza">Визы</a></li>
                <li><a href="/public/cards">Карты</a></li>
                <li><a href="/public/contacts">Контакты</a></li>
            </ul>

            <div class="wrapper-phone">
                <a target="_blank" href="https://wa.clck.bar/40730362882">
                    <img src="/public/image/icons/whatsapp.png" alt="">
                    <img src="/public/image/icons/whatsapp_hover.png" alt="">
                    <div>whatsApp</div>
                </a>
            </div>

            <div class="wrapper-burger" id="burger">
                <span></span><span></span>
            </div>
        </div>
    </div>
</header>

<div class="alert">
    <div class="text">Сообщение успешно отправлено!</div>
</div>

<?php require 'component/video.php'?>

<?php require 'component/popup.php'?>

