module.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),d=r(p),h=n(2),b=r(h),v=n(3),g=r(v),y=n(4),m=n(5),x=r(m),I=function(e){function t(e){u(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedIndex:0,tan:"",previousTan:"",isActive:!1,isValidTan:!1},n.props.autoFocus&&setTimeout(function(){return n.input.focus()},0),n}return s(t,e),f(t,[{key:"getPlaceholder",value:function(){return""===this.props.placeholder.trim()?" ":this.props.placeholder}},{key:"setSelection",value:function(e){e>this.props.length-1?e=this.props.length-1:e<0&&(e=0),this.input.setSelectionRange(e,e+1),this.setState({selectedIndex:e})}},{key:"moveSelectionBy",value:function(e){this.setSelection(this.state.selectedIndex+e)}},{key:"handleChange",value:function(e,t){var n=this.state.tan;if(!(RegExp("^["+this.props.validChars+this.getPlaceholder()+"]{0,"+this.props.length+"}$").test(e)||-1!==e.indexOf(" ")&&RegExp("^$["+this.props.validChars+"]{"+this.props.length+"}$").test(e.replace(/ /g,""))))return this.input.value=n,void this.moveSelectionBy(0);e=e.replace(/ /g,""),this.input.value=e,this.setSelection(t),this.setState({tan:e,previousTan:n,isValidTan:RegExp("^["+this.props.validChars+"]{"+this.props.length+"}$").test(e)}),this.props.input&&this.props.input.onChange&&this.props.input.onChange(e)}},{key:"handleKeyUp",value:function(e){var t=e.keyCode;if(t===y.KEY_CODE.ARROW_LEFT)return void this.moveSelectionBy(-1);if(t===y.KEY_CODE.ARROW_RIGHT)return this.state.selectedIndex>=this.state.tan.length?void this.moveSelectionBy(0):void this.moveSelectionBy(1);var n=this.input.selectionStart,r=this.input.value;if(r===this.state.tan){if(n===this.state.selectedIndex&&n+1===this.input.selectionEnd)return;return void this.setSelection(n)}if(t===y.KEY_CODE.BACKSPACE)return(n=this.state.selectedIndex)<this.state.tan.length-1?(this.state.tan[n]===this.getPlaceholder()&&(n=n>0?n-1:n),r=""+this.state.tan.substring(0,n)+this.getPlaceholder()+this.state.tan.substring(n+1),void this.handleChange(r,n)):(r=this.state.tan.substr(0,this.state.tan.length-1),void this.handleChange(r,r.length));if(t===y.KEY_CODE.DELETE){if((n=this.state.selectedIndex)>this.state.tan.length-1)return;return n===this.state.tan.length-1?void this.handleChange(this.state.tan.substr(0,this.state.tan.length-1),this.state.selectedIndex):(this.state.tan[n]===this.getPlaceholder()&&(n=n<this.props.length?n+1:n),r=this.state.tan.substring(0,n)+(this.state.tan.substring(n+1)?""+this.getPlaceholder()+this.state.tan.substring(n+1):""),void this.handleChange(r,n))}this.handleChange(r,n)}},{key:"handleClick",value:function(e){var t=parseInt(e.target.id.replace("field-",""));t>this.input.value.length&&(t=this.input.value.length),this.setState({selectedIndex:t}),this.input.focus(),this.input.setSelectionRange(t,t+1)}},{key:"handlePaste",value:function(){this.input.focus(),this.input.value=""}},{key:"render",value:function(){var e=this,t=this.props,n=t.length,r=t.removeDefaultStyles,u=t.debug,l=t.container,s=t.inputField,f=t.characters,p=t.character,h=t.input,v=t.meta,g=l.className,y=o(l,["className"]),m=s.className,I=o(s,["className"]),C=f.className,E=o(f,["className"]),Q=p.className,B=p.classNameInactive,G=p.classNameSelected,W=o(p,["className","classNameInactive","classNameSelected"]);return d.default.createElement("div",c({className:(0,b.default)("verification-input__container",g)},y),d.default.createElement("input",c({ref:function(t){return e.input=t},className:(0,b.default)("verification-input",m,{"verification-input--debug":u}),onKeyUp:this.handleKeyUp.bind(this),onFocus:function(){e.setState({isActive:!0}),h&&h.onFocus&&h.onFocus()},onBlur:function(){e.setState({isActive:!1}),h&&h.onBlur&&h.onBlur()},onPaste:this.handlePaste.bind(this)},I)),d.default.createElement("div",c({className:(0,b.default)("verification-input__characters",C),onClick:function(){return e.input.focus()}},E),[].concat(a(Array(n))).map(function(t,n){var a;return d.default.createElement("div",c({className:(0,b.default)("verification-input__character",Q,(a={"verification-input__character--default":!r,"verification-input__character--selected":!r&&e.state.selectedIndex===n&&e.state.isActive},i(a,G,e.state.selectedIndex===n&&e.state.isActive),i(a,"verification-input__character--inactive",!r&&e.state.tan.length<n),i(a,B,e.state.tan.length<n),a)),onClick:e.handleClick.bind(e),id:"field-"+n,key:n,onPaste:e.handlePaste.bind(e)},W),e.state.tan[n]||e.getPlaceholder())})),v&&v.touched&&v.error&&d.default.createElement("div",{className:"verification-input__error"},v.error),d.default.createElement("style",{dangerouslySetInnerHTML:{__html:x.default}}))}}]),t}(p.PureComponent);I.propTypes={length:g.default.number,validChars:g.default.string,placeholder:g.default.string,autoFocus:g.default.bool,removeDefaultStyles:g.default.bool,debug:g.default.bool,container:g.default.shape({className:g.default.string}),inputField:g.default.shape({className:g.default.string}),characters:g.default.shape({className:g.default.string}),character:g.default.shape({className:g.default.string})},I.defaultProps={length:6,validChars:"A-Za-z0-9",placeholder:"·",autoFocus:!1,removeDefaultStyles:!1,debug:!1,container:{},inputField:{},characters:{},character:{}},t.default=I},function(e,t){e.exports=require("react")},function(e,t,n){var r,i;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var u in r)a.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(i=function(){return n}.apply(t,r))&&(e.exports=i))}()},function(e,t,n){var r,i,a;!function(n,o){i=[t],r=o,void 0!==(a="function"==typeof r?r.apply(t,i):r)&&(e.exports=a)}(0,function(e){"use strict";function t(e){var t=e&&(x&&e[x]||e[I]);if("function"==typeof t)return t}function n(e){function t(t,n,r,i,a,o){if(i=i||C,o=o||r,null==n[r]){var u=y[a];return t?new Error("Required "+u+" `"+o+"` was not specified in `"+i+"`."):null}return e(n,r,i,a,o)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function r(e){function t(t,n,r,i,a){var o=t[n];if(p(o)!==e){var u=y[i],l=d(o);return new Error("Invalid "+u+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `"+e+"`.")}return null}return n(t)}function i(e){function t(t,n,r,i,a){var o=t[n];if(!Array.isArray(o)){var u=y[i],l=p(o);return new Error("Invalid "+u+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<o.length;s++){var c=e(o,s,r,i,a+"["+s+"]");if(c instanceof Error)return c}return null}return n(t)}function a(e){function t(t,n,r,i,a){if(!(t[n]instanceof e)){var o=y[i],u=e.name||C,l=h(t[n]);return new Error("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null}return n(t)}function o(e){function t(t,n,r,i,a){for(var o=t[n],u=0;u<e.length;u++)if(o===e[u])return null;var l=y[i],s=JSON.stringify(e);return new Error("Invalid "+l+" `"+a+"` of value `"+o+"` supplied to `"+r+"`, expected one of "+s+".")}return n(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function u(e){function t(t,n,r,i,a){var o=t[n],u=p(o);if("object"!==u){var l=y[i];return new Error("Invalid "+l+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.")}for(var s in o)if(o.hasOwnProperty(s)){var c=e(o,s,r,i,a+"."+s);if(c instanceof Error)return c}return null}return n(t)}function l(e){function t(t,n,r,i,a){for(var o=0;o<e.length;o++){if(null==(0,e[o])(t,n,r,i,a))return null}var u=y[i];return new Error("Invalid "+u+" `"+a+"` supplied to `"+r+"`.")}return n(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function s(e){function t(t,n,r,i,a){var o=t[n],u=p(o);if("object"!==u){var l=y[i];return new Error("Invalid "+l+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.")}for(var s in e){var c=e[s];if(c){var f=c(o,s,r,i,a+"."+s);if(f)return f}}return null}return n(t)}function c(e){switch(void 0===e?"undefined":b(e)){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(c);if(null===e||g.isValidElement(e))return!0;var n=t(e);if(!n)return!1;var r,i=n.call(e);if(n!==e.entries){for(;!(r=i.next()).done;)if(!c(r.value))return!1}else for(;!(r=i.next()).done;){var a=r.value;if(a&&!c(a[1]))return!1}return!0;default:return!1}}function f(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function p(e){var t=void 0===e?"undefined":b(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":f(t,e)?"symbol":t}function d(e){var t=p(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function h(e){return e.constructor&&e.constructor.name?e.constructor.name:C}e.__esModule=!0;var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,g={};g.isValidElement=function(e){return"object"===(void 0===e?"undefined":b(e))&&null!==e&&e.$$typeof===v};var y={prop:"prop",context:"context",childContext:"child context"},m={thatReturns:function(e){return function(){return e}}},x="function"==typeof Symbol&&Symbol.iterator,I="@@iterator",C="<<anonymous>>",E={array:r("array"),bool:r("boolean"),func:r("function"),number:r("number"),object:r("object"),string:r("string"),symbol:r("symbol"),any:function(){return n(m.thatReturns(null))}(),arrayOf:i,element:function(){function e(e,t,n,r,i){if(!g.isValidElement(e[t])){var a=y[r];return new Error("Invalid "+a+" `"+i+"` supplied to `"+n+"`, expected a single ReactElement.")}return null}return n(e)}(),instanceOf:a,node:function(){function e(e,t,n,r,i){if(!c(e[t])){var a=y[r];return new Error("Invalid "+a+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")}return null}return n(e)}(),objectOf:u,oneOf:o,oneOfType:l,shape:s};e.default=E})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.KEY_CODE={BACKSPACE:8,ARROW_LEFT:37,ARROW_RIGHT:39,DELETE:46}},function(e,t){e.exports=".verification-input__container{position:relative;max-width:500px}.verification-input{height:100%;position:absolute;left:-2000px;opacity:0;transform:scale(0)}.verification-input--debug{left:0;bottom:-70px;opacity:1;transform:scale(1)}.verification-input__characters{display:flex;height:50px}.verification-input__character{font-size:36px;line-height:50px;text-align:center;background-color:white;height:100%;flex-grow:1;flex-basis:0}.verification-input__character--default{margin-left:8px;border:1px solid black;cursor:default;user-select:none;box-sizing:border-box}.verification-input__character--default:first-child{margin-left:0}@media (min-width: 768px){.verification-input__character--default{margin-left:16px}}.verification-input__character--inactive{color:dimgray;background-color:lightgray}.verification-input__character--selected{border-color:cornflowerblue;color:cornflowerblue}.verification-input__error{color:red;margin-top:8px}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXpraWFuZHJpYW50by9Xb3Jrcy9yZWFjdC12ZXJpZmljYXRpb24taW5wdXQvc3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLCtCQUNFLGtCQUNBLGVBQWdCLENBQ2pCLG9CQUdDLFlBQ0Esa0JBQ0EsYUFDQSxVQUNBLGtCQUFtQixDQUNwQiwyQkFHQyxPQUNBLGFBQ0EsVUFDQSxrQkFBbUIsQ0FDcEIsZ0NBR0MsYUFDQSxXQXhCaUIsQ0F5QmxCLCtCQUdDLGVBQ0EsaUJBQ0Esa0JBQ0EsdUJBQ0EsWUFDQSxZQUNBLFlBQWEsQ0FDZCx3Q0FHQyxnQkFDQSx1QkFDQSxlQUNBLGlCQUNBLHFCQUFzQixDQUx4QixvREFRSSxhQUFjLENBQ2YsMEJBVEgsd0NBWUksZ0JBQWlCLENBRXBCLENBRUQseUNBQ0UsY0FDQSwwQkFBMkIsQ0FDNUIseUNBR0MsNEJBQ0Esb0JBQXFCLENBQ3RCLDJCQUdDLFVBQ0EsY0FBZSxDQUNoQiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaW5wdXQtaGVpZ2h0OiA1MHB4O1xuXG4udmVyaWZpY2F0aW9uLWlucHV0X19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi52ZXJpZmljYXRpb24taW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIwMDBweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnZlcmlmaWNhdGlvbi1pbnB1dC0tZGVidWcge1xuICBsZWZ0OiAwO1xuICBib3R0b206IC03MHB4O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4udmVyaWZpY2F0aW9uLWlucHV0X19jaGFyYWN0ZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xufVxuXG4udmVyaWZpY2F0aW9uLWlucHV0X19jaGFyYWN0ZXIge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLnZlcmlmaWNhdGlvbi1pbnB1dF9fY2hhcmFjdGVyLS1kZWZhdWx0IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aCA6IDc2OHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIH1cbn1cblxuLnZlcmlmaWNhdGlvbi1pbnB1dF9fY2hhcmFjdGVyLS1pbmFjdGl2ZSB7XG4gIGNvbG9yOiBkaW1ncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi52ZXJpZmljYXRpb24taW5wdXRfX2NoYXJhY3Rlci0tc2VsZWN0ZWQge1xuICBib3JkZXItY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cbi52ZXJpZmljYXRpb24taW5wdXRfX2Vycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufSJdfQ== */"}]);