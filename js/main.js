$(document).ready((function(){function e(){$("#accordeon .acc-body").not($(this).next()).slideUp(1e3),$(this).next().slideToggle(500),$(".acc-head").addClass("hide"),$(".first_text").addClass("hide")}$(".header__burger").click((function(e){$(".header__burger,.header__menu").toggleClass("active")})),$(".menu__list").on("click",(function(){$(".header__burger,.header__menu").removeClass("active")})),$(".slick__team").slick({responsive:[{breakpoint:4002,settings:"unslick"},{breakpoint:993,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,arrows:!0,variableWidth:!0}},{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0,infinite:!1,variableWidth:!0}},{breakpoint:500,settings:{infinite:!1,slidesToShow:1,slidesToScroll:1,centerMode:!0,variableWidth:!0}}]}),$(".equipment__slider").slick({slidesToShow:2,slidesToScroll:1,infinite:!0,variableWidth:!0,responsive:[{breakpoint:400.5,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,centerMode:!0,variableWidth:!0,arrows:!1}}]}),$(".gallery__slider").slick({slidesToShow:5,slidesToScroll:1,infinite:!0,variableWidth:!0,autoplay:!0,arrows:!1,autoplaySpeed:2e3}),$(document).ready((function(){$("#accordeon .acc-head").on("click",e)})),$.each($(".ibg"),(function(e,i){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}));