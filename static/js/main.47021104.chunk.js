(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t){t.exports={USD:"\ud83c\uddfa\ud83c\uddf8",HKD:"\ud83c\udded\ud83c\uddf0",EUR:"\ud83c\uddea\ud83c\uddfa",GBP:"\ud83c\uddec\ud83c\udde7",INR:"\ud83c\uddee\ud83c\uddf3",AUD:"\ud83c\udde6\ud83c\uddfa",CAD:"\ud83c\udde8\ud83c\udde6"}},,function(t,e,a){t.exports=a(25)},,,,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),l=(a(16),a(1)),c=a(2),s=a(4),u=a(3),m=a(5),d=(a(18),a(20),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={default:null},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("a",{id:"logo",href:"https://twitter.com/AlexDisdier",alt:"Twitter Account",target:"_blank",rel:"noopener noreferrer"},"@alexdisdier")}}]),e}(n.Component)),h=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={default:null},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"http://alexdisdier.fr",target:"_blank",rel:"noopener noreferrer"},"Build your Currency Exchange")))}}]),e}(n.Component),f=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={default:null},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"wrapper flex"},o.a.createElement(d,null),o.a.createElement(h,null)))}}]),e}(n.Component),p=function(){return o.a.createElement("h1",null,"Currency Converter")},v=a(9),b=(a(23),function(t){return t.error?o.a.createElement("div",null):o.a.createElement("div",{className:"error-message"},"Numbers Only")}),E=a(8),O="http://data.fixer.io/api/latest?access_key=".concat("6ffa9c9b83cee2b7940de5be46d7d94b","&format=1"),j=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={Rates:[],amountTop:"",amountBottom:"",from:"EUR",to:"USD",isValid:!0,isLoading:!1},a.isDecimal=function(t){return t-Math.floor(t)!==0},a.renderCurrenciesOptions=function(){for(var t=a.state.Rates,e=[],n=Object.keys(t),r=0;r<n.length;r++)e.push(o.a.createElement("option",{key:r,value:n[r]},E[n[r]]," ",[n[r]]));return e},a.isNumberHandler=function(t){return!isNaN(t)},a.handleChange=function(t){var e=t.target.name,n=t.target.value,o=a.state.Rates,r={};r[e]=n,"from"===e||"to"===e||a.isNumberHandler(n)?"amountTop"===e?(r.isValid=!0,""===n?r.amountBottom="":(r.amountBottom=n/o[a.state.from]*o[a.state.to],a.isDecimal(r.amountBottom)&&(r.amountBottom=r.amountBottom.toFixed(3)))):"amountBottom"===e?(r.isValid=!0,""===n?r.amountTop="":(r.amountTop=n/o[a.state.to]*o[a.state.from],a.isDecimal(r.amountTop)&&(r.amountTop=r.amountTop.toFixed(3)))):"from"===e?(r.from=n,r.isValid=!0,""===a.state.amountBottom||""===a.state.amountTop?r.amountBottom="":(r.amountBottom=a.state.amountTop/o[n]*o[a.state.to],a.isDecimal(r.amountBottom)&&(r.amountBottom=r.amountBottom.toFixed(3)))):"to"===e&&(r.to=n,r.isValid=!0,""===a.state.amountBottom||""===a.state.amountTop?r.amountBottom="":(r.amountBottom=a.state.amountTop/o[a.state.from]*o[n],a.isDecimal(r.amountBottom)&&(r.amountBottom=r.amountBottom.toFixed(3)))):(r.isValid=!1,r.amountBottom=a.state.amountBottom,r.amountTop=a.state.amountTop),a.setState(r)},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.setState({isLoading:!0}),fetch(O).then(function(t){if(t.ok)return t.json();throw new Error("Something went wrong ...")}).then(function(e){var a=e.rates,n=["USD","HKD","EUR","GBP","INR","AUD","CAD"],o={},r={};for(var i in a)n.includes(i)?o[i]=o[i]=a[i]:r[i]=a[i];o["-------"]="",t.setState({Rates:Object(v.a)({},o,r)})}).catch(function(e){return t.setState({error:e,isLoading:!1})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"form"},o.a.createElement("div",{className:"form-flex"},o.a.createElement(b,{error:this.state.isValid}),o.a.createElement("input",{style:{boxShadow:!this.state.isValid&&"0 0 0 3px red inset"},id:"amountTop",placeholder:"1",type:"text",name:"amountTop",value:this.state.amountTop,onChange:this.handleChange})),o.a.createElement("div",{className:"form-flex"},o.a.createElement("select",{id:"from",name:"from",value:this.state.from,onChange:this.handleChange},this.renderCurrenciesOptions()))),o.a.createElement("div",{id:"result"},o.a.createElement("div",{className:"form"},o.a.createElement("div",{className:"form-flex"},o.a.createElement(b,{error:this.state.isValid}),o.a.createElement("input",{style:{boxShadow:!this.state.isValid&&"0 0 0 3px red inset"},id:"amountBottom",placeholder:(1/this.state.Rates[this.state.from]*this.state.Rates[this.state.to]).toFixed(3),type:"text",name:"amountBottom",value:this.state.amountBottom,onChange:this.handleChange})),o.a.createElement("div",{className:"form-flex"},o.a.createElement("select",{id:"to",name:"to",value:this.state.to,onChange:this.handleChange},this.renderCurrenciesOptions())))))}}]),e}(n.Component),g=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={default:null},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("span",null))}}]),e}(n.Component),y=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement("div",{className:"wrapper"},o.a.createElement(p,null),o.a.createElement(j,null)),o.a.createElement(g,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.47021104.chunk.js.map