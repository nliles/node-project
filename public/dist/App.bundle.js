/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function autocomplete(input, latInput, lngInput) {
	if(!input) return;

	const dropdown = new google.maps.places.Autocomplete(input);

	dropdown.addListener('place_changed', () => {
		const place = dropdown.getPlace();
		latInput.value = place.geometry.location.lat();
		lngInput.value = place.geometry.location.lng();
	});

	input.on('keydown', (e) => {
		if(e.keyCode === 13) e.preventDefault();
	})
}

/* harmony default export */ __webpack_exports__["a"] = autocomplete;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $; });
/* unused harmony export $$ */
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach((elem) => {
    elem.on(name, fn);
  });
};




/***/ }),
/* 2 */
/***/ (function(module, exports) {

$('.cool > li').mouseenter(
	function() {
		$('.dropdownBackground').addClass('open');
		$(this).addClass('trigger-enter');
		setTimeout(() => {
			$(this).addClass('trigger-enter-active');	
		}, 150)

	  const dropdownCoords = $(this).find('.dropdown').offset();

	$('.dropdownBackground').css("width", `${dropdownCoords.width}px`);
	$('.dropdownBackground').css("height", `${dropdownCoords.height}px`);
	$('.dropdownBackground').css("transform", `translate(${dropdownCoords.left}px, ${dropdownCoords.top}px)`);
})

$('.cool > li').mouseleave(
	function() {
		$('.dropdownBackground').removeClass('open');
		$(this).removeClass('trigger-enter', 'trigger-enter-active');	
})








/***/ }),
/* 3 */
/***/ (function(module, exports) {

$(function() {

    $('#dialog').dialog({
            autoOpen: false,
            width: 600,
            height: 400,
            modal: true,
            resizable: false,
            draggable: false
    })
	$('.login').click(function(e) {
		   $('#dialog').dialog('open'); 
		   // $('html').css('overflow', 'hidden');
           // $('body').bind('touchmove', function(e) {
           //      e.preventDefault()
           //  });
	});
	$('#dialog').dialog({
   		close: function( event, ui ) {
            $('html').css('overflow', 'scroll');
            // $('body').unbind('touchmove');			
   		}
	});
});  



/***/ }),
/* 4 */
/***/ (function(module, exports) {

$(function() {

    $('#dialog2').dialog({
            autoOpen: false,
            width: 550,
            height: 350,
            modal: true,
            resizable: false,
            draggable: false
    })
	$('.signup').click(function(e) {
		   $('#dialog2').dialog('open'); 
		   // $('html').css('overflow', 'hidden');
           // $('body').bind('touchmove', function(e) {
           //      e.preventDefault()
           //  });
	});
	$('#dialog2').dialog({
   		close: function( event, ui ) {
            $('html').css('overflow', 'scroll');
            // $('body').unbind('touchmove');			
   		}
	});
});  



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_dropDown__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_dropDown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modules_dropDown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_bling__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_autocomplete__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_loginModal__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_loginModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__modules_loginModal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_registerModal__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_registerModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__modules_registerModal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_imageSlider__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_imageSlider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__modules_imageSlider__);
// import '../sass/style.scss';









__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modules_autocomplete__["a" /* default */])( __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_bling__["a" /* $ */])('#address'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_bling__["a" /* $ */])('#lat'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_bling__["a" /* $ */])('#lng') );



/***/ }),
/* 6 */
/***/ (function(module, exports) {

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) {slideIndex = 1} 
//     if (n < 1) {slideIndex = x.length} ;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none"; 
//     }
//     x[slideIndex-1].style.display = "block"; 
// }



/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map