window.addEventListener("DOMContentLoaded",function(){var e=document.querySelector('form[name="demo-form"]');new Validator(e,function(e,t){if(t){var r=$("#contactform2");formSubmit(r)}return!1},{autoHideErrors:!1})}),function(e){"use strict";Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),r=this,i=function(){},s=function(){return r.apply(this instanceof i&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,s.prototype=new i,s});var t={publicMethods:["validate","formatString","destroy","reload","getFormHandle","getFields"],className:"Validator"},r=function(e,t,r){if(this.settings={onAir:!0,showErrors:!0,autoHideErrors:!1,autoHideErrorsTimeout:1e3,locale:"en",messages:{},rules:{},removeSpaces:!1},this.errorClassName="error2",this.messages={en:{required:{empty:"This field is required",incorrect:"Incorrect value"},notzero:{empty:"Please make a selection",incorrect:"Incorrect value"},integer:{empty:"Enter an integer value",incorrect:"Incorrect integer value"},float:{empty:"Enter an float number",incorrect:"Incorrect float"},min:{empty:"Enter more",incorrect:"Enter more"},max:{empty:"Enter less",incorrect:"Enter less"},between:{empty:"Enter the between {0}-{1}",incorrect:"Enter the between {0}-{1}"},name:{empty:"Please, enter your name",incorrect:"Incorrect name"},lastname:{empty:"Please, enter your lastname",incorrect:"Incorrect lastname"},phone:{empty:"Please, enter the phone number",incorrect:"Incorrect phone number"},email:{empty:"Please, enter your email address",incorrect:"Incorrect email address"},length:{empty:"Please, Enter a minimum of {0} characters and a maximum of {1}",incorrect:"Incorrect. Enter a minimum of {0} characters and a maximum of {1}"},minlength:{empty:"Please, enter at least {0} characters",incorrect:"You have entered less than {0} characters"},maxlength:{empty:"Please, enter at maximum {0} characters",incorrect:"You have entered more than {0} characters"},maxfilesize:{empty:"The size of one or more selected files larger than {0} {1}",incorrect:"The size of one or more selected files larger than {0} {1}"},fileextension:{empty:"Select file",incorrect:"One or more files have an invalid type"}}},!e)return!1;var i,s,n,a=this,l=["keyup","change","blur"],o=l.length;if(this.formHandle=e||null,this.submitCallback=t||null,this.eventSubmit=a.events.submit.bind(this),this.fields=this.getFields(this.formHandle.querySelectorAll("[data-rule]")),r){if(r.rules){for(s in r.rules)r.rules.hasOwnProperty(s)&&(this.rules[s]=r.rules[s]);delete r.rules}for(s in r)r.hasOwnProperty(s)&&(this.settings[s]=r[s])}if(this.submitCallback&&(this.formHandle.addEventListener("submit",this.eventSubmit),this.settings.onAir)){i=function(e){this.intervalID&&clearTimeout(this.intervalID),this.intervalID=setTimeout(function(){a.events.change.apply(a,[e])},400)},function(e){e.srcElement.blur(),e.srcElement.focus()};for(s in this.fields)if(this.fields.hasOwnProperty(s))for(n=0;n<o;n+=1)"keyup"===l[n]?this.fields[s].handle.addEventListener(l[n],i):this.fields[s].handle.addEventListener(l[n],a.events.change.bind(this))}return this};r.prototype={formHandle:null,submitCallback:null,errors:null,fields:{},intervalID:null,ints:{},rules:{required:function(e){return""!==e},notzero:function(e){return parseInt(e,10)>0},integer:function(e){return new RegExp(/^[0-9]+$/gi).test(e)},float:function(e){return this.integer(e)||new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(e)},min:function(e,t){return this.float(e)?parseFloat(e)>=parseFloat(t[0]):parseInt(e,10)>=parseInt(t[0],10)},max:function(e,t){return this.float(e)?parseFloat(e)<=parseFloat(t[0]):parseInt(e,10)<=parseInt(t[0],10)},between:function(e,t){return t[1]=t[1]||999999,this.float(e)?parseFloat(e)>=parseFloat(t[0])&&parseFloat(e)<=parseFloat(t[1]):!!this.integer(e)&&(parseInt(e,10)>=parseInt(t[0],10)&&parseInt(e,10)<=parseInt(t[1],10))},name:function(e){return!(e.length>0&&e.length<2)&&new RegExp(/^[a-zA-Z\sа-яА-ЯёЁ\-]+$/g).test(e)},lastname:function(e){return this.name(e)},phone:function(e){return!(e.replace(/[^0-9]+/gi,"").match(/[0-9]+/gi)&&e.replace(/[^0-9]+/gi,"").match(/[0-9]+/gi)[0].length<6)&&new RegExp(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/g).test(e)},email:function(e){return new RegExp(/^(("[\w-\s]+")|([\w\-]+(?:\.[\w\-]+)*)|("[\w-\s]+")([\w\-]+(?:\.[\w\-]+)*))(@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e)},length:function(e,t){return this.between(e.replace(/\s{2,}/g," ").length,t)},maxlength:function(e,t){return this.max(e.replace(/\s{2,}/g," ").length,t)},minlength:function(e,t){return this.min(e.replace(/\s{2,}/g," ").length,t)},maxfilesize:function(e,t){var r,i=e.length,s=1;switch(t[1].toLowerCase()){case"b":s=1;break;case"kb":s=1024;break;case"mb":s=1048576;break;case"gb":s=1073741824;break;case"tb":s=1099511627776}for(r=0;r<i;r+=1)if(parseFloat(e[r])>parseFloat(t[0])*s)return!1;return!0},fileextension:function(e,t){var r,i,s=t.length,n=e.length,a=0;for(r=0;r<s;r+=1)for(i=0;i<n;i+=1)t[r]===e[i].split(".").pop()&&(a+=1);return e.length===a}},orderFields:function(e,t){if(!e||!t)return{};var r,i={};for(r in this.fields)this.fields.hasOwnProperty(r)&&this.fields[r].handle[e]&&this.fields[r].handle[e]===t&&(i[r]=this.fields[r]);return i},validate:function(e){this.errors&&(this.errors=null);var t,r,i,s,n,a,l,o,h,c,u,d=!0,m=null,f=!1,p=[],g=this.fields;e&&(g=this.getFields([e]));for(t in g)if(g.hasOwnProperty(t))for(d=!0,i=g[t].rules.length,r=0;r<i;r+=1){if(a=g[t].rules[r][0],c=g[t].rules[r][1],o=g[t].defaultValue,l=g[t].handle.value,"checkbox"!==g[t].handle.type||g[t].handle.checked||(l=""),"radio"===g[t].handle.type){p=this.orderFields("name",g[t].handle.name),f=!1;for(u in p)p.hasOwnProperty(u)&&p[u].handle.checked&&(f=!0);if(!f){for(u in p)if(p.hasOwnProperty(u)){try{h=this.settings.messages[this.settings.locale][a].empty}catch(e){h=this.messages[this.settings.locale][a].empty}break}l=""}}if("file"===g[t].handle.type&&g[t].handle.files&&(n=g[t].handle.files.length)>0)for(l=[],s=0;s<n;s+=1)switch(a){case"maxfilesize":l.push(g[t].handle.files[s].size);break;case"fileextension":l.push(g[t].handle.files[s].name)}if(d&&(""!==l||g[t].rules.join("|").match(/\|{0,1}required\|{0,1}/)))if(d&&o&&l!==o?(d=!1,m="incorrect"):d&&this.rules[a]&&!this.rules[a](l,c)&&(""===l?(d=!1,m="empty"):(d=!1,m="incorrect")),d)this.hideErrors(g[t].handle,!0);else{this.errors||(this.errors={});try{try{h=this.settings.messages[this.settings.locale][a][m]}catch(e){h=this.messages[this.settings.locale][a][m]}}catch(e){a="required",h=this.messages[this.settings.locale][a][m]}c.length||c.push(l),this.errors[t]={name:g[t].name,errorText:this.formatString(h,c)},this.submitCallback||(this.errors[t].handle=g[t].handle)}}return this.submitCallback?!this.errors:this.errors||!0},hideErrors:function(e,t){var r,i;for(r in this.fields)this.fields.hasOwnProperty(r)&&(e&&e===this.fields[r].handle||!e)&&(document.getElementsByTagName("head")[0].nextElementSibling?i=this.fields[r].handle.nextElementSibling:"#text"===(i=this.fields[r].handle.nextSibling).nodeName&&(i=i.nextSibling),t&&(this.fields[r].handle.classList?this.fields[r].handle.classList.remove(this.errorClassName):this.fields[r].handle.className=this.fields[r].handle.className.replace(new RegExp("(^|\\b)"+this.errorClassName.split(" ").join("|")+"(\\b|$)","gi")," ")),i&&"validator-error"===i.getAttribute("data-type")&&i.parentNode.removeChild(i))},showErrors:function(e){var t,r,i,s,n=this.settings.showErrors,a=this.errorClassName,l=function(e,t){e.classList?e.classList.add(a):e.className+=" "+a,e.nextElementSibling&&"validator-error"===e.nextElementSibling.getAttribute("data-type")||n&&((i=document.createElement("div")).setAttribute("class",a),i.setAttribute("data-type","validator-error"),i.innerHTML=t.errorText,e.parentNode.insertBefore(i,e.nextSibling))};for(t in this.errors)if(this.errors.hasOwnProperty(t))if(e)for(r in this.fields)this.fields.hasOwnProperty(r)&&this.fields[r].handle.getAttribute("name")===e.getAttribute("name")&&l(this.fields[r].handle,this.errors[t]);else("0"===t||t>0&&this.fields[t].name!==this.fields[t-1].name)&&l(this.fields[t].handle,this.errors[t]);this.settings.autoHideErrors&&(s=this,e?(e.intervalID&&clearTimeout(e.intervalID),this.intervalID||(e.intervalID=setTimeout(function(){e.intervalID=null,s.hideErrors(e)},this.settings.autoHideErrorsTimeout))):(this.intervalID&&clearTimeout(this.intervalID),this.intervalID=setTimeout(function(){s.intervalID=null,s.hideErrors(!1)},this.settings.autoHideErrorsTimeout)))},events:{submit:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1;var t,r,i=this.validate();this.hideErrors(!1,!0),i||this.showErrors(),t=this.errors||null,r=!this.errors,!0===this.submitCallback(t,r)&&this.formHandle.submit()},change:function(e){var t,r;if(e.target||(e.target=e.srcElement),this.settings.removeSpaces&&new RegExp(/\s{2,}/g).test(e.target.value)&&(e.target.value=e.target.value.replace(/\s{2,}/g," ")),"radio"===e.target.type){t=this.orderFields("name",e.target.name);for(r in t)t.hasOwnProperty(r)&&this.hideErrors(t[r].handle)}else this.hideErrors(e.target);this.validate(e.target)||(this.showErrors(e.target),this.settings.showErrors||this.submitCallback(this.errors,!1))}},getFields:function(e){var t,r,i,s={},n=[],a=[],l=(e=e||this.formHandle.querySelectorAll("[data-rule]")).length;for(t=0;t<l;t+=1){for(i=(n=e[t].getAttribute("data-rule").split("|")).length,r=0;r<i;r+=1)n[r].match(/-/gi)?(a=n[r].split("-"),n[r]=a[0],a=a.splice(1),n[r]=[n[r],a]):n[r]=[n[r],[]];s[t]={name:e[t].getAttribute("name"),rules:n,defaultValue:e[t].getAttribute("data-default"),handle:e[t],intervalID:null}}return s},getFormHandle:function(){return this.formHandle},formatString:function(e,t){return e.replace(/\{(\d+)\}/gi,function(e,r){return e&&t[r]?t[r]:""})},destroy:function(){this.hideErrors(!1,!0);var e=this.formHandle.cloneNode(!0);this.formHandle.parentNode.replaceChild(e,this.formHandle)},reload:function(r,i){switch(this.hideErrors(!1,!0),this.formHandle.removeEventListener("submit",this.eventSubmit),arguments.length){case 2:this.submitCallback=r,this.settings=i;break;case 1:this.settings=r}e[t.className].apply(this,[this.formHandle,this.submitCallback,this.settings])}},e[t.className]=function(){var e=function(e,t){function r(){return e.apply(this,t)}return r.prototype=e.prototype,new r}(r,arguments),i=function(){};return i.prototype={},Array.prototype.forEach.call(t.publicMethods,function(t){i.prototype[t]=function(){return e[t].apply(e,arguments)}}),new i(arguments)}}(this);