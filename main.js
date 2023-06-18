(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},e=document.querySelector(".profile__overlay"),r=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),o=document.querySelector(".edit-popup").querySelector(".edit-popup__form"),i=o.querySelector(".popup__input_type_name"),u=o.querySelector(".popup__input_type_info"),a=document.querySelector(".add-popup").querySelector(".add-popup__form"),l=document.querySelector(".avatar-popup").querySelector(".avatar-popup__form");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function f(t,e,r){return(e=p(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var y=function(){function t(e,r,n,o,i,u,a,l){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_isOwner",(function(){return c._cardData.owner._id===c._userId})),f(this,"_showDelButton",(function(){c._isOwner()?c._delCardElem.classList.add("cards__button-del_active"):c._delCardElem.classList.remove("cards__button-del_active")})),f(this,"_isLikedByMe",(function(){return c._cardData.likes.some((function(t){return t._id===c._userId}))})),f(this,"_toggleLike",(function(){c._isLikedByMe()?c._unlikeCard(c._cardData._id).then((function(t){c._likeButtonCardElem.classList.remove("cards__button_active"),c._cardData=t,c._likeDisplayElem.textContent=t.likes.length})):c._likeCard(c._cardData._id).then((function(t){c._likeButtonCardElem.classList.add("cards__button_active"),c._cardData=t,c._likeDisplayElem.textContent=t.likes.length}))})),this._cardData=e,this._handleCardClick=n,this._openDeleteCardForm=o,this._userId=i,this._handleFormDeleteSubmit=u,this._likeCard=a,this._unlikeCard=l,this._cardElem=document.querySelector(r).content.querySelector(".cards__card").cloneNode(!0),this._imgCardElem=this._cardElem.querySelector(".cards__thumbnail"),this._titleCardElem=this._cardElem.querySelector(".cards__title"),this._likeButtonCardElem=this._cardElem.querySelector(".cards__button"),this._delCardElem=this._cardElem.querySelector(".cards__button-del"),this._likeDisplayElem=this._cardElem.querySelector(".cards__display")}var e,r;return e=t,(r=[{key:"getCard",value:function(){return this._createCard(),this._cardElem}},{key:"deleteCard",value:function(){var t=this;this._handleFormDeleteSubmit(this._cardData._id).then((function(){t._cardElem.remove(),t._cardElem=null}))}},{key:"_showLikes",value:function(){this._isLikedByMe()&&this._likeButtonCardElem.classList.add("cards__button_active"),this._likeDisplayElem.textContent=this._cardData.likes.length}},{key:"_createCard",value:function(){this._imgCardElem.src=this._cardData.link,this._imgCardElem.alt=this._cardData.name,this._titleCardElem.textContent=this._cardData.name,this._showLikes(),this._showDelButton(),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButtonCardElem.addEventListener("click",this._toggleLike),this._delCardElem.addEventListener("click",(function(){t._openDeleteCardForm(t._cardData._id,t._cardElem)})),this._imgCardElem.addEventListener("click",(function(){t._handleCardClick(t._cardData.name,t._cardData.link)}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function b(t,e,r){return e&&m(t.prototype,e),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _(t,e,r){return(e=h(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var v=b((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"enableValidation",(function(){n._setEventListeners()})),_(this,"resetValidation",(function(){n._toggleButtonState(),n._inputList.forEach((function(t){n._hideInputError(t)}))})),_(this,"_setEventListeners",(function(){n._toggleButtonState(),n._inputList.forEach((function(t){t.addEventListener("input",(function(){n._isValid(t),n._toggleButtonState()}))}))})),_(this,"_isValid",(function(t){t.validity.valid?n._hideInputError(t):n._showInputError(t,t.validationMessage)})),_(this,"_showInputError",(function(t,e){var r=n._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(n._inputErrorClass),r.textContent=e,r.classList.add(n._errorClass)})),_(this,"_hideInputError",(function(t){var e=n._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(n._inputErrorClass),e.classList.remove(n._errorClass),e.textContent=""})),_(this,"_hasInvalidInput",(function(){return n._inputList.some((function(t){return!t.validity.valid}))})),_(this,"_toggleButtonState",(function(){n._hasInvalidInput()?n._disableButton():n._enableButton()})),_(this,"_disableButton",(function(){n._buttonElement.classList.add(n._inactiveButtonClass),n._buttonElement.setAttribute("disabled",!0)})),_(this,"_enableButton",(function(){n._buttonElement.classList.remove(n._inactiveButtonClass),n._buttonElement.removeAttribute("disabled")})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=r,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}));function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,w(n.key),n)}}function g(t,e,r){return(e=w(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}var C=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"_handleEscClose",(function(t){"Escape"===t.key&&r.close()})),g(this,"_handleOverlayClose",(function(t){t.target===t.currentTarget&&r.close()})),g(this,"_handleXClose",(function(){r.close()})),this._popupElem=document.querySelector(e),this._closeButtonElem=this._popupElem.querySelector(".popup__close")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popupElem.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElem.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._closeButtonElem.addEventListener("click",this._handleXClose),this._popupElem.addEventListener("click",this._handleOverlayClose)}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},j.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleFormSubmit=e,r._formElem=r._popupElem.querySelector(".popup__form"),r._buttonElem=r._popupElem.querySelector(".popup__button"),r._inputs=Array.from(r._formElem.querySelectorAll(".popup__input")),r._buttonElemValue=r._buttonElem.textContent,r}return e=u,(r=[{key:"open",value:function(){j(L(u.prototype),"open",this).call(this)}},{key:"close",value:function(){j(L(u.prototype),"close",this).call(this),this._formElem.reset()}},{key:"_loading",value:function(){this._buttonElem.textContent="Сохранение..."}},{key:"setEventListeners",value:function(){var t=this;j(L(u.prototype),"setEventListeners",this).call(this),this._formElem.addEventListener("submit",(function(e){e.preventDefault();var r=t._getInputValues();t._loading(),t._handleFormSubmit(r).then((function(){t.close(),t._buttonElem.textContent=t._buttonElemValue}))}))}},{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},R.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(n);if(o){var r=I(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleFormDeleteSubmit=e,r._buttonElem=r._popupElem.querySelector(".popup__button"),r._buttonElemValue=r._buttonElem.textContent,r}return e=u,(r=[{key:"open",value:function(t,e){R(I(u.prototype),"open",this).call(this),this._setToButtonEventListener(t,e)}},{key:"_loading",value:function(){this._buttonElem.textContent="Удаление..."}},{key:"_setToButtonEventListener",value:function(t,e){var r=this;this._buttonElem.addEventListener("click",(function(n){n.preventDefault(),r._loading(),r._handleFormDeleteSubmit(t,e).then((function(){R(I(u.prototype),"close",r).call(r),r._buttonElem.textContent=r._buttonElemValue}))}))}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},F.apply(this,arguments)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}function M(t){var e=function(t,e){if("object"!==x(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===x(e)?e:String(e)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(n){var o=N(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}(this,t)});function i(t){var e,r,n,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=V(r=o.call(this,t)),a=function(t,n){r._pictureElem.src=n,r._pictureElem.alt=t,r._pictureDescriptionElem.textContent=t,F((e=V(r),N(i.prototype)),"open",e).call(e)},(u=M(u="open"))in n?Object.defineProperty(n,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[u]=a,r._pictureElem=r._popupElem.querySelector(".image-popup__image"),r._pictureDescriptionElem=r._popupElem.querySelector(".image-popup__descr"),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(C);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function X(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,$(n.key),n)}}function z(t,e,r){return(e=$(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $(t){var e=function(t,e){if("object"!==H(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===H(e)?e:String(e)}var G=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,"getUserID",(function(){return n.setUserInfo(),n._profileSubtitleElem.getAttribute("data-user-id")})),z(this,"setAvatar",(function(t){n._profileAvatarElem.src=t.avatar})),z(this,"setUserInfo",(function(t){n._profileTitleElem.textContent=t.name,n._profileSubtitleElem.textContent=t.about,n._profileSubtitleElem.setAttribute("data-user-id",t._id),n.setAvatar(t)})),this._profileTitleElem=document.querySelector(e.nameElem),this._profileSubtitleElem=document.querySelector(e.aboutElem),this._profileAvatarElem=document.querySelector(".profile__avatar")}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileTitleElem.textContent,about:this._profileSubtitleElem.textContent}}}])&&X(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Z(n.key),n)}}function W(t,e,r){return e&&Q(t.prototype,e),r&&Q(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Y(t,e,r){return(e=Z(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Z(t){var e=function(t,e){if("object"!==K(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===K(e)?e:String(e)}var tt=W((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Y(this,"renderer",(function(){})),Y(this,"addItem",(function(t){n._containerElem.append(t)})),this._containerElem=document.querySelector(r),this._items=e.items,this._renderer=e.renderer}));function et(t){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function rt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,it(n.key),n)}}function nt(t,e,r){return e&&rt(t.prototype,e),r&&rt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function ot(t,e,r){return(e=it(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function it(t){var e=function(t,e){if("object"!==et(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==et(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===et(e)?e:String(e)}var ut=new(nt((function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),ot(this,"_checkResponse",(function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})),ot(this,"getCards",(function(){return fetch("".concat(r._baseUrl,"/cards"),{headers:r._headers}).then(r._checkResponse)})),ot(this,"addNewCard",(function(t){var e=t.name,n=t.link;return fetch("".concat(r._baseUrl,"/cards"),{method:"POST",headers:r._headers,body:JSON.stringify({name:e,link:n})}).then(r._checkResponse)})),ot(this,"deleteCard",(function(t){return fetch("".concat(r._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:r._headers}).then(r._checkResponse)})),ot(this,"patchUserInfo",(function(t){var e=t.name,n=t.about;return fetch("".concat(r._baseUrl,"/users/me"),{method:"PATCH",headers:r._headers,body:JSON.stringify({name:e,about:n})}).then(r._checkResponse)})),ot(this,"getUserInfo",(function(){return fetch("".concat(r._baseUrl,"/users/me"),{headers:r._headers}).then(r._checkResponse)})),ot(this,"likeCard",(function(t){return fetch("".concat(r._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:r._headers}).then(r._checkResponse)})),ot(this,"unlikeCard",(function(t){return fetch("".concat(r._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:r._headers}).then(r._checkResponse)})),ot(this,"uploadAvatar",(function(t){return fetch("".concat(r._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r._headers,body:JSON.stringify({avatar:t})}).then(r._checkResponse)})),this._baseUrl=e.baseUrl,this._headers=e.headers})))({baseUrl:"https://nomoreparties.co/v1/cohort-66",headers:{authorization:"daca49b5-68d6-4b10-a310-ee0cfcd15750","Content-Type":"application/json"}});function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var lt=function(t){return ut.likeCard(t)},ct=function(t){return ut.unlikeCard(t)},st=function(t,e){return new y(t,".template-card",bt.open,St,e,gt,lt,ct).getCard()},ft=new G({nameElem:".profile__title",aboutElem:".profile__subtitle"}),pt=new tt({renderer:st},".cards"),yt=new v(t,a),dt=new v(t,l),mt=new v(t,o),bt=new J(".image-popup"),_t=new U(".delete-popup",gt),ht=new D(".add-popup",(function(t){return ut.addNewCard(t).then((function(t){t.owner._id=ft.getUserID;var e=st(t,t.owner._id);pt.addItem(e)}))})),vt=new D(".avatar-popup",(function(t){return ut.uploadAvatar(t.link).then((function(t){ft.setAvatar(t)}))})),Et=new D(".edit-popup",(function(t){return ut.patchUserInfo(t).then((function(t){ft.setUserInfo(t)}))}));function St(t,e){_t.open(t,e)}function gt(t,e){return ut.deleteCard(t).then((function(){e.remove(),e=null}))}Promise.all([ut.getUserInfo(),ut.getCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return at(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?at(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ft.setUserInfo(o),i.forEach((function(t){var e=st(t,o._id);pt.addItem(e)}))})).catch((function(t){console.log(t)})),dt.enableValidation(),yt.enableValidation(),mt.enableValidation(),e.addEventListener("click",(function(){vt.open(),yt.resetValidation()})),n.addEventListener("click",(function(){ht.open(),yt.resetValidation()})),r.addEventListener("click",(function(){var t=ft.getUserInfo();Et.open(),function(t){i.value=t.name,u.value=t.about}(t),mt.resetValidation()})),bt.setEventListeners(),_t.setEventListeners(),vt.setEventListeners(),ht.setEventListeners(),Et.setEventListeners()})();