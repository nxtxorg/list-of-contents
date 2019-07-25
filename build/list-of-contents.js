var list_of_contents=function(){"use strict";var e,t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};!function(e){e[e.Paragraph=1]="Paragraph",e[e.Command=2]="Command",e[e.Text=3]="Text",e[e.Block=4]="Block",e[e.Html=5]="Html",e[e.Node=6]="Node",e[e.Dictionary=11]="Dictionary",e[e.Array=12]="Array",e[e.Number=13]="Number",e[e.String=14]="String"}(e||(e={}));var n={},r={},a=[],o={},c=document.createElement("style");c.id="basic-formatting-style-block",document.head.appendChild(c);var i=c.sheet,s=[["chapter","h1"],["section","h3"],["subsection","h4"]].map(function(e){return function(e,o){n[e]=0,r=t({},n);var c={preprocessor:{},command:{}};return c.preprocessor[e]=function(n){r[e]+=1,p(e),a.push({type:e,title:n.value,numbering:t({},r)})},c.command[e]=function(e){return nxtx.html(o,null,e.value)},c}(e[0],e[1])}),u=Object.assign.apply(Object,[{}].concat(s.map(function(e){return e.preprocessor}))),l=Object.assign.apply(Object,[{}].concat(s.map(function(e){return e.command}))),p=function(e){for(var t=Object.keys(r),n=!1,a=0;a<t.length;a++)n?r[t[a]]=0:t[a]===e&&(n=!0)},m=function(e){return Object.keys(e).map(function(t){return e[t]}).join(".").replace(/[.0]+$/,"")},f=function(e,t){var n=o[e];if(!n)return console.warn("Label '"+e+"' has not been referenced"),nxtx.html("b",{class:"warning"},""+e);var r,a="";switch(n.type){case"chapter":a="chapter "+m(n.numbering);break;case"section":case"subsection":a="section "+m(n.numbering)}return t?(r=a)[0].toUpperCase()+r.substr(1):a};i.insertRule(".loc-chapter { font-size: 14pt }",0),i.insertRule(".loc-section { font-size: 13pt; padding-left: 2em }",1),i.insertRule(".loc-subsection { font-size: 12pt; padding-left: 4em }",2);var h={name:"images",preprocessors:t({label:function(e){void 0!==o[e.value]?console.warn("Attempt to redefine label '"+e.value+"' ignored"):o[e.value]=a[a.length-1]}},u),commands:t({label:function(e){return nxtx.html("span",{id:"--"+e.value,"data-label":e.value})},ref:function(e){return nxtx.html("a",{href:"#--"+e.value,"data-ref":e.value},f(e.value,!1))},Ref:function(e){return nxtx.html("a",{href:"#--"+e.value,"data-ref":e.value},f(e.value,!0))},"loc-print":function(){return[nxtx.html("h2",{class:"list-of-contents"},"List of Contents")].concat(a.map(function(e){return nxtx.html("div",{class:"loc-"+e.type},m(e.numbering)+" "+e.title)}),[{type:e.Command,name:"pagebreak",args:[]}])}},l),hooks:{prerender:function(){r=t({},n),a=[],o={}}}};return nxtx&&nxtx.registerPackage(h),nxtx}();
//# sourceMappingURL=list-of-contents.js.map
