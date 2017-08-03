/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dynamicForm = __webpack_require__(1);

var _dynamicForm2 = _interopRequireDefault(_dynamicForm);

var _bling = __webpack_require__(2);

var _autocomplete = __webpack_require__(3);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _loginModal = __webpack_require__(4);

var _loginModal2 = _interopRequireDefault(_loginModal);

var _registerModal = __webpack_require__(5);

var _registerModal2 = _interopRequireDefault(_registerModal);

var _imageSlider = __webpack_require__(6);

var _imageSlider2 = _interopRequireDefault(_imageSlider);

var _dropDown = __webpack_require__(7);

var _dropDown2 = _interopRequireDefault(_dropDown);

var _displayMap = __webpack_require__(8);

var _displayMap2 = _interopRequireDefault(_displayMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _autocomplete2.default)((0, _bling.$)('.address'), (0, _bling.$)('.lat'), (0, _bling.$)('.lng'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dynamicForm(max, containerClass, buttonClass, html) {
    var wrapper = $(containerClass);
    var addButton = $(buttonClass);

    var x = 1;

    $(addButton).click(function (e) {
        e.preventDefault();
        if (x < max) {
            x++;
            $(wrapper).prepend(html + '<a href="#" class="delete">Delete</a></div>');
        } else {
            alert("The maximum you can add is " + max + ".");
        }
    });

    $(wrapper).on("click", ".delete", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });
}

var html = '<div><input type="file" name="photo" accept="image/gif, image/png, image/jpeg" multiple/>';
dynamicForm(5, ".container2", ".addPhotoField", html);

var html1 = '<div><label for="address">Address</label><input type="text" class="address" name="locations[address]"/><label for="lng">Address lng</label><input type="text" class="lng" name="locations[coordinates][0]" required/><label for="lat">Address Lat</label><input type="text" class="lat" name="locations[coordinates][1]" required />';
dynamicForm(10, ".container1", ".addLocationField", html1);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function autocomplete(input, latInput, lngInput) {
	if (!input) return;

	var dropdown = new google.maps.places.Autocomplete(input);

	$(dropdown).on('place_changed', function () {
		var place = dropdown.getPlace();
		latInput.value = place.geometry.location.lat();
		lngInput.value = place.geometry.location.lng();
	});

	input.on('keydown', function (e) {
		if (e.keyCode === 13) e.preventDefault();
	});
}

exports.default = autocomplete;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('#dialog').dialog({
         autoOpen: false,
         width: 600,
         height: 400,
         modal: true,
         resizable: false,
         draggable: false
});
$('.login').click(function (e) {
         $('#dialog').dialog('open');
         // $('html').css('overflow', 'hidden');
         // $('body').bind('touchmove', function(e) {
         //      e.preventDefault()
         //  });
});
$('#dialog').dialog({
         close: function close(event, ui) {
                  $('html').css('overflow', 'scroll');
                  // $('body').unbind('touchmove');			
         }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('#dialog2').dialog({
         autoOpen: false,
         width: 550,
         height: 350,
         modal: true,
         resizable: false,
         draggable: false
});
$('.signup').click(function (e) {
         $('#dialog2').dialog('open');
         // $('html').css('overflow', 'hidden');
         // $('body').bind('touchmove', function(e) {
         //      e.preventDefault()
         //  });
});
$('#dialog2').dialog({
         close: function close(event, ui) {
                  $('html').css('overflow', 'scroll');
                  // $('body').unbind('touchmove');			
         }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// var sliderCount = 1;
// showImage(sliderCount);

// function buttonClick(n) {
//     showImage(sliderCount += n);
// }

// function showImage(n) {
//     var i;
//     var images = document.getElementsByClassName("mySlides");
//     if (n > images.length) {sliderCount = 1} 
//     if (n < 1) {sliderCount = images.length} ;
//     for (i = 0; i < images.length; i++) {
//         images[i].style.display = "none"; 
//     }
//     images[sliderCount-1].style.display = "block"; 
// }


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('.cool > li').mouseenter(function () {
	var _this = this;

	$('.dropdownBackground').addClass('open');
	$(this).addClass('trigger-enter');
	setTimeout(function () {
		$(_this).addClass('trigger-enter-active');
	}, 150);

	var dropdownCoords = $(this).find('.dropdown').offset();

	$('.dropdownBackground').css("width", dropdownCoords.width + 'px');
	$('.dropdownBackground').css("height", dropdownCoords.height + 'px');
	$('.dropdownBackground').css("transform", 'translate(' + dropdownCoords.left + 'px, ' + dropdownCoords.top + 'px)');
});

$('.cool > li').mouseleave(function () {
	$('.dropdownBackground').removeClass('open');
	$(this).removeClass('trigger-enter', 'trigger-enter-active');
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map