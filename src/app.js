// Libs
import $ from "jquery";
import 'bootstrap';
import AOS from 'aos';
import "./../node_modules/slick-carousel";
import SmoothScroll from "smooth-scroll";

//Modules
import {menuToggle, itemActive, desplaceMenu} from "./modules/MenuEffects.js";
import {buttonDisabled} from "./modules/CustomSlick.js";
import buttonsCalendar from "./modules/ButtonsTimeline.js";

// Fonts
import "./fonts/Cabin-Regular.ttf";
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-BoldItalic.ttf";
import "./fonts/Roboto-Light.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-MediumItalic.ttf";
import "./fonts/Roboto-Regular.ttf";

// Styles
import "./styles/app.sass";

// Images
import ArrowLeft from "./img/left-arrow-1.svg";
import ArrowRight from "./img/right-arrow-1.svg";
import "./img/logo-ocensa.svg";
import "./img/icon_menu_buscador_1.svg";
import "./img/sprite-01-menu-blanco.svg";
import "./img/icon_footer_1_facebook.svg";
import "./img/icon_footer_2_instagram.svg";
import "./img/icon_footer_3_youtube.svg";
import "./img/icon_footer_4_twitter.svg";
import "./img/isotipo-ocensa.svg";
import "./img/icon_subir_azul.svg";
import "./img/icon-flecha-izq-blanca.svg";
import "./img/pictograma_ocensa_inversionistas_accionistas_inversionistas.svg";
import "./img/slider-home.jpg";
import "./img/retos-img.jpg";
import "./img/icon_ocenza_home_retos_que_nos_impulsan.svg"
import "./img/imag-3.jpg";
import "./img/imag-4.jpg";
import "./img/imag-5.jpg";
import "./img/imag-6.jpg";
import "./img/imag-7.jpg";
import "./img/imag-8.jpg";
import "./img/imag-9.jpg";
import "./img/icon_ocenza_home_linea_de_tiempo.svg";
import "./img/icon_ocenza_home_componente_ambiental.svg";
import "./img/imag-10.jpg";
import "./img/plus_1.svg";
import "./img/logo-ocensa.svg";
import "./img/imag_1.jpg";
import "./img/imag_2.jpg";
import "./img/imag_3.jpg";
import "./img/imag_4.jpg";
import "./img/05-icon_ocenza_con_potuaria_que_es_informacion_financiera_reportes.svg";
import "./img/06-icon_ocenza_con_potuaria_ani_informacion_financiera_reportes.svg";
import "./img/07-icon_ocenza_con_potuaria_ocensayani_informacion_financiera_reportes.svg";
import "./img/08-icon_ocenza_con_potuaria_que_es_comport_informacion_financiera_reportes copia.svg";
import "./img/09-icon_ocenza_con_potuaria_componente_ambiental_informacion_financiera_reportes.svg";
import "./img/10-icon_ocenza_con_potuaria_componente_los_requerimientos_informacion_financiera_reportes copia.svg";
import "./img/11-icon_ocenza_con_potuaria_componente_una_licencia_informacion_financiera_reportes copia.svg";
import "./img/12-icon_ocenza_con_potuaria_componente_el_cambio_informacion_financiera_reportes copia.svg";
import "./img/13-icon_ocenza_con_potuaria_componente_el_impacto_informacion_financiera_reportes copia.svg";
import "./img/14-icon_ocenza_con_potuaria_componente_aunque_reemplazo_informacion_financiera_reportes copia.svg";
import "./img/15-icon_ocenza_con_potuaria_componente_que_se_haria_informacion_financiera_reportes copia.svg";
import "./img/16-icon_ocenza_con_potuaria_componente_el_agua_informacion_financiera_reportes copia.svg";
import "./img/17-icon_ocenza_con_potuaria_componente_el_26_noviembre_informacion_financiera_reportes copia.svg";
import "./img/18-icon_ocenza_con_potuaria_componente_con_el_tendido_informacion_financiera_reportes copia.svg";
import "./img/19-icon_ocenza_con_potuaria_componente_en_la_planeacion_informacion_financiera_reportes copia.svg";
import "./img/20-icon_ocenza_con_potuaria_componente_por_cultura_informacion_financiera_reportes copia.svg";
import "./img/21-icon_ocenza_con_potuaria_componente_la_operacion_informacion_financiera_reportes copia.svg";
import "./img/22-icon_ocenza_con_potuaria_componente_si_un_eventual_informacion_financiera_reportes copia.svg";
import "./img/23-icon_ocenza_con_potuaria_componente_la_intervencion_informacion_financiera_reportes copia.svg";
import "./img/24-icon_ocenza_con_potuaria_componente_a_las_enbarcaciones_informacion_financiera_reportes copia.svg";
import "./img/25-icon_ocenza_con_potuaria_componente_al-final_ocensa_informacion_financiera_reportes copia.svg";

import "./img/28-icon_ocenza_terminal_covenas_datos_interes.svg";
import "./img/29-icon_ocenza_terminal_covenas_ubicado.svg";
import "./img/30-icon_ocenza_terminal_covenas_es_el_puerto.svg";
import "./img/31-icon_ocenza_terminal_covenas_recibe_petroleo.svg";
import "./img/32-icon_ocenza_terminal_covenas_su_area.svg";
import "./img/33-icon_ocenza_terminal_covenas_aqui_llegan.svg";
import "./img/34-icon_ocenza_terminal_covenas_nuestra_terminal.svg";
import "./img/35-icon_ocenza_terminal_covenas_un_barril.svg";
import "./img/36-icon_ocenza_terminal_covenas_todo_este_petroleo.svg";
import "./img/37-icon_ocenza_terminal_covenas_desde_este_puerto.svg";
import "./img/38-icon_ocenza_terminal_covenas_el_ultimo_tramo.svg";
import "./img/39-icon_ocenza_terminal_covenas_por_que_almacenamos.svg";
import "./img/40-icon_ocenza_terminal_covenas_aqui_contamos.svg";
import "./img/41-icon_ocenza_terminal_covenas_2020_tlu2.svg";
import "./img/42-icon_ocenza_terminal_covenas_2020_barriles.svg";
import "./img/43-icon_ocenza_terminal_covenas_2020_record_buques.svg";
import "./img/44-icon_ocenza_terminal_covenas_estadisticas.svg";
import "./img/cov_imag_1.jpg";
import "./img/cov_imag_2.jpg";
import "./img/cov_imag_3.jpg";
import "./img/cov_imag_4.jpg";
import "./img/cov_imag_5.jpg";
import "./img/cov_imag_6.jpg";
import "./img/cov_imag_7.jpg";

import "./img/26-icon_ocenza_tlu2_tlu2_nueva_informacion_financiera_reportes.svg";
import "./img/27-icon_ocenza_tlu2_el_futuro_tlu2_informacion_financiera_reportes.svg";
import "./img/mask-group-13.jpg";
import "./img/mask-group-13.jpgroup-14.jpg";
import "./img/mask-group-13.jpgroup-15.jpg";
import "./img/mask-group-13.jpgroup-16.jpg";
import "./img/path-6415.jpg";
import "./img/path-6416.jpg";
import "./img/arrow-2-left-inactive.svg";
import "./img/arrow-2-right-inactive.svg";
import ArrowLeft2 from "./img/arrow-2-left.svg";
import ArrowRight2 from "./img/arrow-2-right.svg";

import "./img/infografia.jpg";

import "./img/04-icon_ocenza_home_audio_activo.svg";
import "./img/04-icon_ocenza_home_audio_inactivo.svg";
import "./img/04-icon_ocenza_home_documento_activo.svg";
import "./img/04-icon_ocenza_home_documento_inactivo.svg";
import "./img/04-icon_ocenza_home_imagenes_activo.svg";
import "./img/04-icon_ocenza_home_imagenes_inactivo.svg";
import "./img/04-icon_ocenza_home_videos_activo.svg";
import "./img/04-icon_ocenza_home_videos_inactivo.svg";
import "./img/icon_menu_button-search-mobile.svg";
import "./img/pictograma_ocensa_conport_footer_2.svg";
import "./img/pictograma_ocensa_conport_footer_3.svg";
import "./img/pictograma_ocensa_conport_footer_4.svg";
import "./img/icon_deslizar-h-blanco-2.svg";
import "./img/icon_deslizar-h-azul.svg";
import "./img/icono-faltante.svg";
import "./img/logo_ocensa_logo2.png";
import "./img/logo_ocensa_logosimbolo.png";
import "./img/icon_menu_buscador_2.svg";
import "./videos/mangueras-ocensa.mp4";
import "./img/icon_boyancia_mangueras_conport.svg";
import "./img/imag_5_mangueras_1_mangueras_flexibles_desktop.jpg";
import "./img/imag_5_mangueras_2_fundamentales_desktop.jpg";
import "./img/icon_mantenimiento_mangueras_conport.svg";
import "./img/icon_inspección_mangueras_conport.svg";
import "./img/icon_manguera_servicio_mangueras_conport.svg";
import "./img/icon_estandares_mangueras_conport.svg";
import "./img/icon_boyancia_mangueras_conport.svg";
import "./img/imag_5_mangueras_2_fundamentales_mobile.jpg";
import "./img/icon_mangueras_flexibles_mangueras_conport.svg";
import "./img/icon_fundamentales_mangueras_conport.svg";
import "./img/imag_5_mangueras_1_mangueras_flexibles_mobile.jpg";

AOS.init();
menuToggle();
itemActive();
buttonsCalendar();
desplaceMenu();

var scroll = new SmoothScroll('a[href*="#"]');

// Jquery
$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $('#mast-header').addClass('sticky-header')
    } else {
      $('#mast-header').removeClass('sticky-header')
    }
  });

  $('.slick-oc').slick({
    prevArrow: `<button class='nav-arrow nav-left'><img src=${ArrowLeft}></button>`,
    nextArrow: `<button class='nav-arrow nav-right'><img src=${ArrowRight}></button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $('.slick-oc__terminal').slick({
    prevArrow: `<button class='nav-arrow nav-left'><img src=${ArrowLeft}></button>`,
    nextArrow: `<button class='nav-arrow nav-right'><img src=${ArrowRight}></button>`,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  

  $('.slick-oc__time').slick({
    prevArrow: `<button class='nav-arrow nav-left'><img src=${ArrowLeft}></button>`,
    nextArrow: `<button class='nav-arrow nav-right'><img src=${ArrowRight}></button>`,
    slidesToShow: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 20,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slick-oc__mangueras').slick({
    prevArrow: `<button class='nav-arrow nav-left'><img src=${ArrowLeft}></button>`,
    nextArrow: `<button class='nav-arrow nav-right'><img src=${ArrowRight}></button>`,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slick-oc__style-2').slick({
    prevArrow: `<button class='nav-arrow nav-left'><img src=${ArrowLeft2}></button>`,
    nextArrow: `<button class='nav-arrow nav-right'><img src=${ArrowRight2}></button>`
  });

  if($('.slick-oc__style-2')){
    buttonDisabled();
  }
  // Toggle
  $('.oc-info__tooltip').tooltip();

  AOS.refresh();

});

//AOS//
AOS.init();


