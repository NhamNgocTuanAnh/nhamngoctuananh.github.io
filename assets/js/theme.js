jQuery(document).ready(function(e){e(function(){function t(t){(t=t.length?t:e("[name="+this.hash.slice(1)+"]")).length&&e("html,body").animate({scrollTop:t.offset().top},1e3)}setTimeout(function(){location.hash&&(window.scrollTo(0,0),t(e("#"+(target=location.hash.split("#"))[1])))},1),e("a[href*=\\#]:not([href=\\#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname)return t(e(this.hash)),!1})}),e(".show-comments").on("click",function(){e("#comments").toggleClass("comments--show")}),e(".show-search").on("click",function(){e(".bd-search").toggleClass("search--show")}),e(document).on("click",".spoiler",function(){e(this).removeClass("spoiler")})});var loadDeferredStyles=function(){var e=document.getElementById("deferred-styles"),t=document.createElement("div");t.innerHTML=e.textContent,document.body.appendChild(t),e.parentElement.removeChild(e)},raf=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;function hasTouch(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}if(raf?raf(function(){window.setTimeout(loadDeferredStyles,0)}):window.addEventListener("load",loadDeferredStyles),setTimeout(function(){document.body.className=""},500),$(document).ready(function(){$(".nav-icon").click(function(){$(".nav-icon").toggleClass("active")}),$(".nav-icon").click(function(){$("#menu").toggleClass("active")}),$(".nav-icon").click(function(){$("#blackover-nav").toggleClass("active")}),$(".nav-icon").click(function(){$("body").toggleClass("active-side")})}),$(document).ready(function(){$("#blackover-nav").click(function(){$(".nav-icon").removeClass("active")}),$("#blackover-nav").click(function(){$("#menu").removeClass("active")}),$("#blackover-nav").click(function(){$("#blackover-nav").removeClass("active")}),$("#blackover-nav").click(function(){$("body").removeClass("active-side")})}),$(document).ready(function(){$(".grid-selector").click(function(){$(".grid-selector").toggleClass("active")}),$(".grid-selector").click(function(){$(".post").toggleClass("active")})}),$(document).keyup(function(e){27==e.keyCode&&($(".nav-icon").removeClass("active"),$("#menu").removeClass("active"),$("#blackover-nav").removeClass("active"),$("body").removeClass("active-side"))}),hasTouch())try{for(var e in document.styleSheets){var t=document.styleSheets[e];if(t.rules)for(var o=t.rules.length-1;o>=0;o--)t.rules[o].selectorText&&t.rules[o].selectorText.match(":hover")&&t.deleteRule(o)}}catch(n){}$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>300?$(".scroll-top").addClass("active"):$(".scroll-top").removeClass("active")}),$(".scroll-top").click(function(){return $("html, body").animate({scrollTop:0},300),!1})}),$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>130?$(".back-page-button-dark").removeClass("back-page-button-w"):$(".back-page-button-dark").addClass("back-page-button-w")})});
