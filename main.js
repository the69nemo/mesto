(()=>{"use strict";var e=document.querySelector(".profile__btn"),t=document.querySelector(".popup_cards"),n=document.querySelector(".profile__button-add"),r=document.querySelector(".popup_image"),o=(r.querySelector(".popup__picture"),r.querySelector(".popup__figcaption"),document.querySelectorAll(".popup"),t.querySelector(".popup__save-button"),document.querySelector(".profileContent")),i=document.querySelector(".addCardsContent"),u=document.querySelector(".popup__form-name"),a=document.querySelector(".popup__form-job"),c=(document.querySelector(".popup__form-card-name"),document.querySelector(".popup__form-card-url"),document.querySelector(".profile__name")),l=document.querySelector(".profile__subtitle"),s=(document.querySelector(".element-template").content,{inputSelector:".popup__form-input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"});function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=p((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_showError",(function(e,t){var n=r._form.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(r._errorClass),e.classList.add(r._inputErrorClass)})),_(this,"_hideError",(function(e){var t=r._form.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(r._errorClass),e.classList.remove(r._inputErrorClass)})),_(this,"_hasInvalidInput",(function(){return r._inputs.some((function(e){return!e.validity.valid}))})),_(this,"_checkInputValid",(function(e){e.validity.valid?r._hideError(e):r._showError(e,e.validationMessage)})),_(this,"_setInputListeners",(function(){r._toggleButtonError(),r._inputs.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValid(e),r._toggleButtonError()}))}))})),_(this,"_toggleButtonError",(function(){r._hasInvalidInput()?(r._button.classList.add(r._inactiveButtonClass),r._button.setAttribute("disabled","")):(r._button.classList.remove(r._inactiveButtonClass),r._button.removeAttribute("disabled"))})),_(this,"enableValidation",(function(){r._form.addEventListener("submit",(function(e){e.preventDefault()})),r._setInputListeners()})),_(this,"resetValidation",(function(){r._toggleButtonError(),r._inputs.forEach((function(e){return r._hideError(e)}))})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this._button=this._form.querySelector(this._submitButtonSelector)}));function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n=t.object,r=t.selector,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._selector=r,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._selector).content.cloneNode(!0);return this._trash=e.querySelector(".element__trash-box-button"),this._like=e.querySelector(".element__button"),this._image=e.querySelector(".element__image"),this._title=e.querySelector(".element__title"),e}},{key:"_addListeners",value:function(){var e=this;this._trash.addEventListener("click",(function(e){e.target.closest(".element").remove()})),this._like.addEventListener("click",(function(e){e.target.classList.toggle("element__button_active")})),this._image.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._addListeners(),this._title.textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._element}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItem",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,"_handleEscClose",(function(e){"Escape"==e.key&&n.close()})),w(this,"_handleButtonClose",(function(e){e.target.classList.contains("popup__opened")&&n.close(),e.target.classList.contains("popup__close-button")&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup__opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup__opened"),this.removeEventListeners()}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._handleButtonClose)}},{key:"removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("click",this._handleButtonClose)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function x(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._name=t._popup.querySelector(".popup__figcaption"),t._image=t._popup.querySelector(".popup__picture"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._image.src=t,this._image.alt=n,this._name.textContent=n,j(O(u.prototype),"open",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function V(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e,t){var n,r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(e){e.preventDefault(),n._submit(n._getInputValues()),n.close()},(o="_handleSubmit")in(r=D(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._submit=t,n._form=n._popup.querySelector(".popup__content"),n._formInputs=n._form.querySelectorAll(".popup__form-input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._allFormValues={},this._formInputs.forEach((function(t){e._allFormValues[t.name]=t.value})),this._allFormValues}},{key:"setEventListeners",value:function(){B(H(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}},{key:"removeEventListeners",value:function(){B(H(u.prototype),"removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._handleSubmit)}},{key:"close",value:function(){this._form.reset(),B(H(u.prototype),"close",this).call(this)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){var n=t.userName,r=t.userJob;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._job=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._name.textContent=t,this._job.textContent=n}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),G=new h(s,i),W=new h(s,o);G.enableValidation(),W.enableValidation();var Y=new A({userName:c,userJob:l}),U=new R(".popup_cards",(function(e){var t=e.nameCard,n=e.cardUrl,r=J({name:t,link:n});z.addItem(r)})),F=new q(".popup_image"),N=new R(".popup_profile",(function(e){return Y.setUserInfo(e)})),J=function(e){return new m({object:e,selector:".element-template",handleCardClick:function(){return F.open(e)}}).generateCard()},z=new b({items:[{name:"Звездное небо",link:"https://images.unsplash.com/photo-1638091990389-7f4d9bbe8d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"},{name:"Горное озеро",link:"https://images.unsplash.com/photo-1576521403898-3a103a0f1e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"},{name:"Песчаные дюны",link:"https://images.unsplash.com/photo-1638024510305-c36fcc0bf3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1645&q=80"},{name:"Серпантин",link:"https://images.unsplash.com/photo-1637954975855-bef3ec525549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Зимняя дорога",link:"https://images.unsplash.com/photo-1637983927552-812e9871191e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Пик в облаках",link:"https://images.unsplash.com/photo-1637919177060-16ccc91fce1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}].reverse(),renderer:J},".elements");z.renderItem(),n.addEventListener("click",(function(){G.resetValidation(),U.open()})),e.addEventListener("click",(function(){var e=Y.getUserInfo();u.value=e.name,a.value=e.job,W.resetValidation(),N.open()}))})();