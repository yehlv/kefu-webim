!function(){var e=function(){},t=function(){try{return new window.XMLHttpRequest}catch(e){return!1}},a=function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){return!1}},n=function(n){var i=n.dataType||"text",r=n.success||e,s=n.error||e,o=t()||a();o.onreadystatechange=function(){if(4===o.readyState){var e=o.status||0;if(200===e){if("text"===i)return void r(o.responseText,o);if("json"===i){try{var t=JSON.parse(o.responseText);r(t,o)}catch(a){}return}return void r(o.response||o.responseText,o)}if("json"==i){try{var t=Utils.parseJSON(o.responseText);s(t,o,"服务器返回错误信息")}catch(a){s(o.responseText,o,"服务器返回错误信息")}return}return void s(o.responseText,o,"服务器返回错误信息")}0===o.readyState&&s(o.responseText,o,"服务器异常")};var c=n.type||"GET",u=n.data||{},d="";if("GET"===c){for(var m in u)u.hasOwnProperty(m)&&(d+=m+"="+u[m]+"&");d=d?d.slice(0,-1):d,n.url+=(n.url.indexOf("?")>0?"&":"?")+(d?d+"&":d)+"_v="+(new Date).getTime(),u=null}else u._v=(new Date).getTime(),u=JSON.stringify(u);return o.open(c,n.url),o.setRequestHeader("Content-Type","application/json"),o.send(u),o};window.easemobIM=window.easemobIM||{},window.easemobIM.emajax=n}(),window.easemobIM=window.easemobIM||function(){},easemobIM.Transfer=function(){var e=function(e,t){if(JSON&&JSON.parse){var a=e.data;a=JSON.parse(a),this.targetOrigin=a.data.origin,"function"==typeof t&&t(a)}},t=function(e){return this instanceof t?(this.iframe=document.getElementById(e),void(this.origin=location.protocol+"//"+document.domain+location.port)):new t};return t.prototype.send=function(e){return e.origin=this.origin,e=JSON.stringify(e),this.iframe?this.iframe.contentWindow.postMessage(e,"*"):window.parent.postMessage(e,this.targetOrigin),this},t.prototype.listen=function(t){return window.addEventListener?window.addEventListener("message",function(a){e(a,t)},!1):window.attachEvent&&window.attachEvent("onmessage",function(a){e(a,t)}),this},t}(),function(){var e=new easemobIM.Transfer,t=function(t,a,n){return{url:t,data:a.data,type:n||"GET",success:function(t){try{t=JSON.parse(t)}catch(n){}e.send({call:a.api,timespan:a.timespan,status:0,data:t})},error:function(t){try{t=JSON.parse(t)}catch(n){}e.send({call:a.api,status:1,data:t})}}};e.listen(function(a){switch(e.targetOrigin=a.origin,a.api){case"getRelevanceList":easemobIM.emajax(t("/v1/webimplugin/targetChannels",a));break;case"getDutyStatus":easemobIM.emajax(t("/v1/webimplugin/timeOffDuty",a));break;case"createVisitor":easemobIM.emajax(t("/v1/webimplugin/visitors",a,"POST"));break;case"getSession":easemobIM.emajax(t("/v1/webimplugin/visitors/"+a.data.id+"/CurrentServiceSession?techChannelInfo="+a.data.orgName+"%23"+a.data.appName+"%23"+a.data.imServiceNumber+"&tenantId="+a.data.tenantId,a));break;case"getPassword":easemobIM.emajax(t("/v1/webimplugin/visitors/password",a));break;case"getGroup":easemobIM.emajax(t("/v1/webimplugin/visitors/"+a.data.id+"/ChatGroupId?techChannelInfo="+a.data.orgName+"%23"+a.data.appName+"%23"+a.data.imServiceNumber+"&tenantId="+a.data.tenantId,a));break;case"getHistory":easemobIM.emajax(t("/v1/webimplugin/visitors/msgHistory",a))}})}();