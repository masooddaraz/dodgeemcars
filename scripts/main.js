"use strict";window.g_avb=class{constructor(c,a){this.g_avc=c,this.g_avd=a,this.g_ave=!1,this.g_afz=()=>this.g_IM()}g_avf(){}g_avg(e,a,b,c){this.g_avc.g_avh(this.g_avd,e,a,!!b,c)}g_avi(e,a,b,c){return this.g_avc.g_avj(this.g_avd,e,a,!!b,c)}g_avk(d,a,b){this.g_avc.g_avl()?this.g_avg(d,a,b):this.g_avc.g_avm()._OnMessageFromDOM({type:"event",component:this.g_avd,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_avn(c,a){this.g_avc.g_avo(this.g_avd,c,a)}g_avp(d){for(const[a,b]of d)this.g_avn(a,b)}g_avq(){return this.g_avc}g_avr(){return this.g_avd}g_XA(){this.g_ave||(this.g_avc.g_avs(this.g_afz),this.g_ave=!0)}g_Xo(){this.g_ave&&(this.g_avc.g_avt(this.g_afz),this.g_ave=!1)}g_IM(){}},"use strict",window.g_avu=class extends g_avb{constructor(c,a){super(c,a),this.g_avv=new Map,this.g_avw=!0,this.g_avn("create",b=>this.g_avx(b)),this.g_avn("destroy",b=>this.g_avy(b)),this.g_avn("set-visible",b=>this.g_avz(b)),this.g_avn("update-position",b=>this.g_avA(b)),this.g_avn("update-state",b=>this.g_avB(b)),this.g_avn("focus",b=>this.g_avC(b)),this.g_avn("set-css-style",b=>this.g_avD(b))}g_avE(b){this.g_avw=!!b}g_avF(c,e){this.g_avn(c,b=>{const a=b.elementId,c=this.g_avv.get(a);return e(c,b)})}g_avx(d){const a=d.elementId,b=this.g_X_(a,d);this.g_avv.set(a,b),this.g_avw&&document.body.appendChild(b)}g_X_(){throw new Error("required override")}g_avG(){}g_avy(d){const a=d.elementId,b=this.g_avv.get(a);this.g_avG(b),this.g_avw&&b.parentElement.removeChild(b),this.g_avv.delete(a)}g_avH(d,a,b){b||(b={}),b.elementId=a,this.g_avg(d,b)}g_avI(d,a,b){b||(b={}),b.elementId=a,this.g_avk(d,b)}g_avz(c){if(this.g_avw){const a=this.g_avv.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_avA(d){if(this.g_avw){const a=this.g_avv.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_avB(c){const a=this.g_avv.get(c.elementId);this.g_avJ(a,c)}g_avJ(){throw new Error("required override")}g_avC(c){const a=this.g_avv.get(c.elementId);c.focus?a.focus():a.blur()}g_avD(c){const a=this.g_avv.get(c.elementId);a.style[c.prop]=c.val}g_avK(b){return this.g_avv.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function s(d){if(!d)return"";const a=d.split(".");if(2>a.length)return"";const b=a[a.length-1].toLowerCase();return g.get(b)||""}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;const f=Math.max(navigator.hardwareConcurrency||0,8),g=new Map([["mp4","video/mp4"],["webm","video/webm"],["m4a","audio/mp4"],["mp3","audio/mpeg"],["js","application/javascript"],["wasm","application/wasm"]]),h=[],i=new Map,j=new Map;let k=0;window.g_avL=class b{constructor(b){this.g_avM=b.g_avN,this.g_avO=null,this.g_aeB="",this.g_avP=b.g_avQ,this.g_avR={},this.g_avS=null,this.g_avT=null,this.g_avU=[],this.g_avV=null,this.g_acB=null,this.g_agj=null,this.g_adi=-1,this.g_avW=()=>this.g_avX(),this.g_avY=[],this.g_aeG=b.g_avZ,this.g_av_=!1,this.g_av$=null,("html5"===this.g_aeG||"playable-ad"===this.g_aeG)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_avo("runtime","cordova-fetch-local-file",b=>this.g_awa(b)),this.g_avo("runtime","create-job-worker",b=>this.g_awb(b)),"cordova"===this.g_aeG?document.addEventListener("deviceready",()=>this.g_Ws(b)):this.g_Ws(b)}g_eK(){this.g_awc(),this.g_avO&&(this.g_avO.onmessage=null,this.g_avO=null),this.g_avS&&(this.g_avS.terminate(),this.g_avS=null),this.g_avT&&(this.g_avT.g_eK(),this.g_avT=null),this.g_acB&&(this.g_acB.parentElement.removeChild(this.g_acB),this.g_acB=null)}g_awd(){return this.g_acB}g_fB(){return this.g_aeB}g_avl(){return this.g_avM}g_Ax(){return this.g_aeG}g_agB(){return"cordova"===this.g_aeG&&a}g_awe(){if(!this.g_agB())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_Ws(d){if("playable-ad"===this.g_aeG){this.g_av$=self.c3_base64files,await this.g_awf();for(let a=0,b=d.g_awg.length;a<b;++a){const b=d.g_awg[a].toLowerCase();this.g_av$.hasOwnProperty(b)&&(d.g_awg[a]=URL.createObjectURL(this.g_av$[b]))}}if(d.g_awh)this.g_aeB=d.g_awh;else{const c=location.origin;this.g_aeB=("null"===c?"file:///":c)+location.pathname;const a=this.g_aeB.lastIndexOf("/");-1!==a&&(this.g_aeB=this.g_aeB.substr(0,a+1))}if(d.g_awi)for(const[a,b]of Object.entries(d.g_awi))this.g_avR[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_avO=a.port1,this.g_avO.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_awj(b)),this.g_agj=new self.g_awk(this),await this.g_agj.g_$X(),this.g_awl(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),await this.g_awm(),this.g_avM?await this.g_awn(d,a.port2):await this.g_awo(d,a.port2)}g_awp(b){return this.g_avR.hasOwnProperty(b)?this.g_avR[b]:"playable-ad"===this.g_aeG&&this.g_av$.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_av$[b.toLowerCase()]):b}async g_awq(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_agB()){const a=await this.g_An(this.g_avP+f);return new Worker(URL.createObjectURL(a),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_awl(){if(this.g_awe()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_awr(d){return{baseUrl:this.g_aeB,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_adM(),projectData:d.g_aws,previewImageBlobs:window.cr_previewImageBlobs||this.g_av$,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_avZ,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_awt,jobScheduler:this.g_agj.g_awu(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_avP+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_avP+"opus.wasm.wasm",isWKWebView:this.g_agB(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_awn(e,a){const b=this.g_awp(e.g_awv);this.g_avS=await this.g_awq(b,this.g_aeB,{name:"Runtime"}),this.g_acB=document.createElement("canvas"),this.g_acB.style.display="none";const c=this.g_acB.transferControlToOffscreen();document.body.appendChild(this.g_acB),this.g_avS.postMessage(Object.assign(this.g_awr(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aww||[],engineScripts:e.g_awg}),[a,c,...this.g_agj.g_awx()]),this.g_avU=h.map(b=>new b(this)),this.g_awy()}async g_awo(a,b){this.g_acB=document.createElement("canvas"),this.g_acB.style.display="none",document.body.appendChild(this.g_acB),this.g_avU=h.map(b=>new b(this)),this.g_awy();const c=a.g_awg.map(b=>new URL(b,this.g_aeB).toString());await Promise.all(c.map(a=>p(a)));const d=Object.assign(this.g_awr(a),{isInWorker:!1,messagePort:b,canvas:this.g_acB});this.g_avT=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_avT,d)}async g_awb(){const b=await this.g_agj.g_awz();return{outputPort:b,transferables:[b]}}g_avm(){if(this.g_avM)throw new Error("not available in worker mode");return this.g_avT}g_avh(f,a,b,c,d){this.g_avO.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},this.g_av_?void 0:d)}g_avj(h,a,b,c,d){const e=k++,f=new Promise((c,a)=>{j.set(e,{resolve:c,reject:a})});return this.g_avO.postMessage({type:"event",component:h,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},this.g_av_?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_awA(c);else if("result"===a)this.g_awB(c);else if("runtime-ready"===a)this.g_awC();else throw new Error(`unknown message '${a}'`)}g_awA(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_awD(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_awD(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_awD(c,!1,d.toString())}):this.g_awD(c,!0,f))}g_awD(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_avO.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_awB(f){const a=f.responseId,b=f.isOk,c=f.result,d=j.get(a);b?d.resolve(c):d.reject(c),j.delete(a)}g_avo(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_awE(b){if(h.includes(b))throw new Error("DOM handler already added");h.push(b)}g_awy(){for(const b of this.g_avU)if("runtime"===b.g_avr())return void(this.g_avV=b);throw new Error("cannot find runtime DOM handler")}g_awj(b){this.g_avh("debugger","message",b)}g_awC(){for(const b of this.g_avU)b.g_avf()}static g_adM(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}g_avs(b){this.g_avY.push(b),this.g_awF()}g_avt(c){const a=this.g_avY.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_avY.splice(a,1),this.g_avY.length||this.g_awc()}g_awF(){-1===this.g_adi&&this.g_avY.length&&(this.g_adi=requestAnimationFrame(this.g_avW))}g_awc(){-1!==this.g_adi&&(cancelAnimationFrame(this.g_adi),this.g_adi=-1)}g_avX(){this.g_adi=-1;for(const b of this.g_avY)b();this.g_awF()}g_awG(b){this.g_avV.g_awG(b)}g_awH(b){this.g_avV.g_awH(b)}g_awI(){this.g_avV.g_awI()}g_awJ(b){this.g_avV.g_awJ(b)}g_AP(b){return!!c[b]}async g_agm(c){const a=await this.g_avj("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_gm(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_gn(b){return!this.g_gm(b)}async g_awa(c){const a=c.filename;switch(c.as){case"text":return await this.g_Ar(a);case"blob":return await this.g_An(a);case"blob-url":return await this.g_awK(a);case"buffer":return await this.g_At(a);default:throw new Error("unsupported type");}}g_awL(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Ar(b){const a=await this.g_awL(b);return await q(a)}g_awM(){if(d.length&&!(e>=f)){e++;const b=d.shift();this.g_awN(b.filename,b.g_awO,b.g_awP)}}g_At(f){return new Promise((g,b)=>{d.push({filename:f,g_awO:b=>{e--,this.g_awM(),g(b)},g_awP:c=>{e--,this.g_awM(),b(c)}}),this.g_awM()})}async g_awN(c,a,b){try{const b=await this.g_awL(c),d=await r(b);a(d)}catch(c){b(c)}}async g_An(d,a){a||(a=s(d));const e=await this.g_At(d);return new Blob([e],{type:a})}async g_awK(c){const a=await this.g_An(c);return URL.createObjectURL(a)}async g_awf(){const d=[];for(const[a,b]of Object.entries(this.g_av$))d.push(this.g_awQ(a,b));await Promise.all(d)}async g_awQ(e,a){if("object"==typeof a)this.g_av$[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_av$[e]=c}}g_awm(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_av_=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let c=!1;document.addEventListener("pause",()=>c=!0),document.addEventListener("resume",()=>c=!1);const d=class extends g_avb{constructor(c){super(c,"runtime"),this.g_awR=!0,this.g_awS="any",this.g_awT=null,c.g_avo("canvas","update-size",b=>this.g_awU(b)),c.g_avo("runtime","invoke-download",b=>this.g_awV(b)),c.g_avo("runtime","raster-svg-image",b=>this.g_awW(b)),c.g_avo("runtime","set-target-orientation",b=>this.g_awX(b)),c.g_avo("runtime","register-sw",()=>this.g_awY()),c.g_avo("runtime","post-to-debugger",b=>this.g_awZ(b)),c.g_avo("runtime","before-start-ticking",()=>this.g_aw_()),c.g_avo("runtime","debug-highlight",b=>this.g_aw$(b));const a=c.g_awd();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g_adz()),this.g_axa=new Set,this.g_axb=new WeakSet,this.g_axc=!1}g_aw_(){return window.addEventListener("visibilitychange",()=>this.g_agl(document.hidden)),document.addEventListener("pause",()=>this.g_agl(!0)),document.addEventListener("resume",()=>this.g_agl(!1)),{isSuspended:!!(document.hidden||c)}}g_avf(){window.addEventListener("focus",()=>this.g_axd("window-focus")),window.addEventListener("blur",()=>this.g_axd("window-blur",{parentHasFocus:b()})),window.addEventListener("fullscreenchange",()=>this.g_adA()),window.addEventListener("webkitfullscreenchange",()=>this.g_adA()),window.addEventListener("mozfullscreenchange",()=>this.g_adA()),window.addEventListener("fullscreenerror",b=>this.g_adB(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_adB(b)),window.addEventListener("mozfullscreenerror",b=>this.g_adB(b)),window.addEventListener("keydown",b=>this.g_axe("keydown",b)),window.addEventListener("keyup",b=>this.g_axe("keyup",b)),window.addEventListener("mousemove",b=>this.g_axf("mousemove",b)),window.addEventListener("mousedown",b=>this.g_axf("mousedown",b)),window.addEventListener("mouseup",b=>this.g_axf("mouseup",b)),window.addEventListener("dblclick",b=>this.g_axf("dblclick",b)),window.addEventListener("wheel",b=>this.g_axg("wheel",b)),"undefined"==typeof g_axh?(window.addEventListener("touchstart",b=>this.g_axi("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_axi("pointermove",b)),window.addEventListener("touchend",b=>this.g_axi("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_axi("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_axj("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_axj("pointermove",b)),window.addEventListener("pointerup",b=>this.g_axj("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_axj("pointercancel",b))),window.addEventListener("deviceorientation",b=>this.g_anR(b)),window.addEventListener("devicemotion",b=>this.g_anS(b));const c=()=>this.g_awI();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_axd(c,a){this.g_avg(c,a||null,!0)}g_adz(){this.g_avg("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_awX(b){this.g_awS=b.targetOrientation}g_axk(){const c=this.g_awS;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_adA(){const b=g_avL.g_adM();b&&"any"!==this.g_awS&&this.g_axk(),this.g_avg("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_adB(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_avg("fullscreenerror",{isFullscreen:g_avL.g_adM(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_agl(b){b?this.g_avc.g_awc():this.g_avc.g_awF(),this.g_avg("visibilitychange",{hidden:b})}g_axe(c,a){this.g_avk(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_axf(a,b){g(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_avk(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_axg(c,a){this.g_avg(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_axj(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_avk(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_axi(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_avk(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_anR(b){this.g_avg("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_anS(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_avg("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_awU(d){const a=this.g_avq(),b=a.g_awd();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_awl(),this.g_awR&&(b.style.display="",this.g_awR=!1)}g_awV(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_awW(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_awI(){const c=[...this.g_axa];if(this.g_axa.clear(),!this.g_axc)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_axb.has(d)||this.g_axa.add(d)})}}g_awG(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_axb.delete(c);let a;try{a=c.play()}catch(a){return void this.g_axa.add(c)}a&&a.catch(()=>{this.g_axb.has(c)||this.g_axa.add(c)})}g_awH(b){this.g_axa.delete(b),this.g_axb.add(b)}g_awJ(b){this.g_axc=!!b}g_aw$(d){const a=d.show;if(!a)return void(this.g_awT&&(this.g_awT.style.display="none"));this.g_awT||(this.g_awT=document.createElement("div"),this.g_awT.id="inspectOutline",document.body.appendChild(this.g_awT));const b=this.g_awT;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_awY(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_awZ(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}};g_avL.g_awE(d)}{const c=document.currentScript.src;self.g_awk=class{constructor(a){this.g_axl=a,this.g_aeB=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fB(),this.g_air=Math.min(navigator.hardwareConcurrency||2,16),this.g_axm=null,this.g_axn=[],this.g_aip=null,this.g_axo=null}async g_$X(){if(this.g_axp)throw new Error("already initialised");this.g_axp=!0;const c=this.g_axl.g_awp("dispatchWorker.js");this.g_axm=await this.g_axl.g_awq(c,this.g_aeB,{name:"DispatchWorker"});const a=new MessageChannel;this.g_aip=a.port1,this.g_axm.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_axo=await this.g_awz()}async g_awz(){const f=this.g_axn.length,a=this.g_axl.g_awp("jobWorker.js"),b=await this.g_axl.g_awq(a,this.g_aeB,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_axm.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_axn.push(b),d.port1}g_awu(){return{inputPort:this.g_aip,outputPort:this.g_axo,maxNumWorkers:this.g_air}}g_awx(){return[this.g_aip,this.g_axo]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_avL({g_avN:!1,g_awv:"workerMain.js",g_awg:["scripts/c3runtime.js"],g_avQ:"scripts/",g_avZ:"html5"})}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_avu{constructor(b){super(b,"text-input"),this.g_avF("scroll-to-bottom",b=>this.g_axq(b))}g_X_(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_avI("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_avI("dblclick",b)}),d.addEventListener("input",()=>this.g_avH("change",b,{text:d.value})),this.g_avJ(d,c),d}g_avJ(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck,c.id=a.id}g_axq(b){b.scrollTop=b.scrollHeight}};g_avL.g_awE(b)}{const b=class extends g_avb{constructor(b){super(b,"browser"),this.g_aeG="",this.g_avn("get-initial-state",b=>this.g_axt(b)),this.g_avn("ready-for-sw-messages",()=>this.g_axu()),this.g_avn("alert",b=>this.g_axv(b)),this.g_avn("close",()=>this.g_axw()),this.g_avn("set-focus",b=>this.g_avC(b)),this.g_avn("vibrate",b=>this.g_axx(b)),this.g_avn("lock-orientation",b=>this.g_axy(b)),this.g_avn("unlock-orientation",()=>this.g_axz()),this.g_avn("navigate",b=>this.g_axA(b)),this.g_avn("request-fullscreen",()=>this.g_axB()),this.g_avn("exit-fullscreen",()=>this.g_axC()),window.addEventListener("online",()=>this.g_aqK(!0)),window.addEventListener("offline",()=>this.g_aqK(!1)),document.addEventListener("backbutton",()=>this.g_axD()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_axE(b))}g_axt(b){return this.g_aeG=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_axu(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_avg("sw-message",b.data))}g_aqK(b){this.g_avg("online-state",{isOnline:b})}g_axD(){this.g_avg("backbutton")}g_axE(b){b.handled=!0,this.g_avg("backbutton")}g_axF(){return"nwjs"===this.g_aeG?nw.Window.get():null}g_axv(b){alert(b.message)}g_axw(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_avC(c){const d=c.isFocus;if("nwjs"===this.g_aeG){const b=this.g_axF();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_axx(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_axy(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_axz(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_axA(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_axG();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_aqJ&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_axB(){const b=document.documentElement;b.requestFullscreen?b.requestFullscreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.msRequestFullscreen?b.msRequestFullscreen():b.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?b.webkitRequestFullScreen():b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}g_axC(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_avL.g_awE(b)}