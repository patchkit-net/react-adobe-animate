module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n(1)),s=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}var l=void 0,c=void 0,f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.dimensions={isResp:!1,respDim:"both",isScale:!1,scaleType:1,lastW:1,lastH:1,lastS:1},e.onAnimationReady=function(){window.addEventListener("resize",e.resizeCanvas),e.resizeCanvas(),e.startAnimation()},e.getComposition=function(t){var n=e.props.composition;if(null!==n)return n;var r=Object.keys(l.compositions).filter(function(e){var n=l.compositions[e].getLibrary();return Object.keys(n).filter(function(e){return!(!n[e].prototype||!n[e].prototype.mode||"independent"!==n[e].prototype.mode)}).filter(function(e){return e===t}).length>0});return i(r,1)[0]},e.loadLibs=function(){var e=window;if(l=e.AdobeAn,c=window.createjs,!l)throw new Error("AdobeAn dependency not found");if(!c)throw new Error("createjs dependency not found")},e.initAdobeAn=function(){var t=e.props.animationName,n=e.getComposition(t),r=void 0,i=void 0;try{r=(i=l.getComposition(n)).getLibrary()}catch(e){if("Cannot read property 'getLibrary' of undefined"===e.message){var o=new Error("Animation with name "+t+" was not found","test");throw o.name="AnimateCC",o}throw e}var a=new c.LoadQueue(!1);a.addEventListener("fileload",function(t){e.handleFileLoad(t,i)}),a.addEventListener("complete",function(t){e.handleComplete(t,i)}),r=i.getLibrary(),a.loadManifest(r.properties.manifest),0===r.properties.manifest.filter(function(e){return"image"===e.type}).length&&e.handleComplete(null,i)},e.handleComplete=function(t,n){var r=e.props,i=r.animationName,o=r.paused,a=r.getAnimationObject,s=n.getLibrary();if(t)for(var u=n.getSpriteSheet(),l=t.target,f=s.ssMetadata,p=0;p<f.length;p++){var d=[l.getResult(f[p].name)];if(!d[0])return;u[f[p].name]=new c.SpriteSheet({images:d,frames:f[p].frames})}var m=new s[i];a(m),e.lib=m,e.lib.tickEnabled=!o;var v=new s.Stage(e.canvas);e.stage=v,e.setState({properties:s.properties},e.onAnimationReady)},e.handleFileLoad=function(e,t){var n=t.getImages();e&&"image"===e.item.type&&(n[e.item.id]=e.result)},e.startAnimation=function(){var t=e.state.properties;l.compositionLoaded(t.id),e.stage.addChild(e.lib),c.Ticker.setFPS(t.fps),c.Ticker.addEventListener("tick",e.stage)},e.stopAnimation=function(){c.Ticker.removeEventListener("tick",e.stage)},e.resizeCanvas=function(){var t=e.state.properties,n=t.width,r=t.height,i=window.innerWidth,o=window.innerHeight,a=window.devicePixelRatio||1,s=i/n,u=o/r,l=1,c=e.dimensions;c.isResp&&("width"===c.respDim&&c.lastW===i||"height"===c.respDim&&c.lastH===o?l=e.lastS:c.isScale?1===c.scaleType?l=Math.min(s,u):2===c.scaleType&&(l=Math.max(s,u)):(i<n||o<r)&&(l=Math.min(s,u))),e.canvas.width=n*a*l,e.canvas.height=r*a*l,e.stage.scaleX=a*l,e.stage.scaleY=a*l,c.lastW=i,c.lastH=o,c.lastS=l,e.stage.tickOnUpdate=!1,e.stage.update(),e.stage.tickOnUpdate=!0},e.state={properties:{},error:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadLibs();try{this.initAdobeAn()}catch(e){if("AnimateCC"!==e.name)throw e;console.error("AnimateCC: "+e.message),this.setState({error:!0})}}},{key:"componentDidUpdate",value:function(){var e=this.state.error,t=this.props.paused;e||void 0===this.lib||(this.lib.tickEnabled=!t)}},{key:"componentWillUnmount",value:function(){this.state.error||(window.removeEventListener("resize",this.resizeCanvas),this.stopAnimation())}},{key:"render",value:function(){var e=this,n=this.props,i=(n.animationName,n.getAnimationObject,n.paused,n.style),o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["animationName","getAnimationObject","paused","style"]),s=this.state.properties;if(0===Object.keys(s).length)return a.default.createElement("div",null,a.default.createElement("div",{ref:function(t){e.animationContainer=t}},a.default.createElement("canvas",{ref:function(t){e.canvas=t}}),a.default.createElement("div",{ref:function(t){e.domOverlayContainer=t}})));var u=t.hexToRgba(s.color,s.opacity);return a.default.createElement("div",null,a.default.createElement("div",r({ref:function(t){e.animationContainer=t},style:r({width:"100%",height:"100%"},i)},o),a.default.createElement("canvas",{ref:function(t){e.canvas=t},style:{display:"block",width:"100%",backgroundColor:u}}),a.default.createElement("div",{ref:function(t){e.domOverlayContainer=t},style:{pointerEvents:"none",overflow:"hidden",width:s.width+"px",height:s.height+"px",position:"absolute",left:"0px",top:"0px",display:"block"}})))}}]),t}();f.hexToRgba=function(e,t){return"rgba("+parseInt(e.substring(1,3),16)+", "+parseInt(e.substring(3,5),16)+", "+parseInt(e.substring(5,7),16)+", "+t+")"},f.propTypes={animationName:s.default.string.isRequired,composition:s.default.string,getAnimationObject:s.default.func,paused:s.default.bool,style:s.default.object},f.defaultProps={getAnimationObject:function(){},composition:null,paused:!1,style:{}},t.default=f},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")}]);