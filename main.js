(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},e=document.querySelector(".profile__overlay"),r=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),o=document.querySelector(".edit-popup").querySelector(".edit-popup__form"),i=o.querySelector(".popup__input_type_name"),u=o.querySelector(".popup__input_type_info"),a=document.querySelector(".add-popup").querySelector(".add-popup__form"),c=document.querySelector(".avatar-popup").querySelector(".avatar-popup__form");function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function f(t,e,r){return(e=p(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var y=function(){function t(e,r,n,o,i,u,a){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_isOwner",(function(){return c._cardData.owner._id===c._userId})),f(this,"_showDelButton",(function(){c._isOwner()?c._delCardElem.classList.add("cards__button-del_active"):c._delCardElem.classList.remove("cards__button-del_active")})),f(this,"_isLikedByMe",(function(){return c._cardData.likes.some((function(t){return t._id===c._userId}))})),f(this,"_toggleLike",(function(){c._isLikedByMe()?c._unlikeCard(c._cardData._id).then((function(t){c._likeButtonCardElem.classList.remove("cards__button_active"),c._cardData=t,c._likeDisplayElem.textContent=t.likes.length})).catch((function(t){console.log(t)})):c._likeCard(c._cardData._id).then((function(t){c._likeButtonCardElem.classList.add("cards__button_active"),c._cardData=t,c._likeDisplayElem.textContent=t.likes.length})).catch((function(t){console.log(t)}))})),this._cardData=e,this._handleCardClick=n,this._onDelete=o,this._userId=i,this._likeCard=u,this._unlikeCard=a,this._cardElem=document.querySelector(r).content.querySelector(".cards__card").cloneNode(!0),this._imgCardElem=this._cardElem.querySelector(".cards__thumbnail"),this._titleCardElem=this._cardElem.querySelector(".cards__title"),this._likeButtonCardElem=this._cardElem.querySelector(".cards__button"),this._delCardElem=this._cardElem.querySelector(".cards__button-del"),this._likeDisplayElem=this._cardElem.querySelector(".cards__display")}var e,r;return e=t,(r=[{key:"getCard",value:function(){return this._createCard(),this._cardElem}},{key:"_showLikes",value:function(){this._isLikedByMe()&&this._likeButtonCardElem.classList.add("cards__button_active"),this._likeDisplayElem.textContent=this._cardData.likes.length}},{key:"_createCard",value:function(){this._imgCardElem.src=this._cardData.link,this._imgCardElem.alt=this._cardData.name,this._titleCardElem.textContent=this._cardData.name,this._showLikes(),this._showDelButton(),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButtonCardElem.addEventListener("click",this._toggleLike),this._delCardElem.addEventListener("click",(function(){t._onDelete(t._cardData._id,t._cardElem)})),this._imgCardElem.addEventListener("click",(function(){t._handleCardClick(t._cardData.name,t._cardData.link)}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_(n.key),n)}}function m(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t,e,r){return(e=_(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var v=m((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"enableValidation",(function(){n._setEventListeners()})),h(this,"resetValidation",(function(){n._toggleButtonState(),n._inputList.forEach((function(t){n._hideInputError(t)}))})),h(this,"_setEventListeners",(function(){n._toggleButtonState(),n._inputList.forEach((function(t){t.addEventListener("input",(function(){n._isValid(t),n._toggleButtonState()}))}))})),h(this,"_isValid",(function(t){t.validity.valid?n._hideInputError(t):n._showInputError(t,t.validationMessage)})),h(this,"_showInputError",(function(t,e){var r=n._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(n._inputErrorClass),r.textContent=e,r.classList.add(n._errorClass)})),h(this,"_hideInputError",(function(t){var e=n._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(n._inputErrorClass),e.classList.remove(n._errorClass),e.textContent=""})),h(this,"_hasInvalidInput",(function(){return n._inputList.some((function(t){return!t.validity.valid}))})),h(this,"_toggleButtonState",(function(){n._hasInvalidInput()?n._disableButton():n._enableButton()})),h(this,"_disableButton",(function(){n._buttonElement.classList.add(n._inactiveButtonClass),n._buttonElement.setAttribute("disabled",!0)})),h(this,"_enableButton",(function(){n._buttonElement.classList.remove(n._inactiveButtonClass),n._buttonElement.removeAttribute("disabled")})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=r,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}));function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,w(n.key),n)}}function g(t,e,r){return(e=w(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}var O=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"_handleEscClose",(function(t){"Escape"===t.key&&r.close()})),g(this,"_handleOverlayClose",(function(t){t.target===t.currentTarget&&r.close()})),g(this,"_handleXClose",(function(){r.close()})),this._popupElem=document.querySelector(e),this._closeButtonElem=this._popupElem.querySelector(".popup__close")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popupElem.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElem.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._closeButtonElem.addEventListener("click",this._handleXClose),this._popupElem.addEventListener("click",this._handleOverlayClose)}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},k.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleFormSubmit=e,r._formElem=r._popupElem.querySelector(".popup__form"),r._buttonElem=r._popupElem.querySelector(".popup__button"),r._inputs=Array.from(r._formElem.querySelectorAll(".popup__input")),r._buttonElemValue=r._buttonElem.textContent,r}return e=u,(r=[{key:"close",value:function(){k(L(u.prototype),"close",this).call(this),this._formElem.reset()}},{key:"_loading",value:function(){this._buttonElem.textContent="Сохранение..."}},{key:"setEventListeners",value:function(){var t=this;k(L(u.prototype),"setEventListeners",this).call(this),this._formElem.addEventListener("submit",(function(e){e.preventDefault();var r=t._getInputValues();t._loading(),t._handleFormSubmit(r).then((function(){t.close()})).catch((function(t){console.log(t)})).finally((function(){t._buttonElem.textContent=t._buttonElemValue}))}))}},{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(O);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},T.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(n);if(o){var r=I(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(r=[{key:"open",value:function(t){T(I(u.prototype),"open",this).call(this),this._handleFormSubmit=t}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(D);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},N.apply(this,arguments)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}function F(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(r);if(n){var o=M(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}(this,t)});function i(t){var e,r,n,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=V(r=o.call(this,t)),a=function(t,n){r._pictureElem.src=n,r._pictureElem.alt=t,r._pictureDescriptionElem.textContent=t,N((e=V(r),M(i.prototype)),"open",e).call(e)},(u=F(u="open"))in n?Object.defineProperty(n,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[u]=a,r._pictureElem=r._popupElem.querySelector(".image-popup__image"),r._pictureDescriptionElem=r._popupElem.querySelector(".image-popup__descr"),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(O);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function X(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,G(n.key),n)}}function z(t,e,r){return e&&X(t.prototype,e),r&&X(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function $(t,e,r){return(e=G(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function G(t){var e=function(t,e){if("object"!==H(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===H(e)?e:String(e)}var K=z((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),$(this,"renderItems",(function(t){t.forEach((function(t){var e=n._renderer(t);n._containerElem.append(e)}))})),$(this,"addItem",(function(t){n._containerElem.prepend(t)})),this._containerElem=document.querySelector(r),this._renderer=e.renderer}));function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Z(n.key),n)}}function Y(t,e,r){return(e=Z(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Z(t){var e=function(t,e){if("object"!==Q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===Q(e)?e:String(e)}var tt=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Y(this,"setAvatar",(function(t){r._profileAvatarElem.src=t.avatar})),Y(this,"setUserInfo",(function(t){r.userData=t,r._profileTitleElem.textContent=t.name,r._profileSubtitleElem.textContent=t.about,r.setAvatar(t)})),this._profileTitleElem=document.querySelector(e.name),this._profileSubtitleElem=document.querySelector(e.about),this._profileAvatarElem=document.querySelector(e.avatar),this.userData={}}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this.userData}}])&&W(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function et(t){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function rt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,it(n.key),n)}}function nt(t,e,r){return e&&rt(t.prototype,e),r&&rt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function ot(t,e,r){return(e=it(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function it(t){var e=function(t,e){if("object"!==et(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==et(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===et(e)?e:String(e)}var ut=new(nt((function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),ot(this,"_checkResponse",(function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})),ot(this,"getCards",(function(){return fetch("".concat(r._baseUrl,"/cards"),{headers:r._headers}).then(r._checkResponse)})),ot(this,"addNewCard",(function(t){var e=t.name,n=t.link;return fetch("".concat(r._baseUrl,"/cards"),{method:"POST",headers:r._headers,body:JSON.stringify({name:e,link:n})}).then(r._checkResponse)})),ot(this,"deleteCard",(function(t){return fetch("".concat(r._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:r._headers}).then(r._checkResponse)})),ot(this,"patchUserInfo",(function(t){var e=t.name,n=t.about;return fetch("".concat(r._baseUrl,"/users/me"),{method:"PATCH",headers:r._headers,body:JSON.stringify({name:e,about:n})}).then(r._checkResponse)})),ot(this,"getUserInfo",(function(){return fetch("".concat(r._baseUrl,"/users/me"),{headers:r._headers}).then(r._checkResponse)})),ot(this,"likeCard",(function(t){return fetch("".concat(r._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:r._headers}).then(r._checkResponse)})),ot(this,"unlikeCard",(function(t){return fetch("".concat(r._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:r._headers}).then(r._checkResponse)})),ot(this,"uploadAvatar",(function(t){return fetch("".concat(r._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r._headers,body:JSON.stringify({avatar:t})}).then(r._checkResponse)})),this._baseUrl=e.baseUrl,this._headers=e.headers})))({baseUrl:"https://nomoreparties.co/v1/cohort-66",headers:{authorization:"daca49b5-68d6-4b10-a310-ee0cfcd15750","Content-Type":"application/json"}});function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var ct=function(t){return ut.likeCard(t)},lt=function(t){return ut.unlikeCard(t)},st=function(t){var e=ft.userData._id;return new y(t,".template-card",ht.open,St,e,ct,lt).getCard()},ft=new tt({name:".profile__title",about:".profile__subtitle",avatar:".profile__avatar"}),pt=new K({renderer:st},".cards"),yt=new v(t,a),dt=new v(t,c),bt=new v(t,o),mt=new U(".delete-popup"),ht=new J(".image-popup"),_t=new D(".add-popup",(function(t){return ut.addNewCard(t).then((function(t){var e=st(t);pt.addItem(e)})).catch((function(t){console.log(t)}))})),vt=new D(".avatar-popup",(function(t){return ut.uploadAvatar(t.link).then((function(t){ft.setAvatar(t)})).catch((function(t){console.log(t)}))})),Et=new D(".edit-popup",(function(t){return ut.patchUserInfo(t).then((function(t){ft.setUserInfo(t)})).catch((function(t){console.log(t)}))}));function St(t,e){mt.open((function(){return ut.deleteCard(t).then((function(){e.remove(),e=null})).catch((function(t){console.log(t)}))}))}Promise.all([ut.getUserInfo(),ut.getCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return at(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?at(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ft.setUserInfo(o),pt.renderItems(i)})).catch((function(t){console.log(t)})),dt.enableValidation(),yt.enableValidation(),bt.enableValidation(),e.addEventListener("click",(function(){vt.open(),yt.resetValidation()})),n.addEventListener("click",(function(){_t.open(),yt.resetValidation()})),r.addEventListener("click",(function(){var t=ft.getUserInfo();Et.open(),function(t){i.value=t.name,u.value=t.about}(t),bt.resetValidation()})),ht.setEventListeners(),mt.setEventListeners(),vt.setEventListeners(),_t.setEventListeners(),Et.setEventListeners()})();