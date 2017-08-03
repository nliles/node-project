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

var _autocomplete = __webpack_require__(2);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _loginModal = __webpack_require__(3);

var _loginModal2 = _interopRequireDefault(_loginModal);

var _registerModal = __webpack_require__(4);

var _registerModal2 = _interopRequireDefault(_registerModal);

var _imageSlider = __webpack_require__(5);

var _imageSlider2 = _interopRequireDefault(_imageSlider);

var _dropDown = __webpack_require__(6);

var _dropDown2 = _interopRequireDefault(_dropDown);

var _displayMap = __webpack_require__(7);

var _displayMap2 = _interopRequireDefault(_displayMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _autocomplete2.default)($('.address')[0], $('.lat')[0], $('.lng')[0]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _autocomplete = __webpack_require__(2);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dynamicForm(max, containerClass, buttonClass, html) {
    var wrapper = $(containerClass);
    var addButton = $(buttonClass);

    var x = 1;

    $(addButton).click(function (e) {
        e.preventDefault();
        if (x < max) {
            x++;
            $(wrapper).prepend(html + '<a href="#" class="delete">Delete</a></div>');
            (0, _autocomplete2.default)($('.address2')[0], $('.lat2')[0], $('.lng2')[0]);
        } else {
            alert('The maximum you can add is ' + max + '.');
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

var html1 = '<div><label for="address">Address</label><input type="text" class="address2" name="locations[address]"/><label for="lng">Address lng</label><input type="text" class="lng2" name="locations[coordinates][0]" required/><label for="lat">Address Lat</label><input type="text" class="lat2" name="locations[coordinates][1]" required />';
dynamicForm(10, ".container1", ".addLocationField", html1);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function autocomplete(input, latInput, lngInput) {
	if (!input) return;
	var dropdown = new google.maps.places.Autocomplete(input);

	dropdown.addListener('place_changed', function () {
		var place = dropdown.getPlace();
		latInput.value = place.geometry.location.lat();
		lngInput.value = place.geometry.location.lng();
	});

	input.addEventListener('keydown', function (e) {
		if (e.keyCode === 13) e.preventDefault();
	});
}

exports.default = autocomplete;

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('.display-left').on('click', function () {
  buttonClick(-1);
});

$('.display-right').on('click', function () {
  buttonClick(+1);
});

function buttonClick(n) {
  showImage(sliderCount += n);
}

function showImage(n) {
  var i;
  var images = document.getElementsByClassName("mySlides");
  if (n > images.length) {
    sliderCount = 1;
  };
  if (n < 1) {
    sliderCount = images.length;
  };
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[sliderCount - 1].style.display = "block";
}

var sliderCount = 1;

var images = document.getElementsByClassName("mySlides");
images.length > 0 ? showImage(sliderCount) : "";

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initMap() {
    // Styles a map in night mode.
    var location = { lat: 40.674, lng: -73.945 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 12,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    marker.setMap(map);
}

window.onload = initMap;

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map