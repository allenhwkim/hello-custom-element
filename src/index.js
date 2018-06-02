// import './custom-element-polyfill.js';
// new CustomEvent not working on IE11.
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

import 'document-register-element';
import { HelloCustomElement } from './hello-custom-element/hello-custom-element.js';
import { HelloClock } from './hello-clock/hello-clock.js';

customElements.define('hello-clock', HelloClock);
customElements.define('hello-custom-element', HelloCustomElement);