(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{35:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},36:function(e,t,n){},37:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},38:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},39:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},40:function(e,t,n){},41:function(e,t,n){"use strict";var r=n(37),a=n(35);t.__esModule=!0,t.default=void 0;var o=a(n(38)),l=a(n(42)),i=a(n(39)),c=a(n(43)),s=r(n(0)),u=n(44),f=n(46),m=1e3;function d(e,t,n){var r=(e-t)/(n-t)*100;return Math.round(r*m)/m}var p=function(e){function t(){return e.apply(this,arguments)||this}(0,i.default)(t,e);var n=t.prototype;return n.renderProgressBar=function(e){var t,n=e.min,r=e.now,a=e.max,i=e.label,u=e.srOnly,f=e.striped,m=e.animated,p=e.className,y=e.style,v=e.variant,b=e.bsPrefix,h=(0,l.default)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return s.default.createElement("div",(0,o.default)({},h,{role:"progressbar",className:(0,c.default)(p,b+"-bar",(t={},t["bg-"+v]=v,t[b+"-bar-animated"]=m,t[b+"-bar-striped"]=m||f,t)),style:(0,o.default)({width:d(r,n,a)+"%"},y),"aria-valuenow":r,"aria-valuemin":n,"aria-valuemax":a}),u?s.default.createElement("span",{className:"sr-only"},i):i)},n.render=function(){var e=this.props,t=e.isChild,n=(0,l.default)(e,["isChild"]);if(t)return this.renderProgressBar(n);var r=n.min,a=n.now,i=n.max,u=n.label,m=n.srOnly,d=n.striped,p=n.animated,y=n.bsPrefix,v=n.variant,b=n.className,h=n.children,w=(0,l.default)(n,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return s.default.createElement("div",(0,o.default)({},w,{className:(0,c.default)(b,y)}),h?(0,f.map)(h,function(e){return(0,s.cloneElement)(e,{isChild:!0})}):this.renderProgressBar({min:r,now:a,max:i,label:u,srOnly:m,striped:d,animated:p,bsPrefix:y,variant:v}))},t}(s.default.Component);p.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var y=(0,u.createBootstrapComponent)(p,"progress"),v=y;t.default=v,e.exports=t.default},42:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},43:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},44:function(e,t,n){"use strict";var r=n(37),a=n(35);t.__esModule=!0,t.useBootstrapPrefix=function(e,t){var n=(0,c.useContext)(s);return e||n.get(t)||t},t.createBootstrapComponent=function(e,t){"string"===typeof t&&(t={prefix:t});var n=e.prototype&&e.prototype.isReactComponent,r=t,a=r.prefix,l=r.forwardRefAs,u=void 0===l?n?"ref":"innerRef":l;return(0,i.default)(function(t,n){var r=(0,o.default)({},t);r[u]=n;var l=(0,c.useContext)(s);return c.default.createElement(e,(0,o.default)({},r,{bsPrefix:r.bsPrefix||l.get(a)||a}))},{displayName:"Bootstrap("+(e.displayName||e.name)+")"})},t.default=t.ThemeConsumer=void 0;var o=a(n(38)),l=a(n(39)),i=a(n(45)),c=r(n(0)),s=c.default.createContext(new Map),u=s.Consumer,f=s.Provider;t.ThemeConsumer=u;var m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).prefixes=new Map,Object.keys(t.props.prefixes).forEach(function(e){t.prefixes.set(e,t.props.prefixes[e])}),t}return(0,l.default)(t,e),t.prototype.render=function(){return c.default.createElement(f,{value:this.prefixes},this.props.children)},t}(c.default.Component);t.default=m},45:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,o=n.defaultProps,l=n.allowFallback,i=void 0!==l&&l,c=n.displayName,s=void 0===c?e.name||e.displayName:c,u=function(t,n){return e(t,n)};return Object.assign(a.default.forwardRef||!i?a.default.forwardRef(u):function(e){return u(e,null)},{displayName:s,propTypes:r,defaultProps:o})};var r,a=(r=n(0))&&r.__esModule?r:{default:r}},46:function(e,t,n){"use strict";var r=n(35);t.__esModule=!0,t.map=function(e,t){var n=0;return a.default.Children.map(e,function(e){return a.default.isValidElement(e)?t(e,n++):e})},t.forEach=function(e,t){var n=0;a.default.Children.forEach(e,function(e){a.default.isValidElement(e)&&t(e,n++)})};var a=r(n(0))},47:function(e,t,n){e.exports=n.p+"static/media/FondoSonido.a400a87b.mp3"},48:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var s=n(0),u=n.n(s),f=(n(40),n(18),n(36),n(41)),m=n.n(f),d=function(e){return u.a.createElement("div",{className:"card my-2 p-2 shadow"},u.a.createElement("div",{className:"card-body justify-content-arround"},u.a.createElement("h1",null,e.stName," Lv:",e.nvl)),u.a.createElement(m.a,{now:e.life}))},p=n(47),y=n.n(p);n.d(t,"default",function(){return v});var v=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=i(t).call(this,e))||"object"!==o(a)&&"function"!==typeof a?l(r):a).state={error:null,isLoaded:!1,pokemon1:"",life1:"",pokemon2:"",life2:""},n.Atacar=n.Atacar.bind(l(n)),n}var n,a,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,s["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;document.getElementById("FondoSonido");fetch("http://www.mocky.io/v2/5ccdd97d2e00009a38182b29").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,pokemon1:t[0],pokemon2:t[1],life1:t[0].nuLife,life2:t[1].nuLife})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"actualizarEstado",value:function(e){this.setState(function(t){return{life2:e}})}},{key:"Atacar",value:function(e,t,n){var r=Math.floor(4*Math.random()),a=Math.floor(4*Math.random()),o=[20,20,30,10],l=[5,10,15,20],i=[10,15,20,30];n-l[a]>=0&&(n-=l[a]),console.log("da\xf1o charizard "+n),e-=e<n?e:n,o[r]-i[a]>=0?o[r]=o[r]-i[a]:o[r]=0,t<o[r]?t-=t:t-=o[r],console.log("da\xf1o Blastoide "+o[r]),this.setState({life1:e,life2:t}),0===e&&0===t?window.alert("Empate"):0===e&&t>0?window.alert("Ganaste"):0===t&&e>0&&window.alert("Perdiste")}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,r=t.isLoaded,a=t.pokemon1,o=t.pokemon2,l=t.life1,i=t.life2;return n?u.a.createElement("div",null,"Error: ",n.message):r?r?u.a.createElement("div",{className:""},u.a.createElement("audio",{loop:!0,autoPlay:!0,id:"FondoSonido"},u.a.createElement("source",{src:y.a,type:"audio/mp3"})),u.a.createElement("div",{className:"row "},u.a.createElement("div",{className:"col-6 w-100 flex-column"},u.a.createElement("div",{className:"col-7"},u.a.createElement(d,{stName:o.stName,life:i,nvl:o.nuDf}),u.a.createElement("img",{className:"w-100 mb-2",src:o.urlImg}))),u.a.createElement("div",{className:"col-6 w-100 d-flex justify-content-end"},u.a.createElement("div",{className:"col-8 "},u.a.createElement("img",{className:"w-100",src:a.urlImg}),u.a.createElement(d,{stName:a.stName,life:l,nvl:a.nuDf})))),u.a.createElement("div",{className:"bg-white m-0 p-4 bg-img d-flex w-100 text-center justify-content-center align-items-center shadow fixed-bottom"},u.a.createElement("div",{className:"col-3"},u.a.createElement("h2",{className:""},"\xbfC\xf3mo quieres que Ataque "),u.a.createElement("h2",{className:""},o.stName,"?")),u.a.createElement("div",{className:"row col-9 mx-2 text-center justify-content-around p-3"},u.a.createElement("button",{type:"button",className:"btn btn-danger m-1 p-1 flex-column col-2 justify-content-center align-items-center shadow",onClick:function(){return e.Atacar(l,i,o.arAtacks[0].nuAtckPower)}},u.a.createElement("h5",{className:"w-100"},o.arAtacks[0].stAtckName),u.a.createElement("h5",null,"Ataque ",o.arAtacks[0].nuAtckPower," ")),u.a.createElement("button",{type:"button",className:"btn btn-danger m-1 p-1 flex-column col-2 justify-content-center align-items-center shadow",onClick:function(){return e.Atacar(l,i,o.arAtacks[1].nuAtckPower)}},u.a.createElement("h5",{className:"w-100"},o.arAtacks[1].stAtckName),u.a.createElement("h5",null,"Ataque ",o.arAtacks[1].nuAtckPower," ")),u.a.createElement("button",{type:"button",className:"btn btn-danger m-1 p-1 flex-column col-2 justify-content-center align-items-center shadow",onClick:function(){return e.Atacar(l,i,o.arAtacks[2].nuAtckPower)}},u.a.createElement("h5",{className:"w-100"},o.arAtacks[2].stAtckName),u.a.createElement("h5",null,"Ataque ",o.arAtacks[2].nuAtckPower," ")),u.a.createElement("button",{type:"button",className:"btn btn-danger m-1 p-1 flex-column col-2 justify-content-center align-items-center shadow",onClick:function(){return e.Atacar(l,i,o.arAtacks[3].nuAtckPower)}},u.a.createElement("h5",{className:"w-100"},o.arAtacks[3].stAtckName),u.a.createElement("h5",null,"Ataque ",o.arAtacks[3].nuAtckPower," "))))):void 0:u.a.createElement("div",{className:"spinner-border ",role:"status"},u.a.createElement("span",{className:"sr-only justify-content-center align-items-center"},"Loading..."))}}])&&r(n.prototype,a),f&&r(n,f),t}()}}]);
//# sourceMappingURL=3.badbfd45.chunk.js.map