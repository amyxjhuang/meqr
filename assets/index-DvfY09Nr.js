var Mp=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var G_=Mp((q_,Pp)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ue={},Xr=[],yn=()=>{},Op=()=>!1,aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ru=n=>n.startsWith("onUpdate:"),ht=Object.assign,ou=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Bp=Object.prototype.hasOwnProperty,Be=(n,t)=>Bp.call(n,t),me=Array.isArray,$r=n=>sa(n)==="[object Map]",cf=n=>sa(n)==="[object Set]",we=n=>typeof n=="function",Je=n=>typeof n=="string",lr=n=>typeof n=="symbol",Ge=n=>n!==null&&typeof n=="object",lf=n=>(Ge(n)||we(n))&&we(n.then)&&we(n.catch),ff=Object.prototype.toString,sa=n=>ff.call(n),Lp=n=>sa(n).slice(8,-1),hf=n=>sa(n)==="[object Object]",iu=n=>Je(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,_o=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Wp=/-(\w)/g,ar=ua(n=>n.replace(Wp,(t,e)=>e?e.toUpperCase():"")),Up=/\B([A-Z])/g,Tr=ua(n=>n.replace(Up,"-$1").toLowerCase()),df=ua(n=>n.charAt(0).toUpperCase()+n.slice(1)),Na=ua(n=>n?`on${df(n)}`:""),nr=(n,t)=>!Object.is(n,t),Fa=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},pf=(n,t,e,r=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:r,value:e})},Vp=n=>{const t=parseFloat(n);return isNaN(t)?n:t},zp=n=>{const t=Je(n)?Number(n):NaN;return isNaN(t)?n:t};let Rc;const ca=()=>Rc||(Rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function No(n){if(me(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],o=Je(r)?qp(r):No(r);if(o)for(const i in o)t[i]=o[i]}return t}else if(Je(n)||Ge(n))return n}const Hp=/;(?![^(]*\))/g,Gp=/:([^]+)/,jp=/\/\*[^]*?\*\//g;function qp(n){const t={};return n.replace(jp,"").split(Hp).forEach(e=>{if(e){const r=e.split(Gp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function au(n){let t="";if(Je(n))t=n;else if(me(n))for(let e=0;e<n.length;e++){const r=au(n[e]);r&&(t+=r+" ")}else if(Ge(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xp=nu(Kp);function vf(n){return!!n||n===""}const gf=n=>!!(n&&n.__v_isRef===!0),Ei=n=>Je(n)?n:n==null?"":me(n)||Ge(n)&&(n.toString===ff||!we(n.toString))?gf(n)?Ei(n.value):JSON.stringify(n,mf,2):String(n),mf=(n,t)=>gf(t)?mf(n,t.value):$r(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,o],i)=>(e[Pa(r,i)+" =>"]=o,e),{})}:cf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Pa(e))}:lr(t)?Pa(t):Ge(t)&&!me(t)&&!hf(t)?String(t):t,Pa=(n,t="")=>{var e;return lr(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class $p{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=At,!t&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=At;try{return At=this,t()}finally{At=e}}}on(){++this._on===1&&(this.prevScope=At,At=this)}off(){this._on>0&&--this._on===0&&(At=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(this.effects.length=0,e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Yp(){return At}let Ve;const Ma=new WeakSet;class yf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,At&&At.active&&At.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ma.has(this)&&(Ma.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sc(this),wf(this);const t=Ve,e=en;Ve=this,en=!0;try{return this.fn()}finally{_f(this),Ve=t,en=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)cu(t);this.deps=this.depsTail=void 0,Sc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ma.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xs(this)&&this.run()}get dirty(){return xs(this)}}let xf=0,Co,Eo;function bf(n,t=!1){if(n.flags|=8,t){n.next=Eo,Eo=n;return}n.next=Co,Co=n}function su(){xf++}function uu(){if(--xf>0)return;if(Eo){let t=Eo;for(Eo=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Co;){let t=Co;for(Co=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){n||(n=r)}t=e}}if(n)throw n}function wf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function _f(n){let t,e=n.depsTail,r=e;for(;r;){const o=r.prevDep;r.version===-1?(r===e&&(e=o),cu(r),Jp(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}n.deps=t,n.depsTail=e}function xs(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Cf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Cf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Fo)||(n.globalVersion=Fo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!xs(n))))return;n.flags|=2;const t=n.dep,e=Ve,r=en;Ve=n,en=!0;try{wf(n);const o=n.fn(n._value);(t.version===0||nr(o,n._value))&&(n.flags|=128,n._value=o,t.version++)}catch(o){throw t.version++,o}finally{Ve=e,en=r,_f(n),n.flags&=-3}}function cu(n,t=!1){const{dep:e,prevSub:r,nextSub:o}=n;if(r&&(r.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=r,n.nextSub=void 0),e.subs===n&&(e.subs=r,!r&&e.computed)){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)cu(i,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Jp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let en=!0;const Ef=[];function Bn(){Ef.push(en),en=!1}function Ln(){const n=Ef.pop();en=n===void 0?!0:n}function Sc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Ve;Ve=void 0;try{t()}finally{Ve=e}}}let Fo=0;class Qp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Ve||!en||Ve===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Ve)e=this.activeLink=new Qp(Ve,this),Ve.deps?(e.prevDep=Ve.depsTail,Ve.depsTail.nextDep=e,Ve.depsTail=e):Ve.deps=Ve.depsTail=e,If(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const r=e.nextDep;r.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=r),e.prevDep=Ve.depsTail,e.nextDep=void 0,Ve.depsTail.nextDep=e,Ve.depsTail=e,Ve.deps===e&&(Ve.deps=r)}return e}trigger(t){this.version++,Fo++,this.notify(t)}notify(t){su();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{uu()}}}function If(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)If(r)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const bs=new WeakMap,Rr=Symbol(""),ws=Symbol(""),Po=Symbol("");function vt(n,t,e){if(en&&Ve){let r=bs.get(n);r||bs.set(n,r=new Map);let o=r.get(e);o||(r.set(e,o=new lu),o.map=r,o.key=e),o.track()}}function Pn(n,t,e,r,o,i){const a=bs.get(n);if(!a){Fo++;return}const s=u=>{u&&u.trigger()};if(su(),t==="clear")a.forEach(s);else{const u=me(n),c=u&&iu(e);if(u&&e==="length"){const l=Number(r);a.forEach((f,h)=>{(h==="length"||h===Po||!lr(h)&&h>=l)&&s(f)})}else switch((e!==void 0||a.has(void 0))&&s(a.get(e)),c&&s(a.get(Po)),t){case"add":u?c&&s(a.get("length")):(s(a.get(Rr)),$r(n)&&s(a.get(ws)));break;case"delete":u||(s(a.get(Rr)),$r(n)&&s(a.get(ws)));break;case"set":$r(n)&&s(a.get(Rr));break}}uu()}function Lr(n){const t=Me(n);return t===n?t:(vt(t,"iterate",Po),tn(n)?t:t.map(It))}function fu(n){return vt(n=Me(n),"iterate",Po),n}const Zp={__proto__:null,[Symbol.iterator](){return Oa(this,Symbol.iterator,It)},concat(...n){return Lr(this).concat(...n.map(t=>me(t)?Lr(t):t))},entries(){return Oa(this,"entries",n=>(n[1]=It(n[1]),n))},every(n,t){return kn(this,"every",n,t,void 0,arguments)},filter(n,t){return kn(this,"filter",n,t,e=>e.map(It),arguments)},find(n,t){return kn(this,"find",n,t,It,arguments)},findIndex(n,t){return kn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return kn(this,"findLast",n,t,It,arguments)},findLastIndex(n,t){return kn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return kn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ba(this,"includes",n)},indexOf(...n){return Ba(this,"indexOf",n)},join(n){return Lr(this).join(n)},lastIndexOf(...n){return Ba(this,"lastIndexOf",n)},map(n,t){return kn(this,"map",n,t,void 0,arguments)},pop(){return ho(this,"pop")},push(...n){return ho(this,"push",n)},reduce(n,...t){return kc(this,"reduce",n,t)},reduceRight(n,...t){return kc(this,"reduceRight",n,t)},shift(){return ho(this,"shift")},some(n,t){return kn(this,"some",n,t,void 0,arguments)},splice(...n){return ho(this,"splice",n)},toReversed(){return Lr(this).toReversed()},toSorted(n){return Lr(this).toSorted(n)},toSpliced(...n){return Lr(this).toSpliced(...n)},unshift(...n){return ho(this,"unshift",n)},values(){return Oa(this,"values",It)}};function Oa(n,t,e){const r=fu(n),o=r[t]();return r!==n&&!tn(n)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=e(i.value)),i}),o}const ev=Array.prototype;function kn(n,t,e,r,o,i){const a=fu(n),s=a!==n&&!tn(n),u=a[t];if(u!==ev[t]){const f=u.apply(n,i);return s?It(f):f}let c=e;a!==n&&(s?c=function(f,h){return e.call(this,It(f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const l=u.call(a,c,r);return s&&o?o(l):l}function kc(n,t,e,r){const o=fu(n);let i=e;return o!==n&&(tn(n)?e.length>3&&(i=function(a,s,u){return e.call(this,a,s,u,n)}):i=function(a,s,u){return e.call(this,a,It(s),u,n)}),o[t](i,...r)}function Ba(n,t,e){const r=Me(n);vt(r,"iterate",Po);const o=r[t](...e);return(o===-1||o===!1)&&vu(e[0])?(e[0]=Me(e[0]),r[t](...e)):o}function ho(n,t,e=[]){Bn(),su();const r=Me(n)[t].apply(n,e);return uu(),Ln(),r}const tv=nu("__proto__,__v_isRef,__isVue"),Rf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(lr));function nv(n){lr(n)||(n=String(n));const t=Me(this);return vt(t,"has",n),t.hasOwnProperty(n)}class Sf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,r){if(e==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return i;if(e==="__v_raw")return r===(o?i?hv:Tf:i?Df:Af).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=me(t);if(!o){let u;if(a&&(u=Zp[e]))return u;if(e==="hasOwnProperty")return nv}const s=Reflect.get(t,e,_t(t)?t:r);return(lr(e)?Rf.has(e):tv(e))||(o||vt(t,"get",e),i)?s:_t(s)?a&&iu(e)?s:s.value:Ge(s)?o?Nf(s):du(s):s}}class kf extends Sf{constructor(t=!1){super(!1,t)}set(t,e,r,o){let i=t[e];if(!this._isShallow){const u=kr(i);if(!tn(r)&&!kr(r)&&(i=Me(i),r=Me(r)),!me(t)&&_t(i)&&!_t(r))return u?!1:(i.value=r,!0)}const a=me(t)&&iu(e)?Number(e)<t.length:Be(t,e),s=Reflect.set(t,e,r,_t(t)?t:o);return t===Me(o)&&(a?nr(r,i)&&Pn(t,"set",e,r):Pn(t,"add",e,r)),s}deleteProperty(t,e){const r=Be(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&r&&Pn(t,"delete",e,void 0),o}has(t,e){const r=Reflect.has(t,e);return(!lr(e)||!Rf.has(e))&&vt(t,"has",e),r}ownKeys(t){return vt(t,"iterate",me(t)?"length":Rr),Reflect.ownKeys(t)}}class rv extends Sf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ov=new kf,iv=new rv,av=new kf(!0),_s=n=>n,ii=n=>Reflect.getPrototypeOf(n);function sv(n,t,e){return function(...r){const o=this.__v_raw,i=Me(o),a=$r(i),s=n==="entries"||n===Symbol.iterator&&a,u=n==="keys"&&a,c=o[n](...r),l=e?_s:t?Cs:It;return!t&&vt(i,"iterate",u?ws:Rr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:s?[l(f[0]),l(f[1])]:l(f),done:h}},[Symbol.iterator](){return this}}}}function ai(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function uv(n,t){const e={get(o){const i=this.__v_raw,a=Me(i),s=Me(o);n||(nr(o,s)&&vt(a,"get",o),vt(a,"get",s));const{has:u}=ii(a),c=t?_s:n?Cs:It;if(u.call(a,o))return c(i.get(o));if(u.call(a,s))return c(i.get(s));i!==a&&i.get(o)},get size(){const o=this.__v_raw;return!n&&vt(Me(o),"iterate",Rr),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,a=Me(i),s=Me(o);return n||(nr(o,s)&&vt(a,"has",o),vt(a,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const a=this,s=a.__v_raw,u=Me(s),c=t?_s:n?Cs:It;return!n&&vt(u,"iterate",Rr),s.forEach((l,f)=>o.call(i,c(l),c(f),a))}};return ht(e,n?{add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear")}:{add(o){!t&&!tn(o)&&!kr(o)&&(o=Me(o));const i=Me(this);return ii(i).has.call(i,o)||(i.add(o),Pn(i,"add",o,o)),this},set(o,i){!t&&!tn(i)&&!kr(i)&&(i=Me(i));const a=Me(this),{has:s,get:u}=ii(a);let c=s.call(a,o);c||(o=Me(o),c=s.call(a,o));const l=u.call(a,o);return a.set(o,i),c?nr(i,l)&&Pn(a,"set",o,i):Pn(a,"add",o,i),this},delete(o){const i=Me(this),{has:a,get:s}=ii(i);let u=a.call(i,o);u||(o=Me(o),u=a.call(i,o)),s&&s.call(i,o);const c=i.delete(o);return u&&Pn(i,"delete",o,void 0),c},clear(){const o=Me(this),i=o.size!==0,a=o.clear();return i&&Pn(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=sv(o,n,t)}),e}function hu(n,t){const e=uv(n,t);return(r,o,i)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(Be(e,o)&&o in r?e:r,o,i)}const cv={get:hu(!1,!1)},lv={get:hu(!1,!0)},fv={get:hu(!0,!1)},Af=new WeakMap,Df=new WeakMap,Tf=new WeakMap,hv=new WeakMap;function dv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pv(n){return n.__v_skip||!Object.isExtensible(n)?0:dv(Lp(n))}function du(n){return kr(n)?n:pu(n,!1,ov,cv,Af)}function vv(n){return pu(n,!1,av,lv,Df)}function Nf(n){return pu(n,!0,iv,fv,Tf)}function pu(n,t,e,r,o){if(!Ge(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=pv(n);if(i===0)return n;const a=o.get(n);if(a)return a;const s=new Proxy(n,i===2?r:e);return o.set(n,s),s}function Io(n){return kr(n)?Io(n.__v_raw):!!(n&&n.__v_isReactive)}function kr(n){return!!(n&&n.__v_isReadonly)}function tn(n){return!!(n&&n.__v_isShallow)}function vu(n){return n?!!n.__v_raw:!1}function Me(n){const t=n&&n.__v_raw;return t?Me(t):n}function gv(n){return!Be(n,"__v_skip")&&Object.isExtensible(n)&&pf(n,"__v_skip",!0),n}const It=n=>Ge(n)?du(n):n,Cs=n=>Ge(n)?Nf(n):n;function _t(n){return n?n.__v_isRef===!0:!1}function qt(n){return mv(n,!1)}function mv(n,t){return _t(n)?n:new yv(n,t)}class yv{constructor(t,e){this.dep=new lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Me(t),this._value=e?t:It(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,r=this.__v_isShallow||tn(t)||kr(t);t=r?t:Me(t),nr(t,e)&&(this._rawValue=t,this._value=r?t:It(t),this.dep.trigger())}}function xv(n){return _t(n)?n.value:n}const bv={get:(n,t,e)=>t==="__v_raw"?n:xv(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const o=n[t];return _t(o)&&!_t(e)?(o.value=e,!0):Reflect.set(n,t,e,r)}};function Ff(n){return Io(n)?n:new Proxy(n,bv)}class wv{constructor(t,e,r){this.fn=t,this.setter=e,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return bf(this,!0),!0}get value(){const t=this.dep.track();return Cf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function _v(n,t,e=!1){let r,o;return we(n)?r=n:(r=n.get,o=n.set),new wv(r,o,e)}const si={},Ai=new WeakMap;let xr;function Cv(n,t=!1,e=xr){if(e){let r=Ai.get(e);r||Ai.set(e,r=[]),r.push(n)}}function Ev(n,t,e=Ue){const{immediate:r,deep:o,once:i,scheduler:a,augmentJob:s,call:u}=e,c=y=>o?y:tn(y)||o===!1||o===0?Mn(y,1):Mn(y);let l,f,h,d,p=!1,v=!1;if(_t(n)?(f=()=>n.value,p=tn(n)):Io(n)?(f=()=>c(n),p=!0):me(n)?(v=!0,p=n.some(y=>Io(y)||tn(y)),f=()=>n.map(y=>{if(_t(y))return y.value;if(Io(y))return c(y);if(we(y))return u?u(y,2):y()})):we(n)?t?f=u?()=>u(n,2):n:f=()=>{if(h){Bn();try{h()}finally{Ln()}}const y=xr;xr=l;try{return u?u(n,3,[d]):n(d)}finally{xr=y}}:f=yn,t&&o){const y=f,w=o===!0?1/0:o;f=()=>Mn(y(),w)}const g=Yp(),m=()=>{l.stop(),g&&g.active&&ou(g.effects,l)};if(i&&t){const y=t;t=(...w)=>{y(...w),m()}}let x=v?new Array(n.length).fill(si):si;const b=y=>{if(!(!(l.flags&1)||!l.dirty&&!y))if(t){const w=l.run();if(o||p||(v?w.some((_,S)=>nr(_,x[S])):nr(w,x))){h&&h();const _=xr;xr=l;try{const S=[w,x===si?void 0:v&&x[0]===si?[]:x,d];x=w,u?u(t,3,S):t(...S)}finally{xr=_}}}else l.run()};return s&&s(b),l=new yf(f),l.scheduler=a?()=>a(b,!1):b,d=y=>Cv(y,!1,l),h=l.onStop=()=>{const y=Ai.get(l);if(y){if(u)u(y,4);else for(const w of y)w();Ai.delete(l)}},t?r?b(!0):x=l.run():a?a(b.bind(null,!0),!0):l.run(),m.pause=l.pause.bind(l),m.resume=l.resume.bind(l),m.stop=m,m}function Mn(n,t=1/0,e){if(t<=0||!Ge(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,_t(n))Mn(n.value,t,e);else if(me(n))for(let r=0;r<n.length;r++)Mn(n[r],t,e);else if(cf(n)||$r(n))n.forEach(r=>{Mn(r,t,e)});else if(hf(n)){for(const r in n)Mn(n[r],t,e);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Mn(n[r],t,e)}return n}/**
* @vue/runtime-core v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ko(n,t,e,r){try{return r?n(...r):n()}catch(o){la(o,t,e)}}function rn(n,t,e,r){if(we(n)){const o=Ko(n,t,e,r);return o&&lf(o)&&o.catch(i=>{la(i,t,e)}),o}if(me(n)){const o=[];for(let i=0;i<n.length;i++)o.push(rn(n[i],t,e,r));return o}}function la(n,t,e,r=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ue;if(t){let s=t.parent;const u=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const l=s.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](n,u,c)===!1)return}s=s.parent}if(i){Bn(),Ko(i,null,10,[n,u,c]),Ln();return}}Iv(n,e,o,r,a)}function Iv(n,t,e,r=!0,o=!1){if(o)throw n;console.error(n)}const Rt=[];let ln=-1;const Yr=[];let Yn=null,Hr=0;const Pf=Promise.resolve();let Di=null;function Rv(n){const t=Di||Pf;return n?t.then(this?n.bind(this):n):t}function Sv(n){let t=ln+1,e=Rt.length;for(;t<e;){const r=t+e>>>1,o=Rt[r],i=Mo(o);i<n||i===n&&o.flags&2?t=r+1:e=r}return t}function gu(n){if(!(n.flags&1)){const t=Mo(n),e=Rt[Rt.length-1];!e||!(n.flags&2)&&t>=Mo(e)?Rt.push(n):Rt.splice(Sv(t),0,n),n.flags|=1,Mf()}}function Mf(){Di||(Di=Pf.then(Bf))}function kv(n){me(n)?Yr.push(...n):Yn&&n.id===-1?Yn.splice(Hr+1,0,n):n.flags&1||(Yr.push(n),n.flags|=1),Mf()}function Ac(n,t,e=ln+1){for(;e<Rt.length;e++){const r=Rt[e];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Rt.splice(e,1),e--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Of(n){if(Yr.length){const t=[...new Set(Yr)].sort((e,r)=>Mo(e)-Mo(r));if(Yr.length=0,Yn){Yn.push(...t);return}for(Yn=t,Hr=0;Hr<Yn.length;Hr++){const e=Yn[Hr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Yn=null,Hr=0}}const Mo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Bf(n){try{for(ln=0;ln<Rt.length;ln++){const t=Rt[ln];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ko(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ln<Rt.length;ln++){const t=Rt[ln];t&&(t.flags&=-2)}ln=-1,Rt.length=0,Of(),Di=null,(Rt.length||Yr.length)&&Bf()}}let Lt=null,Lf=null;function Ti(n){const t=Lt;return Lt=n,Lf=n&&n.type.__scopeId||null,t}function Es(n,t=Lt,e){if(!t||n._n)return n;const r=(...o)=>{r._d&&Wc(-1);const i=Ti(t);let a;try{a=n(...o)}finally{Ti(i),r._d&&Wc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Av(n,t){if(Lt===null)return n;const e=va(Lt),r=n.dirs||(n.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,s,u=Ue]=t[o];i&&(we(i)&&(i={mounted:i,updated:i}),i.deep&&Mn(a),r.push({dir:i,instance:e,value:a,oldValue:void 0,arg:s,modifiers:u}))}return n}function pr(n,t,e,r){const o=n.dirs,i=t&&t.dirs;for(let a=0;a<o.length;a++){const s=o[a];i&&(s.oldValue=i[a].value);let u=s.dir[r];u&&(Bn(),rn(u,e,8,[n.el,s,n,t]),Ln())}}const Dv=Symbol("_vte"),Wf=n=>n.__isTeleport,Jn=Symbol("_leaveCb"),ui=Symbol("_enterCb");function Tv(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mu(()=>{n.isMounted=!0}),Kf(()=>{n.isUnmounting=!0}),n}const Kt=[Function,Array],Uf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},Vf=n=>{const t=n.subTree;return t.component?Vf(t.component):t},Nv={name:"BaseTransition",props:Uf,setup(n,{slots:t}){const e=Ag(),r=Tv();return()=>{const o=t.default&&Gf(t.default(),!0);if(!o||!o.length)return;const i=zf(o),a=Me(n),{mode:s}=a;if(r.isLeaving)return La(i);const u=Dc(i);if(!u)return La(i);let c=Is(u,a,r,e,f=>c=f);u.type!==St&&Oo(u,c);let l=e.subTree&&Dc(e.subTree);if(l&&l.type!==St&&!_r(u,l)&&Vf(e).type!==St){let f=Is(l,a,r,e);if(Oo(l,f),s==="out-in"&&u.type!==St)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,l=void 0},La(i);s==="in-out"&&u.type!==St?f.delayLeave=(h,d,p)=>{const v=Hf(r,l);v[String(l.key)]=l,h[Jn]=()=>{d(),h[Jn]=void 0,delete c.delayedLeave,l=void 0},c.delayedLeave=()=>{p(),delete c.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return i}}};function zf(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==St){t=e;break}}return t}const Fv=Nv;function Hf(n,t){const{leavingVNodes:e}=n;let r=e.get(t.type);return r||(r=Object.create(null),e.set(t.type,r)),r}function Is(n,t,e,r,o){const{appear:i,mode:a,persisted:s=!1,onBeforeEnter:u,onEnter:c,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:g,onAppear:m,onAfterAppear:x,onAppearCancelled:b}=t,y=String(n.key),w=Hf(e,n),_=(E,I)=>{E&&rn(E,r,9,I)},S=(E,I)=>{const F=I[1];_(E,I),me(E)?E.every(A=>A.length<=1)&&F():E.length<=1&&F()},k={mode:a,persisted:s,beforeEnter(E){let I=u;if(!e.isMounted)if(i)I=g||u;else return;E[Jn]&&E[Jn](!0);const F=w[y];F&&_r(n,F)&&F.el[Jn]&&F.el[Jn](),_(I,[E])},enter(E){let I=c,F=l,A=f;if(!e.isMounted)if(i)I=m||c,F=x||l,A=b||f;else return;let B=!1;const W=E[ui]=z=>{B||(B=!0,z?_(A,[E]):_(F,[E]),k.delayedLeave&&k.delayedLeave(),E[ui]=void 0)};I?S(I,[E,W]):W()},leave(E,I){const F=String(n.key);if(E[ui]&&E[ui](!0),e.isUnmounting)return I();_(h,[E]);let A=!1;const B=E[Jn]=W=>{A||(A=!0,I(),W?_(v,[E]):_(p,[E]),E[Jn]=void 0,w[F]===n&&delete w[F])};w[F]=n,d?S(d,[E,B]):B()},clone(E){const I=Is(E,t,e,r,o);return o&&o(I),I}};return k}function La(n){if(fa(n))return n=sr(n),n.children=null,n}function Dc(n){if(!fa(n))return Wf(n.type)&&n.children?zf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&we(e.default))return e.default()}}function Oo(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Oo(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Gf(n,t=!1,e){let r=[],o=0;for(let i=0;i<n.length;i++){let a=n[i];const s=e==null?a.key:String(e)+String(a.key!=null?a.key:i);a.type===hn?(a.patchFlag&128&&o++,r=r.concat(Gf(a.children,t,s))):(t||a.type!==St)&&r.push(s!=null?sr(a,{key:s}):a)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function jf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ni(n,t,e,r,o=!1){if(me(n)){n.forEach((p,v)=>Ni(p,t&&(me(t)?t[v]:t),e,r,o));return}if(Ro(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ni(n,t,e,r.component.subTree);return}const i=r.shapeFlag&4?va(r.component):r.el,a=o?null:i,{i:s,r:u}=n,c=t&&t.r,l=s.refs===Ue?s.refs={}:s.refs,f=s.setupState,h=Me(f),d=f===Ue?()=>!1:p=>Be(h,p);if(c!=null&&c!==u&&(Je(c)?(l[c]=null,d(c)&&(f[c]=null)):_t(c)&&(c.value=null)),we(u))Ko(u,s,12,[a,l]);else{const p=Je(u),v=_t(u);if(p||v){const g=()=>{if(n.f){const m=p?d(u)?f[u]:l[u]:u.value;o?me(m)&&ou(m,i):me(m)?m.includes(i)||m.push(i):p?(l[u]=[i],d(u)&&(f[u]=l[u])):(u.value=[i],n.k&&(l[n.k]=u.value))}else p?(l[u]=a,d(u)&&(f[u]=a)):v&&(u.value=a,n.k&&(l[n.k]=a))};a?(g.id=-1,Mt(g,e)):g()}}}ca().requestIdleCallback;ca().cancelIdleCallback;const Ro=n=>!!n.type.__asyncLoader,fa=n=>n.type.__isKeepAlive;function Pv(n,t){qf(n,"a",t)}function Mv(n,t){qf(n,"da",t)}function qf(n,t,e=mt){const r=n.__wdc||(n.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(ha(t,r,e),e){let o=e.parent;for(;o&&o.parent;)fa(o.parent.vnode)&&Ov(r,t,e,o),o=o.parent}}function Ov(n,t,e,r){const o=ha(t,n,r,!0);yu(()=>{ou(r[t],o)},e)}function ha(n,t,e=mt,r=!1){if(e){const o=e[n]||(e[n]=[]),i=t.__weh||(t.__weh=(...a)=>{Bn();const s=Xo(e),u=rn(t,e,n,a);return s(),Ln(),u});return r?o.unshift(i):o.push(i),i}}const Wn=n=>(t,e=mt)=>{(!Lo||n==="sp")&&ha(n,(...r)=>t(...r),e)},Bv=Wn("bm"),mu=Wn("m"),Lv=Wn("bu"),Wv=Wn("u"),Kf=Wn("bum"),yu=Wn("um"),Uv=Wn("sp"),Vv=Wn("rtg"),zv=Wn("rtc");function Hv(n,t=mt){ha("ec",n,t)}const Gv=Symbol.for("v-ndc"),Rs=n=>n?dh(n)?va(n):Rs(n.parent):null,So=ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Rs(n.parent),$root:n=>Rs(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>$f(n),$forceUpdate:n=>n.f||(n.f=()=>{gu(n.update)}),$nextTick:n=>n.n||(n.n=Rv.bind(n.proxy)),$watch:n=>hg.bind(n)}),Wa=(n,t)=>n!==Ue&&!n.__isScriptSetup&&Be(n,t),jv={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:r,data:o,props:i,accessCache:a,type:s,appContext:u}=n;let c;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return r[t];case 2:return o[t];case 4:return e[t];case 3:return i[t]}else{if(Wa(r,t))return a[t]=1,r[t];if(o!==Ue&&Be(o,t))return a[t]=2,o[t];if((c=n.propsOptions[0])&&Be(c,t))return a[t]=3,i[t];if(e!==Ue&&Be(e,t))return a[t]=4,e[t];Ss&&(a[t]=0)}}const l=So[t];let f,h;if(l)return t==="$attrs"&&vt(n.attrs,"get",""),l(n);if((f=s.__cssModules)&&(f=f[t]))return f;if(e!==Ue&&Be(e,t))return a[t]=4,e[t];if(h=u.config.globalProperties,Be(h,t))return h[t]},set({_:n},t,e){const{data:r,setupState:o,ctx:i}=n;return Wa(o,t)?(o[t]=e,!0):r!==Ue&&Be(r,t)?(r[t]=e,!0):Be(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:o,propsOptions:i}},a){let s;return!!e[a]||n!==Ue&&Be(n,a)||Wa(t,a)||(s=i[0])&&Be(s,a)||Be(r,a)||Be(So,a)||Be(o.config.globalProperties,a)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Be(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Tc(n){return me(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ss=!0;function qv(n){const t=$f(n),e=n.proxy,r=n.ctx;Ss=!1,t.beforeCreate&&Nc(t.beforeCreate,n,"bc");const{data:o,computed:i,methods:a,watch:s,provide:u,inject:c,created:l,beforeMount:f,mounted:h,beforeUpdate:d,updated:p,activated:v,deactivated:g,beforeDestroy:m,beforeUnmount:x,destroyed:b,unmounted:y,render:w,renderTracked:_,renderTriggered:S,errorCaptured:k,serverPrefetch:E,expose:I,inheritAttrs:F,components:A,directives:B,filters:W}=t;if(c&&Kv(c,r,null),a)for(const V in a){const L=a[V];we(L)&&(r[V]=L.bind(e))}if(o){const V=o.call(e,e);Ge(V)&&(n.data=du(V))}if(Ss=!0,i)for(const V in i){const L=i[V],K=we(L)?L.bind(e,e):we(L.get)?L.get.bind(e,e):yn,Y=!we(L)&&we(L.set)?L.set.bind(e):yn,ne=Mg({get:K,set:Y});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>ne.value,set:oe=>ne.value=oe})}if(s)for(const V in s)Xf(s[V],r,e,V);if(u){const V=we(u)?u.call(e):u;Reflect.ownKeys(V).forEach(L=>{Zv(L,V[L])})}l&&Nc(l,n,"c");function H(V,L){me(L)?L.forEach(K=>V(K.bind(e))):L&&V(L.bind(e))}if(H(Bv,f),H(mu,h),H(Lv,d),H(Wv,p),H(Pv,v),H(Mv,g),H(Hv,k),H(zv,_),H(Vv,S),H(Kf,x),H(yu,y),H(Uv,E),me(I))if(I.length){const V=n.exposed||(n.exposed={});I.forEach(L=>{Object.defineProperty(V,L,{get:()=>e[L],set:K=>e[L]=K})})}else n.exposed||(n.exposed={});w&&n.render===yn&&(n.render=w),F!=null&&(n.inheritAttrs=F),A&&(n.components=A),B&&(n.directives=B),E&&jf(n)}function Kv(n,t,e=yn){me(n)&&(n=ks(n));for(const r in n){const o=n[r];let i;Ge(o)?"default"in o?i=Ii(o.from||r,o.default,!0):i=Ii(o.from||r):i=Ii(o),_t(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function Nc(n,t,e){rn(me(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function Xf(n,t,e,r){let o=r.includes(".")?uh(e,r):()=>e[r];if(Je(n)){const i=t[n];we(i)&&Va(o,i)}else if(we(n))Va(o,n.bind(e));else if(Ge(n))if(me(n))n.forEach(i=>Xf(i,t,e,r));else{const i=we(n.handler)?n.handler.bind(e):t[n.handler];we(i)&&Va(o,i,n)}}function $f(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,s=i.get(t);let u;return s?u=s:!o.length&&!e&&!r?u=t:(u={},o.length&&o.forEach(c=>Fi(u,c,a,!0)),Fi(u,t,a)),Ge(t)&&i.set(t,u),u}function Fi(n,t,e,r=!1){const{mixins:o,extends:i}=t;i&&Fi(n,i,e,!0),o&&o.forEach(a=>Fi(n,a,e,!0));for(const a in t)if(!(r&&a==="expose")){const s=Xv[a]||e&&e[a];n[a]=s?s(n[a],t[a]):t[a]}return n}const Xv={data:Fc,props:Pc,emits:Pc,methods:wo,computed:wo,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:wo,directives:wo,watch:Yv,provide:Fc,inject:$v};function Fc(n,t){return t?n?function(){return ht(we(n)?n.call(this,this):n,we(t)?t.call(this,this):t)}:t:n}function $v(n,t){return wo(ks(n),ks(t))}function ks(n){if(me(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Et(n,t){return n?[...new Set([].concat(n,t))]:t}function wo(n,t){return n?ht(Object.create(null),n,t):t}function Pc(n,t){return n?me(n)&&me(t)?[...new Set([...n,...t])]:ht(Object.create(null),Tc(n),Tc(t??{})):t}function Yv(n,t){if(!n)return t;if(!t)return n;const e=ht(Object.create(null),n);for(const r in t)e[r]=Et(n[r],t[r]);return e}function Yf(){return{app:null,config:{isNativeTag:Op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jv=0;function Qv(n,t){return function(r,o=null){we(r)||(r=ht({},r)),o!=null&&!Ge(o)&&(o=null);const i=Yf(),a=new WeakSet,s=[];let u=!1;const c=i.app={_uid:Jv++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Bg,get config(){return i.config},set config(l){},use(l,...f){return a.has(l)||(l&&we(l.install)?(a.add(l),l.install(c,...f)):we(l)&&(a.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!u){const d=c._ceVNode||bt(r,o);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),n(d,l,h),u=!0,c._container=l,l.__vue_app__=c,va(d.component)}},onUnmount(l){s.push(l)},unmount(){u&&(rn(s,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c},runWithContext(l){const f=Jr;Jr=c;try{return l()}finally{Jr=f}}};return c}}let Jr=null;function Zv(n,t){if(mt){let e=mt.provides;const r=mt.parent&&mt.parent.provides;r===e&&(e=mt.provides=Object.create(r)),e[n]=t}}function Ii(n,t,e=!1){const r=mt||Lt;if(r||Jr){let o=Jr?Jr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return e&&we(t)?t.call(r&&r.proxy):t}}const Jf={},Qf=()=>Object.create(Jf),Zf=n=>Object.getPrototypeOf(n)===Jf;function eg(n,t,e,r=!1){const o={},i=Qf();n.propsDefaults=Object.create(null),eh(n,t,o,i);for(const a in n.propsOptions[0])a in o||(o[a]=void 0);e?n.props=r?o:vv(o):n.type.props?n.props=o:n.props=i,n.attrs=i}function tg(n,t,e,r){const{props:o,attrs:i,vnode:{patchFlag:a}}=n,s=Me(o),[u]=n.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const l=n.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(da(n.emitsOptions,h))continue;const d=t[h];if(u)if(Be(i,h))d!==i[h]&&(i[h]=d,c=!0);else{const p=ar(h);o[p]=As(u,s,p,d,n,!1)}else d!==i[h]&&(i[h]=d,c=!0)}}}else{eh(n,t,o,i)&&(c=!0);let l;for(const f in s)(!t||!Be(t,f)&&((l=Tr(f))===f||!Be(t,l)))&&(u?e&&(e[f]!==void 0||e[l]!==void 0)&&(o[f]=As(u,s,f,void 0,n,!0)):delete o[f]);if(i!==s)for(const f in i)(!t||!Be(t,f))&&(delete i[f],c=!0)}c&&Pn(n.attrs,"set","")}function eh(n,t,e,r){const[o,i]=n.propsOptions;let a=!1,s;if(t)for(let u in t){if(_o(u))continue;const c=t[u];let l;o&&Be(o,l=ar(u))?!i||!i.includes(l)?e[l]=c:(s||(s={}))[l]=c:da(n.emitsOptions,u)||(!(u in r)||c!==r[u])&&(r[u]=c,a=!0)}if(i){const u=Me(e),c=s||Ue;for(let l=0;l<i.length;l++){const f=i[l];e[f]=As(o,u,f,c[f],n,!Be(c,f))}}return a}function As(n,t,e,r,o,i){const a=n[e];if(a!=null){const s=Be(a,"default");if(s&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&we(u)){const{propsDefaults:c}=o;if(e in c)r=c[e];else{const l=Xo(o);r=c[e]=u.call(null,t),l()}}else r=u;o.ce&&o.ce._setProp(e,r)}a[0]&&(i&&!s?r=!1:a[1]&&(r===""||r===Tr(e))&&(r=!0))}return r}const ng=new WeakMap;function th(n,t,e=!1){const r=e?ng:t.propsCache,o=r.get(n);if(o)return o;const i=n.props,a={},s=[];let u=!1;if(!we(n)){const l=f=>{u=!0;const[h,d]=th(f,t,!0);ht(a,h),d&&s.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!i&&!u)return Ge(n)&&r.set(n,Xr),Xr;if(me(i))for(let l=0;l<i.length;l++){const f=ar(i[l]);Mc(f)&&(a[f]=Ue)}else if(i)for(const l in i){const f=ar(l);if(Mc(f)){const h=i[l],d=a[f]=me(h)||we(h)?{type:h}:ht({},h),p=d.type;let v=!1,g=!0;if(me(p))for(let m=0;m<p.length;++m){const x=p[m],b=we(x)&&x.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(g=!1)}else v=we(p)&&p.name==="Boolean";d[0]=v,d[1]=g,(v||Be(d,"default"))&&s.push(f)}}const c=[a,s];return Ge(n)&&r.set(n,c),c}function Mc(n){return n[0]!=="$"&&!_o(n)}const xu=n=>n[0]==="_"||n==="$stable",bu=n=>me(n)?n.map(dn):[dn(n)],rg=(n,t,e)=>{if(t._n)return t;const r=Es((...o)=>bu(t(...o)),e);return r._c=!1,r},nh=(n,t,e)=>{const r=n._ctx;for(const o in n){if(xu(o))continue;const i=n[o];if(we(i))t[o]=rg(o,i,r);else if(i!=null){const a=bu(i);t[o]=()=>a}}},rh=(n,t)=>{const e=bu(t);n.slots.default=()=>e},oh=(n,t,e)=>{for(const r in t)(e||!xu(r))&&(n[r]=t[r])},og=(n,t,e)=>{const r=n.slots=Qf();if(n.vnode.shapeFlag&32){const o=t._;o?(oh(r,t,e),e&&pf(r,"_",o,!0)):nh(t,r)}else t&&rh(n,t)},ig=(n,t,e)=>{const{vnode:r,slots:o}=n;let i=!0,a=Ue;if(r.shapeFlag&32){const s=t._;s?e&&s===1?i=!1:oh(o,t,e):(i=!t.$stable,nh(t,o)),a=t}else t&&(rh(n,t),a={default:1});if(i)for(const s in o)!xu(s)&&a[s]==null&&delete o[s]},Mt=xg;function ag(n){return sg(n)}function sg(n,t){const e=ca();e.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:a,createText:s,createComment:u,setText:c,setElementText:l,parentNode:f,nextSibling:h,setScopeId:d=yn,insertStaticContent:p}=n,v=(D,T,M,q=null,j=null,$=null,ee=void 0,Q=null,Z=!!T.dynamicChildren)=>{if(D===T)return;D&&!_r(D,T)&&(q=Re(D),oe(D,j,$,!0),D=null),T.patchFlag===-2&&(Z=!1,T.dynamicChildren=null);const{type:J,ref:ue,shapeFlag:te}=T;switch(J){case pa:g(D,T,M,q);break;case St:m(D,T,M,q);break;case za:D==null&&x(T,M,q,ee);break;case hn:A(D,T,M,q,j,$,ee,Q,Z);break;default:te&1?w(D,T,M,q,j,$,ee,Q,Z):te&6?B(D,T,M,q,j,$,ee,Q,Z):(te&64||te&128)&&J.process(D,T,M,q,j,$,ee,Q,Z,We)}ue!=null&&j&&Ni(ue,D&&D.ref,$,T||D,!T)},g=(D,T,M,q)=>{if(D==null)r(T.el=s(T.children),M,q);else{const j=T.el=D.el;T.children!==D.children&&c(j,T.children)}},m=(D,T,M,q)=>{D==null?r(T.el=u(T.children||""),M,q):T.el=D.el},x=(D,T,M,q)=>{[D.el,D.anchor]=p(D.children,T,M,q,D.el,D.anchor)},b=({el:D,anchor:T},M,q)=>{let j;for(;D&&D!==T;)j=h(D),r(D,M,q),D=j;r(T,M,q)},y=({el:D,anchor:T})=>{let M;for(;D&&D!==T;)M=h(D),o(D),D=M;o(T)},w=(D,T,M,q,j,$,ee,Q,Z)=>{T.type==="svg"?ee="svg":T.type==="math"&&(ee="mathml"),D==null?_(T,M,q,j,$,ee,Q,Z):E(D,T,j,$,ee,Q,Z)},_=(D,T,M,q,j,$,ee,Q)=>{let Z,J;const{props:ue,shapeFlag:te,transition:ce,dirs:ve}=D;if(Z=D.el=a(D.type,$,ue&&ue.is,ue),te&8?l(Z,D.children):te&16&&k(D.children,Z,null,q,j,Ua(D,$),ee,Q),ve&&pr(D,null,q,"created"),S(Z,D,D.scopeId,ee,q),ue){for(const Pe in ue)Pe!=="value"&&!_o(Pe)&&i(Z,Pe,null,ue[Pe],$,q);"value"in ue&&i(Z,"value",null,ue.value,$),(J=ue.onVnodeBeforeMount)&&un(J,q,D)}ve&&pr(D,null,q,"beforeMount");const ke=ug(j,ce);ke&&ce.beforeEnter(Z),r(Z,T,M),((J=ue&&ue.onVnodeMounted)||ke||ve)&&Mt(()=>{J&&un(J,q,D),ke&&ce.enter(Z),ve&&pr(D,null,q,"mounted")},j)},S=(D,T,M,q,j)=>{if(M&&d(D,M),q)for(let $=0;$<q.length;$++)d(D,q[$]);if(j){let $=j.subTree;if(T===$||lh($.type)&&($.ssContent===T||$.ssFallback===T)){const ee=j.vnode;S(D,ee,ee.scopeId,ee.slotScopeIds,j.parent)}}},k=(D,T,M,q,j,$,ee,Q,Z=0)=>{for(let J=Z;J<D.length;J++){const ue=D[J]=Q?Qn(D[J]):dn(D[J]);v(null,ue,T,M,q,j,$,ee,Q)}},E=(D,T,M,q,j,$,ee)=>{const Q=T.el=D.el;let{patchFlag:Z,dynamicChildren:J,dirs:ue}=T;Z|=D.patchFlag&16;const te=D.props||Ue,ce=T.props||Ue;let ve;if(M&&vr(M,!1),(ve=ce.onVnodeBeforeUpdate)&&un(ve,M,T,D),ue&&pr(T,D,M,"beforeUpdate"),M&&vr(M,!0),(te.innerHTML&&ce.innerHTML==null||te.textContent&&ce.textContent==null)&&l(Q,""),J?I(D.dynamicChildren,J,Q,M,q,Ua(T,j),$):ee||L(D,T,Q,null,M,q,Ua(T,j),$,!1),Z>0){if(Z&16)F(Q,te,ce,M,j);else if(Z&2&&te.class!==ce.class&&i(Q,"class",null,ce.class,j),Z&4&&i(Q,"style",te.style,ce.style,j),Z&8){const ke=T.dynamicProps;for(let Pe=0;Pe<ke.length;Pe++){const Ie=ke[Pe],st=te[Ie],dt=ce[Ie];(dt!==st||Ie==="value")&&i(Q,Ie,st,dt,j,M)}}Z&1&&D.children!==T.children&&l(Q,T.children)}else!ee&&J==null&&F(Q,te,ce,M,j);((ve=ce.onVnodeUpdated)||ue)&&Mt(()=>{ve&&un(ve,M,T,D),ue&&pr(T,D,M,"updated")},q)},I=(D,T,M,q,j,$,ee)=>{for(let Q=0;Q<T.length;Q++){const Z=D[Q],J=T[Q],ue=Z.el&&(Z.type===hn||!_r(Z,J)||Z.shapeFlag&198)?f(Z.el):M;v(Z,J,ue,null,q,j,$,ee,!0)}},F=(D,T,M,q,j)=>{if(T!==M){if(T!==Ue)for(const $ in T)!_o($)&&!($ in M)&&i(D,$,T[$],null,j,q);for(const $ in M){if(_o($))continue;const ee=M[$],Q=T[$];ee!==Q&&$!=="value"&&i(D,$,Q,ee,j,q)}"value"in M&&i(D,"value",T.value,M.value,j)}},A=(D,T,M,q,j,$,ee,Q,Z)=>{const J=T.el=D?D.el:s(""),ue=T.anchor=D?D.anchor:s("");let{patchFlag:te,dynamicChildren:ce,slotScopeIds:ve}=T;ve&&(Q=Q?Q.concat(ve):ve),D==null?(r(J,M,q),r(ue,M,q),k(T.children||[],M,ue,j,$,ee,Q,Z)):te>0&&te&64&&ce&&D.dynamicChildren?(I(D.dynamicChildren,ce,M,j,$,ee,Q),(T.key!=null||j&&T===j.subTree)&&ih(D,T,!0)):L(D,T,M,ue,j,$,ee,Q,Z)},B=(D,T,M,q,j,$,ee,Q,Z)=>{T.slotScopeIds=Q,D==null?T.shapeFlag&512?j.ctx.activate(T,M,q,ee,Z):W(T,M,q,j,$,ee,Z):z(D,T,Z)},W=(D,T,M,q,j,$,ee)=>{const Q=D.component=kg(D,q,j);if(fa(D)&&(Q.ctx.renderer=We),Dg(Q,!1,ee),Q.asyncDep){if(j&&j.registerDep(Q,H,ee),!D.el){const Z=Q.subTree=bt(St);m(null,Z,T,M)}}else H(Q,D,T,M,j,$,ee)},z=(D,T,M)=>{const q=T.component=D.component;if(mg(D,T,M))if(q.asyncDep&&!q.asyncResolved){V(q,T,M);return}else q.next=T,q.update();else T.el=D.el,q.vnode=T},H=(D,T,M,q,j,$,ee)=>{const Q=()=>{if(D.isMounted){let{next:te,bu:ce,u:ve,parent:ke,vnode:Pe}=D;{const jt=ah(D);if(jt){te&&(te.el=Pe.el,V(D,te,ee)),jt.asyncDep.then(()=>{D.isUnmounted||Q()});return}}let Ie=te,st;vr(D,!1),te?(te.el=Pe.el,V(D,te,ee)):te=Pe,ce&&Fa(ce),(st=te.props&&te.props.onVnodeBeforeUpdate)&&un(st,ke,te,Pe),vr(D,!0);const dt=Bc(D),Gt=D.subTree;D.subTree=dt,v(Gt,dt,f(Gt.el),Re(Gt),D,j,$),te.el=dt.el,Ie===null&&yg(D,dt.el),ve&&Mt(ve,j),(st=te.props&&te.props.onVnodeUpdated)&&Mt(()=>un(st,ke,te,Pe),j)}else{let te;const{el:ce,props:ve}=T,{bm:ke,m:Pe,parent:Ie,root:st,type:dt}=D,Gt=Ro(T);vr(D,!1),ke&&Fa(ke),!Gt&&(te=ve&&ve.onVnodeBeforeMount)&&un(te,Ie,T),vr(D,!0);{st.ce&&st.ce._injectChildStyle(dt);const jt=D.subTree=Bc(D);v(null,jt,M,q,D,j,$),T.el=jt.el}if(Pe&&Mt(Pe,j),!Gt&&(te=ve&&ve.onVnodeMounted)){const jt=T;Mt(()=>un(te,Ie,jt),j)}(T.shapeFlag&256||Ie&&Ro(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&D.a&&Mt(D.a,j),D.isMounted=!0,T=M=q=null}};D.scope.on();const Z=D.effect=new yf(Q);D.scope.off();const J=D.update=Z.run.bind(Z),ue=D.job=Z.runIfDirty.bind(Z);ue.i=D,ue.id=D.uid,Z.scheduler=()=>gu(ue),vr(D,!0),J()},V=(D,T,M)=>{T.component=D;const q=D.vnode.props;D.vnode=T,D.next=null,tg(D,T.props,q,M),ig(D,T.children,M),Bn(),Ac(D),Ln()},L=(D,T,M,q,j,$,ee,Q,Z=!1)=>{const J=D&&D.children,ue=D?D.shapeFlag:0,te=T.children,{patchFlag:ce,shapeFlag:ve}=T;if(ce>0){if(ce&128){Y(J,te,M,q,j,$,ee,Q,Z);return}else if(ce&256){K(J,te,M,q,j,$,ee,Q,Z);return}}ve&8?(ue&16&&be(J,j,$),te!==J&&l(M,te)):ue&16?ve&16?Y(J,te,M,q,j,$,ee,Q,Z):be(J,j,$,!0):(ue&8&&l(M,""),ve&16&&k(te,M,q,j,$,ee,Q,Z))},K=(D,T,M,q,j,$,ee,Q,Z)=>{D=D||Xr,T=T||Xr;const J=D.length,ue=T.length,te=Math.min(J,ue);let ce;for(ce=0;ce<te;ce++){const ve=T[ce]=Z?Qn(T[ce]):dn(T[ce]);v(D[ce],ve,M,null,j,$,ee,Q,Z)}J>ue?be(D,j,$,!0,!1,te):k(T,M,q,j,$,ee,Q,Z,te)},Y=(D,T,M,q,j,$,ee,Q,Z)=>{let J=0;const ue=T.length;let te=D.length-1,ce=ue-1;for(;J<=te&&J<=ce;){const ve=D[J],ke=T[J]=Z?Qn(T[J]):dn(T[J]);if(_r(ve,ke))v(ve,ke,M,null,j,$,ee,Q,Z);else break;J++}for(;J<=te&&J<=ce;){const ve=D[te],ke=T[ce]=Z?Qn(T[ce]):dn(T[ce]);if(_r(ve,ke))v(ve,ke,M,null,j,$,ee,Q,Z);else break;te--,ce--}if(J>te){if(J<=ce){const ve=ce+1,ke=ve<ue?T[ve].el:q;for(;J<=ce;)v(null,T[J]=Z?Qn(T[J]):dn(T[J]),M,ke,j,$,ee,Q,Z),J++}}else if(J>ce)for(;J<=te;)oe(D[J],j,$,!0),J++;else{const ve=J,ke=J,Pe=new Map;for(J=ke;J<=ce;J++){const ut=T[J]=Z?Qn(T[J]):dn(T[J]);ut.key!=null&&Pe.set(ut.key,J)}let Ie,st=0;const dt=ce-ke+1;let Gt=!1,jt=0;const Sn=new Array(dt);for(J=0;J<dt;J++)Sn[J]=0;for(J=ve;J<=te;J++){const ut=D[J];if(st>=dt){oe(ut,j,$,!0);continue}let sn;if(ut.key!=null)sn=Pe.get(ut.key);else for(Ie=ke;Ie<=ce;Ie++)if(Sn[Ie-ke]===0&&_r(ut,T[Ie])){sn=Ie;break}sn===void 0?oe(ut,j,$,!0):(Sn[sn-ke]=J+1,sn>=jt?jt=sn:Gt=!0,v(ut,T[sn],M,null,j,$,ee,Q,Z),st++)}const Br=Gt?cg(Sn):Xr;for(Ie=Br.length-1,J=dt-1;J>=0;J--){const ut=ke+J,sn=T[ut],Ic=ut+1<ue?T[ut+1].el:q;Sn[J]===0?v(null,sn,M,Ic,j,$,ee,Q,Z):Gt&&(Ie<0||J!==Br[Ie]?ne(sn,M,Ic,2):Ie--)}}},ne=(D,T,M,q,j=null)=>{const{el:$,type:ee,transition:Q,children:Z,shapeFlag:J}=D;if(J&6){ne(D.component.subTree,T,M,q);return}if(J&128){D.suspense.move(T,M,q);return}if(J&64){ee.move(D,T,M,We);return}if(ee===hn){r($,T,M);for(let te=0;te<Z.length;te++)ne(Z[te],T,M,q);r(D.anchor,T,M);return}if(ee===za){b(D,T,M);return}if(q!==2&&J&1&&Q)if(q===0)Q.beforeEnter($),r($,T,M),Mt(()=>Q.enter($),j);else{const{leave:te,delayLeave:ce,afterLeave:ve}=Q,ke=()=>{D.ctx.isUnmounted?o($):r($,T,M)},Pe=()=>{te($,()=>{ke(),ve&&ve()})};ce?ce($,ke,Pe):Pe()}else r($,T,M)},oe=(D,T,M,q=!1,j=!1)=>{const{type:$,props:ee,ref:Q,children:Z,dynamicChildren:J,shapeFlag:ue,patchFlag:te,dirs:ce,cacheIndex:ve}=D;if(te===-2&&(j=!1),Q!=null&&(Bn(),Ni(Q,null,M,D,!0),Ln()),ve!=null&&(T.renderCache[ve]=void 0),ue&256){T.ctx.deactivate(D);return}const ke=ue&1&&ce,Pe=!Ro(D);let Ie;if(Pe&&(Ie=ee&&ee.onVnodeBeforeUnmount)&&un(Ie,T,D),ue&6)Ce(D.component,M,q);else{if(ue&128){D.suspense.unmount(M,q);return}ke&&pr(D,null,T,"beforeUnmount"),ue&64?D.type.remove(D,T,M,We,q):J&&!J.hasOnce&&($!==hn||te>0&&te&64)?be(J,T,M,!1,!0):($===hn&&te&384||!j&&ue&16)&&be(Z,T,M),q&&pe(D)}(Pe&&(Ie=ee&&ee.onVnodeUnmounted)||ke)&&Mt(()=>{Ie&&un(Ie,T,D),ke&&pr(D,null,T,"unmounted")},M)},pe=D=>{const{type:T,el:M,anchor:q,transition:j}=D;if(T===hn){_e(M,q);return}if(T===za){y(D);return}const $=()=>{o(M),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(D.shapeFlag&1&&j&&!j.persisted){const{leave:ee,delayLeave:Q}=j,Z=()=>ee(M,$);Q?Q(D.el,$,Z):Z()}else $()},_e=(D,T)=>{let M;for(;D!==T;)M=h(D),o(D),D=M;o(T)},Ce=(D,T,M)=>{const{bum:q,scope:j,job:$,subTree:ee,um:Q,m:Z,a:J,parent:ue,slots:{__:te}}=D;Oc(Z),Oc(J),q&&Fa(q),ue&&me(te)&&te.forEach(ce=>{ue.renderCache[ce]=void 0}),j.stop(),$&&($.flags|=8,oe(ee,D,T,M)),Q&&Mt(Q,T),Mt(()=>{D.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},be=(D,T,M,q=!1,j=!1,$=0)=>{for(let ee=$;ee<D.length;ee++)oe(D[ee],T,M,q,j)},Re=D=>{if(D.shapeFlag&6)return Re(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const T=h(D.anchor||D.el),M=T&&T[Dv];return M?h(M):T};let Se=!1;const De=(D,T,M)=>{D==null?T._vnode&&oe(T._vnode,null,null,!0):v(T._vnode||null,D,T,null,null,null,M),T._vnode=D,Se||(Se=!0,Ac(),Of(),Se=!1)},We={p:v,um:oe,m:ne,r:pe,mt:W,mc:k,pc:L,pbc:I,n:Re,o:n};return{render:De,hydrate:void 0,createApp:Qv(De)}}function Ua({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function vr({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function ug(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function ih(n,t,e=!1){const r=n.children,o=t.children;if(me(r)&&me(o))for(let i=0;i<r.length;i++){const a=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=Qn(o[i]),s.el=a.el),!e&&s.patchFlag!==-2&&ih(a,s)),s.type===pa&&(s.el=a.el),s.type===St&&!s.el&&(s.el=a.el)}}function cg(n){const t=n.slice(),e=[0];let r,o,i,a,s;const u=n.length;for(r=0;r<u;r++){const c=n[r];if(c!==0){if(o=e[e.length-1],n[o]<c){t[r]=o,e.push(r);continue}for(i=0,a=e.length-1;i<a;)s=i+a>>1,n[e[s]]<c?i=s+1:a=s;c<n[e[i]]&&(i>0&&(t[r]=e[i-1]),e[i]=r)}}for(i=e.length,a=e[i-1];i-- >0;)e[i]=a,a=t[a];return e}function ah(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ah(t)}function Oc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const lg=Symbol.for("v-scx"),fg=()=>Ii(lg);function Va(n,t,e){return sh(n,t,e)}function sh(n,t,e=Ue){const{immediate:r,deep:o,flush:i,once:a}=e,s=ht({},e),u=t&&r||!t&&i!=="post";let c;if(Lo){if(i==="sync"){const d=fg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!u){const d=()=>{};return d.stop=yn,d.resume=yn,d.pause=yn,d}}const l=mt;s.call=(d,p,v)=>rn(d,l,p,v);let f=!1;i==="post"?s.scheduler=d=>{Mt(d,l&&l.suspense)}:i!=="sync"&&(f=!0,s.scheduler=(d,p)=>{p?d():gu(d)}),s.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const h=Ev(n,t,s);return Lo&&(c?c.push(h):u&&h()),h}function hg(n,t,e){const r=this.proxy,o=Je(n)?n.includes(".")?uh(r,n):()=>r[n]:n.bind(r,r);let i;we(t)?i=t:(i=t.handler,e=t);const a=Xo(this),s=sh(o,i.bind(r),e);return a(),s}function uh(n,t){const e=t.split(".");return()=>{let r=n;for(let o=0;o<e.length&&r;o++)r=r[e[o]];return r}}const dg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ar(t)}Modifiers`]||n[`${Tr(t)}Modifiers`];function pg(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||Ue;let o=e;const i=t.startsWith("update:"),a=i&&dg(r,t.slice(7));a&&(a.trim&&(o=e.map(l=>Je(l)?l.trim():l)),a.number&&(o=e.map(Vp)));let s,u=r[s=Na(t)]||r[s=Na(ar(t))];!u&&i&&(u=r[s=Na(Tr(t))]),u&&rn(u,n,6,o);const c=r[s+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[s])return;n.emitted[s]=!0,rn(c,n,6,o)}}function ch(n,t,e=!1){const r=t.emitsCache,o=r.get(n);if(o!==void 0)return o;const i=n.emits;let a={},s=!1;if(!we(n)){const u=c=>{const l=ch(c,t,!0);l&&(s=!0,ht(a,l))};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!s?(Ge(n)&&r.set(n,null),null):(me(i)?i.forEach(u=>a[u]=null):ht(a,i),Ge(n)&&r.set(n,a),a)}function da(n,t){return!n||!aa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Be(n,t[0].toLowerCase()+t.slice(1))||Be(n,Tr(t))||Be(n,t))}function Bc(n){const{type:t,vnode:e,proxy:r,withProxy:o,propsOptions:[i],slots:a,attrs:s,emit:u,render:c,renderCache:l,props:f,data:h,setupState:d,ctx:p,inheritAttrs:v}=n,g=Ti(n);let m,x;try{if(e.shapeFlag&4){const y=o||r,w=y;m=dn(c.call(w,y,l,f,d,h,p)),x=s}else{const y=t;m=dn(y.length>1?y(f,{attrs:s,slots:a,emit:u}):y(f,null)),x=t.props?s:vg(s)}}catch(y){ko.length=0,la(y,n,1),m=bt(St)}let b=m;if(x&&v!==!1){const y=Object.keys(x),{shapeFlag:w}=b;y.length&&w&7&&(i&&y.some(ru)&&(x=gg(x,i)),b=sr(b,x,!1,!0))}return e.dirs&&(b=sr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&Oo(b,e.transition),m=b,Ti(g),m}const vg=n=>{let t;for(const e in n)(e==="class"||e==="style"||aa(e))&&((t||(t={}))[e]=n[e]);return t},gg=(n,t)=>{const e={};for(const r in n)(!ru(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function mg(n,t,e){const{props:r,children:o,component:i}=n,{props:a,children:s,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&u>=0){if(u&1024)return!0;if(u&16)return r?Lc(r,a,c):!!a;if(u&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(a[h]!==r[h]&&!da(c,h))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===a?!1:r?a?Lc(r,a,c):!0:!!a;return!1}function Lc(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==n[i]&&!da(e,i))return!0}return!1}function yg({vnode:n,parent:t},e){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=t.vnode).el=e,t=t.parent;else break}}const lh=n=>n.__isSuspense;function xg(n,t){t&&t.pendingBranch?me(n)?t.effects.push(...n):t.effects.push(n):kv(n)}const hn=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),ko=[];let Wt=null;function Nn(n=!1){ko.push(Wt=n?null:[])}function bg(){ko.pop(),Wt=ko[ko.length-1]||null}let Bo=1;function Wc(n,t=!1){Bo+=n,n<0&&Wt&&t&&(Wt.hasOnce=!0)}function fh(n){return n.dynamicChildren=Bo>0?Wt||Xr:null,bg(),Bo>0&&Wt&&Wt.push(n),n}function $n(n,t,e,r,o,i){return fh(Zn(n,t,e,r,o,i,!0))}function wg(n,t,e,r,o){return fh(bt(n,t,e,r,o,!0))}function Pi(n){return n?n.__v_isVNode===!0:!1}function _r(n,t){return n.type===t.type&&n.key===t.key}const hh=({key:n})=>n??null,Ri=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Je(n)||_t(n)||we(n)?{i:Lt,r:n,k:t,f:!!e}:n:null);function Zn(n,t=null,e=null,r=0,o=null,i=n===hn?0:1,a=!1,s=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&hh(t),ref:t&&Ri(t),scopeId:Lf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Lt};return s?(wu(u,e),i&128&&n.normalize(u)):e&&(u.shapeFlag|=Je(e)?8:16),Bo>0&&!a&&Wt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Wt.push(u),u}const bt=_g;function _g(n,t=null,e=null,r=0,o=null,i=!1){if((!n||n===Gv)&&(n=St),Pi(n)){const s=sr(n,t,!0);return e&&wu(s,e),Bo>0&&!i&&Wt&&(s.shapeFlag&6?Wt[Wt.indexOf(n)]=s:Wt.push(s)),s.patchFlag=-2,s}if(Pg(n)&&(n=n.__vccOpts),t){t=Cg(t);let{class:s,style:u}=t;s&&!Je(s)&&(t.class=au(s)),Ge(u)&&(vu(u)&&!me(u)&&(u=ht({},u)),t.style=No(u))}const a=Je(n)?1:lh(n)?128:Wf(n)?64:Ge(n)?4:we(n)?2:0;return Zn(n,t,e,r,o,a,i,!0)}function Cg(n){return n?vu(n)||Zf(n)?ht({},n):n:null}function sr(n,t,e=!1,r=!1){const{props:o,ref:i,patchFlag:a,children:s,transition:u}=n,c=t?Ig(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&hh(c),ref:t&&t.ref?e&&i?me(i)?i.concat(Ri(t)):[i,Ri(t)]:Ri(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:s,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==hn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&sr(n.ssContent),ssFallback:n.ssFallback&&sr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&r&&Oo(l,u.clone(l)),l}function Eg(n=" ",t=0){return bt(pa,null,n,t)}function po(n="",t=!1){return t?(Nn(),wg(St,null,n)):bt(St,null,n)}function dn(n){return n==null||typeof n=="boolean"?bt(St):me(n)?bt(hn,null,n.slice()):Pi(n)?Qn(n):bt(pa,null,String(n))}function Qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:sr(n)}function wu(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(me(t))e=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),wu(n,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!Zf(t)?t._ctx=Lt:o===3&&Lt&&(Lt.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else we(t)?(t={default:t,_ctx:Lt},e=32):(t=String(t),r&64?(e=16,t=[Eg(t)]):e=8);n.children=t,n.shapeFlag|=e}function Ig(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=au([t.class,r.class]));else if(o==="style")t.style=No([t.style,r.style]);else if(aa(o)){const i=t[o],a=r[o];a&&i!==a&&!(me(i)&&i.includes(a))&&(t[o]=i?[].concat(i,a):a)}else o!==""&&(t[o]=r[o])}return t}function un(n,t,e,r=null){rn(n,t,7,[e,r])}const Rg=Yf();let Sg=0;function kg(n,t,e){const r=n.type,o=(t?t.appContext:n.appContext)||Rg,i={uid:Sg++,vnode:n,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:th(r,o),emitsOptions:ch(r,o),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=pg.bind(null,i),n.ce&&n.ce(i),i}let mt=null;const Ag=()=>mt||Lt;let Mi,Ds;{const n=ca(),t=(e,r)=>{let o;return(o=n[e])||(o=n[e]=[]),o.push(r),i=>{o.length>1?o.forEach(a=>a(i)):o[0](i)}};Mi=t("__VUE_INSTANCE_SETTERS__",e=>mt=e),Ds=t("__VUE_SSR_SETTERS__",e=>Lo=e)}const Xo=n=>{const t=mt;return Mi(n),n.scope.on(),()=>{n.scope.off(),Mi(t)}},Uc=()=>{mt&&mt.scope.off(),Mi(null)};function dh(n){return n.vnode.shapeFlag&4}let Lo=!1;function Dg(n,t=!1,e=!1){t&&Ds(t);const{props:r,children:o}=n.vnode,i=dh(n);eg(n,r,i,t),og(n,o,e||t);const a=i?Tg(n,t):void 0;return t&&Ds(!1),a}function Tg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,jv);const{setup:r}=e;if(r){Bn();const o=n.setupContext=r.length>1?Fg(n):null,i=Xo(n),a=Ko(r,n,0,[n.props,o]),s=lf(a);if(Ln(),i(),(s||n.sp)&&!Ro(n)&&jf(n),s){if(a.then(Uc,Uc),t)return a.then(u=>{Vc(n,u)}).catch(u=>{la(u,n,0)});n.asyncDep=a}else Vc(n,a)}else ph(n)}function Vc(n,t,e){we(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ge(t)&&(n.setupState=Ff(t)),ph(n)}function ph(n,t,e){const r=n.type;n.render||(n.render=r.render||yn);{const o=Xo(n);Bn();try{qv(n)}finally{Ln(),o()}}}const Ng={get(n,t){return vt(n,"get",""),n[t]}};function Fg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Ng),slots:n.slots,emit:n.emit,expose:t}}function va(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ff(gv(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in So)return So[e](n)},has(t,e){return e in t||e in So}})):n.proxy}function Pg(n){return we(n)&&"__vccOpts"in n}const Mg=(n,t)=>_v(n,t,Lo);function Og(n,t,e){const r=arguments.length;return r===2?Ge(t)&&!me(t)?Pi(t)?bt(n,null,[t]):bt(n,t):bt(n,null,t):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&Pi(e)&&(e=[e]),bt(n,t,e))}const Bg="3.5.15";/**
* @vue/runtime-dom v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ts;const zc=typeof window<"u"&&window.trustedTypes;if(zc)try{Ts=zc.createPolicy("vue",{createHTML:n=>n})}catch{}const vh=Ts?n=>Ts.createHTML(n):n=>n,Lg="http://www.w3.org/2000/svg",Wg="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Hc=Fn&&Fn.createElement("template"),Ug={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const o=t==="svg"?Fn.createElementNS(Lg,n):t==="mathml"?Fn.createElementNS(Wg,n):e?Fn.createElement(n,{is:e}):Fn.createElement(n);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>Fn.createTextNode(n),createComment:n=>Fn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,r,o,i){const a=e?e.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===i||!(o=o.nextSibling)););else{Hc.innerHTML=vh(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const s=Hc.content;if(r==="svg"||r==="mathml"){const u=s.firstChild;for(;u.firstChild;)s.appendChild(u.firstChild);s.removeChild(u)}t.insertBefore(s,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},qn="transition",vo="animation",Wo=Symbol("_vtc"),gh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vg=ht({},Uf,gh),zg=n=>(n.displayName="Transition",n.props=Vg,n),Gc=zg((n,{slots:t})=>Og(Fv,Hg(n),t)),gr=(n,t=[])=>{me(n)?n.forEach(e=>e(...t)):n&&n(...t)},jc=n=>n?me(n)?n.some(t=>t.length>1):n.length>1:!1;function Hg(n){const t={};for(const A in n)A in gh||(t[A]=n[A]);if(n.css===!1)return t;const{name:e="v",type:r,duration:o,enterFromClass:i=`${e}-enter-from`,enterActiveClass:a=`${e}-enter-active`,enterToClass:s=`${e}-enter-to`,appearFromClass:u=i,appearActiveClass:c=a,appearToClass:l=s,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,p=Gg(o),v=p&&p[0],g=p&&p[1],{onBeforeEnter:m,onEnter:x,onEnterCancelled:b,onLeave:y,onLeaveCancelled:w,onBeforeAppear:_=m,onAppear:S=x,onAppearCancelled:k=b}=t,E=(A,B,W,z)=>{A._enterCancelled=z,mr(A,B?l:s),mr(A,B?c:a),W&&W()},I=(A,B)=>{A._isLeaving=!1,mr(A,f),mr(A,d),mr(A,h),B&&B()},F=A=>(B,W)=>{const z=A?S:x,H=()=>E(B,A,W);gr(z,[B,H]),qc(()=>{mr(B,A?u:i),An(B,A?l:s),jc(z)||Kc(B,r,v,H)})};return ht(t,{onBeforeEnter(A){gr(m,[A]),An(A,i),An(A,a)},onBeforeAppear(A){gr(_,[A]),An(A,u),An(A,c)},onEnter:F(!1),onAppear:F(!0),onLeave(A,B){A._isLeaving=!0;const W=()=>I(A,B);An(A,f),A._enterCancelled?(An(A,h),Yc()):(Yc(),An(A,h)),qc(()=>{A._isLeaving&&(mr(A,f),An(A,d),jc(y)||Kc(A,r,g,W))}),gr(y,[A,W])},onEnterCancelled(A){E(A,!1,void 0,!0),gr(b,[A])},onAppearCancelled(A){E(A,!0,void 0,!0),gr(k,[A])},onLeaveCancelled(A){I(A),gr(w,[A])}})}function Gg(n){if(n==null)return null;if(Ge(n))return[Ha(n.enter),Ha(n.leave)];{const t=Ha(n);return[t,t]}}function Ha(n){return zp(n)}function An(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Wo]||(n[Wo]=new Set)).add(t)}function mr(n,t){t.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const e=n[Wo];e&&(e.delete(t),e.size||(n[Wo]=void 0))}function qc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let jg=0;function Kc(n,t,e,r){const o=n._endId=++jg,i=()=>{o===n._endId&&r()};if(e!=null)return setTimeout(i,e);const{type:a,timeout:s,propCount:u}=qg(n,t);if(!a)return r();const c=a+"end";let l=0;const f=()=>{n.removeEventListener(c,h),i()},h=d=>{d.target===n&&++l>=u&&f()};setTimeout(()=>{l<u&&f()},s+1),n.addEventListener(c,h)}function qg(n,t){const e=window.getComputedStyle(n),r=p=>(e[p]||"").split(", "),o=r(`${qn}Delay`),i=r(`${qn}Duration`),a=Xc(o,i),s=r(`${vo}Delay`),u=r(`${vo}Duration`),c=Xc(s,u);let l=null,f=0,h=0;t===qn?a>0&&(l=qn,f=a,h=i.length):t===vo?c>0&&(l=vo,f=c,h=u.length):(f=Math.max(a,c),l=f>0?a>c?qn:vo:null,h=l?l===qn?i.length:u.length:0);const d=l===qn&&/\b(transform|all)(,|$)/.test(r(`${qn}Property`).toString());return{type:l,timeout:f,propCount:h,hasTransform:d}}function Xc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,r)=>$c(e)+$c(n[r])))}function $c(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Yc(){return document.body.offsetHeight}function Kg(n,t,e){const r=n[Wo];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Oi=Symbol("_vod"),mh=Symbol("_vsh"),Xg={beforeMount(n,{value:t},{transition:e}){n[Oi]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):go(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:r}){!t!=!e&&(r?t?(r.beforeEnter(n),go(n,!0),r.enter(n)):r.leave(n,()=>{go(n,!1)}):go(n,t))},beforeUnmount(n,{value:t}){go(n,t)}};function go(n,t){n.style.display=t?n[Oi]:"none",n[mh]=!t}const $g=Symbol(""),Yg=/(^|;)\s*display\s*:/;function Jg(n,t,e){const r=n.style,o=Je(e);let i=!1;if(e&&!o){if(t)if(Je(t))for(const a of t.split(";")){const s=a.slice(0,a.indexOf(":")).trim();e[s]==null&&Si(r,s,"")}else for(const a in t)e[a]==null&&Si(r,a,"");for(const a in e)a==="display"&&(i=!0),Si(r,a,e[a])}else if(o){if(t!==e){const a=r[$g];a&&(e+=";"+a),r.cssText=e,i=Yg.test(e)}}else t&&n.removeAttribute("style");Oi in n&&(n[Oi]=i?r.display:"",n[mh]&&(r.display="none"))}const Jc=/\s*!important$/;function Si(n,t,e){if(me(e))e.forEach(r=>Si(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=Qg(n,t);Jc.test(e)?n.setProperty(Tr(r),e.replace(Jc,""),"important"):n[r]=e}}const Qc=["Webkit","Moz","ms"],Ga={};function Qg(n,t){const e=Ga[t];if(e)return e;let r=ar(t);if(r!=="filter"&&r in n)return Ga[t]=r;r=df(r);for(let o=0;o<Qc.length;o++){const i=Qc[o]+r;if(i in n)return Ga[t]=i}return t}const Zc="http://www.w3.org/1999/xlink";function el(n,t,e,r,o,i=Xp(t)){r&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Zc,t.slice(6,t.length)):n.setAttributeNS(Zc,t,e):e==null||i&&!vf(e)?n.removeAttribute(t):n.setAttribute(t,i?"":lr(e)?String(e):e)}function tl(n,t,e,r,o){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?vh(e):e);return}const i=n.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?n.getAttribute("value")||"":n.value,u=e==null?n.type==="checkbox"?"on":"":String(e);(s!==u||!("_value"in n))&&(n.value=u),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const s=typeof n[t];s==="boolean"?e=vf(e):e==null&&s==="string"?(e="",a=!0):s==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(o||t)}function Zg(n,t,e,r){n.addEventListener(t,e,r)}function em(n,t,e,r){n.removeEventListener(t,e,r)}const nl=Symbol("_vei");function tm(n,t,e,r,o=null){const i=n[nl]||(n[nl]={}),a=i[t];if(r&&a)a.value=r;else{const[s,u]=nm(t);if(r){const c=i[t]=im(r,o);Zg(n,s,c,u)}else a&&(em(n,s,a,u),i[t]=void 0)}}const rl=/(?:Once|Passive|Capture)$/;function nm(n){let t;if(rl.test(n)){t={};let r;for(;r=n.match(rl);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Tr(n.slice(2)),t]}let ja=0;const rm=Promise.resolve(),om=()=>ja||(rm.then(()=>ja=0),ja=Date.now());function im(n,t){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;rn(am(r,e.value),t,5,[r])};return e.value=n,e.attached=om(),e}function am(n,t){if(me(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const ol=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,sm=(n,t,e,r,o,i)=>{const a=o==="svg";t==="class"?Kg(n,r,a):t==="style"?Jg(n,e,r):aa(t)?ru(t)||tm(n,t,e,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):um(n,t,r,a))?(tl(n,t,r),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&el(n,t,r,a,i,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Je(r))?tl(n,ar(t),r,i,t):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),el(n,t,r,a))};function um(n,t,e,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in n&&ol(t)&&we(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ol(t)&&Je(e)?!1:t in n}const cm=ht({patchProp:sm},Ug);let il;function lm(){return il||(il=ag(cm))}const fm=(...n)=>{const t=lm().createApp(...n),{mount:e}=t;return t.mount=r=>{const o=dm(r);if(!o)return;const i=t._component;!we(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=e(o,!1,hm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function hm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function dm(n){return Je(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var yh=function(n,t){return(yh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])})(n,t)};function on(n,t){function e(){this.constructor=n}yh(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function ae(n,t,e,r){return new(e||(e=Promise))(function(o,i){function a(c){try{u(r.next(c))}catch(l){i(l)}}function s(c){try{u(r.throw(c))}catch(l){i(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(a,s)}u((r=r.apply(n,[])).next())})}function se(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(l[0]===6&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(n,a)}catch(f){l=[6,f],r=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var pm=function(){function n(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return n.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},n.prototype.registerFlag=function(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},n.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},n.prototype.getNumber=function(t){return this.get(t)},n.prototype.getBool=function(t){return this.get(t)},n.prototype.getFlags=function(){return this.flags},Object.defineProperty(n.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),n.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},n.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},n.prototype.setFlags=function(t){this.flags=Object.assign({},t)},n.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},n.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,r,o=(e=this.global.location.search,r={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return vm(r,a[0],a[1]),a.join("=")}),r);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(i){var a=i.split(":"),s=a[0],u=a[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},n}();function vm(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function G(){return xh}var xh=null,Bi=new Map,Ns=new Map;function bh(n,t){var e=_h(n,t);return Bi.get(e)}function gm(n){return Ns.get(n)}function al(n){for(var t=Bi.entries(),e=[];;){var r=t.next(),o=r.done,i=r.value;if(o)break;var a=i[0],s=i[1];a.split("_")[0]===n&&e.push(s)}return e}function wh(n){var t=n.kernelName,e=n.backendName,r=_h(t,e);if(Bi.has(r))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");Bi.set(r,n)}function mm(n){var t=n.kernelName;Ns.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),Ns.set(t,n)}function _h(n,t){return t+"_"+n}function Fs(n,t,e){return Math.max(n,Math.min(t,e))}function Ch(n){return n%2==0?n:n+1}function ym(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t}function R(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Le(n,t,e){e===void 0&&(e=""),R(it(n,t),function(){return e+" Shapes "+n+" and "+t+" must match"})}function lo(n){R(n!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function ao(n,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(n)||xn(n)&&!e)for(var r=0;r<n.length;++r)ao(n[r],t,e);else t.push(n);return t}function le(n){if(n.length===0)return 1;for(var t=n[0],e=1;e<n.length;e++)t*=n[e];return t}function it(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function $e(n){return n%1==0}function xm(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;var t=Math.exp(2*n);return(t-1)/(t+1)}function Ps(n){var t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function Qr(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function sl(n,t,e){return t===void 0&&(t=function(r){return 0}),new Promise(function(r,o){var i=0,a=function(){if(n())r();else{i++;var s=t(i);e!=null&&i>=e?o():setTimeout(a,s)}};a()})}function bm(n,t){for(var e=1,r=-1,o=0;o<n.length;++o)if(n[o]>=0)e*=n[o];else if(n[o]===-1){if(r!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(n[o]<0)throw Error("Shapes can not be < 0. Found "+n[o]+" at dim "+o);if(r===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+n);return n}if(e===0)throw Error("Cannot infer the missing size in ["+n+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var i=n.slice();return i[r]=t/e,i}function rt(n,t){var e=t.length;return R((n=n==null?t.map(function(r,o){return o}):[].concat(n)).every(function(r){return r>=-e&&r<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+n}),R(n.every(function(r){return $e(r)}),function(){return"All values in axis param must be integers but got axis "+n}),n.map(function(r){return r<0?e+r:r})}function Cr(n,t){for(var e=[],r=[],o=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||o?null:rt(t,n).sort(),a=0,s=0;s<n.length;++s){if(i!=null){if(i[a]===s&&n[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+n[s]+"' is not 1");(i[a]==null||i[a]>s)&&n[s]===1&&(e.push(n[s]),r.push(s)),i[a]<=s&&a++}n[s]!==1&&(e.push(n[s]),r.push(s))}return{newShape:e,keptDims:r}}function Uo(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else{if(n!=="bool")throw new Error("Unknown data type "+n);e=new Uint8Array(t)}return e}function Li(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else{if(n!=="string")throw new Error("Unknown data type "+n);e=new Array(t)}return e}function wm(n,t){for(var e=0;e<n.length;e++){var r=n[e];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+t+" being uploaded contains "+r+".")}}function _m(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Cm(n,t){return t!=="complex64"&&(t!=="float32"||n==="complex64")&&(t!=="int32"||n==="float32"||n==="complex64")&&(t!=="bool"||n!=="bool")}function xn(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array}function Eh(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error("Unknown dtype "+n)}function Em(n){if(n==null)return 0;var t=0;return n.forEach(function(e){return t+=e.length}),t}function _u(n){return typeof n=="string"||n instanceof String}function Im(n){return typeof n=="boolean"}function Rm(n){return typeof n=="number"}function $o(n){return Array.isArray(n)?$o(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array?"int32":Rm(n)?"float32":_u(n)?"string":Im(n)?"bool":"float32"}function Ms(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Os(n,t){for(var e=t;e<n;++e)if(n%e==0)return e;return n}function bn(n){var t=n.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=n[t-1];for(var r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function Ih(n,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=ao(n)),e&&wm(n,t),function(i,a){return i instanceof Float32Array&&a==="float32"||i instanceof Int32Array&&a==="int32"||i instanceof Uint8Array&&a==="bool"}(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){for(var r=new Uint8Array(n.length),o=0;o<r.length;++o)Math.round(n[o])!==0&&(r[o]=1);return r}throw new Error("Unknown data type "+t)}function ul(n,t){if(n.length===0)return t[0];var e=n.reduce(function(r,o){return r*o});if(e===0)return[];if(e!==t.length)throw new Error("["+n+"] does not match the input size.");return function r(o,i,a){var s=new Array;if(i.length===1)for(var u=i[0],c=0;c<u;c++)s[c]=a[o+c];else{u=i[0];var l=i.slice(1),f=l.reduce(function(h,d){return h*d});for(c=0;c<u;c++)s[c]=r(o+c*f,l,a)}return s}(0,n,t)}function Rh(n,t){for(var e=Yo(n,t),r=0;r<e.length;r++)e[r]=1;return e}function Yo(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error("Unknown data type "+t)}function pn(){return G().platform.now()}function Sh(n){n.forEach(function(t){R(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+n+"]."})})}function Sm(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",G().platform.encode(n,t)}function Wi(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",G().platform.decode(n,t)}function cl(n,t,e){if(t===0)return 0;if(t===1)return n[0];for(var r=n[n.length-1],o=0;o<n.length-1;++o)r+=e[o]*n[o];return r}function km(n,t,e){if(t===0)return[];if(t===1)return[n];for(var r=new Array(t),o=0;o<r.length-1;++o)r[o]=Math.floor(n/e[o]),n-=r[o]*e[o];return r[r.length-1]=n,r}var Am=function(){function n(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Dm)}return n.prototype.profileKernel=function(t,e,r){var o,i=this,a=this.backendTimer.time(function(){o=r()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),a.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),i.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},n}(),Dm=function(){function n(){}return n.prototype.logKernelProfile=function(t,e,r,o,i,a){var s=typeof o=="number"?Qr(o+"ms",9):o.error,u=Qr(t,25),c=e.rank,l=e.size,f=Qr(e.shape.toString(),14),h="";for(var d in i){var p=i[d].shape||e.shape,v=p.length;h+=d+": "+v+"D "+(v>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},n}(),ll=20,mo=3,qa=7;function Tm(n,t,e,r){var o=bn(t),i=function(c,l,f,h){var d=le(l),p=h[h.length-1],v=new Array(p).fill(0),g=l.length,m=f==="complex64"?xo(c):c;if(g>1)for(var x=0;x<d/p;x++)for(var b=x*p,y=0;y<p;y++)v[y]=Math.max(v[y],yo(m[b+y],0,f).length);return v}(n,t,e,o),a=t.length,s=function c(l,f,h,d,p,v){v===void 0&&(v=!0);var g=h==="complex64"?2:1,m=f[0],x=f.length;if(x===0)return h==="complex64"?[yo(xo(l)[0],0,h)]:h==="bool"?[kh(l[0])]:[l[0].toString()];if(x===1){if(m>ll){var b=mo*g,y=Array.from(l.slice(0,b)),w=Array.from(l.slice((m-mo)*g,m*g));return h==="complex64"&&(y=xo(y),w=xo(w)),["["+y.map(function(z,H){return yo(z,p[H],h)}).join(", ")+", ..., "+w.map(function(z,H){return yo(z,p[m-mo+H],h)}).join(", ")+"]"]}return["["+(h==="complex64"?xo(l):Array.from(l)).map(function(z,H){return yo(z,p[H],h)}).join(", ")+"]"]}var _=f.slice(1),S=d.slice(1),k=d[0]*g,E=[];if(m>ll){for(var I=0;I<mo;I++){var F=(A=I*k)+k;E.push.apply(E,c(l.slice(A,F),_,h,S,p,!1))}for(E.push("..."),I=m-mo;I<m;I++)F=(A=I*k)+k,E.push.apply(E,c(l.slice(A,F),_,h,S,p,I===m-1))}else for(I=0;I<m;I++){var A;F=(A=I*k)+k,E.push.apply(E,c(l.slice(A,F),_,h,S,p,I===m-1))}var B=x===2?",":"";for(E[0]="["+E[0]+B,I=1;I<E.length-1;I++)E[I]=" "+E[I]+B;var W=`,
`;for(I=2;I<x;I++)W+=`
`;return E[E.length-1]=" "+E[E.length-1]+"]"+(v?"":W),E}(n,t,e,o,i),u=["Tensor"];return r&&(u.push("  dtype: "+e),u.push("  rank: "+a),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function yo(n,t,e){return Qr(Array.isArray(n)?parseFloat(n[0].toFixed(qa))+" + "+parseFloat(n[1].toFixed(qa))+"j":_u(n)?"'"+n+"'":e==="bool"?kh(n):parseFloat(n.toFixed(qa)).toString(),t)}function kh(n){return n===0?"false":"true"}function xo(n){for(var t=[],e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}var Vo=function(){function n(t,e,r){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=le(t),r!=null){var i=r.length;R(i===this.size,function(){return"Length of values '"+i+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Li(e,this.size),this.strides=bn(t)}return n.prototype.set=function(t){for(var e=this,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];r.length===0&&(r=[0]),R(r.length===this.rank,function(){return"The number of provided coordinates ("+r.length+") must match the rank ("+e.rank+")"});var i=this.locToIndex(r);this.values[i]=t},n.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var r=0,o=0,i=t;o<i.length;o++){var a=i[o];if(a<0||a>=this.shape[r]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}r++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},n.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e},n.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.toTensor=function(){return vn().makeTensor(this.values,this.shape,this.dtype)},n}(),vn=null,U=null,Ah=null,je=function(){function n(t,e,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=le(t),this.strides=bn(t),this.dataId=r,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return n.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},n.prototype.asScalar=function(){return this.throwIfDisposed(),R(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},n.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},n.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},n.prototype.as3D=function(t,e,r){return this.throwIfDisposed(),this.reshape([t,e,r])},n.prototype.as4D=function(t,e,r,o){return this.throwIfDisposed(),this.reshape([t,e,r,o])},n.prototype.as5D=function(t,e,r,o,i){return this.throwIfDisposed(),this.reshape([t,e,r,o,i])},n.prototype.asType=function(t){return this.throwIfDisposed(),U.cast(this,t)},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.buffer=function(){return ae(this,void 0,void 0,function(){var t;return se(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,U.buffer(this.shape,this.dtype,t)]}})})},n.prototype.bufferSync=function(){return U.buffer(this.shape,this.dtype,this.dataSync())},n.prototype.array=function(){return ae(this,void 0,void 0,function(){var t;return se(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,ul(this.shape,t)]}})})},n.prototype.arraySync=function(){return ul(this.shape,this.dataSync())},n.prototype.data=function(){return ae(this,void 0,void 0,function(){var t,e;return se(this,function(r){switch(r.label){case 0:return this.throwIfDisposed(),t=vn().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=r.sent();try{return[2,e.map(function(o){return Wi(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,t]}})})},n.prototype.dataSync=function(){this.throwIfDisposed();var t=vn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return Wi(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},n.prototype.bytes=function(){return ae(this,void 0,void 0,function(){var t;return se(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,vn().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},n.prototype.dispose=function(){this.isDisposed||(vn().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(n.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),n.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},n.prototype.toFloat=function(){return this.asType("float32")},n.prototype.toInt=function(){return this.asType("int32")},n.prototype.toBool=function(){return this.asType("bool")},n.prototype.print=function(t){return t===void 0&&(t=!1),U.print(this,t)},n.prototype.reshape=function(t){return this.throwIfDisposed(),U.reshape(this,t)},n.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},n.prototype.expandDims=function(t){return t===void 0&&(t=0),U.expandDims(this,t)},n.prototype.cumsum=function(t,e,r){return t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1),U.cumsum(this,t,e,r)},n.prototype.squeeze=function(t){return this.throwIfDisposed(),U.squeeze(this,t)},n.prototype.clone=function(){return this.throwIfDisposed(),U.clone(this)},n.prototype.oneHot=function(t,e,r){return this.throwIfDisposed(),U.oneHot(this,t,e,r)},n.prototype.toString=function(t){return t===void 0&&(t=!1),Tm(this.dataSync(),this.shape,this.dtype,t)},n.prototype.tile=function(t){return this.throwIfDisposed(),U.tile(this,t)},n.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),U.gather(this,t,e)},n.prototype.matMul=function(t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!1),this.throwIfDisposed(),U.matMul(this,t,e,r)},n.prototype.dot=function(t){return this.throwIfDisposed(),U.dot(this,t)},n.prototype.norm=function(t,e,r){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1),this.throwIfDisposed(),U.norm(this,t,e,r)},n.prototype.slice=function(t,e){return this.throwIfDisposed(),U.slice(this,t,e)},n.prototype.reverse=function(t){return this.throwIfDisposed(),U.reverse(this,t)},n.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof n&&(t=[t]),U.concat([this].concat(t),e)},n.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),U.split(this,t,e)},n.prototype.stack=function(t,e){return e===void 0&&(e=0),U.stack([this,t],e)},n.prototype.unstack=function(t){return t===void 0&&(t=0),U.unstack(this,t)},n.prototype.pad=function(t,e){return e===void 0&&(e=0),U.pad(this,t,e)},n.prototype.batchNormalization=function(t,e,r,o,i){return r===void 0&&(r=.001),Ah("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,i,o,r)},n.prototype.batchNorm=function(t,e,r,o,i){return i===void 0&&(i=.001),this.throwIfDisposed(),U.batchNorm(this,t,e,r,o,i)},n.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),U.all(this,t,e)},n.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),U.any(this,t,e)},n.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),U.logSumExp(this,t,e)},n.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),U.sum(this,t,e)},n.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),U.prod(this,t,e)},n.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),U.mean(this,t,e)},n.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),U.min(this,t,e)},n.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),U.max(this,t,e)},n.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),U.argMin(this,t)},n.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),U.argMax(this,t)},n.prototype.cast=function(t){return this.throwIfDisposed(),U.cast(this,t)},n.prototype.add=function(t){return this.throwIfDisposed(),U.add(this,t)},n.prototype.addStrict=function(t){return this.throwIfDisposed(),U.addStrict(this,t)},n.prototype.atan2=function(t){return this.throwIfDisposed(),U.atan2(this,t)},n.prototype.sub=function(t){return this.throwIfDisposed(),U.sub(this,t)},n.prototype.subStrict=function(t){return this.throwIfDisposed(),U.subStrict(this,t)},n.prototype.pow=function(t){return this.throwIfDisposed(),U.pow(this,t)},n.prototype.powStrict=function(t){return this.throwIfDisposed(),U.powStrict(this,t)},n.prototype.mul=function(t){return this.throwIfDisposed(),U.mul(this,t)},n.prototype.mulStrict=function(t){return this.throwIfDisposed(),U.mulStrict(this,t)},n.prototype.div=function(t){return this.throwIfDisposed(),U.div(this,t)},n.prototype.divNoNan=function(t){return this.throwIfDisposed(),U.divNoNan(this,t)},n.prototype.floorDiv=function(t){return this.throwIfDisposed(),U.floorDiv(this,t)},n.prototype.divStrict=function(t){return this.throwIfDisposed(),U.divStrict(this,t)},n.prototype.minimum=function(t){return this.throwIfDisposed(),U.minimum(this,t)},n.prototype.minimumStrict=function(t){return this.throwIfDisposed(),U.minimumStrict(this,t)},n.prototype.maximum=function(t){return this.throwIfDisposed(),U.maximum(this,t)},n.prototype.maximumStrict=function(t){return this.throwIfDisposed(),U.maximumStrict(this,t)},n.prototype.mod=function(t){return this.throwIfDisposed(),U.mod(this,t)},n.prototype.modStrict=function(t){return this.throwIfDisposed(),U.modStrict(this,t)},n.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),U.squaredDifferenceStrict(this,t)},n.prototype.transpose=function(t){return this.throwIfDisposed(),U.transpose(this,t)},n.prototype.notEqual=function(t){return this.throwIfDisposed(),U.notEqual(this,t)},n.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),U.notEqualStrict(this,t)},n.prototype.less=function(t){return this.throwIfDisposed(),U.less(this,t)},n.prototype.lessStrict=function(t){return this.throwIfDisposed(),U.lessStrict(this,t)},n.prototype.equal=function(t){return this.throwIfDisposed(),U.equal(this,t)},n.prototype.equalStrict=function(t){return this.throwIfDisposed(),U.equalStrict(this,t)},n.prototype.lessEqual=function(t){return this.throwIfDisposed(),U.lessEqual(this,t)},n.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),U.lessEqualStrict(this,t)},n.prototype.greater=function(t){return this.throwIfDisposed(),U.greater(this,t)},n.prototype.greaterStrict=function(t){return this.throwIfDisposed(),U.greaterStrict(this,t)},n.prototype.greaterEqual=function(t){return this.throwIfDisposed(),U.greaterEqual(this,t)},n.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),U.greaterEqualStrict(this,t)},n.prototype.logicalAnd=function(t){return this.throwIfDisposed(),U.logicalAnd(this,t)},n.prototype.logicalOr=function(t){return this.throwIfDisposed(),U.logicalOr(this,t)},n.prototype.logicalNot=function(){return this.throwIfDisposed(),U.logicalNot(this)},n.prototype.logicalXor=function(t){return this.throwIfDisposed(),U.logicalXor(this,t)},n.prototype.where=function(t,e){return this.throwIfDisposed(),U.where(t,this,e)},n.prototype.neg=function(){return this.throwIfDisposed(),U.neg(this)},n.prototype.ceil=function(){return this.throwIfDisposed(),U.ceil(this)},n.prototype.floor=function(){return this.throwIfDisposed(),U.floor(this)},n.prototype.sign=function(){return this.throwIfDisposed(),U.sign(this)},n.prototype.isNaN=function(){return this.throwIfDisposed(),U.isNaN(this)},n.prototype.isInf=function(){return this.throwIfDisposed(),U.isInf(this)},n.prototype.isFinite=function(){return this.throwIfDisposed(),U.isFinite(this)},n.prototype.exp=function(){return this.throwIfDisposed(),U.exp(this)},n.prototype.expm1=function(){return this.throwIfDisposed(),U.expm1(this)},n.prototype.log=function(){return this.throwIfDisposed(),U.log(this)},n.prototype.log1p=function(){return this.throwIfDisposed(),U.log1p(this)},n.prototype.sqrt=function(){return this.throwIfDisposed(),U.sqrt(this)},n.prototype.rsqrt=function(){return this.throwIfDisposed(),U.rsqrt(this)},n.prototype.square=function(){return this.throwIfDisposed(),U.square(this)},n.prototype.reciprocal=function(){return this.throwIfDisposed(),U.reciprocal(this)},n.prototype.abs=function(){return this.throwIfDisposed(),U.abs(this)},n.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),U.clipByValue(this,t,e)},n.prototype.relu=function(){return this.throwIfDisposed(),U.relu(this)},n.prototype.relu6=function(){return this.throwIfDisposed(),U.relu6(this)},n.prototype.elu=function(){return this.throwIfDisposed(),U.elu(this)},n.prototype.selu=function(){return this.throwIfDisposed(),U.selu(this)},n.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),U.leakyRelu(this,t)},n.prototype.prelu=function(t){return this.throwIfDisposed(),U.prelu(this,t)},n.prototype.sigmoid=function(){return this.throwIfDisposed(),U.sigmoid(this)},n.prototype.logSigmoid=function(){return this.throwIfDisposed(),U.logSigmoid(this)},n.prototype.softplus=function(){return this.throwIfDisposed(),U.softplus(this)},n.prototype.zerosLike=function(){return this.throwIfDisposed(),U.zerosLike(this)},n.prototype.onesLike=function(){return this.throwIfDisposed(),U.onesLike(this)},n.prototype.sin=function(){return this.throwIfDisposed(),U.sin(this)},n.prototype.cos=function(){return this.throwIfDisposed(),U.cos(this)},n.prototype.tan=function(){return this.throwIfDisposed(),U.tan(this)},n.prototype.asin=function(){return this.throwIfDisposed(),U.asin(this)},n.prototype.acos=function(){return this.throwIfDisposed(),U.acos(this)},n.prototype.atan=function(){return this.throwIfDisposed(),U.atan(this)},n.prototype.sinh=function(){return this.throwIfDisposed(),U.sinh(this)},n.prototype.cosh=function(){return this.throwIfDisposed(),U.cosh(this)},n.prototype.tanh=function(){return this.throwIfDisposed(),U.tanh(this)},n.prototype.asinh=function(){return this.throwIfDisposed(),U.asinh(this)},n.prototype.acosh=function(){return this.throwIfDisposed(),U.acosh(this)},n.prototype.atanh=function(){return this.throwIfDisposed(),U.atanh(this)},n.prototype.erf=function(){return this.throwIfDisposed(),U.erf(this)},n.prototype.round=function(){return this.throwIfDisposed(),U.round(this)},n.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),U.step(this,t)},n.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),U.softmax(this,t)},n.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),U.logSoftmax(this,t)},n.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),U.image.resizeBilinear(this,t,e)},n.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),U.image.resizeNearestNeighbor(this,t,e)},n.prototype.conv1d=function(t,e,r,o,i,a){return o===void 0&&(o="NWC"),i===void 0&&(i=1),this.throwIfDisposed(),U.conv1d(this,t,e,r,o,i,a)},n.prototype.conv2d=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),U.conv2d(this,t,e,r,o,i,a)},n.prototype.conv2dTranspose=function(t,e,r,o,i){return this.throwIfDisposed(),U.conv2dTranspose(this,t,e,r,o,i)},n.prototype.depthwiseConv2D=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),U.depthwiseConv2d(this,t,e,r,o,i,a)},n.prototype.separableConv2d=function(t,e,r,o,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC"),this.throwIfDisposed(),U.separableConv2d(this,t,e,r,o,i,a)},n.prototype.avgPool=function(t,e,r,o){return this.throwIfDisposed(),U.avgPool(this,t,e,r,o)},n.prototype.maxPool=function(t,e,r,o){return this.throwIfDisposed(),U.maxPool(this,t,e,r,o)},n.prototype.localResponseNormalization=function(t,e,r,o){return t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5),U.localResponseNormalization(this,t,e,r,o)},n.prototype.pool=function(t,e,r,o,i){return this.throwIfDisposed(),U.pool(this,t,e,r,o,i)},n.prototype.variable=function(t,e,r){return t===void 0&&(t=!0),this.throwIfDisposed(),vn().makeVariable(this,t,e,r)},n.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),U.unsortedSegmentSum(this,t,e)},n.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),U.batchToSpaceND(this,t,e)},n.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),U.spaceToBatchND(this,t,e)},n.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),U.topk(this,t,e)},n.prototype.stridedSlice=function(t,e,r,o,i,a,s,u){return o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),U.stridedSlice(this,t,e,r,o,i,a,s,u)},n.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),U.depthToSpace(this,t,e)},n.prototype.fft=function(){return this.throwIfDisposed(),U.spectral.fft(this)},n.prototype.ifft=function(){return this.throwIfDisposed(),U.spectral.ifft(this)},n.prototype.rfft=function(){return this.throwIfDisposed(),U.spectral.rfft(this)},n.prototype.irfft=function(){return this.throwIfDisposed(),U.spectral.irfft(this)},n}();Object.defineProperty(je,Symbol.hasInstance,{value:function(n){return!!n&&n.dataId!=null&&n.shape!=null&&n.dtype!=null}});var fl,Bs,Ls,Ws,Us,so=function(n){function t(e,r,o,i){var a=n.call(this,e.shape,e.dtype,e.dataId,i)||this;return a.trainable=r,a.name=o,a}return on(t,n),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!it(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");vn().disposeTensor(this),this.dataId=e.dataId,vn().incRef(this,null)},t.prototype.dispose=function(){vn().disposeVariable(this),this.isDisposedInternal=!0},t}(je);Object.defineProperty(so,Symbol.hasInstance,{value:function(n){return n instanceof je&&n.assign!=null&&n.assign instanceof Function}}),function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"}(fl||(fl={})),function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"}(Bs||(Bs={})),function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"}(Ls||(Ls={})),function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"}(Ws||(Ws={})),function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"}(Us||(Us={}));var Nm={float32:Ws,int32:Bs,bool:Ls,complex64:Us};function lt(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error("Can not upcast "+n+" with "+t)}return Nm[n][t]}function Ka(n){return lt(n,"int32")}function Ke(n,t){if(n.dtype===t.dtype)return[n,t];var e=lt(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Fm(n,t){R(n.dtype===t.dtype,function(){return"The dtypes of the first("+n.dtype+") and second("+t.dtype+") input must match"})}function Dh(n){var t=[];return function e(r,o,i){if(r!=null){if(r instanceof je)return void o.push(r);if(a=r,!(!Array.isArray(a)&&typeof a!="object")){var a,s=r;for(var u in s){var c=s[u];i.has(c)||(i.add(c),e(c,o,i))}}}}(n,t,new Set),t}var Xa,hl=function(){function n(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return n.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},n}(),Pm=function(){function n(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new hl}return n.prototype.ready=function(){return ae(this,void 0,void 0,function(){var t,e,r;return se(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(r=t[e],[4,this.initializeBackend(r).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(r)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(n.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),n.prototype.backendNames=function(){return Object.keys(this.registryFactory)},n.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},n.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},n.prototype.registerBackend=function(t,e,r){return r===void 0&&(r=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:r},!0)},n.prototype.setBackend=function(t){return ae(this,void 0,void 0,function(){var e,r,o;return se(this,function(i){switch(i.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),r=e.success,e.asyncInit?[4,r]:[3,2]);case 1:return o=i.sent(),[3,3];case 2:o=r,i.label=3;case 3:if(!o)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Am(this.backendInstance),[2,!0]}})})},n.prototype.setupRegisteredKernels=function(){var t=this;al(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},n.prototype.disposeRegisteredKernels=function(t){var e=this;al(t).forEach(function(r){r.disposeFunc!=null&&r.disposeFunc(e.registry[t])})},n.prototype.initializeBackend=function(t){var e=this,r=this.registryFactory[t];if(r==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=r.factory();if(Promise.resolve(o)===o){var i=++this.pendingBackendInitId,a=o.then(function(s){return!(i<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(i<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},n.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},n.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,r){return t.registryFactory[r].priority-t.registryFactory[e].priority})},n.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var r=t[e],o=this.initializeBackend(r),i=o.success,a=o.asyncInit;if(a||i)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},n.prototype.moveData=function(t,e){var r=this.state.tensorInfo.get(e),o=r.backend,i=this.readSync(e);o.disposeData(e),r.backend=t,t.move(e,i,r.shape,r.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},n.prototype.tidy=function(t,e){var r,o=this,i=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=t}return this.scopedRun(function(){return o.startScope(i)},function(){return o.endScope(r)},function(){return(r=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r})},n.prototype.scopedRun=function(t,e,r){t();try{var o=r();return e(),o}catch(i){throw e(),i}},n.prototype.nextTensorId=function(){return n.nextTensorId++},n.prototype.nextVariableId=function(){return n.nextVariableId++},n.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),r={x:t};return this.addTapeNode(this.state.activeScope.name,r,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},n.prototype.runKernel=function(t,e,r,o,i){return this.runKernelFunc(null,e,null,t,r,o,i)},n.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},n.prototype.checkKernelForMemLeak=function(t,e,r){var o=this.backend.numDataIds(),i=0;r.forEach(function(u){i+=u.dtype==="complex64"?3:1});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-i-a;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},n.prototype.runKernelFunc=function(t,e,r,o,i,a,s){var u,c=this;a===void 0&&(a=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(x){f&&(l=x.map(function(b){return c.keep(c.clone(b))}))},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var g,m=bh(o,this.backendName);return h=m!=null?function(){var x=c.backend.numDataIds();g=m.kernelFunc({inputs:e,attrs:i,backend:c.backend});var b=Array.isArray(g)?g:[g];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b);var y=b.map(function(_){var S=_.dataId,k=_.shape,E=_.dtype;return c.makeTensorFromDataId(S,k,E)}),w=y.filter(function(_,S){return s[S]});return d((a||[]).slice().concat(w)),y}:function(){var x=c.backend.numDataIds();g=c.tidy(function(){return t(c.backend,d)});var b=Array.isArray(g)?g:[g];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return h()}):h()}),f&&this.addTapeNode(o,e,u,r,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(x){return e[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(g)?u:u[0]},n.prototype.makeTensor=function(t,e,r,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",o=o||this.backend;var i=t;r==="string"&&_u(t[0])&&(i=t.map(function(l){return Sm(l)}));var a=o.write(i,e,r),s=new je(e,r,a,this.nextTensorId());if(this.incRef(s,o),r==="string"){var u=this.state.tensorInfo.get(a),c=Em(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},n.prototype.makeTensorFromDataId=function(t,e,r,o){var i=new je(e,r=r||"float32",t,this.nextTensorId());return this.incRef(i,o),i},n.prototype.makeVariable=function(t,e,r,o){e===void 0&&(e=!0),r=r||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var i=new so(t,e,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error("Variable with name "+i.name+" was already registered");return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},n.prototype.incRef=function(t,e){var r=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,r===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Eh(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof so||this.track(t)},n.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},n.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},n.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},n.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},n.prototype.profile=function(t){return ae(this,void 0,void 0,function(){var e,r;return se(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(i){return i.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r,[2,this.state.activeProfile]})})},n.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},n.prototype.addTapeNode=function(t,e,r,o,i){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:i},u=gm(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=r[f],d=Yo(h.size,h.dtype);return a.makeTensor(d,h.shape,h.dtype)}return l}),o(c.length>1?c:c[0],i)}),this.state.activeTape.push(s)},n.prototype.keep=function(t){return t.kept=!0,t},n.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},n.prototype.endTape=function(){this.state.gradientDepth--},n.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},n.prototype.endScope=function(t){for(var e=this,r=Dh(t),o=new Set(r.map(function(u){return u.id})),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||o.has(a.id)||a.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},n.prototype.gradients=function(t,e,r,o){var i=this;if(o===void 0&&(o=!1),R(e.length>0,function(){return"gradients() received an empty list of xs."}),r!=null&&r.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var a=this.scopedRun(function(){return i.startTape()},function(){return i.endTape()},function(){return i.tidy("forward",t)});R(a instanceof je,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(_=u[d]).inputs;for(var v in p){for(var g=p[v],m=!1,x=0;x<c.length;x++)if(f[g.id]){_.outputs.forEach(function(I){return f[I.id]=!0}),m=!0,h[_.id]=!0;break}if(m)break}}var b={};b[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(_=u[d]).inputs,x=0;x<_.outputs.length;x++)if(b[_.outputs[x].id]){for(var v in p)b[p[v].id]=!0,y[_.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var _;if(h[(_=u[d]).id]&&y[_.id]){var S={};for(var v in _.inputs){var k=_.inputs[v];f[k.id]&&(S[v]=k)}var E=Object.assign({},_);E.inputs=S,E.outputs=_.outputs,w.push(E)}}return w}(this.state.activeTape,e,a);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[a.id]=r??(u=a.shape,c=Rh(le(u),"float32"),P.makeTensor(c,u,"float32")),function(h,d,p){for(var v=function(m){var x=d[m],b=[];if(x.outputs.forEach(function(S){var k=h[S.id];k!=null?b.push(k):b.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(b),w=function(S){if(!(S in y))throw new Error("Cannot backprop through input "+S+". Available gradients found: "+Object.keys(y)+".");var k=p(function(){return y[S]()});if(k.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+S+" must have 'float32' dtype, but has '"+k.dtype+"'");var E=x.inputs[S];if(!it(k.shape,E.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+S+"' has shape '"+k.shape+"', which does not match the shape of the input '"+E.shape+"'");if(h[E.id]==null)h[E.id]=k;else{var I=h[E.id];h[E.id]=I.add(k),I.dispose()}};for(var _ in x.inputs)w(_)},g=d.length-1;g>=0;g--)v(g)}(l,s,function(h){return i.tidy(h)});var f=e.map(function(h){return l[h.id]});return i.state.gradientDepth===0&&(i.state.activeTape.forEach(function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()}),i.state.activeTape=null),{value:a,grads:f}})},n.prototype.customGrad=function(t){var e=this;return R(Ms(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var r,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];R(o.every(function(s){return s instanceof je}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return o.forEach(function(s,u){a[u]=s}),e.runKernelFunc(function(s,u){return R((r=t.apply(void 0,o.concat([u]))).value instanceof je,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),R(Ms(r.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),r.value},a,function(s,u){var c=r.gradFunc(s,u),l=Array.isArray(c)?c:[c];R(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),R(l.every(function(h){return h instanceof je}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,d){f[d]=function(){return h}}),f})}},n.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},n.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},n.prototype.time=function(t){return ae(this,void 0,void 0,function(){var e,r;return se(this,function(o){switch(o.label){case 0:return e=pn(),[4,this.backend.time(t)];case 1:return(r=o.sent()).wallMs=pn()-e,[2,r]}})})},n.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(n.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),n.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new hl,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},n.nextTensorId=0,n.nextVariableId=0,n}(),P=function(){var n=function(){if(Xa==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Xa=e}return Xa}();if(n._tfengine==null){var t=new pm(n);n._tfengine=new Pm(t)}return function(e){xh=e}(n._tfengine.ENV),vn=function(){return n._tfengine},n._tfengine}();function Th(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Dn=G();Dn.registerFlag("DEBUG",function(){return!1},function(n){n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Dn.registerFlag("IS_BROWSER",function(){return Th()}),Dn.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Dn.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Dn.registerFlag("PROD",function(){return!1}),Dn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Dn.getBool("DEBUG")}),Dn.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Dn.registerFlag("IS_TEST",function(){return!1});var zo,Ut,Bt,br={},$a={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Mm(n,t){br[n]=t}function Cn(n){n in br||(br[n]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var r=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return r.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete br[e]},!1),e===1?r.getContext("webgl",$a)||r.getContext("experimental-webgl",$a):r.getContext("webgl2",$a)}(n));var t=br[n];return t.isContextLost()?(delete br[n],Cn(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),br[n])}function ga(n,t){return[t,n]}function Ao(n){var t=le(n);return Ps(Math.ceil(t/4))}function Jo(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function Cu(n,t){var e,r,o,i,a,s,u,c,l,f=n;return G().getNumber("WEBGL_VERSION")===2?(e=f.R32F,r=f.R16F,o=f.RGBA16F,i=f.RGBA32F,a=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=n.RGBA,r=n.RGBA,o=n.RGBA,i=f.RGBA,a=n.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=n.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:n.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function fe(n,t,e){var r=e();return t&&function(o){var i=o.getError();if(i!==o.NO_ERROR)throw new Error("WebGL Error: "+Wm(o,i))}(n),r}(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(zo||(zo={})),function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"}(Ut||(Ut={})),function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(Bt||(Bt={}));var Om=596e-10,Bm=65504;function Lm(n){return!!(G().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||Om<Math.abs(n)&&Math.abs(n)<Bm)}function Wm(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function ci(n,t,e){return Un(n,t,function(){return n.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Um(n,t,e){var r=Un(n,t,function(){return n.createShader(n.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(fe(n,t,function(){return n.shaderSource(r,e)}),fe(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function Vm(n,t,e){var r=Un(n,t,function(){return n.createShader(n.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(fe(n,t,function(){return n.shaderSource(r,e)}),fe(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw function(o,i){var a=zm.exec(i);if(a==null)return console.log("Couldn't parse line number in error: "+i),void console.log(o);for(var s=+a[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(g,m){return Qr((m+1).toString(),c)+g}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),v=l.slice(s);console.log(d.join(`
`)),console.log(i.split(`
`)[0]),console.log("%c "+Qr(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(e,n.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var Ya,Ja,zm=/ERROR: [0-9]+:([0-9]+):/g;function Hm(n,t){return Un(n,t,function(){return n.createProgram()},"Unable to create WebGLProgram.")}function Gm(n,t,e){if(fe(n,t,function(){return n.linkProgram(e)}),n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Qa(n,t,e){if(fe(n,t,function(){return n.validateProgram(e)}),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function jm(n,t,e){var r=Un(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return fe(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),fe(n,t,function(){return n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function qm(n,t,e){var r=Un(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return fe(n,t,function(){return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r)}),fe(n,t,function(){return n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function Km(n,t){return Un(n,t,function(){return n.createTexture()},"Unable to create WebGLTexture.")}function Xm(n,t){var e=G().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){var r="["+n+"x"+t+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(n>e||t>e)throw r="["+n+"x"+t+"]",new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function $m(n,t){return Un(n,t,function(){return n.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function dl(n,t,e,r,o,i,a,s){var u=n.getAttribLocation(e,r);return u!==-1&&(fe(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,o)}),fe(n,t,function(){return n.vertexAttribPointer(u,i,n.FLOAT,!1,a,s)}),fe(n,t,function(){return n.enableVertexAttribArray(u)}),!0)}function Ym(n,t,e,r){ty(n,r),fe(n,t,function(){return n.activeTexture(n.TEXTURE0+r)}),fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)})}function Jm(n,t,e,r){return Un(n,t,function(){return n.getUniformLocation(e,r)},'uniform "'+r+'" not present in program.')}function Qm(n,t,e){return n.getUniformLocation(t,e)}function Zm(n,t,e,r,o,i){fe(n,t,function(){return Ym(n,t,r,i)}),fe(n,t,function(){return n.uniform1i(o,i)})}function Za(n,t,e,r){fe(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,r)}),fe(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0)})}function pl(n,t,e){fe(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,e)}),fe(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0)})}function li(n){var t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+ey(n,t))}function ey(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Un(n,t,e,r){var o=fe(n,t,function(){return e()});if(o==null)throw new Error(r);return o}function ty(n,t){var e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+n.TEXTURE0;if(r<n.TEXTURE0||r>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function Ui(n,t){return t===void 0&&(t=2),le(n.slice(0,n.length-t))}function Vi(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function es(n){var t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[Ui(n)].concat(Vi(n))),t}function ny(n,t){var e;t===void 0&&(t=!1);var r=G().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(r*=2,(n=n.map(function(c,l){return l>=n.length-2?Ch(n[l]):n[l]})).length===1&&(n=[2,n[0]])),n.length!==2){var o=Cr(n);n=o.newShape}var i=le(n);if(n.length<=1&&i<=r)return[1,i];if(n.length===2&&n[0]<=r&&n[1]<=r)return n;if(n.length===3&&n[0]*n[1]<=r&&n[2]<=r)return[n[0]*n[1],n[2]];if(n.length===3&&n[0]<=r&&n[1]*n[2]<=r)return[n[0],n[1]*n[2]];if(n.length===4&&n[0]*n[1]*n[2]<=r&&n[3]<=r)return[n[0]*n[1]*n[2],n[3]];if(n.length===4&&n[0]<=r&&n[1]*n[2]*n[3]<=r)return[n[0],n[1]*n[2]*n[3]];if(t){var a=Ui(n),s=2,u=2;return n.length&&(s=(e=Vi(n))[0],u=e[1]),Ps(i=a*(s/2)*(u/2)).map(function(c){return 2*c})}return Ps(i)}function fi(n){return n%2==0}function hi(n,t){if(it(n=n.slice(-2),t=t.slice(-2))||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){var e=n.slice(-1)[0],r=t.slice(-1)[0];if(e===r||fi(e)&&fi(r)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&fi(n[0])&&fi(t[0])}function ry(n){if(Ya==null){var t=Cn(n);Ya=t.getParameter(t.MAX_TEXTURE_SIZE)}return Ya}function oy(n){if(Ja==null){var t=Cn(n);Ja=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Ja)}function iy(n){if(n===0)return 0;var t=Cn(n);return Yt(t,"EXT_disjoint_timer_query_webgl2")&&n===2?2:Yt(t,"EXT_disjoint_timer_query")?1:0}function Yt(n,t){return n.getExtension(t)!=null}function vl(n){try{if(Cn(n)!=null)return!0}catch{return!1}return!1}function ay(n){if(n===0)return!1;var t=Cn(n);if(n===1){if(!Yt(t,"OES_texture_float"))return!1}else if(!Yt(t,"EXT_color_buffer_float"))return!1;return Vs(t)}function sy(n){if(n===0)return!1;var t=Cn(n);if(n!==1){if(Yt(t,"EXT_color_buffer_float"))return Vs(t);if(Yt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(r,o){var i=Cu(r,o),a=r.createTexture();r.bindTexture(r.TEXTURE_2D,a),r.texImage2D(r.TEXTURE_2D,0,i.internalFormatHalfFloat,1,1,0,i.textureFormatFloat,i.textureTypeHalfFloat,null);var s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,a,0);var u=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(a),r.deleteFramebuffer(s),u}(t,e)}return!1}return!!Yt(t,"OES_texture_float")&&!!Yt(t,"WEBGL_color_buffer_float")&&Vs(t)}function Vs(n){var t=Cu(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);var o=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),o}function uy(n){return n===2&&Cn(n).fenceSync!=null}var ge=G();function Nh(n){G().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function ie(n,t){return P.tidy(n,t)}function Nt(n){Dh(n).forEach(function(t){return t.dispose()})}function cy(n){return P.keep(n)}function zi(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];G().getBool("IS_TEST")||console.warn.apply(console,n)}function fr(n,t){var e=n;if(xn(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];for(var r=[];Array.isArray(e)||xn(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&G().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(i,a,s){if(s=s||[],!Array.isArray(i)&&!xn(i))return void R(a.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+a[0]+" elements"});R(a.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+i.length+" elements"}),R(i.length===a[0],function(){return"Element arr["+s.join("][")+"] should have "+a[0]+" elements, but has "+i.length+" elements"});for(var u=a.slice(1),c=0;c<i.length;++c)o(i[c],u,s.concat(c))}(n,r,[]),r}function gl(n,t,e,r){if(n!=null&&(n!=="numeric"&&n!==t||n==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+r+"' must be "+n+" tensor, but got "+t+" tensor")}function C(n,t,e,r){if(r===void 0&&(r="numeric"),n instanceof je)return gl(r,n.dtype,t,e),n;var o=$o(n);if(o!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),gl(r,o,t,e),n==null||!xn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){var i=n==null?"null":n.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+i+"'")}var a=fr(n,o);xn(n)||Array.isArray(n)||(n=[n]);var s=o!=="string"?Ih(n,o,G().getBool("DEBUG")):ao(n,[],!0);return P.makeTensor(s,a,o)}function Hi(n,t,e,r){if(r===void 0&&(r="numeric"),!Array.isArray(n))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return n.map(function(o,i){return C(o,t+"["+i+"]",e)},r)}function Fh(n,t){for(var e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function ly(n,t,e){for(var r=n.length+t.length,o=[],i=0,a=0,s=0;s<r;s++)e.indexOf(s)===-1?o.push(n[i++]):o.push(t[a++]);return o}function pt(n,t){for(var e=[],r=n.length,o=0;o<r;o++)t.indexOf(o)===-1&&e.push(n[o]);return[e,t.map(function(i){return n[i]})]}function Ft(n,t){return ly(n,t.map(function(e){return 1}),t)}function Ot(n,t,e){R(Fh(t,e),function(){return n+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function En(n,t){if(Fh(n,t))return null;for(var e=[],r=0;r<t;++r)n.indexOf(r)===-1&&e.push(r);return n.forEach(function(o){return e.push(o)}),e}function Eu(n){return n.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function In(n,t){for(var e=[],r=t-n;r<t;++r)e.push(r);return e}function fy(n,t){var e=n[0].length;n.forEach(function(o,i){R(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+i+"] must be the same as the rank of the rest ("+e+")"})}),R(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var r=n[0];n.forEach(function(o,i){for(var a=0;a<e;a++)R(a===t||o[a]===r[a],function(){return"Error in concat"+e+"D: Shape of tensors["+i+"] ("+o+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+i+"."})})}function uo(n,t){for(var e=n[0].slice(),r=1;r<n.length;r++)e[t]+=n[r][t];return e}function N(n){var t=Object.keys(n);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];P.startScope(e);try{var s=r.apply(void 0,i);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),P.endScope(s),s}catch(u){throw P.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ge.registerFlag("HAS_WEBGL",function(){return ge.getNumber("WEBGL_VERSION")>0}),ge.registerFlag("WEBGL_VERSION",function(){return vl(2)?2:vl(1)?1:0}),ge.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ge.get("WEBGL_VERSION")===2}),ge.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ge.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ge.registerFlag("WEBGL_PACK",function(){return ge.getBool("HAS_WEBGL")}),ge.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_CLIP",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ge.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_REDUCE",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_CONV_IM2COL",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return ry(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return oy(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var n=ge.getNumber("WEBGL_VERSION");return n===0?0:iy(n)}),ge.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ge.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(n=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4))));var n}),ge.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return ay(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ge.getBool("WEBGL_FORCE_F16_TEXTURES")&&ge.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ge.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return sy(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return uy(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ge.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Ah=Nh;var ct=N({complex_:function(n,t){var e=C(n,"real","complex"),r=C(t,"imag","complex");return Le(e.shape,r.shape,"real and imag shapes, "+e.shape+" and "+r.shape+", must match in call to tf.complex()."),P.runKernelFunc(function(o){return o.complex(e,r)},{$real:e,$imag:r})}}),$t=N({real_:function(n){var t=C(n,"input","real");return P.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),gn=N({imag_:function(n){var t=C(n,"input","imag");return P.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function ft(n,t,e){return hr(n,t,fr(n,e),e)}function hr(n,t,e,r){if(r==null&&(r=$o(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!xn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Sh(t);var o=le(t),i=le(e);R(o===i,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+i});for(var a=0;a<e.length;++a){var s=e[a],u=a!==e.length-1||s!==le(t.slice(a));R(e[a]===t[a]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return xn(n)||Array.isArray(n)||(n=[n]),t=t||e,n=r!=="string"?Ih(n,r,G().getBool("DEBUG")):ao(n,[],!0),P.makeTensor(n,t,r)}function re(n,t){if((xn(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&xn(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return hr(n,[],[],t)}function Ye(n,t){lo(n);var e=fr(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return hr(n,null,e,t)}function rr(n,t,e){if(lo(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var r=fr(n,e);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return hr(n,t,r,e)}function Iu(n,t,e){if(lo(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var r=fr(n,e);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return hr(n,t,r,e)}function Dt(n,t,e){if(lo(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var r=fr(n,e);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return hr(n,t,r,e)}function hy(n,t,e){if(lo(n),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var r=fr(n,e);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return hr(n,t,r,e)}function dy(n,t,e){if(lo(n),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var r=fr(n,e);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return hr(n,t=t||r,r,e)}function py(n,t,e,r){return t===void 0&&(t=!0),P.makeVariable(n,t,e,r)}function fo(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=fo(n,"float32"),r=He(n,"float32");return ct(e,r)}var o=Rh(le(n),t);return P.makeTensor(o,n,t)}function He(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=He(n,"float32"),r=He(n,"float32");return ct(e,r)}var o=Yo(le(n),t);return P.makeTensor(o,n,t)}function wn(n,t,e){return P.runKernelFunc(function(r){return r.fill(n,t,e)},{})}function vy(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");return P.runKernelFunc(function(r){return r.linspace(n,t,e)},{})}function Gi(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e===0)throw new Error("Cannot have a step of zero");if(n===t||n<t&&e<0||t<n&&e>1)return He([0],r);var o=Yo(Math.abs(Math.ceil((t-n)/e)),r);t<n&&e===1&&(e=-1),o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+e;return Ye(o,r)}var Ph=N({onesLike_:function(n){var t=C(n,"x","onesLike");if(t.dtype==="complex64"){var e=Ph($t(t)),r=Fe(gn(t));return ct(e,r)}return P.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,i){return{$x:function(){return Fe(o)}}})}}),Fe=N({zerosLike_:function(n){var t=C(n,"x","zerosLike");return P.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,r){return{$x:function(){return Fe(e)}}})}}),Ze=N({concat_:function(n,t){t===void 0&&(t=0),R(n.length>=1,function(){return"Pass at least one tensor to concat"});var e=Hi(n,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=rt(t,e[0].shape)[0];var r=uo(e.map(function(s){return s.shape}),t);if(le(r)===0)return ft([],r);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});fy(o,t);var i=e,a={axis:t};return P.runKernelFunc(function(s){return s.concat(e,t)},i,function(s){var u=o.map(function(c){return c[t]});return Ru(s,u,t).map(function(c){return function(){return c}})},"Concat",a)}}),gy=N({concat1d_:function(n){return Ze(n,0)}}),my=N({concat2d_:function(n,t){return Ze(n,t)}}),yy=N({concat3d_:function(n,t){return Ze(n,t)}}),xy=N({concat4d_:function(n,t){return Ze(n,t)}}),Ru=N({split_:function(n,t,e){e===void 0&&(e=0);var r,o=C(n,"x","split");return e=rt(e,o.shape)[0],typeof t=="number"?(R(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),r=new Array(t).fill(o.shape[e]/t)):(R(o.shape[e]===t.reduce(function(i,a){return i+a}),function(){return"The sum of sizes must match the size of the axis dimension."}),r=t),P.runKernelFunc(function(i){return i.split(o,r,e)},{$x:o},function(i){return{$x:function(){return Ze(i,e)}}})}});function Nr(n,t){return n(t={exports:{}},t.exports),t.exports}var by=Nr(function(n){(function(t,e,r){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function i(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function a(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.alea=a})(0,n)}),wy=Nr(function(n){(function(t,e,r){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor128=a})(0,n)}),_y=Nr(function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorwow=a})(0,n)}),Cy=Nr(function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function i(s,u){return u.x=s.x.slice(),u.i=s.i,u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorshift7=a})(0,n)}),Ey=Nr(function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},function(c,l){var f,h,d,p,v,g=[],m=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,m=Math.max(m,l.length)),d=0,p=-32;p<m;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(v=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(v=v+1640531527|0,d=(f=g[127&p]^=h+v)==0?d+1:0);for(d>=128&&(g[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=g[d+34&127],f=g[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,g[d]=h^f;c.w=v,c.X=g,c.i=d}(u,s)}function i(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor4096=a})(0,n)}),Iy=Nr(function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.tychei=a})(0,n)}),wr=Nr(function(n){(function(t,e){var r,o=this,i=256,a=6,s="random",u=e.pow(i,a),c=e.pow(2,52),l=2*c,f=i-1;function h(m,x,b){var y=[],w=v(function k(E,I){var F,A=[],B=typeof E;if(I&&B=="object")for(F in E)try{A.push(k(E[F],I-1))}catch{}return A.length?A:B=="string"?E:E+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[m,g(t)]:m??function(){try{var k;return r&&(k=r.randomBytes)?k=k(i):(k=new Uint8Array(i),(o.crypto||o.msCrypto).getRandomValues(k)),g(k)}catch{var E=o.navigator,I=E&&E.plugins;return[+new Date,o,I,o.screen,g(t)]}}(),3),y),_=new d(y),S=function(){for(var k=_.g(a),E=u,I=0;k<c;)k=(k+I)*i,E*=i,I=_.g(1);for(;k>=l;)k/=2,E/=2,I>>>=1;return(k+I)/E};return S.int32=function(){return 0|_.g(4)},S.quick=function(){return _.g(4)/4294967296},S.double=S,v(g(_.S),t),(x.pass||b||function(k,E,I,F){return F&&(F.S&&p(F,_),k.state=function(){return p(_,{})}),I?(e[s]=k,E):k})(S,w,"global"in x?x.global:this==e,x.state)}function d(m){var x,b=m.length,y=this,w=0,_=y.i=y.j=0,S=y.S=[];for(b||(m=[b++]);w<i;)S[w]=w++;for(w=0;w<i;w++)S[w]=S[_=f&_+m[w%b]+(x=S[w])],S[_]=x;(y.g=function(k){for(var E,I=0,F=y.i,A=y.j,B=y.S;k--;)E=B[F=f&F+1],I=I*i+B[f&(B[F]=B[A=f&A+E])+(B[A]=E)];return y.i=F,y.j=A,I})(i)}function p(m,x){return x.i=m.i,x.j=m.j,x.S=m.S.slice(),x}function v(m,x){for(var b,y=m+"",w=0;w<y.length;)x[f&w]=f&(b^=19*x[f&w])+y.charCodeAt(w++);return g(x)}function g(m){return String.fromCharCode.apply(0,m)}if(e["seed"+s]=h,v(e.random(),t),n.exports){n.exports=h;try{r=require("crypto")}catch{}}})([],Math)});wr.alea=by,wr.xor128=wy,wr.xorwow=_y,wr.xorshift7=Cy,wr.xor4096=Ey,wr.tychei=Iy;var ma=wr.alea,Su=function(){function n(t,e,r,o,i){this.mean=t,this.stdDev=e,this.dtype=r,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=ma(a.toString())}return n.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,r,o=!1;!o;){var i=void 0,a=void 0,s=void 0;do s=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*i*u,r=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(r)||(this.nextVal=this.convertValue(r)),this.convertValue(e)},n.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},n.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},n}(),Ry=function(){function n(t,e,r,o){this.alpha=t,this.beta=1/e,this.dtype=r;var i=o||Math.random();this.randu=ma(i.toString()),this.randn=new Su(0,1,r,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return n.prototype.nextValue=function(){for(var t,e,r,o,i,a;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,e=1-.331*(t=o*o)*t,r=.5*t+this.d*(1-a+Math.log(a)),(i=this.randu())<e||Math.log(i)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},n.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},n}(),Sy=function(){function n(t,e,r,o){var i=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=r,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=ma(o)}return n.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},n.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},n}();function xe(n,t,e){return t===void 0&&(t="float32"),t=t||"float32",Sh(n),new Vo(n,t,e)}function ky(n,t){t===void 0&&(t=!1),console.log(n.toString(t))}var Mh=N({batchToSpaceND_:function(n,t,e){var r=C(n,"x","batchToSpaceND"),o=t.reduce(function(i,a){return i*a});return R(r.rank>=1+t.length,function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+t.length}),R(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),R(r.shape[0]%o==0,function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),P.runKernelFunc(function(i){return i.batchToSpaceND(r,t,e)},{$x:r},function(i){return{$x:function(){return i.spaceToBatchND(t,e)}}})}}),Ay=N({broadcastTo_:function(n,t){var e=C(n,"broadcastTo","x"),r=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var i=Array.from(t),a=t.length-1;a>=0;a--)if(e.shape[a]===t[a])i[a]=1;else if(e.shape[a]!==1)throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+t+"].");var s=i.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():P.runKernelFunc(function(u){return u.tile(e,i)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Dy=N({cast_:function(n,t){var e=C(n,"x","cast");if(!_m(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var r={dtype:t};return P.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",r)}}),Ty=N({clone_:function(n){var t=C(n,"x","clone",null);return P.runKernelFunc(function(){return P.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),Ny=N({cumsum_:function(n,t,e,r){t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1);var o=C(n,"x","cumsum"),i=En([t|=0],o.rank),a=o;i!=null&&(a=o.transpose(i));var s=In(1,o.rank)[0],u=P.runKernelFunc(function(c){return c.cumsum(a,s,e,r)},{permutedX:a},function(c){return{permutedX:function(){return c.cumsum(t,e,!r)}}});return i!=null&&(u=u.transpose(i)),u}}),Fy=N({depthToSpace_:function(n,t,e){e===void 0&&(e="NHWC");var r=C(n,"x","depthToSpace"),o=e==="NHWC"?r.shape[1]:r.shape[2],i=e==="NHWC"?r.shape[2]:r.shape[3],a=e==="NHWC"?r.shape[3]:r.shape[1];return R(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+r.shape}),R(i*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+i+" and "+t+` for depthToSpace with input shape
          `+r.shape}),R(a%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+a+" for depthToSpace with input shape "+r.shape}),P.runKernelFunc(function(s){return s.depthToSpace(r,t,e)},{$x:r})}}),Xt=N({expandDims_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","expandDims",null);R(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var r=e.shape.slice();return t<0&&(R(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),r.splice(t,0,1),Zt(e,r)}}),Oh=N({eye_:function(n,t,e,r){r===void 0&&(r="float32"),t==null&&(t=n);for(var o=xe([n,t],r),i=n<=t?n:t,a=0;a<i;++a)o.set(1,a,a);var s=o.toTensor().as2D(n,t);if(e==null)return s;if(e.length===1)return Zr(Xt(s,0),[e[0],1,1]);if(e.length===2)return Zr(Xt(Xt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Zr(Xt(Xt(Xt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Py=N({multinomial_:function(n,t,e,r){r===void 0&&(r=!1);var o=C(n,"logits","multinomial"),i=o.size,a=o.rank;if(i<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+i+".");if(a>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+a);e=e||Math.random();var s=a===1?o.as2D(1,-1):o,u=P.runKernelFunc(function(c){return c.multinomial(s,r,t,e)},{logits2D:s});return a===1?u.as1D():u}}),zs=N({oneHot_:function(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(n,"indices","oneHot","int32"),i=o.shape.concat([t]);return o=o.flatten(),P.runKernelFunc(function(a){return a.oneHot(o,t,e,r)},{$indices:o},function(a){return{$indices:function(){return He(o.shape,"float32")}}}).reshape(i)}}),Fr=N({pad_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return P.runKernelFunc(function(i){return i.pad(r,t,e)},{x:r},function(i){var a=t.map(function(s){return s[0]});return{x:function(){return i.slice(a,r.shape)}}},"PadV2",o)}}),My=N({pad1d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Fr(n,[t],e)}}),Oy=N({pad2d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Fr(n,t,e)}}),By=N({pad3d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Fr(n,t,e)}}),Ly=N({pad4d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Fr(n,t,e)}}),Wy=N({rand_:function(n,t,e){var r=le(n),o=null;if(e==null||e==="float32")o=new Float32Array(r);else if(e==="int32")o=new Int32Array(r);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(r)}for(var i=0;i<r;i++)o[i]=t();return P.makeTensor(o,n,e)}}),Uy=N({randomNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new Su(t,e,r,!1,o),a=xe(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Vy=N({randomGamma_:function(n,t,e,r,o){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e==null&&(e=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error("Unsupported data type "+r);for(var i=new Ry(t,e,r,o),a=xe(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Bh=N({randomUniform_:function(n,t,e,r,o){t===void 0&&(t=0),e===void 0&&(e=1),r===void 0&&(r="float32");for(var i=xe(n,r),a=new Sy(t,e,null,o),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Zt=N({reshape_:function(n,t){var e=C(n,"x","reshape",null);t=bm(t,e.size),R(e.size===le(t),function(){return"new shape and old shape must have the same number of elements."});var r={shape:t};return P.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",r)}}),Lh=N({spaceToBatchND_:function(n,t,e){var r=C(n,"x","spaceToBatchND");return R(r.rank>=1+t.length,function(){return"input rank "+r.rank+" should be > than [blockShape] "+t.length}),R(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),R(r.shape.reduce(function(o,i,a){return a>0&&a<=t.length?o&&(i+e[a-1][0]+e[a-1][1])%t[a-1]==0:o},!0),function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),P.runKernelFunc(function(o){return o.spaceToBatchND(r,t,e)},{$x:r},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),Wh=N({squeeze_:function(n,t){var e=C(n,"x","squeeze");return Zt(e,Cr(e.shape,t).newShape)}}),Ht=N({stack_:function(n,t){t===void 0&&(t=0);var e=Hi(n,"tensors","stack");if(R(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var r=e[0].rank,o=e[0].shape,i=e[0].dtype;R(t<=r,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){Le(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){R(i===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var a=e.map(function(s){return s.expandDims(t)});return Ze(a,t)}}),Zr=N({tile_:function(n,t){var e=C(n,"x","tile",null);R(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var r=[e],o={reps:t};return P.runKernelFunc(function(i,a){var s=i.tile(e,t);return a([e]),s},{x:e},function(i,a){var s=a[0];return{x:function(){var u=Fe(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(i.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(i.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,r)}}),zy=N({truncatedNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new Su(t,e,r,!0,o),a=xe(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),et=N({unstack_:function(n,t){t===void 0&&(t=0),t=t||0;var e=C(n,"x","unstack");R(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var r={axis:t};return P.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return Ht(o,t)}}},"Unpack",r)}}),Hy=function(n,t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f;return se(this,function(h){switch(h.label){case 0:return e=C(n,"x","setdiff1d"),r=C(t,"y","setdiff1d"),R(e.dtype===r.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+r.dtype+")."}),R(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),R(r.rank===1,function(){return"y should be 1D tensor, but got y ("+r.shape+")."}),[4,e.data()];case 1:return o=h.sent(),[4,r.data()];case 2:for(i=h.sent(),a=new Set(i),s=0,l=0;l<o.length;l++)a.has(o[l])||s++;for(u=new Vo([s],e.dtype),c=new Vo([s],"int32"),l=0,f=0;l<o.length;l++)a.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function ji(n,t,e,r){r===void 0&&(r=!0);var o=[];if(r)(o=o.concat(t.slice(0))).push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);for(var i=t.length,a=0;a<i;++a)o=o.concat([n[a+1]/t[a],t[a]]);o=o.concat(n.slice(i+1))}return o}function qi(n,t,e){e===void 0&&(e=!0);var r=[];if(e){r.push(t);for(var o=t+1;o<n;++o)o<=2*t?(r.push(o),r.push(o-(t+1))):r.push(o)}else{var i=[],a=[];for(o=1;o<n;++o)o>=2*t+1||o%2==1?a.push(o):i.push(o);r.push.apply(r,i),r.push(0),r.push.apply(r,a)}return r}function Ki(n,t,e,r){r===void 0&&(r=!0);var o=[];r?o.push(n[0]/e):o.push(n[0]*e);for(var i=1;i<n.length;++i)i<=t.length?r?o.push(t[i-1]*n[i]):o.push(n[i]/t[i-1]):o.push(n[i]);return o}function Uh(n,t){for(var e=[0],r=0;r<t;++r)e.push(n[r][0]);return e}function Vh(n,t,e){for(var r=n.slice(0,1),o=0;o<e;++o)r.push(n[o+1]-t[o][0]-t[o][1]);return r}function zh(n,t){if(n.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+n.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>n.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+n.rank);if(n.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+n.shape+".");for(var e=t.shape,r=e[e.length-1],o=1,i=0;i<e.length-1;++i)o*=e[i];var a=n.shape,s=e.slice();s.pop();var u=1;for(i=r;i<n.rank;++i)u*=a[i],s.push(a[i]);var c=bn(n.shape).map(function(l){return l/u}).concat([1]).slice(0,r);return[s,o,u,c]}var Hh=30;function ts(n){return n<=Hh?n:Os(n,Math.floor(Math.sqrt(n)))}function Gy(n,t,e){var r=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,i="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+n+", sliceDim: "+r+", and batchDim: "+o+".";if(e.rank<o)throw new Error(i+" update.rank < "+o+". ");if(n.length<r+(e.rank-o))throw new Error(i+" Output shape length < "+(r+(e.rank-o)));if(e.rank!==o+n.length-r)throw new Error(i+" update.rank != "+(o+n.length-r));for(var a=0;a<o;++a)if(e.shape[a]!==t.shape[a])throw new Error(i+" updates.shape["+a+"] ("+e.shape[a]+") != indices.shape["+a+"] ("+t.shape[a]+").");for(a=0;a<e.rank-o;++a)if(e.shape[a+o]!==n[a+r])throw new Error(i+" updates.shape["+(a+o)+"] ("+e.shape[a+o]+") != shape["+(a+o)+"] ("+n[a+o]+")")}function jy(n,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(n.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+n.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(n.size===0)throw new Error("Updates specified for empty output. updates shape: "+n.shape)}Gy(e,t,n)}function Xi(n,t,e){for(var r=t.shape.length,o=r>1?t.shape[r-1]:1,i=e.length,a=1,s=o;s<i;++s)a*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:le(t.shape)/u,sliceSize:a,strides:bn(e.slice(0,o)).concat([1]),outputSize:le(e)}}function qy(n,t,e){R(n.rank===t.length,function(){return"Error in slice"+n.rank+"D: Length of begin "+t+" must match the rank of the array ("+n.rank+")."}),R(n.rank===e.length,function(){return"Error in slice"+n.rank+"D: Length of size "+e+" must match the rank of the array ("+n.rank+")."});for(var r=function(i){R(t[i]+e[i]<=n.shape[i],function(){return"Error in slice"+n.rank+"D: begin["+i+"] + size["+i+"] ("+(t[i]+e[i])+") would overflow input.shape["+i+"] ("+n.shape[i]+")"})},o=0;o<n.rank;++o)r(o)}function ml(n){for(var t=[],e=0;n>0;)1&n&&t.push(e),n/=2,e++;return t}function ku(n,t,e){for(var r=[],o=0;o<n.length;o++)r[o]=Math.ceil((t[o]-n[o])/e[o]);return r}function Ky(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=Fs(0,i,s-1)}function Xy(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=a>0?Fs(0,i,s):Fs(-1,i,s-1)}function Gh(n,t,e){for(var r=e.length,o=0;o<e.length;o++)if(e[o]>1){r=o;break}for(o=r+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function jh(n,t){for(var e=n.length>0?n[n.length-1]:1,r=0;r<n.length-1;r++)e+=n[r]*t[r];return e}function $y(n,t){R(Ms(n),function(){return"The f passed in variableGrads(f) must be a function"}),R(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof so}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var r in t=[],P.registeredVariables)t.push(P.registeredVariables[r]);var o=e?t.filter(function(l){return!l.trainable}):null,i=t.length;R((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+i+" variables is trainable."});var a=P.gradients(n,t,null,!0),s=a.value,u=a.grads;R(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),R(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function ya(n){return P.customGrad(n)}var Vn=N({softmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return P.runKernelFunc(function(r,o){var i=r.softmax(e,t);return o([i]),i},{logits:e},function(r,o){var i=o[0],a=r.mul(i);return{logits:function(){return a.sub(a.sum([t],!0).mul(i))}}},"Softmax",{dim:t},[],[!0])}}),Yy=N({logSoftmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return ya(function(r,o){var i=r.max(t,!0),a=r.sub(i),s=a.toFloat().sub(a.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),qh=function(){function n(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return n.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},n.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},n.prototype.has=function(t){return this.data.has(t)},n.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},n.prototype.numDataIds=function(){return this.dataIdsCount},n}(),Kh=function(){function n(){}return n.prototype.time=function(t){return O("time")},n.prototype.read=function(t){return O("read")},n.prototype.readSync=function(t){return O("readSync")},n.prototype.numDataIds=function(){return O("numDataIds")},n.prototype.disposeData=function(t){return O("disposeData")},n.prototype.write=function(t,e,r){return O("write")},n.prototype.move=function(t,e,r,o){return O("move")},n.prototype.memory=function(){return O("memory")},n.prototype.floatPrecision=function(){return O("floatPrecision")},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.batchMatMul=function(t,e,r,o){return O("batchMatMul")},n.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,O("fusedBatchMatMul")},n.prototype.slice=function(t,e,r){return O("slice")},n.prototype.stridedSlice=function(t,e,r,o){return O("stridedSlice")},n.prototype.unstack=function(t,e){return O("unstack")},n.prototype.reverse=function(t,e){return O("reverse")},n.prototype.concat=function(t,e){return O("concat")},n.prototype.neg=function(t){return O("neg")},n.prototype.add=function(t,e){return O("add")},n.prototype.addN=function(t){return O("addN")},n.prototype.subtract=function(t,e){return O("subtract")},n.prototype.multiply=function(t,e){return O("multiply")},n.prototype.realDivide=function(t,e){return O("realDivide")},n.prototype.floorDiv=function(t,e){return O("floorDiv")},n.prototype.sum=function(t,e){return O("sum")},n.prototype.prod=function(t,e){return O("prod")},n.prototype.unsortedSegmentSum=function(t,e,r){return O("unsortedSegmentSum")},n.prototype.argMin=function(t,e){return O("argMin")},n.prototype.argMax=function(t,e){return O("argMax")},n.prototype.equal=function(t,e){return O("equal")},n.prototype.notEqual=function(t,e){return O("notEqual")},n.prototype.less=function(t,e){return O("less")},n.prototype.lessEqual=function(t,e){return O("lessEqual")},n.prototype.greater=function(t,e){return O("greater")},n.prototype.greaterEqual=function(t,e){return O("greaterEqual")},n.prototype.logicalNot=function(t){return O("logicalNot")},n.prototype.logicalAnd=function(t,e){return O("logicalAnd")},n.prototype.logicalOr=function(t,e){return O("logicalOr")},n.prototype.where=function(t){return O("where")},n.prototype.select=function(t,e,r){return O("select")},n.prototype.topk=function(t,e,r){return O("topk")},n.prototype.min=function(t,e){return O("min")},n.prototype.minimum=function(t,e){return O("minimum")},n.prototype.mod=function(t,e){return O("mod")},n.prototype.max=function(t,e){return O("max")},n.prototype.maximum=function(t,e){return O("maximum")},n.prototype.all=function(t,e){return O("all")},n.prototype.any=function(t,e){return O("any")},n.prototype.squaredDifference=function(t,e){return O("squaredDifference")},n.prototype.ceil=function(t){return O("ceil")},n.prototype.floor=function(t){return O("floor")},n.prototype.round=function(t){return O("round")},n.prototype.sign=function(t){return O("sign")},n.prototype.isNaN=function(t){return O("isNaN")},n.prototype.isInf=function(t){return O("isInf")},n.prototype.isFinite=function(t){return O("isFinite")},n.prototype.pow=function(t,e){return O("pow")},n.prototype.exp=function(t){return O("exp")},n.prototype.expm1=function(t){return O("expm1")},n.prototype.softmax=function(t,e){return O("softmax")},n.prototype.log=function(t){return O("log")},n.prototype.log1p=function(t){return O("log1p")},n.prototype.sqrt=function(t){return O("sqrt")},n.prototype.rsqrt=function(t){return O("rsqrt")},n.prototype.square=function(t){return O("square")},n.prototype.reciprocal=function(t){return O("reciprocal")},n.prototype.relu=function(t){return O("relu")},n.prototype.relu6=function(t){return O("relu6")},n.prototype.prelu=function(t,e){return O("prelu")},n.prototype.elu=function(t){return O("elu")},n.prototype.eluDer=function(t,e){return O("eluDer")},n.prototype.selu=function(t){return O("selu")},n.prototype.int=function(t){return O("int")},n.prototype.clip=function(t,e,r){return O("clip")},n.prototype.abs=function(t){return O("abs")},n.prototype.complexAbs=function(t){return O("complexAbs")},n.prototype.sigmoid=function(t){return O("sigmoid")},n.prototype.softplus=function(t){return O("softplus")},n.prototype.sin=function(t){return O("sin")},n.prototype.cos=function(t){return O("cos")},n.prototype.tan=function(t){return O("tan")},n.prototype.asin=function(t){return O("asin")},n.prototype.acos=function(t){return O("acos")},n.prototype.atan=function(t){return O("atan")},n.prototype.atan2=function(t,e){return O("atan2")},n.prototype.sinh=function(t){return O("sinh")},n.prototype.cosh=function(t){return O("cosh")},n.prototype.tanh=function(t){return O("tanh")},n.prototype.asinh=function(t){return O("asinh")},n.prototype.acosh=function(t){return O("acosh")},n.prototype.atanh=function(t){return O("atanh")},n.prototype.erf=function(t){return O("erf")},n.prototype.step=function(t,e){return O("step")},n.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,O("fusedConv2d")},n.prototype.conv2d=function(t,e,r){return O("conv2d")},n.prototype.conv2dDerInput=function(t,e,r){return O("conv2dDerInput")},n.prototype.conv2dDerFilter=function(t,e,r){return O("conv2dDerFilter")},n.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,O("fusedDepthwiseConv2D")},n.prototype.depthwiseConv2D=function(t,e,r){return O("depthwiseConv2D")},n.prototype.depthwiseConv2DDerInput=function(t,e,r){return O("depthwiseConv2DDerInput")},n.prototype.depthwiseConv2DDerFilter=function(t,e,r){return O("depthwiseConv2DDerFilter")},n.prototype.conv3d=function(t,e,r){return O("conv3d")},n.prototype.conv3dDerInput=function(t,e,r){return O("conv3dDerInput")},n.prototype.conv3dDerFilter=function(t,e,r){return O("conv3dDerFilter")},n.prototype.maxPool=function(t,e){return O("maxPool")},n.prototype.maxPoolBackprop=function(t,e,r,o){return O("maxPoolBackprop")},n.prototype.avgPool=function(t,e){return O("avgPool")},n.prototype.avgPoolBackprop=function(t,e,r){return O("avgPoolBackprop")},n.prototype.avgPool3d=function(t,e){return O("avgPool3d")},n.prototype.avgPool3dBackprop=function(t,e,r){return O("avgPool3dBackprop")},n.prototype.maxPool3d=function(t,e){return O("maxPool3d")},n.prototype.maxPool3dBackprop=function(t,e,r,o){return O("maxPool3dBackprop")},n.prototype.reshape=function(t,e){return O("reshape")},n.prototype.cast=function(t,e){return O("cast")},n.prototype.tile=function(t,e){return O("tile")},n.prototype.pad=function(t,e,r){return O("pad")},n.prototype.transpose=function(t,e){return O("transpose")},n.prototype.gather=function(t,e,r){return O("gather")},n.prototype.gatherND=function(t,e){return O("gatherND")},n.prototype.scatterND=function(t,e,r){return O("scatterND")},n.prototype.batchToSpaceND=function(t,e,r){return O("batchToSpaceND")},n.prototype.spaceToBatchND=function(t,e,r){return O("spaceToBatchND")},n.prototype.resizeBilinear=function(t,e,r,o){return O("resizeBilinear")},n.prototype.resizeBilinearBackprop=function(t,e,r){return O("resizeBilinearBackprop")},n.prototype.resizeNearestNeighbor=function(t,e,r,o){return O("resizeNearestNeighbor")},n.prototype.resizeNearestNeighborBackprop=function(t,e,r){return O("resizeNearestNeighborBackprop")},n.prototype.batchNormalization=function(t,e,r,o,i,a){return O("batchNormalization")},n.prototype.localResponseNormalization4D=function(t,e,r,o,i){return O("localResponseNormalization4D")},n.prototype.LRNGrad=function(t,e,r,o,i,a,s){return O("LRNGrad")},n.prototype.multinomial=function(t,e,r,o){return O("multinomial")},n.prototype.oneHot=function(t,e,r,o){return O("oneHot")},n.prototype.cumsum=function(t,e,r,o){return O("cumsum")},n.prototype.nonMaxSuppression=function(t,e,r,o,i){return O("nonMaxSuppression")},n.prototype.fft=function(t){return O("fft")},n.prototype.ifft=function(t){return O("ifft")},n.prototype.complex=function(t,e){return O("complex")},n.prototype.real=function(t){return O("real")},n.prototype.imag=function(t){return O("imag")},n.prototype.cropAndResize=function(t,e,r,o,i,a){return O("cropAndResize")},n.prototype.depthToSpace=function(t,e,r){return O("depthToSpace")},n.prototype.split=function(t,e,r){return O("split")},n.prototype.sparseToDense=function(t,e,r,o){return O("sparseToDense")},n.prototype.diag=function(t){return O("diag")},n.prototype.fill=function(t,e,r){return O("fill")},n.prototype.onesLike=function(t){return O("onesLike")},n.prototype.zerosLike=function(t){return O("zerosLike")},n.prototype.linspace=function(t,e,r){return O("linspace")},n.prototype.dispose=function(){return O("dispose")},n}();function O(n){throw new Error("'"+n+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function er(n,t){for(var e=n.length,r=[],o=0;o<e;o++){var i=e-1-o,a=n[i]||1;(t[t.length-1-o]||1)>1&&a===1&&r.unshift(i)}return r}function tt(n,t){for(var e=[],r=0;r<t.length;r++){var o=n[n.length-r-1],i=t.length-r-1,a=t[i];(o==null||o===1&&a>1)&&e.unshift(i)}return e}function Te(n,t){for(var e=[],r=Math.max(n.length,t.length),o=0;o<r;o++){var i=n[n.length-o-1];i==null&&(i=1);var a=t[t.length-o-1];if(a==null&&(a=1),i===1)e.unshift(a);else if(a===1)e.unshift(i);else{if(i!==a)throw Error("Operands could not be broadcast together with shapes "+n+" and "+t+".");e.unshift(i)}}return e}function Ho(n,t,e,r,o,i,a){a===void 0&&(a="channelsLast");var s,u=Ji(t),c=u[0],l=u[1];if(a==="channelsLast")s=[c,l,n[3],n[3]];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);s=[c,l,n[1],n[1]]}return Pr(n,s,e,r,o,i,!1,a)}function $i(n,t,e,r,o,i,a){a===void 0&&(a="NDHWC");var s,u,c=Hs(t),l=c[0],f=c[1],h=c[2];if(a==="NDHWC")u="channelsLast",s=[l,f,h,n[4],n[4]];else{if(a!=="NCDHW")throw new Error("Unknown dataFormat "+a);u="channelsFirst",s=[l,f,h,n[1],n[1]]}return Yi(n,s,e,r,o,!1,u,i)}function Pr(n,t,e,r,o,i,a,s){a===void 0&&(a=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=n[0],h=n[1],l=n[2],f=n[3]}var d,p=t[0],v=t[1],g=t[3],m=Ji(e),x=m[0],b=m[1],y=Ji(r),w=y[0],_=y[1],S=eo(p,w),k=eo(v,_),E=function(W,z,H,V,L,K,Y,ne){var oe,pe,_e;if(typeof W=="number"){oe={top:W,bottom:W,left:W,right:W,type:W===0?"VALID":"NUMBER"};var Ce=function(Ne,D,T,M,q){M==null&&(M=Xh(Ne,D,T));var j=Ne[0],$=Ne[1],ee=Do((j-D+2*M)/T+1,q);R($e(ee),function(){return"The output # of rows ("+ee+") must be an integer. Change the stride and/or zero pad parameters"});var Q=Do(($-D+2*M)/T+1,q);return R($e(Q),function(){return"The output # of columns ("+Q+") must be an integer. Change the stride and/or zero pad parameters"}),[ee,Q]}([z,H],K,V,W,ne);pe=Ce[0],_e=Ce[1]}else if(W==="same"){pe=Math.ceil(z/V),_e=Math.ceil(H/L);var be=Math.max(0,(pe-1)*V+K-z),Re=Math.max(0,(_e-1)*L+Y-H),Se=Math.floor(be/2),De=be-Se,We=Math.floor(Re/2);oe={top:Se,bottom:De,left:We,right:Re-We,type:"SAME"}}else{if(W!=="valid")throw Error("Unknown padding parameter: "+W);oe={top:0,bottom:0,left:0,right:0,type:"VALID"},pe=Math.ceil((z-K+1)/V),_e=Math.ceil((H-Y+1)/L)}return{padInfo:oe,outHeight:pe,outWidth:_e}}(o,l,f,x,b,S,k,i),I=E.padInfo,F=E.outHeight,A=E.outWidth,B=a?g*h:g;return s==="channelsFirst"?d=[c,B,F,A]:s==="channelsLast"&&(d=[c,F,A,B]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:F,outWidth:A,outChannels:B,padInfo:I,strideHeight:x,strideWidth:b,filterHeight:p,filterWidth:v,effectiveFilterHeight:S,effectiveFilterWidth:k,dilationHeight:w,dilationWidth:_,inShape:n,outShape:d,filterShape:t}}function Yi(n,t,e,r,o,i,a,s){i===void 0&&(i=!1),a===void 0&&(a="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(a==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3],d=n[4];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);c=n[0],d=n[1],l=n[2],f=n[3],h=n[4]}var p,v=t[0],g=t[1],m=t[2],x=t[4],b=Hs(e),y=b[0],w=b[1],_=b[2],S=Hs(r),k=S[0],E=S[1],I=S[2],F=eo(v,k),A=eo(g,E),B=eo(m,I),W=function(Y,ne,oe,pe,_e,Ce,be,Re,Se,De,We){var Ne,D,T,M;if(typeof Y=="number"){Ne={top:Y,bottom:Y,left:Y,right:Y,front:Y,back:Y,type:Y===0?"VALID":"NUMBER"};var q=function(ce,ve,ke,Pe,Ie,st){Ie==null&&(Ie=Xh(ce,ve,Pe));var dt=ce[0],Gt=ce[1],jt=ce[2],Sn=Do((dt-ve+2*Ie)/Pe+1,st);R($e(Sn),function(){return"The output # of depths ("+Sn+") must be an integer. Change the stride and/or zero pad parameters"});var Br=Do((Gt-ve+2*Ie)/Pe+1,st);R($e(Br),function(){return"The output # of rows ("+Br+") must be an integer. Change the stride and/or zero pad parameters"});var ut=Do((jt-ve+2*Ie)/Pe+1,st);return R($e(ut),function(){return"The output # of columns ("+ut+") must be an integer. Change the stride and/or zero pad parameters"}),[Sn,Br,ut,ke]}([ne,oe,pe,1],Re,1,_e,Y,We);D=q[0],T=q[1],M=q[2]}else if(Y==="same"){D=Math.ceil(ne/_e),T=Math.ceil(oe/Ce),M=Math.ceil(pe/be);var j=(D-1)*_e+Re-ne,$=(T-1)*Ce+Se-oe,ee=(M-1)*be+De-pe,Q=Math.floor(j/2),Z=j-Q,J=Math.floor($/2),ue=$-J,te=Math.floor(ee/2);Ne={top:J,bottom:ue,left:te,right:ee-te,front:Q,back:Z,type:"SAME"}}else{if(Y!=="valid")throw Error("Unknown padding parameter: "+Y);Ne={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},D=Math.ceil((ne-Re+1)/_e),T=Math.ceil((oe-Se+1)/Ce),M=Math.ceil((pe-De+1)/be)}return{padInfo:Ne,outDepth:D,outHeight:T,outWidth:M}}(o,l,f,h,y,w,_,F,A,B,s),z=W.padInfo,H=W.outDepth,V=W.outHeight,L=W.outWidth,K=i?x*d:x;return a==="channelsFirst"?p=[c,K,H,V,L]:a==="channelsLast"&&(p=[c,H,V,L,K]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:H,outHeight:V,outWidth:L,outChannels:K,padInfo:z,strideDepth:y,strideHeight:w,strideWidth:_,filterDepth:v,filterHeight:g,filterWidth:m,effectiveFilterDepth:F,effectiveFilterHeight:A,effectiveFilterWidth:B,dilationDepth:k,dilationHeight:E,dilationWidth:I,inShape:n,outShape:p,filterShape:t}}function Xh(n,t,e,r){r===void 0&&(r=1);var o=eo(t,r);return Math.floor((n[0]*(e-1)-e+o)/2)}function Ji(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Hs(n){return typeof n=="number"?[n,n,n]:n}function eo(n,t){return t<=1?n:n+(n-1)*(t-1)}function Do(n,t){if(!t)return n;switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error("Unknown roundingMode "+t)}}function co(n){var t=Ji(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function Pt(n,t){return co(n)||co(t)}function Au(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+n)}function $h(n,t,e){if(t==="complex64"){if(n.dtype==="complex64")return n.clone();var r=He(n.shape),o=n.toFloat(),i=e.complex(o,r);return r.dispose(),o.dispose(),i}if(!Cm(n.dtype,t))return P.makeTensorFromDataId(n.dataId,n.shape,t);if(n.dtype==="complex64"){var a=e.real(n);return i=a.cast(t),a.dispose(),i}if(t==="int32")return e.int(n);if(t==="bool"){var s=re(0,n.dtype);return i=e.notEqual(n,s),s.dispose(),i}throw new Error("Error in Cast: failed to cast "+n.dtype+" to "+t)}function Gs(n,t){return P.makeTensorFromDataId(n.dataId,t,n.dtype)}function Yh(n,t,e){var r=(t-n)/(e-1),o=Yo(e,"float32");o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+r;return Ye(o,"float32")}function js(n,t){if(n.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+n.length+", imag: "+t.length+".");for(var e=new Float32Array(2*n.length),r=0;r<e.length;r+=2)e[r]=n[r/2],e[r+1]=t[r/2];return e}function yl(n,t){return{real:n[2*t],imag:n[2*t+1]}}function Jy(n,t,e,r){n[2*r]=t,n[2*r+1]=e}function Qy(n,t,e){var r=(e?2:-2)*Math.PI*(n/t);return{real:Math.cos(r),imag:Math.sin(r)}}function Zy(n,t,e){var r=function(i,a,s){return function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var v=l(c,u[d=f+(h-f>>>1)]);v>0?f=d+1:(h=d,p=!v)}return p?f:-f-1}(i,a,s||e0)}(n,t,e),o=r<0?-(r+1):r;n.splice(o,0,t)}function e0(n,t){return n>t?1:n<t?-1:0}function Du(n,t,e,r,o){return Jh(n,t,e,r,o,0).selectedIndices}function Tu(n,t,e,r,o,i){var a=Jh(n,t,e,r,o,i);return a.numValidOutputs.dispose(),{selectedIndices:a.selectedIndices,selectedScores:a.selectedScores}}function Jh(n,t,e,r,o,i,a,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(xl),c=i>0?-.5/i:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,v=h.suppressBeginIndex;if(d<o)break;for(var g=!1,m=l.length-1;m>=v;--m){var x=t0(n,p,l[m]);if(x>=r){g=!0;break}if(h.score=h.score*n0(r,c,x),h.score<=o)break}h.suppressBeginIndex=l.length,g||(h.score===d?(l.push(p),f.push(h.score)):h.score>o&&Zy(u,h,xl))}var b=l.length;return s&&(l.fill(0,b),f.fill(0,b)),{selectedIndices:Ye(l,"int32"),selectedScores:Ye(f,"float32"),numValidOutputs:re(b,"int32")}}function t0(n,t,e){var r=n.subarray(4*t,4*t+4),o=n.subarray(4*e,4*e+4),i=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(s-i)*(u-a),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var v=Math.max(i,c),g=Math.max(a,l),m=Math.min(s,f),x=Math.min(u,h),b=Math.max(m-v,0)*Math.max(x-g,0);return b/(d+p-b)}function n0(n,t,e){var r=Math.exp(t*e*e);return e<=n?r:0}function xl(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}function Qh(n,t,e){var r=new Array(n.rank).fill(0),o=n.shape.slice();return t.map(function(i){o[e]=i;var a=n.slice(r,o);return r[e]+=i,a})}function Zh(n,t){for(var e=new Array(n.rank),r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];var o=xe(e,n.dtype);for(r=0;r<o.values.length;++r){for(var i=o.indexToLoc(r),a=new Array(n.rank),s=0;s<a.length;s++)a[s]=i[s]%n.shape[s];var u=n.locToIndex(a);o.values[r]=n.values[u]}return o.toTensor()}function ed(n,t,e,r,o){for(var i=t[t.length-1],a=[n.length/i,i],s=a[0],u=a[1],c=Uo(e,s*r),l=Uo("int32",s*r),f=0;f<s;f++){for(var h=f*u,d=n.subarray(h,h+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort(function(y,w){return w.value-y.value});var g=f*r,m=c.subarray(g,g+r),x=l.subarray(g,g+r);for(v=0;v<r;v++)m[v]=p[v].value,x[v]=p[v].index}var b=t.slice();return b[b.length-1]=r,[ft(c,b,e),ft(l,b,"int32")]}function Nu(n,t){for(var e=[],r=0;r<t.length;r++)t[r]&&e.push(r);var o=xe(n,"int32"),i=xe([e.length,n.length],"int32");for(r=0;r<e.length;r++){var a=o.indexToLoc(e[r]),s=r*n.length;i.values.set(a,s)}return i.toTensor()}var r0=function(n,t){this.outputShape=[],this.outputShape=n,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},o0=function(n,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},i0=function(n,t,e){this.variableNames=["A"];var r=n.windowSize,o=n.batchSize,i=n.inSize,a=Math.ceil(i/r);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,a];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function td(n,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return n+"."+e})}function Tt(n,t){return t===1?[n]:td(n,t)}function yt(){var n,t,e,r,o,i,a,s,u,c;return G().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",r="in",o="texture",i="outputColor",a="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",r="varying",o="texture2D",i="gl_FragColor",a="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:r,texture2D:o,output:i,defineOutput:a,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Er(n,t,e){e===void 0&&(e="index");var r=bn(t);return r.map(function(o,i){return"int "+n[i]+" = "+e+" / "+o+"; "+(i===r.length-1?"int "+n[i+1]+" = "+e+" - "+n[i]+" * "+o:"index -= "+n[i]+" * "+o)+";"}).join("")}function Fu(n){var t=bn(n).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var nd=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function a0(n,t,e,r){var o=[];n.forEach(function(d){var p=le(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var i,a,s=o.join(`
`),u=n.map(function(d){return function(p,v,g){g===void 0&&(g=!1);var m="";m+=g?rd(p):Gr(p);var x=p.shapeInfo.logicalShape,b=v.logicalShape;return x.length<=b.length&&(m+=g?function(y,w){var _,S=y.name,k=S.charAt(0).toUpperCase()+S.slice(1),E="get"+k+"AtOutCoords",I=y.shapeInfo.logicalShape.length,F=w.logicalShape.length,A=er(y.shapeInfo.logicalShape,w.logicalShape),B=ze(F),W=F-I,z=["x","y","z","w","u","v"];_=I===0?"":F<2&&A.length>=1?"coords = 0;":A.map(function(oe){return"coords."+z[oe+W]+" = 0;"}).join(`
`);var H="";H=F<2&&I>0?"coords":y.shapeInfo.logicalShape.map(function(oe,pe){return"coords."+z[pe+W]}).join(", ");var V="return outputValue;",L=le(y.shapeInfo.logicalShape)===1,K=le(w.logicalShape)===1;if(I!==1||L||K){if(L&&!K)V=F===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var Y=I-2,ne=I-1;A.indexOf(Y)>-1&&A.indexOf(ne)>-1?V="return vec4(outputValue.x);":A.indexOf(Y)>-1?V="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf(ne)>-1&&(V="return vec4(outputValue.xx, outputValue.zz);")}}else V=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+E+`() {
      `+B+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+k+"("+H+`);
      `+V+`
    }
  `}(p,v):function(y,w){var _=y.name,S=_.charAt(0).toUpperCase()+_.slice(1),k="get"+S+"AtOutCoords",E=w.texShape,I=y.shapeInfo.texShape,F=y.shapeInfo.logicalShape.length,A=w.logicalShape.length;if(!y.shapeInfo.isUniform&&F===A&&y.shapeInfo.flatOffset==null&&it(I,E))return`
      float `+k+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var B,W=ze(A),z=er(y.shapeInfo.logicalShape,w.logicalShape),H=A-F,V=["x","y","z","w","u","v"];B=F===0?"":A<2&&z.length>=1?"coords = 0;":z.map(function(K){return"coords."+V[K+H]+" = 0;"}).join(`
`);var L="";return L=A<2&&F>0?"coords":y.shapeInfo.logicalShape.map(function(K,Y){return"coords."+V[Y+H]}).join(", "),`
    float `+k+`() {
      `+W+` coords = getOutputCoords();
      `+B+`
      return get`+S+"("+L+`);
    }
  `}(p,v)),m}(d,t,r)}).join(`
`),c=t.texShape,l=yt(),f=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+s0+`
    `+u0+`
    `+c0+`
  `}(l);return t.isPacked?(i=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(it(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var S=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=d,g=p,m=[Math.ceil(g[0]/2),Math.ceil(g[1]/2)],x=Math.ceil(v[2]/2),b=x*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],S=Math.ceil(y[y.length-1]/2),k=S*Math.ceil(y[y.length-2]/2),E=k,I="",F="b, r, c",A=2;A<y.length-1;A++)E*=y[y.length-A-1],I=`
      int b`+A+" = index / "+E+`;
      index -= b`+A+" * "+E+`;
    `+I,F="b"+A+", "+F;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+I+`

      int b = index / `+k+`;
      index -= b * `+k+`;

      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec`+y.length+"("+F+`);
    }
  `}(d,p)}var v,g,m,x,b}(t.logicalShape,c),a=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(i=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(m,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(m,x){return it(m,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:m[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:m[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+m[1]+`;
      int c = index - r * `+m[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=p,g=Er(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+g+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(m,x){var b=Er(["r","c","d","d2"],m);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(m,x){var b=Er(["r","c","d","d2","d3"],m);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(m,x){var b=Er(["r","c","d","d2","d3","d4"],m);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var v,g}(t.logicalShape,c),a=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),r&&(h+=l0),[h,f,a,s,i,u,e].join(`
`)}function Gr(n){var t=n.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+r+";}";var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(a===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=yr(r);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 1:return function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Wr(e)+`
      }
    `;var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(s===1&&a===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=yr(r);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+a+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `:a===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+r+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+a+", "+s+", index + "+u+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 2:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=e.shapeInfo.texShape;if(a!=null&&it(r,a)){var s=a[0],u=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=Cr(r),l=c.newShape,f=c.keptDims,h=l;if(h.length<r.length){var d=jr(e,h);return`
      `+Gr(d)+`
      float `+i+`(int row, int col) {
        return `+i+"("+qr(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+r[1]+`, 1)));
        `+Wr(e)+`
      }
    `;var p=a[0],v=a[1],g=yr(o);return v===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+g+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+g+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+r[1]+" + col + "+g+`;
    vec2 uv = uvFromFlat(`+p+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(n);case 3:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[1]*r[2],s=r[2],u=Cr(r),c=u.newShape,l=u.keptDims,f=c;if(f.length<r.length){var h=jr(e,f);return`
        `+Gr(h)+`
        float `+i+`(int row, int col, int depth) {
          return `+i+"("+qr(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+", "+s+`, 1)));
        `+Wr(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],v=d[1],g=e.shapeInfo.flatOffset;if(v===a&&g==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&g==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+r[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var m=yr(o);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+" + col * "+s+" + depth + "+m+`;
        vec2 uv = uvFromFlat(`+p+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(n);case 4:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[3],s=r[2]*a,u=r[1]*s,c=Cr(r),l=c.newShape,f=c.keptDims;if(l.length<r.length){var h=jr(e,l);return`
      `+Gr(h)+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+"("+qr(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+a+`, 1)));
        `+Wr(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,v=p[0],g=p[1];if(g===u&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===a&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+r[1]*r[2]+", "+r[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var m=yr(o);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+g+", index + "+m+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);case 5:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[4],s=r[3]*a,u=r[2]*s,c=r[1]*u,l=Cr(r),f=l.newShape,h=l.keptDims;if(f.length<r.length){var d=jr(e,f);return`
      `+Gr(d)+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+"("+qr(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+a+`)) +
          depth3;
        `+Wr(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],m=v[1];if(m===c&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===a&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]+`,
               `+r[2]*r[3]+", "+r[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=yr(o);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+a+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+g+", "+m+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);case 6:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=Cr(r),s=a.newShape,u=a.keptDims;if(s.length<r.length){var c=jr(e,s);return`
      `+Gr(c)+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+"("+qr(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=r[5],f=r[4]*l,h=r[3]*f,d=r[2]*h,p=r[1]*d;if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Wr(e)+`
      }
    `;var v=e.shapeInfo.flatOffset,g=e.shapeInfo.texShape,m=g[0],x=g[1];if(x===p&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]*r[4]+`,
               `+r[2]*r[3]*r[4]+`,
               `+r[3]*r[4]+`,
               `+r[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=yr(o);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+m+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function rd(n){var t,e,r;switch(n.shapeInfo.logicalShape.length){case 0:return t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),r=yt(),`
    vec4 `+e+`() {
      return `+r.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var i=o.name,a="get"+i.charAt(0).toUpperCase()+i.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=yt();return`
    vec4 `+a+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+i+`, uv);
    }
  `}(n);case 2:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=yt();if(u!=null&&it(i,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+a+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(i[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+a+`, uv);
    }
  `}(n);case 3:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(i[0]===1){var l=i.slice(1),f=jr(o,l);return`
        `+rd(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+qr(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(i[2]/2),v=p*Math.ceil(i[1]/2),g=yt();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+v+", "+p+`, b, row, col);
      return `+g.texture2D+"("+a+`, uv);
    }
  `}(n);default:return function(o){for(var i=o.shapeInfo.logicalShape,a=i.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(i[a-1]/2),p=d*Math.ceil(i[a-2]/2),v="int b, int row, int col",g="b * "+p+" + (row / 2) * "+d+" + (col / 2)",m=2;m<a-1;m++)v="int b"+m+", "+v,p*=i[a-m-1],g="b"+m+" * "+p+" + "+g;var x=yt();return`
    vec4 `+u+"("+v+`) {
      int index = `+g+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(n)}}var s0=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,u0=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,c0=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,l0=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function yr(n){return"offset"+n}function Wr(n){var t=n.name,e=le(n.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function ze(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error("GPU for rank "+n+" is not yet supported")}function jr(n,t){var e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function qr(n,t){return t.map(function(e){return n[e]}).join(", ")}var f0=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,R(n.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=n[n.length-1],i=Math.ceil(o/t);this.outputShape=n.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");var a,s,u=this.outputShape,c=u.length,l=ze(c),f=Tt("coords",c);if(i===1){var h=ze(s=c+1);a=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,a=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map(function(k){return"int "+k}),g=Tt("sourceLocR",s-1).concat("inIdx.r"),m=Tt("sourceLocG",s-1).concat("inIdx.g"),x=Tt("sourceLocB",s-1).concat("inIdx.b"),b=Tt("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",_=`vec4(
            getAChannel(`+g.join()+`),
            hasNextCol ? getAChannel(`+m.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",S=r?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+S+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+a+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},h0=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterHeight,u=n.effectiveFilterWidth,c=s-1-n.padInfo.top,l=u-1-n.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+i+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+a+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},d0=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,d=l-1-n.padInfo.front,p=f-1-n.padInfo.top,v=h-1-n.padInfo.left,g=1/(t*e*r);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float avgMultiplier = float(`+g+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},p0=function(n,t,e,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],Te(n,t),Te(n,e);var a="0.0";r!=null&&(Te(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="1.0";o!=null&&(Te(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+a+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+i+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},v0=function(n,t,e,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Te(n,t),Te(n,e);var a="vec4(0.0)";r!=null&&(Te(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(Te(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        vec4 offset = `+a+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+i+`));

        setOutput((x - mean) * inv + offset);
      }
    `},g0="return areal * breal - aimag * bimag;",m0="return areal * bimag + aimag * breal;",bl=function(n,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Te(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+n+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},ns="return a + b;",rs="return a - b;",wl="return a * b;",od="return (a < 0.) ? b * a : a;",Xe=function(n,t,e){this.variableNames=["A","B"],this.outputShape=Te(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+n+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},id=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Tn=function(n,t,e,r){r===void 0&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Te(t,e);var o=this.outputShape.length,i="";if(r)if(o===0||le(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          `+ze(o)+` coords = getOutputCoords();
        `,o===1)i+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var a=Tt("coords",o);i+=`
            bool nextRowOutOfBounds =
              (`+a[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+a[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+n+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+i+`

        setOutput(result);
      }
    `},y0=function(){function n(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n}(),x0=function(){function n(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n}(),b0=function(n){this.variableNames=["real","imag"],this.outputShape=n,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},w0=function(n){this.outputShape=[],this.outputShape=uo(n,1),this.variableNames=n.map(function(s,u){return"T"+u});var t=new Array(n.length-1);t[0]=n[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+n[e][1];var r=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];r.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var i=t.length,a=t[t.length-1];r.push("else setOutput(getT"+i+"(yR, yC-"+a+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},_0=function(n,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=uo(n,t);var e=this.outputShape,r=e.length,o=ze(r),i=Tt("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=n.map(function(g,m){return"T"+m});var s=new Array(n.length-1);s[0]=n[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+n[u][t];var c=a[t],l=a.slice(-2),f=a.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+di(a,c,d)+`),
            vec2(`+di(l,c,d)+`));
        }`}var p=s.length,v=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+di(a,c,v)+`),
          vec2(`+di(l,c,v)+"));",this.userCode=`
      float getValue(`+a.map(function(g){return"int "+g})+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+i+`), 0., 0., 0.);

        `+i[r-1]+" = "+i[r-1]+` + 1;
        if (`+i[r-1]+" < "+e[r-1]+`) {
          result.g = getValue(`+i+`);
        }

        `+i[r-2]+" = "+i[r-2]+` + 1;
        if (`+i[r-2]+" < "+e[r-2]+`) {
          result.a = getValue(`+i+`);
        }

        `+i[r-1]+" = "+i[r-1]+` - 1;
        if (`+i[r-2]+" < "+e[r-2]+` &&
            `+i[r-1]+" < "+e[r-1]+`) {
          result.b = getValue(`+i+`);
        }
        setOutput(result);
      }
    `};function di(n,t,e){var r=n.indexOf(t);return n.map(function(o,i){return i===r?o+" - "+e:o}).join()}var C0=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              if (`+i+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},E0=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dataFormat==="channelsLast",a=t-1-n.padInfo.top,s=e-1-n.padInfo.left,u=i?1:2,c=i?2:3,l=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {

              if (`+i+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},I0=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.padInfo.front,i=n.padInfo.top,a=n.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yF = 0; yF < `+n.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+n.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+n.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+i+`;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+n.outWidth+`; yC++) {
                int xC = wC + yC * `+r+" - "+a+`;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},R0=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=t-1-n.padInfo.front,u=e-1-n.padInfo.top,c=r-1-n.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+n.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},S0=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.outChannels/n.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+i+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},k0=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=t-1-n.padInfo.top,a=e-1-n.padInfo.left,s=n.outChannels/n.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},_l=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.padInfo.top,i=n.padInfo.left,a=n.strideHeight,s=n.strideWidth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterHeight,f=n.filterWidth,h=4*Math.floor(n.inChannels/4),d=n.inChannels%4,p=n.dataFormat==="channelsLast",v=p?1:2,g=p?2:3,m=p?3:1,x="",b="";e&&(x=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+a+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+m+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+g+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+n.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},A0=function(n){this.variableNames=["x","W"],this.outputShape=n.outShape;var t=n.padInfo.front,e=n.padInfo.top,r=n.padInfo.left,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterDepth,f=n.filterHeight,h=n.filterWidth,d=4*Math.floor(n.inChannels/4),p=n.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Cl=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,d=n.filterWidth,p=n.outChannels/n.inChannels,v="",g="";e&&(v=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,g="result = activation(result);");var m=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+i+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+m+`
        `+g+`
        setOutput(result);
      }
    `},El=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.outShape;for(var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,d=n.filterWidth,p=d,v="int xR; int xC; int xCOffset;",g=0;g<h;g++)for(var m=0;m<d;m++)v+=`
          vec4 xTexelR`+g+"C"+2*m+` = vec4(0.);
          vec4 wR`+g+"C"+m+` = vec4(0.);
          vec4 xR`+g+"C"+m+" = vec4(0.);";for(g=0;g<h;g++)for(var x=0;x<p;x++){if(v+=`
          xR = xRCorner + `+g*l+`;
          xC = xCCorner + `+(m=2*x)*f+`;
        `,c===1){if(m<d&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  xTexelR`+g+"C"+m+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    xTexelR`+g+"C"+m+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+g+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+g+"C"+m+" = vec4(previous.zw, xTexelR"+g+"C"+m+`.xy);
                } else {
                  xR`+g+"C"+m+" = vec4(0, 0, xTexelR"+g+"C"+m+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+i+`) {
                  xTexelR`+g+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+"C"+m+` = vec4(0.);
                }

                xR`+g+"C"+m+" = xTexelR"+g+"C"+m+`;
              `,m+1<d)){var b=s%2==0?Ch(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+g+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+i+`) {
                      xTexelR`+g+"C"+m+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+g+"C"+m+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+g+"C"+(m+1)+` = vec4(
                    xTexelR`+g+"C"+m+".zw, xTexelR"+g+"C"+(m+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+g+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+g+"C"+(m+1)+" = xTexelR"+g+"C"+(m+2)+`;
                `}}else m<d&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+g+"C"+m+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+"C"+m+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+i+`) {
                  xTexelR`+g+"C"+(m+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+g+"C"+(m+2)+` = vec4(0.);
                }

                xR`+g+"C"+m+` = vec4(
                  xTexelR`+g+"C"+m+".zw, xTexelR"+g+"C"+(m+2)+`.zw);
              `,m+1<d&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+i+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+g+"C"+(m+1)+" = vec4(xTexelR"+g+"C"+(m+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+i+`) {
                  xTexelR`+g+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+g+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+"C"+(m+2)+` = vec4(0.);
                }

                xR`+g+"C"+m+` = vec4(
                  xTexelR`+g+"C"+m+".xy, xTexelR"+g+"C"+(m+2)+`.xy);
              `,m+1<d&&(v+=`
                  xR`+g+"C"+(m+1)+` = vec4(
                    xTexelR`+g+"C"+m+".zw, xTexelR"+g+"C"+(m+2)+`.zw);
                `)),v+="}");m<d&&(v+=`
            vec4 wTexelR`+g+"C"+m+" = getW("+g+", "+m+`, d1, q);
            wR`+g+"C"+m+" = vec4(wTexelR"+g+"C"+m+".xz, wTexelR"+g+"C"+m+`.xz);
          `,m+1<d&&(v+=`
              vec4 wTexelR`+g+"C"+(m+1)+" = getW("+g+", "+(m+1)+`, d1, q);
              wR`+g+"C"+(m+1)+` =
                vec4(wTexelR`+g+"C"+(m+1)+".xz, wTexelR"+g+"C"+(m+1)+".xz);"))}for(g=0;g<h;g++)for(m=0;m<d;m++)v+="dotProd += xR"+g+"C"+m+" * wR"+g+"C"+m+";";var y="",w="";e&&(y=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+_+`
        `+w+`
        setOutput(result);
      }
    `},D0=function(n,t,e,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var i=n[0],a=n[1],s=n[2],u=n[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=r==="bilinear"?1:0,d=[a-1+".0",s-1+".0"],p=d[0],v=d[1],g=l>1?[""+(a-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],m=g[0],x=g[1],b=g[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=y[0],_=y[1],S=y[2];this.userCode=`
      const float height_ratio = float(`+m+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+i+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+_+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+S+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},T0=function(n,t,e){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=n[n.length-1],i=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+ze(r)+` coords = getOutputCoords();
        int end = `+Il(r,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+i+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+Il(r,"coords")+` = idx;
          val += getX(`+function(a,s){if(a===1)return""+s;if(a===2)return s+".x, "+s+".y";if(a===3)return s+".x, "+s+".y, "+s+".z";if(a===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+a+" is not yet supported")}(r,"coords")+`);
        }
        setOutput(val);
      }
    `};function Il(n,t){if(n===1)return""+t;if(n===2)return t+".y";if(n===3)return t+".z";if(n===4)return t+".w";throw Error("Cumulative sum for rank "+n+" is not yet supported")}var N0=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=zo.DENSE;var t=Ao(n),e=yt();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Er(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},F0=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=zo.DENSE;var t=Ao(n),e=yt();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Er(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},P0=function(){function n(t,e,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return n.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},n.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},n.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},n.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},n.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},n}(),M0=function(n){this.variableNames=["X"],this.outputShape=[n,n],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},O0=function(n){this.variableNames=["A"],this.outTexUsage=Ut.DOWNLOAD;var t=yt();this.outputShape=n,this.userCode=`
      `+nd+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},B0=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Ut.DOWNLOAD;var t=yt();this.outputShape=n,this.userCode=`
      `+nd+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},L0=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var r=yt(),o=t[0],i=t[1];this.outputShape=n;var a="result";e&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      `+Fu(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+i+`;
        int c = imod(flatIndex, `+i+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+" = vec4("+a+`, 0., 0., 0.);
      }
    `},W0=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=yt(),o=t[0],i=t[1];this.outputShape=n;var a="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;a+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+n[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+n[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+i+`;
              c = imod(flatIndex, `+i+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Fu(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+a+`

        `+r.output+" = "+s+`;
      }
    `},U0="return real * expR - imag * expI;",V0="return real * expI + imag * expR;",Rl=function(n,t,e){this.variableNames=["real","imag"];var r=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=e?r+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+n+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+i+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},z0=function(){function n(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.valueLoc==null&&(e.valueLoc=r.getUniformLocationNoThrow(o,"value")),r.gl.uniform1f(e.valueLoc,t)}},n}(),H0=function(n,t,e){this.variableNames=["A","indices"];var r=n.slice();r[e]=t,this.outputShape=r,this.rank=r.length;var o=ze(this.rank),i=function(a,s){var u=a.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<a.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(n,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},G0=function(n,t,e){this.sliceDim=n,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var r=ze(t.length),o=ze(e.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+r+" strides = "+r+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+i+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function j0(n,t){var e=yt();return Um(n,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function q0(n,t){return jm(n,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function K0(n,t){return qm(n,t,new Uint16Array([0,1,2,2,1,3]))}function Qo(n,t,e,r,o,i,a){Xm(e,r);var s=Km(n,t),u=n.TEXTURE_2D;return fe(n,t,function(){return n.bindTexture(u,s)}),fe(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)}),fe(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}),fe(n,t,function(){return n.texParameteri(u,n.TEXTURE_MIN_FILTER,n.NEAREST)}),fe(n,t,function(){return n.texParameteri(u,n.TEXTURE_MAG_FILTER,n.NEAREST)}),fe(n,t,function(){return n.texImage2D(u,0,o,e,r,0,i,a,null)}),fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)}),s}function X0(n,t,e,r,o){var i=ga(e,r);return Qo(n,t,i[0],i[1],o.internalFormatFloat,o.textureFormatFloat,n.FLOAT)}function $0(n,t,e,r,o){var i=ga(e,r);return Qo(n,t,i[0],i[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Y0(n,t,e,r,o){var i=ga(e,r);return Qo(n,t,i[0],i[1],n.RGBA,n.RGBA,n.UNSIGNED_BYTE)}function J0(n,t,e,r,o){var i=Jo(e,r);return Qo(n,t,i[0],i[1],o.internalFormatPackedFloat,n.RGBA,n.FLOAT)}function Q0(n,t,e,r,o){var i=Jo(e,r);return Qo(n,t,i[0],i[1],o.internalFormatPackedHalfFloat,n.RGBA,o.textureTypeHalfFloat)}function Z0(n,t,e,r){return fe(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),dl(n,t,e,"clipSpacePos",r,3,20,0)&&dl(n,t,e,"uv",r,2,20,12)}function ex(n,t,e,r,o,i,a){var s,u,c;fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),i instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=n.UNSIGNED_BYTE,c=n.RGBA):(s=new Float32Array(r*o*4),u=n.FLOAT,c=a.internalFormatPackedFloat),s.set(i),fe(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,c,r,o,0,n.RGBA,u,s)}),fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function tx(n,t,e,r){fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),r.data instanceof Uint8Array?fe(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,r.width,r.height,0,n.RGBA,n.UNSIGNED_BYTE,r.data)}):fe(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r)}),fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function nx(n,t,e,r,o){var i=n.createBuffer();fe(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,i)});var a=16*e*r;return fe(n,t,function(){return n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)}),fe(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,0)}),fe(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,null)}),i}function rx(n,t,e){var r=n,o=new Float32Array(e);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function ox(n,t,e,r,o){var i=ga(e,r),a=i[0],s=i[1],u=new Uint8Array(e*r*4);return fe(n,t,function(){return n.readPixels(0,0,a,s,o.downloadTextureFormat,n.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function ix(n,t,e,r,o,i,a,s){var u=n,c=new Float32Array(function(l,f){var h=Jo(l,f);return h[0]*h[1]*4}(i,a));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function ax(n,t,e,r){var o=new Float32Array(e*r*4);return fe(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,o)}),o}var sx=function(){function n(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=G().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Mm(e,t)):this.gl=Cn(e);var r="WEBGL_color_buffer_float";if(G().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=ci(this.gl,this.debug,"OES_texture_float"),Yt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=ci(this.gl,this.debug,"OES_texture_half_float");else if(G().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),Yt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=ci(this.gl,this.debug,"EXT_color_buffer_half_float");else if(G().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",Yt(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!Yt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=q0(this.gl,this.debug),this.indexBuffer=K0(this.gl,this.debug),this.framebuffer=$m(this.gl,this.debug),this.textureConfig=Cu(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(n.prototype,"debug",{get:function(){return G().getBool("DEBUG")},enumerable:!0,configurable:!0}),n.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;fe(e,this.debug,function(){return e.finish()}),fe(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),fe(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),fe(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),fe(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),fe(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},n.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),X0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),$0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),Y0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),tx(this.gl,this.debug,t,e)},n.prototype.uploadDenseMatrixToTexture=function(t,e,r,o){this.throwIfDisposed(),ex(this.gl,this.debug,t,e,r,o,this.textureConfig)},n.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Q0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),J0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(pl(this.gl,this.debug,this.framebuffer),this.outputTexture=null),fe(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},n.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,function(){return ox(o.gl,o.debug,e,r,o.textureConfig)})},n.prototype.downloadPackedMatrixFromBuffer=function(t,e,r,o,i,a){return ix(this.gl,t,0,0,0,i,a,this.textureConfig)},n.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return rx(this.gl,t,e)},n.prototype.createBufferFromTexture=function(t,e,r){this.bindTextureToFrameBuffer(t);var o=nx(this.gl,this.debug,e,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},n.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},n.prototype.createFence=function(t){var e,r,o=this;if(G().getBool("WEBGL_FENCE_API_ENABLED")){var i=t,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),r=function(){var s=i.clientWaitSync(a,0,0);return s===i.ALREADY_SIGNALED||s===i.CONDITION_SATISFIED},e=a}else G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),r=function(){return o.isQueryAvailable(e,G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):r=function(){return!0};return{query:e,isFencePassed:r}},n.prototype.downloadMatrixFromPackedTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,function(){return ax(o.gl,o.debug,e,r)})},n.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,r=Vm(e,this.debug,t),o=j0(e,this.debug),i=Hm(e,this.debug);return fe(e,this.debug,function(){return e.attachShader(i,o)}),fe(e,this.debug,function(){return e.attachShader(i,r)}),Gm(e,this.debug,i),this.debug&&Qa(e,this.debug,i),this.vertexAttrsAreBound||(this.setProgram(i),this.vertexAttrsAreBound=Z0(e,this.debug,this.program,this.vertexBuffer)),i},n.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&fe(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},n.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Qa(this.gl,this.debug,this.program),fe(this.gl,this.debug,function(){return e.gl.useProgram(t)})},n.prototype.getUniformLocation=function(t,e,r){return r===void 0&&(r=!0),this.throwIfDisposed(),r?Jm(this.gl,this.debug,t,e):Qm(this.gl,t,e)},n.prototype.getAttributeLocation=function(t,e){var r=this;return this.throwIfDisposed(),fe(this.gl,this.debug,function(){return r.gl.getAttribLocation(t,e)})},n.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},n.prototype.setInputMatrixTexture=function(t,e,r){this.throwIfDisposed(),this.throwIfNoProgram(),Zm(this.gl,this.debug,this.program,t,e,r)},n.prototype.setOutputMatrixTexture=function(t,e,r){this.setOutputMatrixTextureDriver(t,r,e)},n.prototype.setOutputPackedMatrixTexture=function(t,e,r){this.throwIfDisposed();var o=Jo(e,r),i=o[0],a=o[1];this.setOutputMatrixTextureDriver(t,i,a)},n.prototype.setOutputMatrixWriteRegion=function(t,e,r,o){this.setOutputMatrixWriteRegionDriver(r,t,o,e)},n.prototype.setOutputPackedMatrixWriteRegion=function(t,e,r,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},n.prototype.debugValidate=function(){this.program!=null&&Qa(this.gl,this.debug,this.program),li(this.gl)},n.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),fe(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},n.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),fe(this.gl,this.debug,function(){return t.gl.finish()})},n.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=ci(this.gl,this.debug,G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},n.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},n.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},n.prototype.beginQuery=function(){if(G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),r=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,r),r}var o=this.getQueryTimerExtensionWebGL1(),i=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,i),i},n.prototype.endQuery=function(){if(G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,r=this.getQueryTimerExtensionWebGL2();e.endQuery(r.TIME_ELAPSED_EXT)}},n.prototype.waitForQueryAndGetTime=function(t){return ae(this,void 0,void 0,function(){var e=this;return se(this,function(r){switch(r.label){case 0:return[4,sl(function(){return e.disposed||e.isQueryAvailable(t,G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return r.sent(),[2,this.getQueryTime(t,G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},n.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var r=this.gl;return r.getQueryParameter(t,r.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},n.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var r=this.gl,o=this.getQueryTimerExtensionWebGL2(),i=r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}return i=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint},n.prototype.pollFence=function(t){var e=this;return new Promise(function(r){e.addItemToPoll(function(){return t.isFencePassed()},function(){return r()})})},n.prototype.pollItems=function(){for(var t=function(r){for(var o=0;o<r.length&&r[o]();++o);return o-1}(this.itemsToPoll.map(function(r){return r.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},n.prototype.addItemToPoll=function(t,e){var r=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||sl(function(){return r.pollItems(),r.itemsToPoll.length===0})},n.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Za(this.gl,this.debug,t,this.framebuffer),this.debug&&li(this.gl)},n.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Za(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&li(this.gl)):pl(this.gl,this.debug,this.framebuffer)},n.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var r=e();return this.unbindTextureToFrameBuffer(),r},n.prototype.setOutputMatrixTextureDriver=function(t,e,r){this.throwIfDisposed();var o=this.gl;Za(o,this.debug,t,this.framebuffer),this.debug&&li(o),this.outputTexture=t,fe(o,this.debug,function(){return o.viewport(0,0,e,r)}),fe(o,this.debug,function(){return o.scissor(0,0,e,r)})},n.prototype.setOutputMatrixWriteRegionDriver=function(t,e,r,o){var i=this;this.throwIfDisposed(),fe(this.gl,this.debug,function(){return i.gl.scissor(t,e,r,o)})},n.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},n.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},n}();function Sl(n,t){if(n.length!==t.length)throw Error("Binary was compiled with "+n.length+" inputs, but was executed with "+t.length+" inputs");n.forEach(function(e,r){var o=e.logicalShape,i=t[r],a=i.shape;if(!it(o,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+a+" must match");if(!e.isUniform||!i.isUniform){var s=e.texShape,u=i.isUniform?null:i.texData.texShape;if(!it(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var ux=function(n,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var r=e.filterWidth,o=e.inChannels,i=e.strideWidth,a=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,d=s.top,p=o*r,v=yt(),g=f==="channelsLast",m=g?0:1,x=g?1:2,b="",y=0;y<=1;y++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+n[1]+" && pos < "+n[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+a+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[m]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+i+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+g+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+v.output+` = result;
      }
    `},cx=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[];var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+a+"; j <= "+a+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+i+`;
        setOutput(val);
      }
    `},lx=function(n,t,e,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=n,this.depth=n[3],this.depthRadius=t,this.bias=e,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},fx=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+a+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+a+"; j <= "+a+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+i+`;
        setOutput(result);
      }
    `},hx=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideHeight,e=n.strideWidth,r=n.dilationHeight,o=n.effectiveFilterHeight,i=n.effectiveFilterWidth,a=o-1-n.padInfo.top,s=i-1-n.padInfo.left,u=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+i+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+i+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},dx=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.dilationDepth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterDepth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=s-1-n.padInfo.front,f=u-1-n.padInfo.top,h=c-1-n.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+a+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},os=function(n,t,e,r,o,i,a){e===void 0&&(e=!1),r===void 0&&(r=!1),o===void 0&&(o=!1),i===void 0&&(i=null),a===void 0&&(a=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?n[1]:n[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";i&&(d=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+i+`
        }`:`vec4 activation(vec4 x) {
          `+i+`
        }`,p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+p+`

        setOutput(result);
      }
    `},px=function(){function n(t,e,r){this.variableNames=["probs"],this.outputShape=[t,r],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.seedLoc==null&&(e.seedLoc=r.getUniformLocation(o,"seed")),r.gl.uniform1f(e.seedLoc,t)}},n}(),vx=function(n,t,e,r){this.variableNames=["indices"],this.outputShape=[n,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},gx=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=n;var t=n.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=Tt("rc",t),r=ze(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,n,e),i=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,n[n.length-1],n[n.length-2],e),a=function(s,u){var c=s.length,l=function(f,h){for(var d=[],p=0;p<=1;p++)for(var v=0;v<=1;v++){for(var g=(p===0?"r":"rp1")+", "+(v===0?"c":"cp1"),m=2;m<f;m++)g=h[h.length-1-m]+","+g;d.push(g)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(n,e);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+i+`

            setOutput(vec4(`+a+`));
          }
        }
      `}},mx=function(n,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+n[c]+u[1]});var r=n.length,o=ze(r),i=t.map(function(u){return u[0]}).join(","),a=t.map(function(u,c){return u[0]+n[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=r!==1?`
      `+o+" start = "+o+"("+i+`);
      `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+i+`;
        int end = `+a+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},yx=function(n,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(g,m){return g[0]+n[m]+g[1]});for(var r=n.length,o=ze(r),i=t.map(function(g){return g[0]}).join(","),a=t.map(function(g,m){return g[0]+n[m]}).join(","),s=Tt("rc",r),u=Tt("source",r),c=s[r-1]+" < "+this.outputShape[r-1],l=r===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[r-1]+` += 1;
       if(`+c+`) {
      `,r===1?"":`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+" < "+this.outputShape[r-2]+") {",r===1?"":"  "+s[r-1]+` += 1;
         if(`+c+") {"],h=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=r===1?2:4;p<v;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=r===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+i+`);
      const `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},is=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideHeight,i=n.strideWidth,a=n.dilationHeight,s=n.dilationWidth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=n.padInfo.top,f=n.padInfo.left;this.outputShape=n.outShape;var h=t==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+i+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var v=4*Math.floor(r/4),g=r%4,m=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+i+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+a+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+m+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(g===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(g===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(g===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+m+`
          }
        }
        setOutput(`+p+`);
      }
    `}},as=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,d=n.padInfo.front,p=n.padInfo.top,v=n.padInfo.left;this.outputShape=n.outShape;var g=t==="avg",m="0.0";if(g||(m="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+i+", "+a+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+n.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(x="avgValue / count");var b=4*Math.floor(r/4),y=r%4,w=`
      if (`+g+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float initializationValue = `+m+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+m+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},xx=function(n,t){this.variableNames=["x"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=Math.ceil(o/e);this.outputShape=[r,i];var a="0.0",s="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",s="min"):t==="max"&&(a="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+a+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+a+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},bx=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var e="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Er(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Fu(n)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+n[1]+`;
        int cols = `+n[2]+`;

        `+e+`

        setOutput(result);
      }
    `},wx=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,g=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(i-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},_x=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Cx=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+i+".0, "+a+`.0,
                                     `+a+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},Ex=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,g=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+i+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Ix=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e],l=r?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},Rx=function(n,t){this.variableNames=["x"];var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=n,e!==1){var r=n.map(function(i,a){return function(s){return t.indexOf(s)!==-1&&n[s]!==1?n[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(a)}).join(","),o=ze(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+n[0]+` - coord - 1));
        }
      `},Sx=function(n,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=n;var r=Tt("rc",e),o=r[e-1]+" + 1 < "+this.outputShape[e-1],i=r[e-2]+" + 1 < "+this.outputShape[e-2],a=ze(e);function s(u){var c=n.map(function(l,f){return function(h,d){return t.indexOf(h)!==-1&&n[h]!==1?n[h]+" - "+d[h]+" - 1":""+d[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+n[0]+` - rc - 1),
            `+n[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+n[0]+` - (rc  + 1) - 1),
                `+n[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+a+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(r.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(r.slice())+`;
          }
          if(`+i+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},kl=function(n,t,e,r,o,i,a){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;var s=ze(o.length),u=ze(i.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";r===1?f="i":r===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+n+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},kx=function(n,t){this.variableNames=["x","segmentIds"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=n.numSegments,a=i*Math.ceil(o/e);this.outputShape=[r,a];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+i+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+i+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},Ax=function(n,t,e){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",r="resRC";else{for(var i=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],s=[],u=0;u<t.length;u++)s.push(""+i[u]),u<n&&a.push(""+i[u]);r=a.join(),o=s.join()}var c=ze(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Dx=function(){function n(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,r=ze(this.rank),o="uniform int start["+this.rank+"];",i=function(a){if(a===1)return"sourceLoc";if(a<=6)return ss.slice(0,a).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+a+" is not yet supported")}(this.rank);e=`
        `+r+` sourceLoc;
        `+r+` coords = getOutputCoords();
        `+t.map(function(a,s){return"sourceLoc."+ss[s]+" = start["+s+"] + coords."+ss[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+i+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),ss=["x","y","z","w","u","v"],Tx=function(){function n(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=ze(this.rank),r=Tt("coords",this.rank),o=Tt("sourceLoc",this.rank),i=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",a="getChannel(getSource("+o.join()+"), "+i+")",s=`
      result.x = `+a+`;
      if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+a+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+r[this.rank-1]+`;
      if (++`+r[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+r[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),Nx=function(n,t,e){this.variableNames=["x"],this.outputShape=e;var r=e.length,o=ze(e.length),i=ze(e.length),a="";if(r===1)a="coords * strides + begin";else{var s=0;a=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+n+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+a+`));
      }
    `},Fx=function(){function n(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return n.prototype.acquireTexture=function(t,e,r){var o,i=Al(e,r),a=Dl(t,i,r);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[a].shift();return this.usedTextures[a].push(s),s}return this.numUsedTextures++,this.log(),i===Bt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):i===Bt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):i===Bt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):i===Bt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):i===Bt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(o),o},n.prototype.releaseTexture=function(t,e,r,o){if(this.freeTextures!=null){var i=Dl(e,Al(r,o),o);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],s=a.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1),this.log()}},n.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},n.prototype.getNumUsedTextures=function(){return this.numUsedTextures},n.prototype.getNumFreeTextures=function(){return this.numFreeTextures},n.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(r){t.gpgpu.deleteMatrixTexture(r)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},n}();function Al(n,t){if(n===Ut.UPLOAD)return Bt.PACKED_2X2_FLOAT32;if(n===Ut.RENDER||n==null)return function(e){return G().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?Bt.PACKED_2X2_FLOAT32:Bt.UNPACKED_FLOAT32:e?Bt.PACKED_2X2_FLOAT16:Bt.UNPACKED_FLOAT16}(t);if(n===Ut.DOWNLOAD||n===Ut.PIXELS)return Bt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+n)}function Dl(n,t,e){return n[0]+"_"+n[1]+"_"+t+"_"+e}var Px=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[r]*t[r];this.outputShape=e,this.rank=e.length;var o=ze(this.rank),i=function(a){var s=a.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+a[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<a.length;l++)c.push("imod("+u[l]+", "+a[l]+")");return c.join()}(n);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},Mx=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];this.outputShape=e,this.rank=e.length;var o=ze(this.rank),i=function(a){var s=a.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<a.length;l++)c[a[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+i+`));
    }
    `},Ox=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=ze(this.rank),i=td("rc",this.rank),a=new Array(this.rank);for(r=0;r<t.length;r++)a[t[r]]=i[r];var s="vec2("+a.slice(-2).join()+")",u="++"+i[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+a.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+i[this.rank-1]+`;
      if(++`+i[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Pu=1.7580993408473768,Mu=1.0507009873554805,Ee=function(n,t){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},an="if (isnan(x)) return x;",Bx="return x;",Tl="return abs(x);",ad=an+`
  return (x < 0.0) ? 0.0 : x;
`,sd=an+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,ud="return (x >= 0.0) ? x : (exp(x) - 1.0);",Lx=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Pu+`;
  float scale = `+Mu+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Nl="return -x;",Fl="return ceil(x);",Pl="return floor(x);",Ml="return exp(x);",Ol="return exp(x) - 1.0;",Wx=an+`
  return sin(x);
`,Ux=an+`
  return cos(x);
`,Vx=an+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,zx=an+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Hx=an+`
  return atan(x);
`,Gx=an+"return log(x + sqrt(x * x + 1.0));",jx=an+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,qx=an+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,pi="return x;",Kx="return x;",cd=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ld=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,fd=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,bo=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Xx=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=n;var t=n.length,e=Tt("rc",t),r=ze(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),i=e.slice(-2),a=t<=1?"rc":"vec2("+i.join(",")+")";this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+a+`));
      }
    `},vi={};function gi(n,t){if(t===void 0&&(t=!1),n==="linear")return t?Kx:Bx;if(n==="relu")return t?cd:ad;if(n==="elu")return t?fd:ud;if(n==="relu6")return t?ld:sd;if(n==="prelu")return t?id:od;throw new Error("Activation "+n+" has not been implemented for the WebGL backend.")}var $x=600,Yx=function(n){function t(e){var r,o=n.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!G().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var i=Cn(G().getNumber("WEBGL_VERSION"));o.binaryCache=((r=G().getNumber("WEBGL_VERSION"))in vi||(vi[r]={}),vi[r]),o.gpgpu=new sx(i),o.canvas=i.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Fx(o.gpgpu),o.numMBBeforeWarning=G().global.screen==null?1024:G().global.screen.height*G().global.screen.width*window.devicePixelRatio*$x/1024/1024,o.texData=new qh(o,P),o}return on(t,n),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,r,o){if(G().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var i={};return this.texData.set(i,{shape:r,dtype:o,values:e,usage:Ut.UPLOAD}),i},t.prototype.move=function(e,r,o,i){if(G().getBool("DEBUG")&&this.checkNumericalProblems(r),i==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:i,values:r,usage:Ut.UPLOAD})},t.prototype.readSync=function(e){var r=this.texData.get(e),o=r.values,i=r.dtype,a=r.complexTensors,s=r.slice,u=r.shape,c=r.isPacked;if(s!=null){var l=void 0;l=c?new bo(u,pi):new Ee(u,pi);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:i}],i),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(i==="string")return o;var d,p,v=this.activeTimers!=null;return v&&(d=pn()),i==="complex64"?p=js(a.real.dataSync(),a.imag.dataSync()):p=this.getValuesFromTexture(e),v&&(this.downloadWaitMs+=pn()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,d,p,v,g,m,x,b,y,w,_,S,k;return se(this,function(E){switch(E.label){case 0:if(this.pendingRead.has(e))return r=this.pendingRead.get(e),[2,new Promise(function(I){return r.push(I)})];if(o=this.texData.get(e),i=o.values,a=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new bo(a,pi):new Ee(a,pi),h=this.runWebGLProgram(f,[{dataId:e,shape:a,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(i!=null)return[2,this.convertAndCacheOnCPU(e)];if(!G().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&G().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&G().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(e),g=this.texData.get(v.dataId),p=(k=this.gpgpu).createBufferFromTexture.apply(k,[g.texture].concat(Ao(a)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:E.sent(),E.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=E.sent(),b=x[0],y=x[1],m=js(b,y),[3,5];case 4:p==null?m=this.getValuesFromTexture(e):(w=le(a),m=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),E.label=5;case 5:return v!=null&&this.disposeData(v.dataId),_=this.convertAndCacheOnCPU(e,m),S=this.pendingRead.get(e),this.pendingRead.delete(e),S.forEach(function(I){return I(_)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var r=0;r<e.length;r++){var o=e[r];if(!Lm(o))throw G().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.isPacked,u=le(i);if(G().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(r=this.gpgpu).downloadMatrixFromPackedTexture.apply(r,[l.texture].concat(Ao(i))).subarray(0,u);return this.disposeData(c.dataId),f}var h=G().getBool("WEBGL_PACK")&&s===!0,d=h?es(i):i,p=h?new B0(d):new O0(d),v=this.runWebGLProgram(p,[{shape:d,dtype:a,dataId:e}],"float32"),g=this.texData.get(v.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(g.texture,g.texShape[0],g.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),m},t.prototype.time=function(e){return ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c;return se(this,function(l){switch(l.label){case 0:return r=this.activeTimers,o=[],i=!1,this.programTimersStack==null?(this.programTimersStack=o,i=!0):this.activeTimers.push(o),this.activeTimers=o,e(),a=ao(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=ao(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=r,i&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=l.sent(),u.kernelMs=ym(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:pn(),endMs:null}},t.prototype.endTimer=function(e){return G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=pn(),e)},t.prototype.getQueryTime=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){return G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(r=e).endMs-r.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var r=this.texData.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var r=this.texData.get(e),o=r.texture,i=r.dtype,a=r.texShape,s=r.usage,u=r.isPacked,c=r.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(o,a,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return G().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=P.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,r){var o=this;return r===void 0&&(r=128),this.getCPUBackend()!=null&&e.every(function(i){return o.texData.get(i.dataId).texture==null&&i.size<r})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,r){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:P.keep(e.clone()),imag:P.keep(r.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,r,o);if(le(o)===0)return ft([],o,e.dtype);var i=this.texData.get(e.dataId).isPacked,a=Gh(e.shape,r,o);if(i||!a){var s=G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Tx(o):new Dx(o),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,r,o)},t.prototype.shallowSlice=function(e,r,o){var i=this.texData.get(e.dataId),a=this.makeOutput(o,e.dtype),s=this.texData.get(a.dataId);Object.assign(s,i),s.shape=o,s.dtype=e.dtype;var u=jh(r,e.strides);i.slice&&(u+=i.slice.flatOffset),s.slice={flatOffset:u,origDataId:i.slice&&i.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),a},t.prototype.stridedSlice=function(e,r,o,i){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,r,o,i);var a=ku(r,o,i);if(a.some(function(u){return u===0}))return ft([],a);var s=new Nx(r,i,a);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,r){var o=G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Sx(e.shape,r):new Rx(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,r){if(e[0].dtype==="complex64"){var o=e.map(function(d){return $t(d)}),i=e.map(function(d){return gn(d)});return ct(this.concat(o,r),this.concat(i,r))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,r);if(e.length===1)return e[0];if(e.length>G().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var a=Math.floor(e.length/2),s=this.concat(e.slice(0,a),r),u=this.concat(e.slice(a),r);return this.concat([s,u],r)}if(G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new _0(e.map(function(d){return d.shape}),r);return this.compileAndRun(c,e)}var l=uo(e.map(function(d){return d.shape}),r),f=e.map(function(d){return d.as2D(-1,le(d.shape.slice(r)))}),h=new w0(f.map(function(d){return d.shape}));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Nl,e.dtype);var r=new Ee(e.shape,Nl);return this.compileAndRun(r,[e])},t.prototype.batchMatMul=function(e,r,o,i){var a=o?e.shape[2]:e.shape[1],s=i?r.shape[1]:r.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((a===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),i&&(r=r.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?r.as3D(c,1,u):r;return this.multiply(l,h).sum(f,!0)}var d=lt(e.dtype,r.dtype),p=new os(e.shape,[c,a,s],o,i);return this.compileAndRun(p,[e,r],d)},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=i?r.shape[2]:r.shape[1],f=a?o.shape[1]:o.shape[2],h=r.shape[0],d=lt(r.dtype,o.dtype),p=s!=null,v=c!=null,g=u?gi(u,!0):null,m=new os(r.shape,[h,l,f],i,a,p,g,v),x=[r,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(m,x,d)},t.prototype.multiply=function(e,r){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),i=this.texData.get(r.dataId),a=new bl(g0,e.shape,r.shape),s=new bl(m0,e.shape,r.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(r,i.complexTensors.real),this.makeComplexComponentTensorInfo(r,i.complexTensors.imag)],c=this.compileAndRun(a,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.multiply(e,r);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,wl,e.dtype);var h=new Xe(wl,e.shape,r.shape);return this.compileAndRun(h,[e,r],e.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){var u=[e,r,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(a!=null&&(l=a.shape,u.push(a)),G().getBool("WEBGL_PACK_NORMALIZATION")){var f=new v0(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(f,u)}var h=new p0(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){var s=G().getBool("WEBGL_PACK_NORMALIZATION")?new fx(e.shape,r,o,i,a):new cx(e.shape,r,o,i,a);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){var c=new lx(r.shape,i,a,s,u);return this.compileAndRun(c,[r,o,e])},t.prototype.tile=function(e,r){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(a){return Wi(a)});return Zh(xe(e.shape,e.dtype,o),r)}var i=new Px(e.shape,r);return this.compileAndRun(i,[e])},t.prototype.pad=function(e,r,o){var i=G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new yx(e.shape,r,o):new mx(e.shape,r,o);return this.compileAndRun(i,[e])},t.prototype.transpose=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,r);var o=G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ox(e.shape,r):new Mx(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,r,o){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.gather(e,r,o);var i=new H0(e.shape,r.size,o);return this.compileAndRun(i,[e,r])},t.prototype.batchToSpaceND=function(e,r,o){R(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(f,h){return f*h}),a=ji(e.shape,r,i),s=qi(a.length,r.length),u=Ki(e.shape,r,i),c=Uh(o,r.length),l=Vh(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){R(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(h,d){return h*d}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=ji(u.shape,r,i,!1),l=qi(c.length,r.length,!1),f=Ki(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,r,o){var i=e.shape[0],a=e.shape[1],s=ts(a),u=new xx({windowSize:s,inSize:a,batchSize:i},r),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,r,o)},t.prototype.argReduce=function(e,r,o){o===void 0&&(o=null);var i=e.shape[0],a=e.shape[1];o!=null&&(i=o.shape[0],a=o.shape[1]);var s=ts(a),u=new i0({windowSize:s,inSize:a,batchSize:i},r,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,r,l)},t.prototype.argReducePacked=function(e,r,o){o===void 0&&(o=null);var i=o!=null?o.shape:e.shape,a=ts(i[i.length-1]),s=new f0(i,a,r,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,r,c):c},t.prototype.sum=function(e,r){Ot("sum",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a),u=Ka(e.dtype);return this.reduce(s,"sum",u).reshape(i)},t.prototype.prod=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,r);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a),u=Ka(e.dtype);return this.reduce(s,"prod",u).reshape(i)},t.prototype.unsortedSegmentSum=function(e,r,o){var i=0,a=En([i],e.rank),s=e;a!=null&&(s=e.transpose(a),i=In(1,e.rank)[0]);var u=function(d,p,v){for(var g=[],m=d.length,x=0;x<m;x++)x!==p?g.push(d[x]):g.push(v);return g}(s.shape,i,o),c=le([s.shape[i]]),l=s.as2D(-1,c),f=Ka(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",r,f,o).reshape(u);return a!=null&&(h=h.transpose(Eu(a))),h},t.prototype.segOpCompute=function(e,r,o,i,a){var s=e.shape[0],u=e.shape[1],c=function(h,d){var p,v=!1;for(h<=Hh?(p=h,v=!0):p=Os(h,Math.floor(Math.sqrt(h)));!v;)p>d||p===h?v=!0:p=Os(h,p+1);return p}(u,a),l=new kx({windowSize:c,inSize:u,batchSize:s,numSegments:a}),f=this.compileAndRun(l,[e,o],i);return f.shape[1]===a?f:(o=Gi(0,a).tile([u/c]),this.segOpCompute(f,r,o,i,a))},t.prototype.argMinMaxReduce=function(e,r,o){var i=[r];if(Ot("arg"+o.charAt(0).toUpperCase()+o.slice(1),i,e.rank),!G().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var a=pt(e.shape,i),s=a[0],u=le(a[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,r){return this.argMinMaxReduce(e,r,"min")},t.prototype.argMax=function(e,r){return this.argMinMaxReduce(e,r,"max")},t.prototype.cumsum=function(e,r,o,i){if(r!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+r);var a=new T0(e.shape,o,i);return this.compileAndRun(a,[e])},t.prototype.equal=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(equal(a, b));
`,"bool");var o=new Xe("return float(a == b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.notEqual=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Xe("return float(a != b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.less=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.less(e,r);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Xe("return float(a < b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.lessEqual=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Xe("return float(a <= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greater=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.greater(e,r);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Xe("return float(a > b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greaterEqual=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Xe("return float(a >= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalNot=function(e){var r=new Ee(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(r,[e])},t.prototype.logicalAnd=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Xe("return float(a >= 1.0 && b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalOr=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Xe("return float(a >= 1.0 || b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.select=function(e,r,o){var i=new Ax(e.rank,r.shape,r.rank);return this.compileAndRun(i,[e,r,o],lt(r.dtype,o.dtype))},t.prototype.where=function(e){zi("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var r=e.dataSync();return Nu(e.shape,r)},t.prototype.topk=function(e,r,o){return ed(e.dataSync(),e.shape,e.dtype,r)},t.prototype.min=function(e,r){Ot("min",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a);return this.reduce(s,"min",s.dtype).reshape(i)},t.prototype.minimum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.minimum(e,r);var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Tn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.mod=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Tn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.max=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,r);Ot("max",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a);return this.reduce(s,"max",s.dtype).reshape(i)},t.prototype.maximum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.maximum(e,r);var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Tn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.all=function(e,r){Ot("all",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a);return this.reduce(s,"all",s.dtype).reshape(i)},t.prototype.any=function(e,r){Ot("any",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a);return this.reduce(s,"any",s.dtype).reshape(i)},t.prototype.realDivide=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Xe(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"float32")},t.prototype.floorDiv=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Xe(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"int32")},t.prototype.add=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,ns);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.add(e,r);var o=lt(e.dtype,r.dtype);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,ns,o);var i=new Xe(ns,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.packedUnaryOp=function(e,r,o){var i=new bo(e.shape,r);return this.compileAndRun(i,[e],o)},t.prototype.packedBinaryOp=function(e,r,o,i,a){a===void 0&&(a=!1);var s=new Tn(o,e.shape,r.shape,a);return this.compileAndRun(s,[e,r],i)},t.prototype.complexSeparableBinaryOp=function(e,r,o){var i=this,a=this.texData.get(e.dataId),s=this.texData.get(r.dataId),u=[[a.complexTensors.real,s.complexTensors.real],[a.complexTensors.imag,s.complexTensors.imag]].map(function(h){var d=h[0],p=h[1],v=i.makeComplexComponentTensorInfo(e,d),g=i.makeComplexComponentTensorInfo(r,p),m=new Xe(o,e.shape,r.shape);return i.compileAndRun(m,[v,g],lt(d.dtype,p.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,r){return{dataId:r.dataId,dtype:r.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>G().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var r=Math.floor(e.length/2),o=this.addN(e.slice(0,r)),i=this.addN(e.slice(r));return this.addN([o,i])}var a=e.map(function(c){return c.dtype}).reduce(function(c,l){return lt(c,l)}),s=e.map(function(c){return c.shape}),u=G().getBool("WEBGL_PACK")?new o0(e[0].shape,s):new r0(e[0].shape,s);return this.compileAndRun(u,e,a)},t.prototype.subtract=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,rs);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.subtract(e,r);var o=lt(e.dtype,r.dtype);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,rs,e.dtype);var i=new Xe(rs,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.pow=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Tn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,r.shape),i=lt(e.dtype,r.dtype);return this.compileAndRun(o,[e,r],i)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Fl,e.dtype);var r=new Ee(e.shape,Fl);return this.compileAndRun(r,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Pl,e.dtype);var r=new Ee(e.shape,Pl);return this.compileAndRun(r,[e])},t.prototype.sign=function(e){var r=new Ee(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(r,[e])},t.prototype.isNaN=function(e){var r=new Ee(e.shape,"return float(isnan(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isInf=function(e){var r=new Ee(e.shape,"return float(isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isFinite=function(e){var r=new Ee(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.round=function(e){var r=new Ee(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(r,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ml,e.dtype);var r=new Ee(e.shape,Ml);return this.compileAndRun(r,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ol,e.dtype);var r=new Ee(e.shape,Ol);return this.compileAndRun(r,[e])},t.prototype.softmax=function(e,r){var o=rt([r],e.shape),i=this.max(e,o),a=Ft(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var r=new Ee(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(r,[e])},t.prototype.log1p=function(e){var r=new Ee(e.shape,"return log(1.0 + x);");return this.compileAndRun(r,[e])},t.prototype.sqrt=function(e){var r=new Ee(e.shape,"return sqrt(x);");return this.compileAndRun(r,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var r=new Ee(e.shape,"return inversesqrt(x);");return this.compileAndRun(r,[e])},t.prototype.reciprocal=function(e){var r=new Ee(e.shape,"return 1.0 / x;");return this.compileAndRun(r,[e])},t.prototype.relu=function(e){var r;return r=G().getBool("WEBGL_PACK")?new bo(e.shape,cd):new Ee(e.shape,ad),this.compileAndRun(r,[e])},t.prototype.relu6=function(e){var r;return r=G().getBool("WEBGL_PACK")?new bo(e.shape,ld):new Ee(e.shape,sd),this.compileAndRun(r,[e])},t.prototype.prelu=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Tn(id,e.shape,r.shape):new Xe(od,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.elu=function(e){if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fd,e.dtype);var r=new Ee(e.shape,ud);return this.compileAndRun(r,[e])},t.prototype.eluDer=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Tn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,r.shape):new Xe("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.selu=function(e){var r=new Ee(e.shape,Lx);return this.compileAndRun(r,[e])},t.prototype.int=function(e){var r=new Ee(e.shape,"return float(int(x));");return this.compileAndRun(r,[e],"int32")},t.prototype.clip=function(e,r,o){var i,a=(i=G().getBool("WEBGL_PACK_CLIP")?new x0(e.shape):new y0(e.shape)).getCustomSetupFunc(r,o);return this.compileAndRun(i,[e],null,a)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Tl,e.dtype);var r=new Ee(e.shape,Tl);return this.compileAndRun(r,[e])},t.prototype.complexAbs=function(e){var r=this.texData.get(e.dataId),o=new b0(e.shape),i=[this.makeComplexComponentTensorInfo(e,r.complexTensors.real),this.makeComplexComponentTensorInfo(e,r.complexTensors.imag)];return this.compileAndRun(o,i)},t.prototype.sigmoid=function(e){var r=new Ee(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(r,[e])},t.prototype.softplus=function(e){var r=new Ee(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(r,[e])},t.prototype.sin=function(e){var r=new Ee(e.shape,Wx);return this.compileAndRun(r,[e])},t.prototype.cos=function(e){var r=new Ee(e.shape,Ux);return this.compileAndRun(r,[e])},t.prototype.tan=function(e){var r=new Ee(e.shape,"return tan(x);");return this.compileAndRun(r,[e])},t.prototype.asin=function(e){var r=new Ee(e.shape,Vx);return this.compileAndRun(r,[e])},t.prototype.acos=function(e){var r=new Ee(e.shape,zx);return this.compileAndRun(r,[e])},t.prototype.atan=function(e){var r=new Ee(e.shape,Hx);return this.compileAndRun(r,[e])},t.prototype.atan2=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Tn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.sinh=function(e){var r=new Ee(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.cosh=function(e){var r=new Ee(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.tanh=function(e){var r=new Ee(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(r,[e])},t.prototype.asinh=function(e){var r=new Ee(e.shape,Gx);return this.compileAndRun(r,[e])},t.prototype.acosh=function(e){var r=new Ee(e.shape,jx);return this.compileAndRun(r,[e])},t.prototype.atanh=function(e){var r=new Ee(e.shape,qx);return this.compileAndRun(r,[e])},t.prototype.erf=function(e){var r=new Ee(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(r,[e])},t.prototype.step=function(e,r){var o=new Ee(e.shape,function(i){return i===void 0&&(i=0),an+`
    return x > 0.0 ? 1.0 : float(`+i+`);
  `}(r));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,r,o,i,a,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,d=o.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(p||!G().getBool("WEBGL_LAZILY_UNPACK")||!G().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var g=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],m=this.reshape(e,[1,g,o.inChannels]),x=this.reshape(r,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:m,b:x,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),o.outShape)}var b=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,R(hi(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var _=this.reshape(r,[1,o.inChannels,o.outChannels]),S=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),k=this.texData.get(S.dataId);return R(k.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,k.shape=o.outShape,P.makeTensorFromDataId(S.dataId,o.outShape,S.dtype)},t.prototype.conv2dWithIm2Row=function(e,r,o,i,a,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,v=h*f,g=[p,v],m=e.squeeze([0]),x=r.reshape([1,p,-1]),b=new ux(g,m.shape,o),y=this.compileAndRun(b,[m]).reshape([1,g[0],g[1]]),w=i!=null,_=s!=null,S=a?gi(a,!0):null,k=new os(y.shape,[1,v,o.outChannels],!0,!1,w,S,_),E=[y,x];i&&E.push(i),_&&E.push(s);var I=this.compileAndRun(k,E);return d?I.reshape([1,h,f,o.outChannels]):I.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights;if(i.filterHeight===1&&i.filterWidth===1&&i.dilationHeight===1&&i.dilationWidth===1&&i.strideHeight===1&&i.strideWidth===1&&(i.padInfo.type==="SAME"||i.padInfo.type==="VALID"))return this.conv2dByMatMul(r,o,i,a,s,u);if(G().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)return this.conv2dWithIm2Row(r,o,i,a,s,u);var c=a!=null,l=u!=null,f=s?gi(s,!1):null,h=new _l(i,c,f,l),d=[r,o];return a&&d.push(a),u&&d.push(u),this.compileAndRun(h,d)},t.prototype.conv2d=function(e,r,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,r,o);if(G().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,r,o);var i=new _l(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerInput=function(e,r,o){var i=new E0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerFilter=function(e,r,o){var i=new C0(o);return this.compileAndRun(i,[e,r])},t.prototype.fusedDepthwiseConv2D=function(e){var r,o=e.input,i=e.filter,a=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=G().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1,f=u?gi(u,l):null,h=[o,i],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(r=new El(a,d,f,p),this.compileAndRun(r,h)):(r=new Cl(a,d,f,p),this.compileAndRun(r,h))},t.prototype.depthwiseConv2D=function(e,r,o){var i;return G().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(i=new El(o),this.compileAndRun(i,[e,r])):(i=new Cl(o),this.compileAndRun(i,[e,r]))},t.prototype.depthwiseConv2DDerInput=function(e,r,o){var i=new k0(o);return this.compileAndRun(i,[e,r])},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){var i=new S0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3d=function(e,r,o){var i=new A0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerInput=function(e,r,o){var i=new R0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerFilter=function(e,r,o){var i=new I0(o);return this.compileAndRun(i,[e,r])},t.prototype.maxPool=function(e,r){var o=new is(r,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,r){var o=new is(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,r,o,i){var a=new is(i,"max",!0),s=this.compileAndRun(a,[r]),u=new hx(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,r,o){var i=new h0(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.cast=function(e,r){return $h(e,r,this)},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.avgPool3d=function(e,r){var o=new as(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,r,o){var i=new d0(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.maxPool3d=function(e,r){var o=new as(r,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,r,o,i){var a=new as(i,"max",!0),s=this.compileAndRun(a,[r]),u=new dx(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.reshape=function(e,r){var o=this.texData.get(e.dataId);if(o.isPacked&&!hi(e.shape,r)&&(o.texture===null||!hi(o.shape,r))){var i=this.packedReshape(e,r);return P.makeTensorFromDataId(i.dataId,i.shape,i.dtype)}return Gs(e,r)},t.prototype.resizeBilinear=function(e,r,o,i){var a=G().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Cx(e.shape,r,o,i):new _x(e.shape,r,o,i);return this.compileAndRun(a,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,r,o){var i=new wx(e,r,o);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighbor=function(e,r,o,i){var a=new Ix(e.shape,r,o,i);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){var i=new Ex(e,r,o);return this.compileAndRun(i,[e])},t.prototype.multinomial=function(e,r,o,i){var a=r?e:Vn(e),s=a.shape[0],u=a.shape[1],c=new px(s,u,o),l=c.getCustomSetupFunc(i);return this.compileAndRun(c,[a],"int32",l)},t.prototype.oneHot=function(e,r,o,i){var a=new vx(e.size,r,o,i);return this.compileAndRun(a,[e])},t.prototype.diag=function(e){var r=new M0(e.size);return this.compileAndRun(r,[e])},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return zi("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Du(e.dataSync(),r.dataSync(),o,i,a)},t.prototype.cropAndResize=function(e,r,o,i,a,s){var u=new D0(e.shape,r.shape,i,a,s);return this.compileAndRun(u,[e,r,o],"float32")},t.prototype.depthToSpace=function(e,r,o){R(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});var i=e.shape[0],a=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=a*r,l=s*r,f=u/(r*r),h=new P0(o==="NHWC"?[i,c,l,f]:[i,f,c,l],r,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,r,o){return Qh(e,r,o)},t.prototype.scatterND=function(e,r,o){var i=Xi(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=[l/u,u],h=e.reshape([s,a]),d=r.reshape([s,u]);if(l===0)return Gs(ft([]),o);var p=re(0),v=new kl(s,a,h.rank,d.rank,c,f);return this.compileAndRun(v,[d,h,p]).reshape(o)},t.prototype.sparseToDense=function(e,r,o,i){var a=Xi(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.strides,l=a.outputSize,f=new kl(u,s,e.rank,r.rank,c,[l,1]);return this.compileAndRun(f,[r,e,i]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,r){var o=this.texData.get(e.dataId),i=new Rl(U0,e.shape,r),a=new Rl(V0,e.shape,r),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(i,s),c=this.compileAndRun(a,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=zh(e,r),s=a[0],u=a[1],c=a[2],l=a[3],f=r.reshape([u,i]),h=e.reshape([e.size/c,c]),d=new G0(i,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},t.prototype.fill=function(e,r,o){if((o=o||$o(r))==="string"){var i=Li(o,le(e));return i.fill(r),P.makeTensor(i,e,o,this)}var a=new z0(e,r),s=a.getCustomSetupFunc(r);return this.compileAndRun(a,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,r,o){return Yh(e,r,o)},t.prototype.makeTensorInfo=function(e,r){var o=this.write(null,e,r);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:r}},t.prototype.makeOutput=function(e,r){var o=this.makeTensorInfo(e,r).dataId;return P.makeTensorFromDataId(o,e,r,this)},t.prototype.unpackTensor=function(e){var r=new Xx(e.shape);return this.runWebGLProgram(r,[e],e.dtype)},t.prototype.packTensor=function(e){var r=new gx(e.shape);return this.runWebGLProgram(r,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,r){var o=[Ui(e.shape)].concat(Vi(e.shape)),i={dtype:e.dtype,shape:o,dataId:e.dataId},a=[Ui(r)].concat(Vi(r)),s=new bx(a,o),u=this.runWebGLProgram(s,[i],e.dtype,null,!0);return{dataId:u.dataId,shape:r,dtype:u.dtype}},t.prototype.decode=function(e){var r,o=this.texData.get(e),i=o.isPacked,a=o.shape,s=o.dtype,u=es(a);return r=i?new F0(u):new N0(u),{dtype:s,shape:a,dataId:this.runWebGLProgram(r,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,r,o,i,a){var s=this;a===void 0&&(a=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===zo.DENSE){var l=Ao(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),le(u.shape)===0)return c.values=Uo(u.dtype,0),u;var f=[],h=r.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!e.packedInputs&&le(b.shape)<=G().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!e.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),f.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!hi(y.shape,b.shape)){var w=b,_=b.shape;b.shape=y.shape,b=s.packedReshape(b,_),f.push(b),y=s.texData.get(b.dataId),w.shape=_}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},v=function(b,y,w){var _="";y.concat(w).forEach(function(E){var I=E.texData!=null&&E.texData.slice!=null&&E.texData.slice.flatOffset>0,F=E.isUniform?"uniform":E.texData.texShape;_+=E.shape+"_"+F+"_"+I});var S=b.userCode,k=b.constructor.name;return k+="_"+_+"_"+S}(e,h,p),g=this.getAndSaveBinary(v,function(){return function(b,y,w,_){var S=y.userCode,k=w.map(function(L,K){var Y={logicalShape:L.shape,texShape:L.isUniform?null:L.texData.texShape,isUniform:L.isUniform,isPacked:!L.isUniform&&L.texData.isPacked,flatOffset:null};return L.texData!=null&&L.texData.slice!=null&&L.texData.slice.flatOffset>0&&(Y.flatOffset=L.texData.slice.flatOffset),{name:y.variableNames[K],shapeInfo:Y}}),E=k.map(function(L){return L.shapeInfo}),I={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},F=a0(k,I,S,y.packedInputs),A=b.createProgram(F),B=null,W=b.getUniformLocation(A,"NAN",!1);G().getNumber("WEBGL_VERSION")===1&&(B=b.getUniformLocation(A,"INFINITY",!1));for(var z={},H=0;H<y.variableNames.length;H++){var V=y.variableNames[H];z[V]=b.getUniformLocation(A,V,!1),z["offset"+V]=b.getUniformLocation(A,"offset"+V,!1)}return{program:y,source:F,webGLProgram:A,uniformLocations:z,inShapeInfos:E,outShapeInfo:I,infLoc:B,nanLoc:W}}(s.gpgpu,e,h,p)}),m=this.activeTimers!=null;if(m&&(d=this.startTimer()),function(b,y,w,_,S){Sl(y.inShapeInfos,w),Sl([y.outShapeInfo],[_]);var k=_.texData.texture,E=_.texData.texShape;_.texData.isPacked?b.setOutputPackedMatrixTexture(k,E[0],E[1]):b.setOutputMatrixTexture(k,E[0],E[1]),b.setProgram(y.webGLProgram),G().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(I,F){var A=y.program.variableNames[F],B=y.uniformLocations[A],W=y.uniformLocations["offset"+A];if(B!=null)if(I.isUniform)if(le(I.shape)<2)b.gl.uniform1f(B,I.uniformValues[0]);else{var z=I.uniformValues;z instanceof Float32Array||(z=new Float32Array(z)),b.gl.uniform1fv(B,z)}else I.texData.slice!=null&&W!=null&&b.gl.uniform1i(W,I.texData.slice.flatOffset),b.setInputMatrixTexture(I.texData.texture,B,F)}),S!=null&&S(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,g,h,p,i),f.forEach(function(b){return s.disposeData(b.dataId)}),m&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!G().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&a===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},t.prototype.compileAndRun=function(e,r,o,i,a){a===void 0&&(a=!1),o=o||r[0].dtype;var s=this.runWebGLProgram(e,r,o,i,a);return P.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,r){return e in this.binaryCache||(this.binaryCache[e]=r()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(G().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(r){e.gpgpu.deleteProgram(e.binaryCache[r].webGLProgram),delete e.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=ie(function(){if(!G().get("WEBGL_RENDER_FLOAT32_ENABLED")){var r=G().getBool("DEBUG");G().set("DEBUG",!1);var o=e.abs(re(1e-8)).dataSync()[0];if(G().set("DEBUG",r),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=pn());var d=o.texShape;if(d==null&&(d=ny(i,l),o.texShape=d),s!=null){var p=es(i),v=void 0,g=d[1],m=d[0],x=s instanceof Uint8Array;l?(g=(r=Jo(d[0],d[1]))[0],m=r[1],v=new W0(p,[m,g],x)):v=new L0(p,[m,g],x);var b=this.makeTensorInfo([m,g],a);this.texData.get(b.dataId).usage=x?Ut.PIXELS:Ut.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),g,m,s);var y=this.runWebGLProgram(v,[b],a,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,h&&(this.uploadWaitMs+=pn()-f)}else{var _=this.acquireTexture(d,c,a,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,r){var o=this.texData.get(e),i=o.dtype;return this.releaseGPUData(e),r!=null&&(o.values=function(a,s){if(s==="float32"||s==="complex64")return a;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(a.length):new Uint8Array(a.length),c=0;c<u.length;++c)u[c]=Math.round(a[c]);return u}throw new Error("Unknown dtype "+s)}(r,i)),o.values},t.prototype.acquireTexture=function(e,r,o,i){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+a+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,r,i)},t.prototype.computeBytes=function(e,r){return e[0]*e[1]*Eh(r)},t}(Kh);Th()&&P.registerBackend("webgl",function(){return new Yx},2);var Jx=N({square_:function(n){var t=C(n,"x","square"),e=[t];return P.runKernelFunc(function(r,o){return o([t]),r.square(t)},{x:t},null,"Square",{},e,[])}}),Go="SquaredDifference",hd=N({squaredDifference_:function(n,t){var e,r=C(n,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape);var i={a:r,b:o},a=[r,o];return P.runKernelFunc(function(s,u){var c=s.squaredDifference(r,o);return u([r,o]),c},i,function(s,u){var c=u[0],l=u[1],f=re(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},Go,{},a,[])}}),Qx=N({abs_:function(n){var t=C(n,"x","abs");return t.dtype==="complex64"?P.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):P.runKernelFunc(function(e,r){var o=e.abs(t);return r([t]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),Zx=N({acos_:function(n){var t=C(n,"x","acos");return P.runKernelFunc(function(e,r){var o=e.acos(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),eb=N({acosh_:function(n){var t=C(n,"x","acosh");return P.runKernelFunc(function(e,r){var o=e.acosh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),tb=N({asin_:function(n){var t=C(n,"x","asin");return P.runKernelFunc(function(e,r){var o=e.asin(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).sub(o.toFloat().square()).sqrt())}}})}}),nb=N({asinh_:function(n){var t=C(n,"x","asinh");return P.runKernelFunc(function(e,r){var o=e.asinh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).add(o.toFloat().square()).sqrt())}}})}}),rb=N({atan_:function(n){var t=C(n,"x","atan");return P.runKernelFunc(function(e,r){var o=e.atan(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),ob=N({atanh_:function(n){var t=C(n,"x","atanh");return P.runKernelFunc(function(e,r){var o=e.atanh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(re(1).sub(o.toFloat().square()))}}})}}),ib=N({ceil_:function(n){var t=C(n,"x","ceil");return P.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Ou=N({clipByValue_:function(n,t,e){var r=C(n,"x","clipByValue");R(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[r],i={min:t,max:e};return P.runKernelFunc(function(a,s){var u=a.clip(r,t,e);return s([r]),u},{x:r},function(a,s){var u=s[0];return{x:function(){return a.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),Fe(a))}}},"ClipByValue",i,o)}}),ab=N({cos_:function(n){var t=C(n,"x","cos"),e=[t];return P.runKernelFunc(function(r,o){var i=r.cos(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().sin().neg().mul(r)}}},"Cos",{},e)}}),sb=N({cosh_:function(n){var t=C(n,"x","cosh");return P.runKernelFunc(function(e,r){var o=e.cosh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),ub=N({erf_:function(n){var t=C(n,"x","erf");return R(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),P.runKernelFunc(function(e,r){var o=e.erf(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),qs=N({exp_:function(n){var t=C(n,"x","exp");return P.runKernelFunc(function(e,r){var o=e.exp(t);return r([o]),o},{x:t},function(e,r){return{x:function(){return e.mulStrict(r[0])}}},"Exp",{},[],[!0])}}),cb=N({expm1_:function(n){var t=C(n,"x","expm1");return P.runKernelFunc(function(e,r){var o=e.expm1(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.exp())}}})}}),lb=N({floor_:function(n){var t=C(n,"x","floor");return P.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),fb=N({log_:function(n){var t=C(n,"x","log"),e=[t];return P.runKernelFunc(function(r,o){var i=r.log(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.toFloat())}}},"Log",{},e)}}),hb=N({log1p_:function(n){var t=C(n,"x","log1p");return P.runKernelFunc(function(e,r){var o=e.log1p(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.add(1))}}})}}),db=N({logSigmoid_:function(n){var t=C(n,"x","logSigmoid");return P.runKernelFunc(function(e,r){var o=e.softplus(t.neg()).neg();return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Qi=N({neg_:function(n){var t=C(n,"x","neg"),e=[t];return P.runKernelFunc(function(r){return r.neg(t)},{x:t},function(r){return{x:function(){return r.neg()}}},"Neg",{},e)}}),pb=N({reciprocal_:function(n){var t=C(n,"x","reciprocal");return P.runKernelFunc(function(e,r){var o=e.reciprocal(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.square().neg())}}})}}),vb=N({round_:function(n){var t=C(n,"x","round");return P.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),dd=N({rsqrt_:function(n){var t=C(n,"x","rsqrt"),e=[t];return P.runKernelFunc(function(r,o){var i=r.rsqrt(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),pd=N({sigmoid_:function(n){var t=C(n,"x","sigmoid");return P.runKernelFunc(function(e,r){var o=e.sigmoid(t);return r([o]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mul(o.mul(re(1).sub(o)))}}},"Sigmoid")}}),gb=N({sign_:function(n){var t=C(n,"x","sign");return P.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),mb=N({isNaN_:function(n){var t=C(n,"x","isNaN");return P.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),yb=N({isInf_:function(n){var t=C(n,"x","isInf");return P.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),xb=N({isFinite_:function(n){var t=C(n,"x","isFinite");return P.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),bb=N({sin_:function(n){var t=C(n,"x","sin"),e=[t];return P.runKernelFunc(function(r,o){var i=r.sin(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().cos().mul(r)}}},"Sin",{},e)}}),wb=N({sinh_:function(n){var t=C(n,"x","sinh");return P.runKernelFunc(function(e,r){var o=e.sinh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),_b=N({softplus_:function(n){var t=C(n,"x","softplus");return P.runKernelFunc(function(e,r){var o=e.softplus(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),Cb=N({sqrt_:function(n){var t=C(n,"x","sqrt");return P.runKernelFunc(function(e,r){var o=e.sqrt(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),Eb=N({step_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","step");return P.runKernelFunc(function(r){return r.step(e,t)},{$x:e},function(r){return{$x:function(){return Fe(r)}}})}}),Ib=N({tan_:function(n){var t=C(n,"x","tan");return P.runKernelFunc(function(e,r){var o=e.tan(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.cos().square())}}})}}),Rb=N({tanh_:function(n){var t=C(n,"x","tanh");return P.runKernelFunc(function(e,r){var o=e.tanh(t);return r([o]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return re(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function vd(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),R(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),R(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),a!=null&&R(a.rank===2||a.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+a.rank+"."}),s!=null&&R(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Zo(u,c,l,s,a,i)}function gd(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),R(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),R(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),a!=null&&R(a.rank===3||a.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+a.rank+"."}),s!=null&&R(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Zo(u,c,l,s,a,i)}function md(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),R(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),R(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),a!=null&&R(a.rank===4||a.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+a.rank+"."}),s!=null&&R(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Zo(u,c,l,s,a,i)}function Zo(n,t,e,r,o,i){i==null&&(i=.001);var a,s,u,c=C(n,"x","batchNorm"),l=C(t,"mean","batchNorm"),f=C(e,"variance","batchNorm");o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),R(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),R(a==null||l.rank===a.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,a];return P.runKernelFunc(function(d,p){var v=d.batchNormalization(u,mi(l),mi(f),i,mi(a),mi(s));return p([c,l,f,a]),v},{x:c,mean:l,variance:f,scale:a,offset:s},function(d,p){var v=p,g=v[0],m=v[1],x=v[2],b=v[3],y=b??re(1),w=tt(m.shape,u.shape),_=[];if(m.rank===1){for(var S=0;S<u.shape.length-1;++S)_.push(u.shape[S]);_.push(1)}var k=g.sub(m),E=d.mul(y),I=dd(x.add(re(i))),F=I.mul(I).mul(I).mul(re(-.5));return{x:function(){return m.rank===1?d.mul(Zr(I.as4D(1,1,1,m.shape[0]),_)).mul(y).reshape(g.shape):d.mul(I).mul(y).reshape(g.shape)},mean:function(){var A=I.mul(re(-1)).mul(E);return m.rank===1&&(A=A.sum(w)),A.reshape(m.shape)},variance:function(){var A=F.mul(k).mul(E);return m.rank===1&&(A=A.sum(w)),A.reshape(m.shape)},scale:function(){var A=k.mul(I),B=d.mul(A);return m.rank===1&&(B=B.sum(w)),B.reshape(m.shape)},offset:function(){var A=d;return m.rank===1&&(A=A.sum(w)),A.reshape(m.shape)}}},"BatchNormalization",{varianceEpsilon:i},h).reshape(c.shape)}function mi(n){return n==null?null:n.rank===0?n.as1D():n.rank===1?n:n.rank===2?n.as4D(1,1,n.shape[0],n.shape[1]):n.rank===3?n.as4D(1,n.shape[0],n.shape[1],n.shape[2]):n}function xa(){Nh("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var Sb=N({batchNormalization2d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),xa(),vd(n,t,e,i,o,r)}}),kb=N({batchNormalization3d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),xa(),gd(n,t,e,i,o,r)}}),Ab=N({batchNormalization4d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),xa(),md(n,t,e,i,o,r)}}),Db=N({batchNormalization_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),xa(),Zo(n,t,e,i,o,r)}}),yd=N({batchNorm_:Zo}),Tb=N({batchNorm2d_:vd}),Nb=N({batchNorm3d_:gd}),Fb=N({batchNorm4d_:md}),ba=N({logicalAnd_:function(n,t){var e=C(n,"a","logicalAnd","bool"),r=C(t,"b","logicalAnd","bool");return Te(e.shape,r.shape),P.runKernelFunc(function(o){return o.logicalAnd(e,r)},{a:e,b:r},null,"LogicalAnd")}}),Pb=N({logicalNot_:function(n){var t=C(n,"x","logicalNot","bool");return P.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),xd=N({logicalOr_:function(n,t){var e=C(n,"a","logicalOr","bool"),r=C(t,"b","logicalOr","bool");return Te(e.shape,r.shape),P.runKernelFunc(function(o){return o.logicalOr(e,r)},{$a:e,$b:r})}}),Mb=N({logicalXor_:function(n,t){var e=C(n,"a","logicalXor","bool"),r=C(t,"b","logicalXor","bool");return Te(e.shape,r.shape),xd(n,t).logicalAnd(ba(n,t).logicalNot())}}),Ar=N({where_:function(n,t,e){var r=C(t,"a","where"),o=C(e,"b","where"),i=C(n,"condition","where","bool");return Le(r.shape,o.shape,"Error in where: "),i.rank===1?R(i.shape[0]===r.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):Le(i.shape,o.shape,"Error in where: "),P.runKernelFunc(function(a,s){var u=a.select(i,r,o);return s([i]),u},{$condition:i,$a:r,$b:o},function(a,s){var u=s[0];return{$condition:function(){return Fe(u).toFloat()},$a:function(){return a.mul(u.cast(a.dtype))},$b:function(){return a.mul(u.logicalNot().cast(a.dtype))}}})}}),bd=function(n){return ae(this,void 0,void 0,function(){var t,e,r;return se(this,function(o){switch(o.label){case 0:return[4,(t=C(n,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),r=Nu(t.shape,e),n!==t&&t.dispose(),[2,r]}})})},Ae=N({add_:function(n,t){var e,r=C(n,"a","add"),o=C(t,"b","add");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a){return a.add(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=tt(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=tt(o.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Ob=N({addN_:function(n){R(Array.isArray(n),function(){return"The argument passed to tf.addN() must be a list of tensors"}),R(n.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+n.length});var t=n.map(function(o,i){return C(o,"tensors"+i,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!it(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=t;return P.runKernelFunc(function(o){return o.addN(t)},r,function(o){var i={};return t.forEach(function(a,s){i[s]=function(){return o.clone()}}),i},"AddN")}}),Bb=N({addStrict_:function(n,t){var e=C(n,"a","addStrict"),r=C(t,"b","addStrict");return Le(e.shape,r.shape,"Error in addStrict: "),e.add(r)}}),Lb=N({atan2_:function(n,t){var e,r=C(n,"a","atan2"),o=C(t,"b","atan2");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.atan2(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=Ae(u.square(),c.square()),f=a.mul(c.div(l)),h=tt(u.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=Ae(u.square(),c.square()),f=Qi(a.mul(u.div(l))),h=tt(c.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),Qt=N({div_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");if(e=Ke(r,o),r=e[0],o=e[1],r.dtype==="int32"&&o.dtype==="int32")return wd(r,o);var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.realDivide(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=tt(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=tt(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),Wb=N({divNoNan_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");r=(e=Ke(r,o))[0],o=e[1];var i=Qt(r,o),a=Fe(i),s=o.equal(a);return Ar(s,a,i)}}),Ub=N({divStrict_:function(n,t){var e=C(n,"a","div"),r=C(t,"b","div");return Le(e.shape,r.shape,"Error in divideStrict: "),e.div(r)}}),wd=N({floorDiv_:function(n,t){var e,r=C(n,"a","floorDiv"),o=C(t,"b","floorDiv");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.floorDiv(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=tt(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=tt(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),Bu=N({maximum_:function(n,t){var e,r=C(n,"a","maximum"),o=C(t,"b","maximum");return e=Ke(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Te(r.shape,o.shape),P.runKernelFunc(function(i,a){var s=i.maximum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.greaterEqual(u).toFloat())},b:function(){return i.mul(s.less(u).toFloat())}}},"Maximum")}}),Vb=N({maximumStrict_:function(n,t){var e=C(n,"a","maximumStrict"),r=C(t,"b","maximumStrict");return Le(e.shape,r.shape,"Error in maximumStrict: "),e.maximum(r)}}),_d=N({minimum_:function(n,t){var e,r=C(n,"a","minimum"),o=C(t,"b","minimum");return e=Ke(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Te(r.shape,o.shape),P.runKernelFunc(function(i,a){var s=i.minimum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.lessEqual(u).toFloat())},b:function(){return i.mul(s.greater(u).toFloat())}}},"Minimum")}}),zb=N({minimumStrict_:function(n,t){var e=C(n,"a","minimumStrict"),r=C(t,"b","minimumStrict");return Le(e.shape,r.shape,"Error in minimumStrict: "),e.minimum(r)}}),Hb=N({mod_:function(n,t){var e,r=C(n,"a","mod"),o=C(t,"b","mod");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.mod(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=tt(u.shape,i);return l.length>0?a.sum(l).reshape(u.shape):a},$b:function(){var l=a.mul(u.div(c).floor().neg()),f=tt(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),Gb=N({modStrict_:function(n,t){var e=C(n,"a","modStrict"),r=C(t,"b","modStrict");return Le(e.shape,r.shape,"Error in modStrict: "),e.mod(r)}}),wt=N({mul_:function(n,t){var e,r=C(n,"a","mul"),o=C(t,"b","mul");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.multiply(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.mul(c.toFloat()),f=tt(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=tt(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),jb=N({mulStrict_:function(n,t){var e=C(n,"a","mul"),r=C(t,"b","mul");return Le(e.shape,r.shape,"Error in multiplyStrict: "),e.mul(r)}}),Zi=N({pow_:function(n,t){var e,r=C(n,"base","pow"),o=C(t,"exp","pow");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape),a=[r,o];return P.runKernelFunc(function(s,u){var c=s.pow(r,o);return u([r,o,c]),c},{a:r,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub(re(1))))),p=tt(c.shape,i);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,Fe(c)),p=s.mul(f.mul(d)),v=tt(l.shape,i);return v.length>0&&(p=p.sum(v)),p.reshape(l.shape)}}},"Pow",{},a,[!0])}}),qb=N({powStrict_:function(n,t){return Le(n.shape,t.shape,"Error in powStrict: "),n.pow(t)}}),Kb=N({squaredDifferenceStrict_:function(n,t){var e=C(n,"a","squaredDifferenceStrict"),r=C(t,"b","squaredDifferenceStrict");return Le(e.shape,r.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(r)}}),nt=N({sub_:function(n,t){var e,r=C(n,"a","sub"),o=C(t,"b","sub");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a){return a.subtract(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=tt(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=tt(o.shape,i);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Xb=N({subStrict_:function(n,t){var e=C(n,"a","subStrict"),r=C(t,"b","subStrict");return Le(e.shape,r.shape,"Error in subStrict: "),e.sub(r)}}),Cd=N({equal_:function(n,t){var e,r=C(n,"a","equal"),o=C(t,"b","equal");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i){return i.equal(r,o)},{$a:r,$b:o})}}),$b=N({equalStrict_:function(n,t){var e=C(n,"a","equalStrict"),r=C(t,"b","equalStrict");return Le(e.shape,r.shape,"Error in equalStrict: "),e.equal(r)}}),Yb=N({greater_:function(n,t){var e,r=C(n,"a","greater"),o=C(t,"b","greater");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i){return i.greater(r,o)},{a:r,b:o},null,"Greater")}}),Ed=N({greaterEqual_:function(n,t){var e,r=C(n,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i,a){var s=i.greaterEqual(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return Fe(s)},b:function(){return Fe(u)}}},"GreaterEqual")}}),Jb=N({greaterEqualStrict_:function(n,t){var e=C(n,"a","greaterEqualStrict"),r=C(t,"b","greaterEqualStrict");return Le(e.shape,r.shape,"Error in greaterEqualStrict: "),e.greaterEqual(r)}}),Qb=N({greaterStrict_:function(n,t){var e=C(n,"a","greaterStrict"),r=C(t,"b","greaterStrict");return Le(e.shape,r.shape,"Error in greaterStrict: "),e.greater(r)}}),Zb=N({less_:function(n,t){var e,r=C(n,"a","less"),o=C(t,"b","less");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i){return i.less(r,o)},{a:r,b:o},null,"Less")}}),e1=N({lessEqual_:function(n,t){var e,r=C(n,"a","lessEqual"),o=C(t,"b","lessEqual");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i,a){var s=i.lessEqual(r,o);return a([r,o]),s},{a:r,b:o},null,"LessEqual")}}),t1=N({lessEqualStrict_:function(n,t){var e=C(n,"a","lessEqualStrict"),r=C(t,"b","lessEqualStrict");return Le(e.shape,r.shape,"Error in lessEqualStrict: "),e.lessEqual(r)}}),n1=N({lessStrict_:function(n,t){var e=C(n,"a","lessStrict"),r=C(t,"b","lessStrict");return Le(e.shape,r.shape,"Error in lessStrict: "),e.less(r)}}),r1=N({notEqual_:function(n,t){var e,r=C(n,"a","notEqual"),o=C(t,"b","notEqual");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i){return i.notEqual(r,o)},{a:r,b:o},null,"NotEqual")}}),o1=N({notEqualStrict_:function(n,t){var e=C(n,"a","notEqualStrict"),r=C(t,"b","notEqualStrict");return Le(e.shape,r.shape,"Error in notEqualStrict: "),e.notEqual(r)}});function Bl(n,t){for(var e=[],r=n;r<t;++r)e.push(r);return e}function Ll(n){for(var t=[],e=0;e<n.length;++e)for(var r=0;r<n[e].length;++r)t.push(n[e][r]);return t}var Lu=N({gather_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","gather"),o=C(t,"indices","gather","int32");e=rt(e,r.shape)[0];var i=function(a,s,u){for(var c=a.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(a.shape[d]),f*=a.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<a.rank;d++)l.push(a.shape[d]),h*=a.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(r,o,e);return P.runKernelFunc(function(a,s){var u=a.gather(r,o.flatten(),e);return s([o]),u},{x:r,indices:o},function(a,s){var u=s[0];return{x:function(){var c=r.shape,l=u.size,f=c.slice(0,e),h=f.length,d=c.slice(e,c.length).slice(1),p=d.length,v=Bl(0,h),g=Bl(h+1,h+1+p),m=Ll([f,[l],d]),x=a.reshape(m),b=u.reshape([l]),y=Ll([[h],v,g]),w=x.transpose(y),_=Id(w,b,r.shape[e]),S=Eu(y);return _=_.transpose(S)},indices:function(){return u}}},"Gather",{axis:e}).reshape(i.outputShape)}}),Id=N({unsortedSegmentSum_:function(n,t,e){var r=C(n,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return R($e(e),function(){return"numSegments must be of dtype int"}),P.runKernelFunc(function(i,a){var s=i.unsortedSegmentSum(r,o,e);return a([o]),s},{$x:r},function(i,a){var s=a[0];return{$x:function(){return function(u,c){for(var l=Bu(c,Fe(c)),f=Lu(u,l),h=Ed(c,re(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=Xt(h,p+1);h=ba(h,fo(f.shape,"bool"));var v=Fe(f);return Ar(h,f,v)}(i,s)}}})}}),i1=function(n,t,e){return ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,d,p,v;return se(this,function(g){switch(g.label){case 0:for(r=C(n,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),i=e??0,a=o.rank,s=r.shape,R(a>0,function(){return"mask cannot be scalar"}),Le(s.slice(i,i+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=i;c<i+a;c++)u*=s[c];return l=s.slice(0,i).concat([u],s.slice(i+a)),f=r.reshape(l),h=o.reshape([-1]),[4,bd(h)];case 1:return d=g.sent(),p=d.squeeze([1]),v=Lu(f,p,i),n!==r&&r.dispose(),t!==o&&o.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,v]}})})};function Rd(n,t,e,r,o,i,a){i===void 0&&(i="NHWC"),R(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var s=n,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,n[0],n[1],n[2]]),R(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),R(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),R(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=i==="NHWC"?s[3]:s[1],f=i==="NHWC"?u.shape[3]:u.shape[1];R(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),R(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),a!=null&&R($e(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var h=Au(i),d=Pr(s,e.shape,r,1,o,a,!1,h),p=P.runKernelFunc(function(v,g){var m=v.conv2dDerInput(u,e,d);return g([e,u]),m},{dy4D:u,filter:e},function(v,g){var m=g[0],x=g[1];return{dy4D:function(){return Jt(v,m,r,o,i,1,a)},filter:function(){return Wu(v,x,m.shape,r,o,i,a)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function us(n){var t=function(i){return typeof i=="number"?[i,i,i]:i.length===2?[i[0],i[1],1]:i}(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function Sd(n,t,e,r,o){R(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var i=n,a=t,s=!1;t.rank===4&&(s=!0,a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),i=[1,n[0],n[1],n[2],n[3]]);var u=i[4],c=a.shape[4];R(i.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+i.length+"."}),R(a.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+a.rank}),R(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),R(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),R(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=Yi(i,e.shape,r,1,o),f=P.runKernelFunc(function(h){return h.conv3dDerInput(a,e,l)},{dy5D:a});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var a1=N({conv1d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NWC"),i===void 0&&(i=1);var s=C(n,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),R(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),R(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),a!=null&&R($e(r),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."}),R(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),R(Pt(e,i),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+i+"'"}),R(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=Jt(h,f,[1,e],r,"NHWC",[1,i],a);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),Jt=N({conv2d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]);var s=C(n,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),R(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),R(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),a!=null&&R($e(r),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];R(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),R(Pt(e,i),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"});var h=Au(o),d=Pr(c.shape,u.shape,e,i,r,a,!1,h),p=[u,c],v=P.runKernelFunc(function(g,m){var x=g.conv2d(c,u,d);return m([u,c]),x},{x:c,filter:u},function(g,m){var x=m,b=x[0],y=x[1];return R(co(i),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"}),{x:function(){return kd(y.shape,g,b,e,r,o)},filter:function(){return Wu(y,g,b.shape,e,r,o)}}},"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),s1=N({conv3d_:function(n,t,e,r,o,i){o===void 0&&(o="NDHWC"),i===void 0&&(i=[1,1,1]);var a=C(n,"x","conv3d"),s=C(t,"filter","conv3d"),u=a,c=!1;a.rank===4&&(c=!0,u=a.as5D(1,a.shape[0],a.shape[1],a.shape[2],a.shape[3])),R(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),R(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),R(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),R(function(h,d){return us(h)||us(d)}(e,i),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),R(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Yi(u.shape,s.shape,e,i,r),f=P.runKernelFunc(function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(h,d){R(us(i),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"});var p=d[0],v=d[1];return{x:function(){return Sd(p.shape,h,v,e,r)},$filter:function(){return function(g,m,x,b,y){var w=g;g.rank===4&&(w=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3]));var _=m;_.rank===4&&(_=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3])),R(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),R(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),R(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),R(w.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+x[3]+"."}),R(_.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+x[4]+")."});var S=Yi(w.shape,x,b,1,y);return P.runKernelFunc(function(k){return k.conv3dDerFilter(w,_,S)},{x5D:w,dy5D:_})}(p,h,v.shape,e,r)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Wu=N({conv2dDerFilter_:function(n,t,e,r,o,i,a){i===void 0&&(i="NHWC");var s=n;n.rank===3&&(s=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),R(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),R(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),R(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=i==="NHWC"?s.shape[3]:s.shape[1],l=i==="NHWC"?u.shape[3]:u.shape[1];R(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),R(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),a!=null&&R($e(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var f=Au(i),h=Pr(s.shape,e,r,1,o,a,!1,f);return P.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),kd=N({conv2dDerInput_:Rd}),wa=N({depthwiseConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]);var s=C(n,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),R(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),R(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),R(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),i==null&&(i=[1,1]),R(Pt(e,i),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&R($e(r),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=Pr(c.shape,u.shape,e,i,r,a,!0),h=[c,u],d=P.runKernelFunc(function(p,v){var g=p.depthwiseConv2D(c,u,f);return v([c,u]),g},{x:c,filter:u},function(p,v){R(co(i),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+i+"'"});var g=v[0],m=v[1];return{x:function(){return Ad(g.shape,p,m,f)},filter:function(){return Dd(g,p,m.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),Ad=N({depthwiseConv2dDerInput_:function(n,t,e,r){var o=t,i=!1;t.rank===3&&(i=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=P.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,r)},{dy4D:o});return i?a.as3D(a.shape[1],a.shape[2],a.shape[3]):a}}),Dd=N({depthwiseConv2dDerFilter_:function(n,t,e,r){var o=n;n.rank===3&&(o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t;return i.rank===3&&(i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),P.runKernelFunc(function(a){return a.depthwiseConv2DDerFilter(o,i,r)},{x4D:o,dy4D:i})}}),Uu=N({separableConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC");var s=C(n,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");R(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),R(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),R(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),R(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),R(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],d=u.shape[3];R(c.shape[2]===h*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."});var p=wa(l,u,r,o,a,i),v=Jt(p,c,1,"valid",a);return f?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),u1=N({conv2dTranspose_:function(n,t,e,r,o,i){return Rd(e,C(n,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),r,o,"NHWC",i)}}),c1=N({conv3dTranspose_:function(n,t,e,r,o){return Sd(e,C(n,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),r,o)}}),_a=N({matMul_:function(n,t,e,r){var o;e===void 0&&(e=!1),r===void 0&&(r=!1);var i=C(n,"a","matMul"),a=C(t,"b","matMul");o=Ke(i,a),i=o[0],a=o[1];var s=e?i.shape[i.rank-2]:i.shape[i.rank-1],u=r?a.shape[a.rank-1]:a.shape[a.rank-2],c=e?i.shape[i.rank-1]:i.shape[i.rank-2],l=r?a.shape[a.rank-2]:a.shape[a.rank-1],f=i.shape.slice(0,-2),h=a.shape.slice(0,-2),d=le(f),p=le(h);R(i.rank>=2&&a.rank>=2&&i.rank===a.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+i.rank+" and "+a.rank+"."}),R(it(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+i.shape+" and "+a.shape+" must match."}),R(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+i.shape+" and "+a.shape+" and transposeA="+e+" and transposeB="+r+" must match."});var v=i.shape.slice(0,-2).concat([c,l]),g=e?i.as3D(d,s,c):i.as3D(d,c,s),m=r?a.as3D(p,l,u):a.as3D(p,u,l),x={transposeA:e,transposeB:r};return P.runKernelFunc(function(b,y){var w=b.batchMatMul(g,m,e,r);return y([g,m]),w},{a:g,b:m},function(b,y){var w=y,_=w[0],S=w[1];return e||r?!e&&r?{a:function(){return b.matMul(S,!1,!1)},b:function(){return b.matMul(_,!0,!1)}}:e&&!r?{a:function(){return S.matMul(b,!1,!0)},b:function(){return _.matMul(b,!1,!1)}}:{a:function(){return S.matMul(b,!0,!0)},b:function(){return b.matMul(_,!0,!0)}}:{a:function(){return b.matMul(S,!1,!0)},b:function(){return _.matMul(b,!0,!1)}}},"BatchMatMul",x).reshape(v)}}),l1=N({dot_:function(n,t){var e=C(n,"t1","dot"),r=C(t,"t2","dot");R(!(e.rank!==1&&e.rank!==2||r.rank!==1&&r.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+r.rank+"."});var o=e.rank===1?e.size:e.shape[1],i=r.rank===1?r.size:r.shape[0];return R(o===i,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+i+"."}),e.rank===1&&r.rank===1?e.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():e.rank===1&&r.rank===2?e.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():e.rank===2&&r.rank===1?e.matMul(r.as2D(-1,1)).as1D():e.matMul(r.as2D(r.shape[0],r.shape[1]))}}),f1=N({outerProduct_:function(n,t){var e=C(n,"v1","outerProduct"),r=C(t,"v2","outerProduct");return R(e.rank===1&&r.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+r.rank+"."}),e.as2D(-1,1).matMul(r.as2D(1,-1))}}),ei=N({reverse_:function(n,t){var e=C(n,"x","reverse");if(e.rank===0)return e.clone();var r=rt(t,e.shape);return P.runKernelFunc(function(o){return o.reverse(e,r)},{$x:e},function(o){return{$x:function(){return o.reverse(r)}}}).reshapeAs(e)}}),h1=N({reverse1d_:function(n){var t=C(n,"x","reverse");return R(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),ei(t,0)}}),d1=N({reverse2d_:function(n,t){var e=C(n,"x","reverse");return R(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),ei(e,t)}}),p1=N({reverse3d_:function(n,t){var e=C(n,"x","reverse");return R(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),ei(e,t)}}),v1=N({reverse4d_:function(n,t){var e=C(n,"x","reverse");return R(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),ei(e,t)}});function Td(n,t,e,r,o,i){var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),R(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),R(Pt(e,r),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"}),i!=null&&R($e(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=Ho(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&it(c.inShape,c.outShape))return a.clone();var l=[s],f=P.runKernelFunc(function(h,d){var p=h.maxPool(s,c);return d([s,p]),p},{x:s},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(g,m,x,b,y,w,_,S){var k=C(g,"dy","maxPoolBackprop"),E=C(m,"input","maxPoolBackprop"),I=C(x,"output","maxPoolBackprop");R(E.rank===k.rank,function(){return"Rank of input ("+E.rank+") does not match rank of dy ("+k.rank+")"}),R(Pt(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),R(k.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+k.rank+"."}),R(E.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+E.rank+"."});var F=Ho(E.shape,b,y,w,_,S);return P.runKernelFunc(function(A){return A.maxPoolBackprop(k,E,I,F)},{$dy:k,$input:E})}(h,p,v,t,e,r,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Nd(n,t,e,r,o,i){var a=C(n,"x","avgPool","float32");R(Pt(e,r),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"});var s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),R(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),i!=null&&R($e(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=Ho(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&it(c.inShape,c.outShape))return a.clone();var l=P.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,d,p,v,g,m){var x=C(h,"dy","avgPoolBackprop"),b=C(d,"input","avgPoolBackprop");R(b.rank===x.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+x.rank+")"}),R(Pt(v,g),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"});var y=b,w=x,_=!1;b.rank===3&&(_=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),R(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),R(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var S=Ho(y.shape,p,v,g,m),k=P.runKernelFunc(function(E){return E.avgPoolBackprop(w,y,S)},{dy4D:w,input4D:y});return _?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}(f,s,t,e,r,o)}}},"AvgPool",c);return l=l.cast(a.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var ot=N({maxPool_:function(n,t,e,r,o){return Td(n,t,e,1,r,o)}}),ti=N({avgPool_:function(n,t,e,r,o){return Nd(n,t,e,1,r,o)}}),g1=N({pool_:function(n,t,e,r,o,i){o==null&&(o=[1,1]),i==null&&(i=1),r===0&&(r="valid");var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),R(Pt(i,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+i+" and dilations '"+o+"'"});var c,l=Ho(s.shape,t,i,o,r),f=[l.dilationHeight,l.dilationWidth];c=r==="same"?function(y,w){var _=y.map(function(E,I){return E+(E-1)*(w[I]-1)}).map(function(E){return E-1}),S=_.map(function(E){return Math.floor(E/2)}),k=_.map(function(E,I){return E-S[I]});return _.map(function(E,I){return[S[I],k[I]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=function(y,w,_){var S=_.map(function(W){return W[0]}),k=_.map(function(W){return W[1]}),E=y.concat(S,k),I=w.map(function(W,z){return(W-E[z]%W)%W}),F=k.map(function(W,z){return W+I[z]}),A=w.map(function(W,z){return[S[z],F[z]]}),B=w.map(function(W,z){return[0,I[z]]});return[A,B]}([l.inHeight,l.inWidth],f,c),p=d[0],v=d[1],g=h?r:"valid",m=h?s:Lh(s,f,p),x=(e==="avg"?function(){return Nd(m,t,i,1,g)}:function(){return Td(m,t,i,1,g)})(),b=h?x:Mh(x,f,v);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),m1=N({maxPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),R(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),R(i==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),R(Pt(e,a),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&R($e(r),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=$i(u.shape,t,e,a,r,o,i),f=P.runKernelFunc(function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p},{x:u},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(g,m,x,b,y,w,_,S){var k=C(g,"dy","maxPool3dBackprop"),E=C(m,"input","maxPool3dBackprop"),I=C(x,"output","maxPool3dBackprop"),F=k,A=E,B=I,W=!1;E.rank===4&&(W=!0,F=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),A=E.as5D(1,E.shape[0],E.shape[1],E.shape[2],E.shape[3]),B=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3])),R(F.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+F.rank+"."}),R(A.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),R(B.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+B.rank+"."}),w==null&&(w=[1,1,1]),R(Pt(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),S!=null&&R($e(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+_+"."});var z=$i(A.shape,b,y,w,_,S),H=P.runKernelFunc(function(V){return V.maxPool3dBackprop(F,A,B,z)},{dy5D:F,input5D:A});return W?H.as4D(H.shape[1],H.shape[2],H.shape[3],H.shape[4]):H}(h,p,v,t,e,a,r,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),y1=N({avgPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),R(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),R(i==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),R(Pt(e,a),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&R($e(r),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=$i(u.shape,t,e,a,r,o,i),f=P.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(d,p,v,g,m,x,b){var y=C(d,"dy","avgPool3dBackprop"),w=C(p,"input","avgPool3dBackprop"),_=y,S=w,k=!1;w.rank===4&&(k=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),S=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),R(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),R(S.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+S.rank+"."}),m==null&&(m=[1,1,1]),R(Pt(g,m),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+g+" and dilations '"+m+"'"}),b!=null&&R($e(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+x+"."});var E=$i(S.shape,v,g,m,x,b),I=P.runKernelFunc(function(F){return F.avgPool3dBackprop(_,S,E)},{dy5D:_,input5D:S});return k?I.as4D(I.shape[1],I.shape[2],I.shape[3],I.shape[4]):I}(h,u,t,e,a,r,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),_n=N({slice_:function(n,t,e){var r,o,i=C(n,"x","slice");if(i.rank===0)throw new Error("Slicing scalar is not possible");(r=typeof t=="number"?[t].concat(new Array(i.rank-1).fill(0)):t.length<i.rank?t.concat(new Array(i.rank-t.length).fill(0)):t.slice()).forEach(function(u){R(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(i.rank).fill(-1):typeof e=="number"?[e].concat(new Array(i.rank-1).fill(-1)):e.length<i.rank?e.concat(new Array(i.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(R(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),i.shape[c]-r[c])}),qy(i,r,o);var a=i.shape,s={begin:r,size:o};return P.runKernelFunc(function(u){return u.slice(i,r,o)},{x:i},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([r[l],a[l]-r[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),x1=N({slice1d_:function(n,t,e){var r=C(n,"x","slice1d");return R(r.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"}),_n(r,[t],[e])}}),b1=N({slice2d_:function(n,t,e){var r=C(n,"x","slice2d");return R(r.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"}),_n(r,t,e)}}),Fd=N({slice3d_:function(n,t,e){var r=C(n,"x","slice3d");return R(r.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"}),_n(r,t,e)}}),w1=N({slice4d_:function(n,t,e){var r=C(n,"x","slice4d");return R(r.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"}),_n(r,t,e)}});function Pd(n,t,e,r,o){return t.rank<e.rank&&(t=t.reshape(Ft(t.shape,r))),n.rank<e.rank&&(n=n.reshape(Ft(n.shape,r))),{x:function(){var i=n.mul(e.equal(t).cast(n.dtype));return o==null?i:i.transpose(o)}}}var _1=N({all_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","all","bool"),o=rt(t,r.shape),i=o,a=En(i,r.rank);a!=null&&(r=r.transpose(a),i=In(i.length,r.rank));var s=P.runKernelFunc(function(c){return c.all(r,i)},{$x:r});if(e){var u=Ft(s.shape,o);return s.reshape(u)}return s}}),C1=N({any_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","any","bool"),o=rt(t,r.shape),i=o,a=En(i,r.rank);a!=null&&(r=r.transpose(a),i=In(i.length,r.rank));var s=P.runKernelFunc(function(c){return c.any(r,i)},{$x:r});if(e){var u=Ft(s.shape,o);return s.reshape(u)}return s}}),E1=N({argMax_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMax");t==null&&(t=0);var r=rt(t,e.shape),o=En(r,e.rank);o!=null&&(e=e.transpose(o),r=In(r.length,e.rank));var i={axis:r[0]},a=[e];return P.runKernelFunc(function(s,u){var c=s.argMax(e,r[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return Fe(c)}}},"ArgMax",i,a)}}),I1=N({argMin_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMin");t==null&&(t=0);var r=rt(t,e.shape),o=En(r,e.rank);return o!=null&&(e=e.transpose(o),r=In(r.length,e.rank)),P.runKernelFunc(function(i,a){var s=i.argMin(e,r[0]);return a([e]),s},{$x:e},function(i,a){var s=a[0];return{$x:function(){return Fe(s)}}})}}),R1=N({logSumExp_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","logSumExp"),o=rt(t,r.shape),i=r.max(o,!0),a=r.sub(i).exp().sum(o).log(),s=i.reshape(a.shape).add(a);if(e){var u=Ft(s.shape,o);return s.reshape(u)}return s}}),Ca=N({max_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","max"),o=r,i=rt(t,r.shape),a=i,s=En(a,r.rank);s!=null&&(r=r.transpose(s),a=In(a.length,r.rank));var u=[r],c=P.runKernelFunc(function(f,h){var d=f.max(r,a);return h([o,d]),d},{x:r},function(f,h){return Pd(f,h[1],h[0],i,s)},"Max",{axes:a},u,[!0]);if(e){var l=Ft(c.shape,i);c=c.reshape(l)}return c}}),S1=N({mean_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","mean"),o=rt(t,r.shape),i=le(pt(r.shape,o)[1]);return ya(function(a){var s=re(i);return{value:(s.dtype===a.dtype?a:a.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=a.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(fo(a.shape,"float32")).div(i)}}})(r)}}),k1=N({min_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","min"),o=r,i=rt(t,r.shape),a=i,s=En(a,r.rank);s!=null&&(r=r.transpose(s),a=In(a.length,r.rank));var u=[r],c=P.runKernelFunc(function(f,h){var d=f.min(r,a);return h([o,d]),d},{x:r},function(f,h){return Pd(f,h[1],h[0],i,s)},"Min",{axes:a},u,[!0]);if(e){var l=Ft(c.shape,i);c=c.reshape(l)}return c}}),A1=N({moments_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=rt(t,(n=C(n,"x","moments")).shape),o=n.mean(r,e),i=o.shape;e||(i=Ft(o.shape,r));var a=n.toFloat().sub(o.reshape(i)).square();return{mean:o,variance:a.mean(r,e)}}}),Md=N({sum_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","sum");r.dtype==="bool"&&(r=r.toInt());var o=rt(t,r.shape);return ya(function(i){var a=En(o,i.rank),s=o,u=i;a!=null&&(u=i.transpose(a),s=In(s.length,i.rank));var c=function(d){var p=i.shape.slice();return o.forEach(function(v){p[v]=1}),d.reshape(p).mul(fo(i.shape,"float32"))},l={axes:s},f=P.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var h=Ft(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}})(r)}}),D1=N({prod_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","prod");r.dtype==="bool"&&(r=r.toInt());var o=rt(t,r.shape),i=En(o,r.rank),a=o,s=r;i!=null&&(s=r.transpose(i),a=In(a.length,r.rank));var u=P.runKernelFunc(function(l){return l.prod(s,a)},{permutedX:s});if(e){var c=Ft(u.shape,o);u=u.reshape(c)}return u}}),Od=N({elu_:function(n){var t=C(n,"x","elu");return P.runKernelFunc(function(e,r){var o=e.elu(t);return r([o]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return P.runKernelFunc(function(i){return i.eluDer(e,o)},{dy:e,y:o})}}})}}),T1=N({leakyRelu_:function(n,t){t===void 0&&(t=.2);var e=C(n,"x","leakyRelu");return Bu(re(t).mul(e),e)}}),Bd=N({prelu_:function(n,t){var e=C(n,"x","prelu"),r=C(t,"alpha","prelu");return P.runKernelFunc(function(o,i){var a=o.prelu(e,r);return i([e,r]),a},{x:e,alpha:r},function(o,i){var a=i[0],s=i[1],u=a.greater(0);return{x:function(){return Ar(u,o,o.mul(s))},alpha:function(){var c=Ar(u,Fe(o),o.mul(a)),l=tt(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),qe=N({relu_:function(n){var t=C(n,"x","relu");return t.dtype==="bool"?t.toInt():P.runKernelFunc(function(e,r){var o=e.relu(t);return r([t]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),Ld=N({relu6_:function(n){var t=C(n,"x","relu6");return t.dtype==="bool"?t.toInt():P.runKernelFunc(function(e,r){var o=e.relu6(t);return r([t]),o},{x:t},function(e,r){var o=r[0],i=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(i.toFloat())}}},"Relu6")}}),N1=N({selu_:function(n){var t=C(n,"x","selu");return P.runKernelFunc(function(e,r){var o=e.selu(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){var i=o.greater(re(0)),a=re(Pu),s=re(Mu),u=e.mul(s),c=e.mul(a).mul(o.toFloat().exp());return Ar(i,u,c)}}})}}),ur=N({transpose_:function(n,t){var e=C(n,"x","transpose");if(t==null&&(t=e.shape.map(function(o,i){return i}).reverse()),R(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){R(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var r={perm:t};return P.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var i=Eu(t);return{x:function(){return o.transpose(i)}}},"Transpose",r)}}),F1=N({localResponseNormalization_:function(n,t,e,r,o){t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5);var i=C(n,"x","localResponseNormalization");R(i.rank===4||i.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+i.rank+"."}),R($e(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var a=i,s=!1;i.rank===3&&(s=!0,a=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));var u=P.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(a,t,e,r,o);return l([a,f]),f},{x4D:a},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return P.runKernelFunc(function(d){return d.LRNGrad(c,f,h,t,e,r,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Wd=N({norm_:function(n,t,e,r){t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(re(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(n=C(n,"x","norm"),t,e),i=o.shape;if(r){var a=rt(e,n.shape);i=Ft(o.shape,a)}return o.reshape(i)}}),P1=N({basicLSTMCell_:function(n,t,e,r,o,i){var a=C(n,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(r,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),f=C(i,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,v=[d,p],g=h.slice([0,0],v),m=h.slice([0,p],v),x=h.slice([0,2*p],v),b=h.slice([0,3*p],v),y=g.sigmoid().mulStrict(m.tanh()).addStrict(l.mulStrict(a.add(x).sigmoid())),w=y.tanh().mulStrict(b.sigmoid());return[y,w]}}),M1=N({multiRNNCell_:function(n,t,e,r){for(var o=C(t,"data","multiRNNCell"),i=Hi(e,"c","multiRNNCell"),a=Hi(r,"h","multiRNNCell"),s=o,u=[],c=0;c<n.length;c++){var l=n[c](s,i[c],a[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),O1=N({movingAverage_:function(n,t,e,r,o){o===void 0&&(o=!0);var i=C(n,"v","movingAverage"),a=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");Fm(i,a),R(it(i.shape,a.shape),function(){return"Shape mismatch in v and x"});var u=re(1),c=u.sub(s),l=a.sub(i).mul(c);if(o){R(r!=null,function(){return"When using zeroDebias: true, step is required."});var f=C(r,"step","movingAverage");l=l.div(u.sub(Zi(s,f)))}return i.add(l)}}),B1=N({stridedSlice_:function(n,t,e,r,o,i,a,s,u){if(o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),r==null&&(r=new Array(t.length)),a!==0)throw new Error("ellipsis mask is not yet supported");var c=C(n,"x","stridedSlice"),l=ml(s),f=c.shape.slice();l.forEach(function(g){t[g]=0,e[g]=1,f.splice(g,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=Ky(o,t,r,c.shape,h),e[h]=Xy(i,e,r,c.shape,h),r[h]=r[h]||1;var d=ml(u);d.forEach(function(g){e[g]=t[g]+1,r[g]=1});var p=ku(t,e,r),v=p.filter(function(g,m){return d.indexOf(m)===-1});return r.every(function(g){return g===1})?_n(c,t,p).reshape(v):P.runKernelFunc(function(g){return g.stridedSlice(c,t,e,r)},{$x:c}).reshape(v)}}),L1=N({topk_:function(n,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var r=C(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var i=P.runKernelFunc(function(a){return a.topk(r,t,e)},{$x:r});return{values:i[0],indices:i[1]}}}),W1=N({scatterND_:function(n,t,e){var r=C(n,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return jy(o,r,e),P.runKernelFunc(function(i){return i.scatterND(r,o,e)},{indices:r,updates:o},null,"ScatterNd",{shape:e})}}),Vu=N({fft_:function(n){R(n.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return P.runKernelFunc(function(o){return o.fft(r)},{input:n}).reshape(n.shape)}}),ea=N({ifft_:function(n){R(n.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return P.runKernelFunc(function(o){return o.ifft(r)},{input:n}).reshape(n.shape)}}),zu=N({rfft_:function(n,t){R(n.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+n.dtype});var e,r=n.shape[n.shape.length-1],o=n.size/r;if(t!=null&&t<r){var i=n.shape.map(function(m){return 0}),a=n.shape.map(function(m){return m});a[n.shape.length-1]=t,e=n.slice(i,a),r=t}else if(t!=null&&t>r){var s=n.shape.map(function(m){return m});s[n.shape.length-1]=t-r,e=n.concat(He(s),n.shape.length-1),r=t}else e=n;var u=e.zerosLike(),c=ct(e,u).as2D(o,r),l=Vu(c),f=Math.floor(r/2)+1,h=$t(l),d=gn(l),p=h.split([f,r-f],h.shape.length-1),v=d.split([f,r-f],d.shape.length-1),g=e.shape.slice();return g[e.shape.length-1]=f,ct(p[0],v[0]).reshape(g)}}),Ud=N({irfft_:function(n){var t=n.shape[n.shape.length-1],e=n.size/t;if(t<=2){var r=n.as2D(e,t),o=ea(r);return $t(o)}var i=[e,2*(t-1)],a=$t(n).as2D(e,t),s=gn(n).as2D(e,t),u=a.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(re(-1)),l=a.concat(u,1),f=s.concat(c,1);return r=ct(l,f).as2D(i[0],i[1]),o=ea(r),$t(o)}}),U1=Object.freeze({fft:Vu,ifft:ea,rfft:zu,irfft:Ud}),V1=N({sparseToDense_:function(n,t,e,r){r===void 0&&(r=0);var o=C(n,"sparseIndices","sparseToDense","int32"),i=C(t,"sparseValues","sparseToDense"),a=C(r,"defaultValue","sparseToDense",i.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,i,e,a),P.runKernelFunc(function(s){return s.sparseToDense(o,i,e,a)},{$sparseIndices:o,$sparseValues:i,$defaultValue:a})}}),z1=N({gatherND_:function(n,t){var e=C(t,"indices","gatherND","int32"),r=C(n,"x","gatherND");return P.runKernelFunc(function(o){return o.gatherND(r,e)},{x:r,indices:e},null,"GatherNd")}}),H1=N({diag_:function(n){var t=C(n,"x","diag").flatten(),e=n.shape.concat(n.shape);return P.runKernelFunc(function(r){return r.diag(t)},{$x:t}).reshape(e)}}),G1=N({dropout_:function(n,t,e,r){var o=C(n,"x","dropout");if(R(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),R(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return n instanceof je?o.clone():o;var i=function(u,c){if(c==null)return u.shape.slice();if(it(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),a=1-t,s=Bh(i,0,1,"float32",r).add(a).floor().div(a);return o.mul(s)}});function Vd(n,t,e){for(var r=1-n%2,o=new Float32Array(n),i=0;i<n;++i){var a=2*Math.PI*i/(n+r-1);o[i]=t-e*Math.cos(a)}return Ye(o,"float32")}var Hu=N({hannWindow_:function(n){return Vd(n,.5,.5)}}),zd=N({hammingWindow_:function(n){return Vd(n,.54,.46)}}),Gu=N({frame_:function(n,t,e,r,o){r===void 0&&(r=!1),o===void 0&&(o=0);for(var i=0,a=[];i+t<=n.size;)a.push(_n(n,i,t)),i+=e;if(r)for(;i<n.size;){var s=i+t-n.size,u=Ze([_n(n,i,t-s),wn([s],o)]);a.push(u),i+=e}return a.length===0?rr([],[0,t]):Ze(a).as2D(a.length,t)}}),Hd=N({stft_:function(n,t,e,r,o){var i;o===void 0&&(o=Hu),r==null&&(i=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)))));for(var a=Gu(n,t,e),s=wt(a,o(t)),u=[],c=0;c<a.shape[0];c++)u.push(zu(s.slice([c,0],[1,t]),r));return Ze(u)}}),j1=Object.freeze({hannWindow:Hu,hammingWindow:zd,frame:Gu,stft:Hd}),xt,q1=function(n,t,e){return e===void 0&&(e=1),ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,d,p,v,g;return se(this,function(m){switch(m.label){case 0:return r=C(n,"predictions","inTopK"),o=C(t,"targets","inTopK"),R(r.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank}),R(r.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+r.rank+" and targets rank "+o.rank}),Le(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=r.shape[r.shape.length-1],R(e>0&&e<=i,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+e}),[4,r.data()];case 1:return a=m.sent(),[4,o.data()];case 2:for(s=m.sent(),u=[a.length/i,i],l=u[1],f=Uo("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=a.subarray(d,d+l),v=[],g=0;g<p.length;g++)v.push({value:p[g],index:g});for(v.sort(function(x,b){return b.value-x.value}),f[h]=0,g=0;g<e;g++)if(v[g].index===s[h]){f[h]=1;break}}return n!==r&&r.dispose(),t!==o&&o.dispose(),[2,ft(f,o.shape,"bool")]}})})};(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(xt||(xt={}));var K1=N({absoluteDifference_:function(n,t,e,r){r===void 0&&(r=xt.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","absoluteDifference"),i=C(t,"predictions","absoluteDifference"),a=null;e!=null&&(a=C(e,"weights","absoluteDifference")),Le(o.shape,i.shape,"Error in absoluteDifference: ");var s=o.sub(i).abs();return zn(s,a,r)}}),zn=N({computeWeightedLoss_:function(n,t,e){e===void 0&&(e=xt.SUM_BY_NONZERO_WEIGHTS);var r=C(n,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var i=o==null?r:r.mul(o);if(e===xt.NONE)return i;if(e===xt.SUM)return i.sum();if(e===xt.MEAN){if(o==null)return i.mean();var a=r.size/o.size,s=i.sum().div(o.sum());return a>1?s.div(re(a)):s}if(e===xt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return i.sum().div(re(r.size));var u=o.mul(fo(r.shape)).notEqual(re(0)).sum().toFloat();return i.sum().div(u)}throw Error("Unknown reduction: "+e)}}),X1=N({cosineDistance_:function(n,t,e,r,o){o===void 0&&(o=xt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","cosineDistance"),a=C(t,"predictions","cosineDistance"),s=null;r!=null&&(s=C(r,"weights","cosineDistance")),Le(i.shape,a.shape,"Error in cosineDistance: ");var u=re(1).sub(i.mul(a).sum(e,!0));return zn(u,s,o)}}),$1=N({hingeLoss_:function(n,t,e,r){r===void 0&&(r=xt.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","hingeLoss"),i=C(t,"predictions","hingeLoss"),a=null;e!=null&&(a=C(e,"weights","hingeLoss")),Le(o.shape,i.shape,"Error in hingeLoss: ");var s=re(1);o=re(2).mul(o).sub(s);var u=s.sub(o.mul(i)).relu();return zn(u,a,r)}}),Y1=N({huberLoss_:function(n,t,e,r,o){r===void 0&&(r=1),o===void 0&&(o=xt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","huberLoss"),a=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),Le(i.shape,a.shape,"Error in huberLoss: ");var u=re(r),c=a.sub(i).abs(),l=_d(c,u),f=c.sub(l),h=re(.5).mul(l.square()).add(u.mul(f));return zn(h,s,o)}}),J1=N({logLoss_:function(n,t,e,r,o){r===void 0&&(r=1e-7),o===void 0&&(o=xt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","logLoss"),a=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),Le(i.shape,a.shape,"Error in logLoss: ");var u=re(1),c=re(r),l=i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));return zn(l,s,o)}}),Q1=N({meanSquaredError_:function(n,t,e,r){r===void 0&&(r=xt.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","meanSquaredError"),i=C(t,"predictions","meanSquaredError"),a=null;e!=null&&(a=C(e,"weights","meanSquaredError")),Le(o.shape,i.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(i);return zn(s,a,r)}}),Z1=N({sigmoidCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=xt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"multiClassLabels","sigmoidCrossEntropy"),a=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),Le(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=re(r),c=re(1),l=re(.5);i=i.mul(c.sub(u)).add(l.mul(u))}var f=function(h,d){var p=C(h,"labels","sigmoidCrossEntropyWithLogits"),v=C(d,"logits","sigmoidCrossEntropyWithLogits");Le(p.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var g=v.relu(),m=v.mul(p),x=v.abs().neg().exp().log1p();return g.sub(m).add(x)}(i,a);return zn(f,s,o)}}),ew=N({softmaxCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=xt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"onehotLabels","softmaxCrossEntropy"),a=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),Le(i.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){var u=re(r),c=re(1),l=re(i.shape[1]);i=i.mul(c.sub(u)).add(u.div(l))}var f=function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return ya(function(v,g,m){var x=g.logSumExp([p],!0),b=g.toFloat().sub(x);return m([v,b]),{value:b.mul(v).neg().sum([p]),gradFunc:function(y,w){var _=w[0],S=w[1],k=Ft(y.shape,[p]);return[y.reshape(k).mul(_.toFloat().sub(S.exp())),y.reshape(k).mul(S.exp().sub(_.toFloat()))]}}})(h,d)}(i,a);return zn(f,s,o)}}),tw=Object.freeze({get Reduction(){return xt},absoluteDifference:K1,computeWeightedLoss:zn,cosineDistance:X1,hingeLoss:$1,huberLoss:Y1,logLoss:J1,meanSquaredError:Q1,sigmoidCrossEntropy:Z1,softmaxCrossEntropy:ew});function Wl(n,t){return t===void 0&&(t=!1),P.tidy(function(){if(n.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+n.shape.length+"D Tensor.");for(var e=n.shape[0],r=n.shape[1],o=Oh(e),i=n.clone(),a=rr([[1]],[1,1]),s=a.clone(),u=e>=r?r:e,c=function(f){var h,d=i,p=s,v=o;h=P.tidy(function(){var g=i.slice([f,f],[e-f,1]),m=g.norm(),x=i.slice([f,f],[1,1]),b=rr([[-1]]).where(x.greater(0),rr([[1]])),y=x.sub(b.mul(m)),w=g.div(y);s=w.shape[0]===1?a.clone():a.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var _=b.matMul(y).div(m).neg(),S=i.slice([f,0],[e-f,r]),k=_.mul(s);if(f===0)i=S.sub(k.matMul(s.transpose().matMul(S)));else{var E=S.sub(k.matMul(s.transpose().matMul(S)));i=i.slice([0,0],[f,r]).concat(E,0)}var I=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=I.sub(I.matMul(s).matMul(k.transpose()));else{var F=I.sub(I.matMul(s).matMul(k.transpose()));o=o.slice([0,0],[e,f]).concat(F,1)}return[s,i,o]}),s=h[0],i=h[1],o=h[2],Nt([d,p,v])},l=0;l<u;++l)c(l);return!t&&e>r&&(o=o.slice([0,0],[e,r]),i=i.slice([0,0],[r,r])),[o,i]})}var nw=N({bandPart_:function(n,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var r=C(n,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,i=r.shape.slice(-2),a=i[0],s=i[1];if(!(t<=a))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+a+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=a),e<0&&(e=s);var u=Gi(0,a,1,"int32").reshape([-1,1]),c=Gi(0,s,1,"int32"),l=nt(u,c),f=ba(l.lessEqual(re(+t,"int32")),l.greaterEqual(re(-e,"int32"))),h=He([a,s],r.dtype);return Ht(et(r.reshape([-1,a,s])).map(function(d){return Ar(f,d,h)})).reshape(o)}}),rw=N({gramSchmidt_:function(n){var t;if(Array.isArray(n)){t=!1,R(n!=null&&n.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=n[0].shape[0],r=function(u){R(n[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+n[u].shape[0]+" vs. "+e+")"})},o=1;o<n.length;++o)r(o)}else t=!0,n=Ru(n,n.shape[0],0).map(function(u){return Wh(u,[0])});R(n.length<=n[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+n.length+") exceeds number of dimensions ("+n[0].shape[0]+")."});var i=[],a=n,s=function(u){i.push(P.tidy(function(){var c=a[u];if(u>0)for(var l=0;l<u;++l){var f=Md(i[l].mulStrict(c)).mul(i[l]);c=c.sub(f)}return c.div(Wd(c,"euclidean"))}))};for(o=0;o<n.length;++o)s(o);return t?Ht(i,0):i}}),ow=N({qr_:function(n,t){if(t===void 0&&(t=!1),n.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+n.rank);if(n.rank===2)return Wl(n,t);var e=n.shape.slice(0,n.shape.length-2).reduce(function(a,s){return a*s}),r=et(n.reshape([e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],i=[];return r.forEach(function(a){var s=Wl(a,t),u=s[0],c=s[1];o.push(u),i.push(c)}),[Ht(o,0).reshape(n.shape),Ht(i,0).reshape(n.shape)]}}),iw=Object.freeze({bandPart:nw,gramSchmidt:rw,qr:ow});function Ea(n,t,e,r,o,i){r==null&&(r=.5),o==null&&(o=Number.NEGATIVE_INFINITY),i==null&&(i=0);var a=n.shape[0];return e=Math.min(e,a),R(0<=r&&r<=1,function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"}),R(n.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+n.rank+"'"}),R(n.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+n.shape[1]}),R(t.rank===1,function(){return"scores must be a 1D tensor"}),R(t.shape[0]===a,function(){return"scores has incompatible shape with boxes. Expected "+a+", but was "+t.shape[0]}),R(0<=i&&i<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+i+"'"}),{maxOutputSize:e,iouThreshold:r,scoreThreshold:o,softNmsSigma:i}}var aw=N({resizeBilinear_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeBilinear");R(r.rank===3||r.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."}),R(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=P.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,a,s,e)},{x:o},function(c,l){return{x:function(){return P.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:a,newWidth:s});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),sw=N({resizeNearestNeighbor_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeNearestNeighbor");R(r.rank===3||r.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."}),R(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),R(r.dtype==="float32"||r.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=P.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,a,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return P.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),uw=N({nonMaxSuppression_:function(n,t,e,r,o){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var i=C(n,"boxes","nonMaxSuppression"),a=C(t,"scores","nonMaxSuppression"),s=Ea(i,a,e,r,o);e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:r,scoreThreshold:o};return P.runKernelFunc(function(c){return c.nonMaxSuppression(i,a,e,r,o)},{boxes:i,scores:a},null,"NonMaxSuppressionV3",u)}}),cw=function(n,t,e,r,o){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),ae(this,void 0,void 0,function(){var i,a,s,u,c,l,f;return se(this,function(h){switch(h.label){case 0:return i=C(n,"boxes","nonMaxSuppressionAsync"),a=C(t,"scores","nonMaxSuppressionAsync"),s=Ea(i,a,e,r,o),e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([i.data(),a.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=Du(c,l,e,r,o),i!==n&&i.dispose(),a!==t&&a.dispose(),[2,f]}})})},lw=N({nonMaxSuppressionWithScore_:function(n,t,e,r,o,i){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0);var a=C(n,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=Ea(a,s,e,r,o,i),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:i=u.softNmsSigma},l=P.runKernel("NonMaxSuppressionV5",{boxes:a,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),fw=function(n,t,e,r,o,i){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0),ae(this,void 0,void 0,function(){var a,s,u,c,l,f,h;return se(this,function(d){switch(d.label){case 0:return a=C(n,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=Ea(a,s,e,r,o,i),e=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,i=u.softNmsSigma,[4,Promise.all([a.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=Tu(l,f,e,r,o,i),a!==n&&a.dispose(),s!==t&&s.dispose(),[2,h]}})})},hw=N({cropAndResize_:function(n,t,e,r,o,i){var a=C(n,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",i=i||0;var c=s.shape[0];return R(a.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+a.rank+"."}),R(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),R(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),R(r.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."}),R(r[0]>=1&&r[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+r}),R(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),P.runKernelFunc(function(l,f){return l.cropAndResize(a,s,u,r,o,i)},{images:a,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:i,cropSize:r})}}),ju=Object.freeze({resizeBilinear:aw,resizeNearestNeighbor:sw,nonMaxSuppression:uw,nonMaxSuppressionAsync:cw,nonMaxSuppressionWithScore:lw,nonMaxSuppressionWithScoreAsync:fw,cropAndResize:hw}),qu=function(n,t){return!(n>0)||t==="linear"},Ku=function(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return n.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Xu=function(n,t){var e=t,r=tt(n.shape,t.shape);return r.length>0&&(e=e.sum(r)),e.reshape(n.shape)},$u=function(n,t,e){if(t==="linear")return n;if(t==="relu")return qe(n);if(t==="elu")return Od(n);if(t==="relu6")return Ld(n);if(t==="prelu")return Bd(n,e);throw new Error("Unknown fused activation "+t+".")},dw=N({fusedMatMul_:function(n){var t,e=n.a,r=n.b,o=n.transposeA,i=o!==void 0&&o,a=n.transposeB,s=a!==void 0&&a,u=n.bias,c=n.activation,l=c===void 0?"linear":c,f=n.preluActivationWeights;if(qu(P.state.gradientDepth,l)===!1){var h=_a(e,r,i,s);return u!=null&&(h=Ae(h,u)),$u(h,l,f)}var d=C(e,"a","fused matMul"),p=C(r,"b","fused matMul");t=Ke(d,p),d=t[0],p=t[1];var v=i?d.shape[d.rank-2]:d.shape[d.rank-1],g=s?p.shape[p.rank-1]:p.shape[p.rank-2],m=i?d.shape[d.rank-1]:d.shape[d.rank-2],x=s?p.shape[p.rank-2]:p.shape[p.rank-1],b=d.shape.slice(0,-2),y=p.shape.slice(0,-2),w=le(b),_=le(y);R(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),R(it(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),R(v===g,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+g+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+i+" and transposeB="+s+" must match."});var S,k,E=d.shape.slice(0,-2).concat([m,x]),I=i?d.as3D(w,v,m):d.as3D(w,m,v),F=s?p.as3D(_,x,g):p.as3D(_,g,x);u!=null&&Te(E,(S=Ke(S=C(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(k=C(f,"prelu weights","fused matMul"));var A={a:I,b:F};u!=null&&(A.bias=S),f!=null&&(A.preluActivationWeights=k);var B=[I,F];return P.runKernelFunc(function(W,z){var H=W.fusedBatchMatMul({a:I,b:F,transposeA:i,transposeB:s,bias:S,activation:l,preluActivationWeights:k});return z([I,F,H]),H},A,function(W,z){var H=z[0],V=z[1],L=z[2],K=Ku(W,L,l),Y={};return u!=null&&(Y={bias:function(){return Xu(S,K)}}),Object.assign(i||s?!i&&s?{a:function(){return K.matMul(V,!1,!1)},b:function(){return K.matMul(H,!0,!1)}}:i&&!s?{a:function(){return V.matMul(K,!1,!0)},b:function(){return H.matMul(K,!1,!1)}}:{a:function(){return V.matMul(K,!0,!0)},b:function(){return K.matMul(H,!0,!0)}}:{a:function(){return K.matMul(V,!1,!0)},b:function(){return H.matMul(K,!0,!1)}},Y)},"_FusedMatMul",{transposeA:i,transposeB:s,activation:l},B,[!0]).reshape(E)}}),pw=N({fusedConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,d=n.preluActivationWeights;if(h=h||"linear",qu(P.state.gradientDepth,h)===!1){var p=Jt(t,e,r,o,a,u,c);return l!=null&&(p=Ae(p,l)),$u(p,h,d)}var v=C(t,"x","conv2d"),g=C(e,"filter","conv2d"),m=v,x=!1;v.rank===3&&(x=!0,m=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),R(m.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+m.rank+"."}),R(g.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+g.rank+"."}),c!=null&&R($e(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),R(m.shape[3]===g.shape[2],function(){return"Error in conv2d: depth of input ("+m.shape[3]+") must match input depth for filter "+g.shape[2]+"."}),R(Pt(r,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),R(a==="NHWC",function(){return"Error in conv2d: got dataFormat of "+a+" but only NHWC is currently supported."});var b,y,w=Pr(m.shape,g.shape,r,u,o,c);l!=null&&(b=Ke(b=C(l,"bias","fused conv2d"),v)[0],Te(w.outShape,b.shape)),d!=null&&(y=C(d,"prelu weights","fused conv2d"));var _={x:m,filter:g};l!=null&&(_.bias=b),d!=null&&(_.preluActivationWeights=y);var S=[g,m],k=P.runKernelFunc(function(E,I){var F=E.fusedConv2d({input:m,filter:g,convInfo:w,bias:b,activation:h,preluActivationWeights:y});return I([g,m,F]),F},_,function(E,I){var F=I,A=F[0],B=F[1],W=F[2],z=Ku(E,W,h);R(co(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var H={};return l!=null&&(H={bias:function(){return Xu(b,z)}}),Object.assign({x:function(){return kd(B.shape,z,A,r,o)},filter:function(){return Wu(B,z,A.shape,r,o)}},H)},"FusedConv2D",{convInfo:w,activation:h},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),vw=N({fusedDepthwiseConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,d=n.preluActivationWeights;if(qu(P.state.gradientDepth,h)===!1){var p=wa(t,e,r,o,a,u,c);return l!=null&&(p=Ae(p,l)),$u(p,h,d)}var v=C(t,"x","depthwiseConv2d"),g=C(e,"filter","depthwiseConv2d"),m=v,x=!1;v.rank===3&&(x=!0,m=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),R(m.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+m.rank+"."}),R(g.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+g.rank+"."}),R(m.shape[3]===g.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+m.shape[3]+") must match the inChannels dimension in filter "+g.shape[2]+"."}),u==null&&(u=[1,1]),R(Pt(r,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),c!=null&&R($e(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,y,w=Pr(m.shape,g.shape,r,u,o,c,!0);l!=null&&(b=Ke(b=C(l,"bias","fused conv2d"),v)[0],Te(w.outShape,b.shape)),d!=null&&(y=C(d,"prelu weights","fused depthwiseConv2d"));var _={x:m,filter:g};l!=null&&(_.bias=b),d!=null&&(_.preluActivationWeights=y);var S=[g,m],k=P.runKernelFunc(function(E,I){var F=E.fusedDepthwiseConv2D({input:m,filter:g,convInfo:w,bias:b,activation:h,preluActivationWeights:y});return I([g,m,F]),F},_,function(E,I){R(co(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var F=I[0],A=I[1],B=I[2],W=Ku(E,B,h),z={};return l!=null&&(z={bias:function(){return Xu(b,W)}}),Object.assign({x:function(){return Ad(A.shape,W,F,w)},filter:function(){return Dd(A,W,F.shape,w)}},z)},"FusedDepthwiseConv2D",{convInfo:w,activation:h},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),gw=Object.freeze({matMul:dw,conv2d:pw,depthwiseConv2d:vw}),mw=Object.freeze({image:ju,linalg:iw,losses:tw,spectral:U1,fused:gw,signal:j1,square:Jx,squaredDifference:hd,conv1d:a1,conv2d:Jt,conv3d:s1,depthwiseConv2d:wa,separableConv2d:Uu,conv2dTranspose:u1,conv3dTranspose:c1,op:N,batchNormalization2d:Sb,batchNormalization3d:kb,batchNormalization4d:Ab,batchNormalization:Db,batchNorm:yd,batchNorm2d:Tb,batchNorm3d:Nb,batchNorm4d:Fb,booleanMaskAsync:i1,complex:ct,real:$t,imag:gn,concat:Ze,concat1d:gy,concat2d:my,concat3d:yy,concat4d:xy,split:Ru,matMul:_a,dot:l1,outerProduct:f1,reverse:ei,reverse1d:h1,reverse2d:d1,reverse3d:p1,reverse4d:v1,maxPool:ot,avgPool:ti,pool:g1,maxPool3d:m1,avgPool3d:y1,slice:_n,slice1d:x1,slice2d:b1,slice3d:Fd,slice4d:w1,abs:Qx,acos:Zx,acosh:eb,asin:tb,asinh:nb,atan:rb,atanh:ob,ceil:ib,clipByValue:Ou,cos:ab,cosh:sb,erf:ub,exp:qs,expm1:cb,floor:lb,log:fb,log1p:hb,logSigmoid:db,neg:Qi,reciprocal:pb,round:vb,rsqrt:dd,sigmoid:pd,sign:gb,isNaN:mb,isInf:yb,isFinite:xb,sin:bb,sinh:wb,softplus:_b,sqrt:Cb,step:Eb,tan:Ib,tanh:Rb,all:_1,any:C1,argMax:E1,argMin:I1,logSumExp:R1,max:Ca,mean:S1,min:k1,moments:A1,sum:Md,prod:D1,equal:Cd,equalStrict:$b,greater:Yb,greaterEqual:Ed,greaterEqualStrict:Jb,greaterStrict:Qb,less:Zb,lessEqual:e1,lessEqualStrict:t1,lessStrict:n1,notEqual:r1,notEqualStrict:o1,add:Ae,addN:Ob,addStrict:Bb,atan2:Lb,div:Qt,divNoNan:Wb,divStrict:Ub,floorDiv:wd,maximum:Bu,maximumStrict:Vb,minimum:_d,minimumStrict:zb,mod:Hb,modStrict:Gb,mul:wt,mulStrict:jb,pow:Zi,powStrict:qb,squaredDifferenceStrict:Kb,sub:nt,subStrict:Xb,elu:Od,leakyRelu:T1,prelu:Bd,relu:qe,relu6:Ld,selu:N1,logicalAnd:ba,logicalNot:Pb,logicalOr:xd,logicalXor:Mb,where:Ar,whereAsync:bd,buffer:xe,print:ky,batchToSpaceND:Mh,broadcastTo:Ay,cast:Dy,clone:Ty,cumsum:Ny,depthToSpace:Fy,expandDims:Xt,eye:Oh,multinomial:Py,oneHot:zs,pad:Fr,pad1d:My,pad2d:Oy,pad3d:By,pad4d:Ly,rand:Wy,randomNormal:Uy,randomGamma:Vy,randomUniform:Bh,reshape:Zt,spaceToBatchND:Lh,squeeze:Wh,stack:Ht,tile:Zr,truncatedNormal:zy,unstack:et,setdiff1dAsync:Hy,fill:wn,linspace:vy,ones:fo,range:Gi,scalar:re,tensor:ft,tensor1d:Ye,tensor2d:rr,tensor3d:Iu,tensor4d:Dt,tensor5d:hy,tensor6d:dy,variable:py,zeros:He,onesLike:Ph,zerosLike:Fe,transpose:ur,softmax:Vn,logSoftmax:Yy,localResponseNormalization:F1,norm:Wd,gather:Lu,unsortedSegmentSum:Id,basicLSTMCell:P1,multiRNNCell:M1,movingAverage:O1,stridedSlice:B1,topk:L1,scatterND:W1,fft:Vu,ifft:ea,rfft:zu,irfft:Ud,sparseToDense:V1,gatherND:z1,diag:H1,dropout:G1,hannWindow:Hu,hammingWindow:zd,frame:Gu,stft:Hd,inTopKAsync:q1});function X(n,t){Array.isArray(n)||(n=[n]),n.forEach(function(e){e!=null&&R(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function cs(n,t,e,r){if(e==="linear")return n.linear(t);if(e==="relu")return n.relu(t);if(e==="elu")return n.elu(t);if(e==="relu6")return n.relu6(t);if(e==="prelu")return n.prelu(t,r);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var yw=function(n){function t(){var e=n.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new qh(e,P),e}return on(t,n),t.prototype.write=function(e,r,o){this.firstUse&&(this.firstUse=!1,G().get("IS_NODE")&&zi(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var i={};return this.data.set(i,{values:e,dtype:o}),i},t.prototype.move=function(e,r,o,i){this.data.set(e,{values:r,dtype:i})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var r=this.data.get(e),o=r.dtype,i=r.complexTensors;return o==="complex64"?js(this.readSync(i.real.dataId),this.readSync(i.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var r=this.readSync(e.dataId),o=r;if(e.dtype==="string")try{o=r.map(function(i){return Wi(i)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return xe(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,r,o){var i=this.write(e,r,o);return P.makeTensorFromDataId(i,r,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var r=this.data.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){return r=pn(),e(),[2,{kernelMs:pn()-r}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,r){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:P.keep(e.clone()),imag:P.keep(r.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(X(e,"slice"),Gh(e.shape,r,o)){var i=jh(r,e.strides),a=le(o);return ft(this.readSync(e.dataId).subarray(i,i+a),o,e.dtype)}for(var s=xe(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+r[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,r,o,i){X(e,"stridedSlice");var a=ku(r,o,i);if(a.some(function(d){return d===0}))return ft([],a);for(var s=xe(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*i[h]+r[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var r=this.readSync(e.dataId),o=xe([e.size,e.size],e.dtype),i=o.values,a=0;a<r.length;a++)i[a*e.size+a]=r[a];return o.toTensor()},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.reverse=function(e,r){X(e,"reverse");for(var o=xe(e.shape,e.dtype),i=this.bufferSync(e),a=function(u){var c=o.indexToLoc(u),l=c.slice();r.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[i.get.apply(i,l)].concat(c))},s=0;s<o.size;s++)a(s);return o.toTensor()},t.prototype.concat=function(e,r){var o=this;if(e[0].dtype==="complex64"){var i=e.map(function(d){return $t(d)}),a=e.map(function(d){return gn(d)});return ct(this.concat(i,r),this.concat(a,r))}var s=e.map(function(d){var p=le(d.shape.slice(r));return d.as2D(-1,p)}),u=uo(s.map(function(d){return d.shape}),1),c=xe(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var f=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),v=0,g=0;g<d.shape[0];++g)for(var m=g*u[1]+f,x=0;x<d.shape[1];++x)c[m+x]=p[v++];f+=d.shape[1]})}var h=uo(e.map(function(d){return d.shape}),r);return ft(c,h,e[0].dtype)},t.prototype.neg=function(e){return X(e,"neg"),this.multiply(re(-1),e)},t.prototype.add=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o+a,imag:i+s}}):this.broadcastedBinaryOp(e,r,lt(e.dtype,r.dtype),function(o,i){return o+i})},t.prototype.addN=function(e){var r=this;X(e,"addN");for(var o=e.map(function(l){return r.readSync(l.dataId)}),i=xe(e[0].shape,e[0].dtype),a=i.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<a.length;c++)a[c]+=u[c];return i.toTensor()},t.prototype.softmax=function(e,r){var o=rt([r],e.shape),i=this.max(e,o),a=Ft(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.subtract=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o-a,imag:i-s}}):this.broadcastedBinaryOp(e,r,lt(e.dtype,r.dtype),function(o,i){return o-i})},t.prototype.pow=function(e,r){return X([e,r],"pow"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.pow(o,i)})},t.prototype.batchMatMul=function(e,r,o,i){X([e,r],"matMul");for(var a=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=i?r.shape[1]:r.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=h[0],p=h[1],v=h[2],g=i?[1,r.strides[1],r.strides[0]]:[r.strides[1],1,r.strides[0]],m=g[0],x=g[1],b=g[2],y=s*u,w=xe([c,s,u],e.dtype),_=w.values,S=this.blockSize,k=0;k<c;k++)for(var E=0;E<s;E+=S)for(var I=0;I<u;I+=S)for(var F=0;F<a;F+=S)for(var A=Math.min(E+S,s),B=Math.min(I+S,u),W=Math.min(F+S,a),z=E;z<A;z++)for(var H=I;H<B;H++){for(var V=0,L=F;L<W;L++)V+=l[k*d+z*p+L*v]*f[L*m+H*x+k*b];_[k*y+(z*u+H)]+=V}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(r,o,i,a);return s&&(l=this.add(l,s)),u&&(l=cs(this,l,u,c)),l},t.prototype.multiply=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o*a-i*s,imag:o*s+i*a}}):this.broadcastedBinaryOp(e,r,lt(e.dtype,r.dtype),function(o,i){return o*i})},t.prototype.realDivide=function(e,r){return X([e,r],"realDivide"),this.broadcastedBinaryOp(e,r,"float32",function(o,i){return o/i})},t.prototype.floorDiv=function(e,r){return X([e,r],"floorDiv"),this.broadcastedBinaryOp(e,r,"int32",function(o,i){return Math.floor(o/i)})},t.prototype.sum=function(e,r){X(e,"sum"),Ot("sum",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=He(i,lt(e.dtype,"int32")),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},t.prototype.prod=function(e,r){X(e,"sum");for(var o=pt(e.shape,r),i=o[0],a=o[1],s=He(i,lt(e.dtype,"int32")),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},t.prototype.unsortedSegmentSum=function(e,r,o){X(e,"unsortedSegmentSum");for(var i=[],a=e.rank-r.rank,s=0;s<a;++s)r=r.expandDims(s+1);for(s=0;s<o;++s){var u=re(s,"int32"),c=Cd(u,r).asType("float32").mul(e).sum(0);i.push(c)}return Ht(i)},t.prototype.argMin=function(e,r){X(e,"argMin");var o=[r];Ot("argMin",o,e.rank);for(var i=pt(e.shape,o),a=i[0],s=i[1],u=He(a,"int32"),c=le(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,g=0;g<c;++g){var m=f[d+g];m<p&&(p=m,v=g)}l[h]=v}return u},t.prototype.argMax=function(e,r){X(e,"argMax");var o=[r];Ot("argMax",o,e.rank);for(var i=pt(e.shape,o),a=i[0],s=i[1],u=He(a,"int32"),c=le(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,g=0;g<c;++g){var m=f[d+g];m>p&&(p=m,v=g)}l[h]=v}return u},t.prototype.cumsum=function(e,r,o,i){if(X(e,"cumsum"),r!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+r);for(var a=lt(e.dtype,"int32"),s=He(e.shape,a),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=i?function(g,m){return g+l-m-1}:function(g,m){return g+m},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=o?0:c[p];else{var v=f(h,d-1);u[p]=o?c[v]+u[v]:c[p]+u[v]}}return s},t.prototype.equal=function(e,r){return X([e,r],"equal"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o===i?1:0})},t.prototype.notEqual=function(e,r){return X([e,r],"notEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o!==i?1:0})},t.prototype.less=function(e,r){return X([e,r],"less"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o<i?1:0})},t.prototype.lessEqual=function(e,r){return X([e,r],"lessEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o<=i?1:0})},t.prototype.greater=function(e,r){return X([e,r],"greater"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o>i?1:0})},t.prototype.greaterEqual=function(e,r){return X([e,r],"greaterEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o>=i?1:0})},t.prototype.logicalNot=function(e){X(e,"logicalNot");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r[i]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,r){return X([e,r],"logicalAnd"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o&&i})},t.prototype.logicalOr=function(e,r){return X([e,r],"logicalOr"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o||i})},t.prototype.select=function(e,r,o){X([e,r,o],"select");for(var i=this.readSync(e.dataId),a=this.readSync(r.dataId),s=this.readSync(o.dataId),u=He(r.shape,lt(r.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||r.rank===1?1:le(r.shape.slice(1)),h=0;h<i.length;h++)for(var d=0;d<f;d++)i[h]===1?c[l++]=a[h]:c[l++]=s[h];return u},t.prototype.where=function(e){X([e],"where");var r=this.readSync(e.dataId);return Nu(e.shape,r)},t.prototype.topk=function(e,r,o){return X(e,"topk"),ed(this.readSync(e.dataId),e.shape,e.dtype,r)},t.prototype.min=function(e,r){X(e,"min"),Ot("min",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=He(i,e.dtype),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v<d&&(d=v)}c[f]=d}return s},t.prototype.minimum=function(e,r){return X([e,r],"minimum"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.min(o,i)})},t.prototype.mod=function(e,r){return X([e,r],"mod"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){var a=o%i;return o<0&&i<0||o>=0&&i>=0?a:(a+i)%i})},t.prototype.max=function(e,r){X(e,"max"),Ot("max",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=He(i,e.dtype),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v>d&&(d=v)}c[f]=d}return s},t.prototype.maximum=function(e,r){return X([e,r],"maximum"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.max(o,i)})},t.prototype.all=function(e,r){X(e,"all"),Ot("all",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=He(i,e.dtype),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d&&v}c[f]=d}return s},t.prototype.any=function(e,r){X(e,"any"),Ot("any",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=He(i,e.dtype),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d||v}c[f]=d}return s},t.prototype.squaredDifference=function(e,r){return X([e,r],"squaredDifference"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){var a=o-i;return a*a})},t.prototype.ceil=function(e){X(e,"ceil");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.ceil(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){X(e,"floor");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.floor(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)r[i]<0?o[i]=-1:r[i]>0?o[i]=1:o[i]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isNaN(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Math.abs(r[i])===1/0&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isFinite(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){X(e,"round");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=Math.floor(r[i]);r[i]-a<.5?o[i]=Math.floor(r[i]):r[i]-a>.5?o[i]=Math.ceil(r[i]):o[i]=a%2==0?a:a+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){X(e,"exp");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.exp(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){X(e,"expm1");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.expm1(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){X(e,"log");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){X(e,"log1p");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log1p(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){X(e,"sqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){X(e,"rsqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=1/Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){X(e,"reciprocal");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=1/r[i];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){X(e,"relu");for(var r=He(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.max(0,i[a]);return r},t.prototype.relu6=function(e){X(e,"relu");for(var r=He(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.min(Math.max(0,i[a]),6);return r},t.prototype.prelu=function(e,r){return X([e,r],"prelu"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return o<0?i*o:o})},t.prototype.elu=function(e){X(e,"elu");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=o[i];r[i]=a>=0?a:Math.exp(a)-1}return this.makeOutput(r,e.shape,"float32")},t.prototype.eluDer=function(e,r){X([e,r],"eluDer");for(var o=new Float32Array(r.size),i=this.readSync(r.dataId),a=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=1?a[s]:a[s]*(u+1)}return this.makeOutput(o,r.shape,"float32")},t.prototype.selu=function(e){X(e,"selu");for(var r=Pu,o=Mu,i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>=0?o*u:r*(Math.exp(u)-1)}return this.makeOutput(i,e.shape,"float32")},t.prototype.clip=function(e,r,o){X(e,"clip");for(var i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>o?o:u<r?r:u}return this.makeOutput(i,e.shape,"float32")},t.prototype.abs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.abs(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<e.size;++i){var a=o[2*i],s=o[2*i+1];r[i]=Math.hypot(a,s)}return this.makeOutput(r,e.shape,"float32")},t.prototype.int=function(e){X(e,"int");for(var r=new Int32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=o[i];return this.makeOutput(r,e.shape,"int32")},t.prototype.sigmoid=function(e){X(e,"sigmoid");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=1/(1+Math.exp(-o[i]));return this.makeOutput(r,e.shape,"float32")},t.prototype.softplus=function(e){X(e,"softplus");for(var r=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a]>-r,u=i[a]<r,c=Math.exp(i[a]),l=void 0;l=u?c:s?i[a]:Math.log(1+c),o[a]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){X(e,"sin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cos=function(e){X(e,"cos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tan=function(e){X(e,"tan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.tan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asin=function(e){X(e,"asin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acos=function(e){X(e,"acos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan=function(e){X(e,"atan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan2=function(e,r){return X([e,r],"atan2"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.atan2(o,i)})},t.prototype.sinh=function(e){X(e,"sinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cosh=function(e){X(e,"cosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tanh=function(e){X(e,"tanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=xm(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asinh=function(e){X(e,"asinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acosh=function(e){X(e,"acosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atanh=function(e){X(e,"atanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atanh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.erf=function(e){X(e,"erf");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=Math.sign(o[i]),s=Math.abs(o[i]),u=1/(1+.3275911*s);r[i]=a*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(r,e.shape,"float32")},t.prototype.step=function(e,r){r===void 0&&(r=0),X(e,"step");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a];isNaN(s)?o[a]=NaN:o[a]=s>0?1:r}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(r,o,i);return a&&(c=this.add(c,a)),s&&(c=cs(this,c,s,u)),c},t.prototype.conv2d=function(e,r,o){X([e,r],"conv2d");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=xe(o.outShape,e.dtype),d=e.strides[0],p=f?e.strides[1]:e.strides[2],v=f?e.strides[2]:1,g=f?1:e.strides[1],m=h.strides[0],x=f?h.strides[1]:h.strides[2],b=f?h.strides[2]:1,y=f?1:h.strides[1],w=this.readSync(e.dataId),_=this.readSync(r.dataId),S=h.values,k=0;k<o.batchSize;++k)for(var E=k*d,I=k*m,F=0;F<o.outHeight;++F)for(var A=I+F*x,B=F*o.strideHeight-l,W=0;W<i;W++){var z=B+W*s;if(!(z<0||z>=o.inHeight))for(var H=W*r.strides[0],V=E+z*p,L=0;L<o.outWidth;++L)for(var K=A+L*b,Y=L*o.strideWidth-c,ne=0;ne<a;ne++){var oe=Y+ne*u;if(!(oe<0||oe>=o.inWidth))for(var pe=V+oe*v,_e=H+ne*r.strides[1],Ce=0;Ce<o.inChannels;++Ce){for(var be=w[pe+Ce*g],Re=0;Re<o.outChannels;++Re)S[K+Re*y]+=be*_[_e+Re];_e+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,r,o){for(var i=o.filterDepth,a=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,d=o.padInfo.top,p=xe(o.outShape,e.dtype),v=this.readSync(e.dataId),g=this.readSync(r.dataId),m=p.values,x=0;x<o.batchSize;++x)for(var b=x*e.strides[0],y=x*p.strides[0],w=0;w<o.outDepth;++w)for(var _=y+w*p.strides[1],S=w*o.strideDepth-f,k=0;k<i;k++){var E=S+k*u;if(!(E<0||E>=o.inDepth))for(var I=k*r.strides[0],F=b+E*e.strides[1],A=0;A<o.outHeight;++A)for(var B=_+A*p.strides[2],W=A*o.strideHeight-d,z=0;z<a;z++){var H=W+z*c;if(!(H<0||H>=o.inHeight))for(var V=I+z*r.strides[1],L=F+H*e.strides[2],K=0;K<o.outWidth;++K)for(var Y=B+K*o.outChannels,ne=K*o.strideWidth-h,oe=0;oe<s;oe++){var pe=ne+oe*l;if(!(pe<0||pe>=o.inWidth))for(var _e=V+oe*r.strides[2],Ce=L+pe*o.inChannels,be=_e,Re=0;Re<o.inChannels;++Re){for(var Se=v[Ce+Re],De=0;De<o.outChannels;++De)m[Y+De]+=Se*g[be+De];be+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,r,o){X([e,r],"conv2dDerInput");for(var i=xe(o.inShape,"float32"),a=i.values,s=this.readSync(e.dataId),u=this.readSync(r.dataId),c=r.strides,l=c[0],f=c[1],h=c[2],d=o.batchSize,p=o.filterHeight,v=o.filterWidth,g=o.inChannels,m=o.inHeight,x=o.inWidth,b=o.outChannels,y=o.outHeight,w=o.outWidth,_=o.strideHeight,S=o.strideWidth,k=o.dataFormat,E=p-1-o.padInfo.top,I=v-1-o.padInfo.left,F=k==="channelsLast",A=i.strides[0],B=F?i.strides[1]:i.strides[2],W=F?i.strides[2]:1,z=F?1:i.strides[1],H=e.strides[0],V=F?e.strides[1]:e.strides[2],L=F?e.strides[2]:1,K=F?1:e.strides[1],Y=0;Y<d;++Y)for(var ne=0;ne<g;++ne)for(var oe=0;oe<m;++oe)for(var pe=oe-E,_e=Math.max(0,Math.ceil(pe/_)),Ce=Math.min(y,(p+pe)/_),be=0;be<x;++be){for(var Re=be-I,Se=Math.max(0,Math.ceil(Re/S)),De=Math.min(w,(v+Re)/S),We=0,Ne=_e;Ne<Ce;++Ne)for(var D=Ne*_-pe,T=Se;T<De;++T)for(var M=H*Y+V*Ne+L*T,q=l*(p-1-D)+f*(v-1-(T*S-Re))+h*ne,j=0;j<b;++j)We+=s[M+K*j]*u[q+j];a[A*Y+B*oe+W*be+z*ne]=We}return i.toTensor()},t.prototype.conv3dDerInput=function(e,r,o){for(var i=xe(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),d=e.strides,p=d[0],v=d[1],g=d[2],m=d[3],x=this.readSync(r.dataId),b=r.strides,y=b[0],w=b[1],_=b[2],S=b[3],k=o.batchSize,E=o.filterDepth,I=o.filterHeight,F=o.filterWidth,A=o.inChannels,B=o.inDepth,W=o.inHeight,z=o.inWidth,H=o.outChannels,V=o.outDepth,L=o.outHeight,K=o.outWidth,Y=o.strideDepth,ne=o.strideHeight,oe=o.strideWidth,pe=E-1-o.padInfo.front,_e=I-1-o.padInfo.top,Ce=F-1-o.padInfo.left,be=0;be<k;++be)for(var Re=0;Re<A;++Re)for(var Se=0;Se<B;++Se)for(var De=Se-pe,We=Math.max(0,Math.ceil(De/Y)),Ne=Math.min(V,(E+De)/Y),D=0;D<W;++D)for(var T=D-_e,M=Math.max(0,Math.ceil(T/ne)),q=Math.min(L,(I+T)/ne),j=0;j<z;++j){for(var $=j-Ce,ee=Math.max(0,Math.ceil($/oe)),Q=Math.min(K,(F+$)/oe),Z=0,J=We;J<Ne;++J)for(var ue=J*Y-De,te=M;te<q;++te)for(var ce=te*ne-T,ve=ee;ve<Q;++ve)for(var ke=p*be+v*J+g*te+m*ve,Pe=y*(E-1-ue)+w*(I-1-ce)+_*(F-1-(ve*oe-$))+S*Re,Ie=0;Ie<H;++Ie)Z+=h[ke+Ie]*x[Pe+Ie];a[u*be+c*Se+l*D+f*j+Re]=Z}return i.toTensor()},t.prototype.conv2dDerFilter=function(e,r,o){X([e,r],"conv2dDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=xe(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(r),v=0;v<s;++v)for(var g=Math.max(0,Math.ceil((h-v)/i)),m=Math.min(o.outHeight,(o.inHeight+h-v)/i),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((f-x)/a)),y=Math.min(o.outWidth,(o.inWidth+f-x)/a),w=0;w<o.inChannels;++w)for(var _=0;_<o.outChannels;++_){for(var S=0,k=0;k<o.batchSize;++k)for(var E=g;E<m;++E)for(var I=v+E*i-h,F=b;F<y;++F){var A=x+F*a-f;S+=c?d.get(k,I,A,w)*p.get(k,E,F,_):d.get(k,w,I,A)*p.get(k,_,E,F)}l.set(S,v,x,w,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,r,o){for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=xe(o.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],v=d[1],g=d[2],m=d[3],x=this.readSync(r.dataId),b=r.strides,y=b[0],w=b[1],_=b[2],S=b[3],k=this.readSync(e.dataId),E=e.strides,I=E[0],F=E[1],A=E[2],B=E[3],W=o.padInfo.front,z=o.padInfo.left,H=o.padInfo.top,V=0;V<u;++V)for(var L=Math.max(0,Math.ceil((W-V)/i)),K=Math.min(o.outDepth,(o.inDepth+W-V)/i),Y=V*p,ne=0;ne<c;++ne)for(var oe=Math.max(0,Math.ceil((H-ne)/a)),pe=Math.min(o.outHeight,(o.inHeight+H-ne)/a),_e=ne*v+Y,Ce=0;Ce<l;++Ce)for(var be=Math.max(0,Math.ceil((z-Ce)/s)),Re=Math.min(o.outWidth,(o.inWidth+z-Ce)/s),Se=Ce*g+_e,De=0;De<o.inChannels;++De)for(var We=De*m+Se,Ne=0;Ne<o.outChannels;++Ne){for(var D=0,T=0;T<o.batchSize;++T)for(var M=T*I,q=T*y,j=L;j<K;++j)for(var $=(V+j*i-W)*F+M,ee=j*w+q,Q=oe;Q<pe;++Q)for(var Z=(ne+Q*a-H)*A+$,J=Q*_+ee,ue=be;ue<Re;++ue){var te=ue*S+J;D+=k[(Ce+ue*s-z)*B+Z+De]*x[te+Ne]}h[We+Ne]=D}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(r,o,i);return a&&(c=this.add(c,a)),s&&(c=cs(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,r,o){X([e,r],"depthwiseConv2D");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=xe(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(r.dataId),v=h.values,g=0;g<o.batchSize;++g)for(var m=g*e.strides[0],x=g*h.strides[0],b=0;b<o.outHeight;++b)for(var y=x+b*h.strides[1],w=b*o.strideHeight-c,_=0;_<i;++_){var S=w+_*s;if(!(S<0||S>=o.inHeight))for(var k=_*r.strides[0],E=m+S*e.strides[1],I=0;I<o.outWidth;++I)for(var F=y+I*h.strides[2],A=I*o.strideWidth-l,B=0;B<a;++B){var W=A+B*u;if(!(W<0||W>=o.inWidth))for(var z=k+B*r.strides[1],H=E+W*o.inChannels,V=F,L=z,K=0;K<o.inChannels;++K){for(var Y=d[H+K],ne=0;ne<f;++ne)v[V+ne]+=Y*p[L+ne];V+=f,L+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,r,o){X([e,r],"depthwiseConv2DDerInput");for(var i=xe(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,d=h[0],p=h[1],v=h[2],g=this.readSync(r.dataId),m=r.strides,x=m[0],b=m[1],y=m[2],w=o.batchSize,_=o.filterHeight,S=o.filterWidth,k=o.inChannels,E=o.inHeight,I=o.inWidth,F=o.outChannels,A=o.outHeight,B=o.outWidth,W=o.strideHeight,z=o.strideWidth,H=_-1-o.padInfo.top,V=S-1-o.padInfo.left,L=F/k,K=0;K<w;++K)for(var Y=0;Y<k;++Y)for(var ne=0;ne<E;++ne)for(var oe=ne-H,pe=Math.max(0,Math.ceil(oe/W)),_e=Math.min(A,(_+oe)/W),Ce=0;Ce<I;++Ce){for(var be=Ce-V,Re=Math.max(0,Math.ceil(be/z)),Se=Math.min(B,(S+be)/z),De=0,We=pe;We<_e;++We)for(var Ne=We*W-oe,D=Re;D<Se;++D)for(var T=d*K+p*We+v*D,M=x*(_-1-Ne)+b*(S-1-(D*z-be))+y*Y,q=0;q<L;++q)De+=f[T+(Y*L+q)]*g[M+q];a[u*K+c*ne+l*Ce+Y]=De}return i.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){X([e,r],"depthwiseConv2DDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=xe(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(r),v=0;v<s;++v)for(var g=Math.max(0,Math.ceil((f-v)/i)),m=Math.min(o.outHeight,(o.inHeight+f-v)/i),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((l-x)/a)),y=Math.min(o.outWidth,(o.inWidth+l-x)/a),w=0;w<o.outChannels;++w){for(var _=Math.trunc(w/h),S=w%h,k=0,E=0;E<o.batchSize;++E)for(var I=g;I<m;++I)for(var F=v+I*i-f,A=b;A<y;++A){var B=x+A*a-l;k+=d.get(E,F,B,_)*p.get(E,I,A,w)}c.set(k,v,x,_,S)}return c.toTensor()},t.prototype.tile=function(e,r){return X(e,"tile"),Zh(this.bufferSync(e),r)},t.prototype.pad=function(e,r,o){X(e,"pad");var i=r.map(function(h,d){return h[0]+e.shape[d]+h[1]}),a=r.map(function(h){return h[0]}),s=this.bufferSync(e),u=xe(i,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,d){return h+a[d]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,r){X(e,"transpose");for(var o=new Array(e.rank),i=0;i<o.length;i++)o[i]=e.shape[r[i]];var a=this.readSync(e.dataId),s=xe(o,e.dtype),u=this.bufferSync(e);for(i=0;i<e.size;++i){for(var c=u.indexToLoc(i),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[r[f]];var h=s.locToIndex(l);s.values[h]=a[i]}return s.toTensor()},t.prototype.gather=function(e,r,o){X([e,r],"gather");var i=e.shape.slice(),a=this.readSync(r.dataId);i[o]=a.length;for(var s=xe(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=a[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,r,o){X([e],"batchToSpaceND");var i=r.reduce(function(f,h){return f*h}),a=ji(e.shape,r,i),s=qi(a.length,r.length),u=Ki(e.shape,r,i),c=Uh(o,r.length),l=Vh(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){X([e],"spaceToBatchND");var i=r.reduce(function(h,d){return h*d}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=ji(u.shape,r,i,!1),l=qi(c.length,r.length,!1),f=Ki(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,r,o){X(e,"pool");for(var i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),v=xe(r.outShape,e.dtype),g=v.values,m=r.outShape[1]*r.outShape[2]*r.outShape[3],x=r.outShape[2]*r.outShape[3],b=r.outShape[3],y=0;y<r.batchSize;++y)for(var w=y*m,_=y*e.strides[0],S=0;S<r.inChannels;++S)for(var k=0;k<r.outHeight;++k)for(var E=k*i-f,I=Math.max(0,E),F=Math.min(r.inHeight,c+E),A=w+k*x,B=0;B<r.outWidth;++B){for(var W=B*a-h,z=Math.max(0,W),H=Math.min(r.inWidth,l+W),V=d,L=0,K=0,Y=I;Y<F;Y+=s){for(var ne=_+Y*e.strides[1],oe=z;oe<H;oe+=u){var pe=p[ne+oe*e.strides[2]+S];o==="max"&&pe>V?V=pe:o==="avg"&&(L+=pe,K++)}if(isNaN(V))break}g[A+B*b+S]=o==="avg"?L/K:V}return v.toTensor()},t.prototype.maxPool=function(e,r){return this.pool(e,r,"max")},t.prototype.maxPoolPositions=function(e,r){for(var o=xe(r.outShape,"int32"),i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,d=this.bufferSync(e),p=0;p<r.batchSize;++p)for(var v=0;v<r.inChannels;++v)for(var g=0;g<r.outHeight;++g){for(var m=g*i-f,x=m;x<0;)x+=s;for(var b=Math.min(r.inHeight,c+m),y=0;y<r.outWidth;++y){for(var w=y*a-h,_=w;_<0;)_+=u;for(var S=Math.min(r.inWidth,l+w),k=Number.NEGATIVE_INFINITY,E=-1,I=x;I<b;I+=s)for(var F=I-m,A=_;A<S;A+=u){var B=A-w,W=d.get(p,I,A,v);W>k&&(k=W,E=F*l+B)}o.set(E,p,g,y,v)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,r,o,i){X([r,o],"maxPoolBackprop");for(var a=this.maxPoolPositions(r,i),s=i.strideHeight,u=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,f=i.effectiveFilterHeight,h=i.effectiveFilterWidth,d=h-1-i.padInfo.left,p=f-1-i.padInfo.top,v=xe(r.shape,"float32"),g=this.bufferSync(a),m=this.bufferSync(e),x=0;x<i.batchSize;++x)for(var b=0;b<i.inChannels;++b)for(var y=0;y<i.inHeight;++y)for(var w=0;w<i.inWidth;++w){for(var _=y-p,S=w-d,k=0,E=0;E<f;E+=c){var I=(_+E)/s;if(!(I<0||I>=i.outHeight||Math.floor(I)!==I))for(var F=0;F<h;F+=l){var A=(S+F)/u;if(!(A<0||A>=i.outWidth||Math.floor(A)!==A)){var B=f*h-1-g.get(x,I,A,b)===E*h+F?1:0;B!==0&&(k+=m.get(x,I,A,b)*B)}}}v.set(k,x,y,w,b)}return v.toTensor()},t.prototype.avgPoolBackprop=function(e,r,o){X([e,r],"avgPoolBackprop");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,v=xe(r.shape,"float32"),g=1/(s*u),m=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var _=y-p,S=w-d,k=0,E=0;E<f;E+=c){var I=(_+E)/i;if(!(I<0||I>=o.outHeight||Math.floor(I)!==I))for(var F=0;F<h;F+=l){var A=(S+F)/a;A<0||A>=o.outWidth||Math.floor(A)!==A||(k+=m.get(x,I,A,b))}}v.set(k*g,x,y,w,b)}return v.toTensor()},t.prototype.pool3d=function(e,r,o){X(e,"pool3d");for(var i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.front,v=r.padInfo.top,g=r.padInfo.left,m=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),b=xe(r.outShape,e.dtype),y=b.values,w=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],_=r.outShape[2]*r.outShape[3]*r.outShape[4],S=r.outShape[3]*r.outShape[4],k=r.outShape[4],E=0;E<r.batchSize;++E)for(var I=E*w,F=E*e.strides[0],A=0;A<r.inChannels;++A)for(var B=0;B<r.outDepth;++B){for(var W=B*i-p,z=W;z<0;)z+=u;for(var H=Math.min(r.inDepth,f+W),V=I+B*_,L=0;L<r.outHeight;++L){for(var K=L*a-v,Y=K;Y<0;)Y+=c;for(var ne=Math.min(r.inHeight,h+K),oe=V+L*S,pe=0;pe<r.outWidth;++pe){for(var _e=pe*s-g,Ce=_e;Ce<0;)Ce+=l;for(var be=Math.min(r.inWidth,d+_e),Re=oe+pe*k,Se=m,De=0,We=0,Ne=z;Ne<H;Ne+=u){for(var D=F+Ne*e.strides[1],T=Y;T<ne;T+=c){for(var M=D+T*e.strides[2],q=Ce;q<be;q+=l){var j=x[M+q*e.strides[3]+A];if(o==="max"&&j>Se?Se=j:o==="avg"&&(De+=j,We++),isNaN(Se))break}if(isNaN(Se))break}if(isNaN(Se))break}y[Re+A]=o==="avg"?De/We:Se}}}return b.toTensor()},t.prototype.avgPool3d=function(e,r){return X(e,"avgPool3d"),this.pool3d(e,r,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,r,o){X([e,r],"avgPool3dBackprop");for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,v=o.effectiveFilterHeight,g=o.effectiveFilterWidth,m=p-1-o.padInfo.front,x=g-1-o.padInfo.left,b=v-1-o.padInfo.top,y=xe(r.shape,"float32"),w=1/(u*c*l),_=this.bufferSync(e),S=0;S<o.batchSize;++S)for(var k=0;k<o.inChannels;++k)for(var E=0;E<o.inDepth;++E)for(var I=0;I<o.inHeight;++I)for(var F=0;F<o.inWidth;++F){for(var A=E-m,B=I-b,W=F-x,z=0,H=0;H<p;H+=f){var V=(A+H)/i;if(!(V<0||V>=o.outDepth||Math.floor(V)!==V))for(var L=0;L<v;L+=h){var K=(B+L)/a;if(!(K<0||K>=o.outHeight||Math.floor(K)!==K))for(var Y=0;Y<g;Y+=d){var ne=(W+Y)/s;ne<0||ne>=o.outWidth||Math.floor(ne)!==ne||(z+=_.get(S,V,K,ne,k))}}}y.set(z*w,S,E,I,F,k)}return y.toTensor()},t.prototype.maxPool3d=function(e,r){return X(e,"maxPool3d"),this.pool3d(e,r,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,r){for(var o=xe(r.outShape,"int32"),i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.front,v=r.padInfo.top,g=r.padInfo.left,m=this.bufferSync(e),x=0;x<r.batchSize;++x)for(var b=0;b<r.inChannels;++b)for(var y=0;y<r.outDepth;++y){for(var w=y*i-p,_=w;_<0;)_+=u;for(var S=Math.min(r.inDepth,f+w),k=0;k<r.outHeight;++k){for(var E=k*a-v,I=E;I<0;)I+=c;for(var F=Math.min(r.inHeight,h+E),A=0;A<r.outWidth;++A){for(var B=A*s-g,W=B;W<0;)W+=l;for(var z=Math.min(r.inWidth,d+B),H=Number.NEGATIVE_INFINITY,V=-1,L=_;L<S;L+=u)for(var K=L-w,Y=I;Y<F;Y+=c)for(var ne=Y-E,oe=W;oe<z;oe+=l){var pe=oe-B,_e=m.get(x,L,Y,oe,b);_e>=H&&(H=_e,V=K*h*d+ne*h+pe)}o.set(V,x,y,k,A,b)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,r,o,i){X([r,o],"maxPool3dBackprop");for(var a=this.maxPool3dPositions(r,i),s=i.strideDepth,u=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,f=i.dilationHeight,h=i.dilationWidth,d=i.effectiveFilterDepth,p=i.effectiveFilterHeight,v=i.effectiveFilterWidth,g=d-1-i.padInfo.front,m=v-1-i.padInfo.left,x=p-1-i.padInfo.top,b=xe(r.shape,"float32"),y=this.bufferSync(a),w=this.bufferSync(e),_=0;_<i.batchSize;++_)for(var S=0;S<i.inChannels;++S)for(var k=0;k<i.inDepth;++k)for(var E=0;E<i.inHeight;++E)for(var I=0;I<i.inWidth;++I){for(var F=k-g,A=E-x,B=I-m,W=0,z=0;z<d;z+=l){var H=(F+z)/s;if(!(H<0||H>=i.outDepth||Math.floor(H)!==H))for(var V=0;V<p;V+=f){var L=(A+V)/u;if(!(L<0||L>=i.outHeight||Math.floor(L)!==L))for(var K=0;K<v;K+=h){var Y=(B+K)/c;if(!(Y<0||Y>=i.outWidth||Math.floor(Y)!==Y)){var ne=d*p*v-1-y.get(_,H,L,Y,S)===z*p*v+V*v+K?1:0;ne!==0&&(W+=w.get(_,H,L,Y,S)*ne)}}}}b.set(W,_,k,E,I,S)}return b.toTensor()},t.prototype.cast=function(e,r){return $h(e,r,this)},t.prototype.reshape=function(e,r){return Gs(e,r)},t.prototype.avgPool=function(e,r){return X(e,"avgPool"),this.pool(e,r,"avg").toFloat()},t.prototype.resizeBilinear=function(e,r,o,i){X(e,"resizeBilinear");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(le([s,r,o,l])),d=[i&&r>1?u-1:u,i&&o>1?c-1:c],p=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=0,g=d[0]/p[0],m=d[1]/p[1],x=0;x<s;x++)for(var b=0;b<r;b++)for(var y=g*b,w=Math.floor(y),_=y-w,S=Math.min(u-1,Math.ceil(y)),k=x*e.strides[0]+w*e.strides[1],E=x*e.strides[0]+S*e.strides[1],I=0;I<o;I++)for(var F=m*I,A=Math.floor(F),B=F-A,W=Math.min(c-1,Math.ceil(F)),z=k+A*e.strides[2],H=E+A*e.strides[2],V=k+W*e.strides[2],L=E+W*e.strides[2],K=0;K<l;K++){var Y=f[z+K],ne=f[H+K],oe=Y+(f[V+K]-Y)*B,pe=oe+(ne+(f[L+K]-ne)*B-oe)*_;h[v++]=pe}return ft(h,[s,r,o,l])},t.prototype.resizeBilinearBackprop=function(e,r,o){X([e,r],"resizeBilinearBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(a*s*u*c),p=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=p[0]/v[0],m=p[1]/v[1],x=this.readSync(e.dataId),b=0,y=0;y<a;y++)for(var w=y*r.strides[0],_=0;_<f;_++)for(var S=_*g,k=Math.floor(S),E=Math.min(Math.ceil(S),s-1),I=w+k*r.strides[1],F=w+E*r.strides[1],A=S-k,B=1-A,W=0;W<h;W++)for(var z=W*m,H=Math.floor(z),V=Math.min(Math.ceil(z),u-1),L=z-H,K=1-L,Y=I+H*r.strides[2],ne=I+V*r.strides[2],oe=F+H*r.strides[2],pe=F+V*r.strides[2],_e=B*K,Ce=B*L,be=A*K,Re=A*L,Se=0;Se<c;Se++){var De=x[b++];d[Y+Se]+=De*_e,d[ne+Se]+=De*Ce,d[oe+Se]+=De*be,d[pe+Se]+=De*Re}return Dt(d,[a,u,s,c],r.dtype)},t.prototype.resizeNearestNeighbor=function(e,r,o,i){X(e,"resizeNearestNeighbor");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(s*r*o*l),d=[i&&r>1?u-1:u,i&&o>1?c-1:c],p=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=d[0]/p[0],g=d[1]/p[1],m=0,x=0;x<s;x++)for(var b=x*e.strides[0],y=0;y<r;y++)for(var w=v*y,_=b+Math.min(u-1,i?Math.round(w):Math.floor(w))*e.strides[1],S=0;S<o;S++)for(var k=g*S,E=_+Math.min(c-1,i?Math.round(k):Math.floor(k))*e.strides[2],I=0;I<l;I++){var F=f[E+I];h[m++]=F}return ft(h,[s,r,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){X([e,r],"resizeNearestNeighborBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(a*s*u*c),p=this.readSync(e.dataId),v=[o&&f>1?s-1:s,o&&h>1?u-1:u],g=[o&&f>1?f-1:f,o&&h>1?h-1:h],m=v[0]/g[0],x=v[1]/g[1],b=1/m,y=1/x,w=2*Math.ceil(b)+2,_=2*Math.ceil(y)+2,S=0;S<a;S++)for(var k=S*r.strides[0],E=0;E<s;E++)for(var I=k+E*r.strides[1],F=Math.floor(E*b),A=Math.floor(F-w/2),B=0;B<u;B++)for(var W=I+B*r.strides[2],z=Math.floor(B*y),H=Math.floor(z-_/2),V=0;V<c;V++){for(var L=0,K=0;K<w;K++){var Y=K+A;if(!(Y<0||Y>=f)){var ne=k+Y*e.strides[1],oe=Y*m;if(E===Math.min(s-1,o?Math.round(oe):Math.floor(oe)))for(var pe=0;pe<_;pe++){var _e=pe+H;if(!(_e<0||_e>=h)){var Ce=ne+_e*e.strides[2],be=_e*x;B===Math.min(u-1,o?Math.round(be):Math.floor(be))&&(L+=p[Ce+V])}}}}d[W+V]=L}return Dt(d,r.shape,r.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){X([e,r,o,a,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=this.readSync(o.dataId),f=a?this.readSync(a.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,v=f.length,g=l.length,m=c.length,x=0,b=0,y=0,w=0,_=0;_<u.length;++_)d[_]=h[x++]+(u[_]-c[b++])*f[y++]/Math.sqrt(l[w++]+i),x>=p&&(x=0),b>=m&&(b=0),y>=v&&(y=0),w>=g&&(w=0);return Dt(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){X(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(g){for(var m=g%s,x=g-m+Math.max(0,m-r),b=g-m+Math.min(m+r,u),y=0;x<=b;x++){var w=c[x];y+=w*w}return y}for(var d=0;d<l;d++){var p=h(d),v=c[d]*Math.pow(o+i*p,-a);f[d]=v}return Dt(f,e.shape)},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){X(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,v=0;v<p;v++){for(var g=v%c,m=v-g+Math.max(0,g-i),x=v-g+Math.min(c,g+i+1),b=0,y=m;y<x;y++)b+=Math.pow(f[y],2);for(b=s*b+a,y=m;y<x;y++){var w=-2*s*u*f[y]*h[v]/b;v===y&&(w+=Math.pow(b,-u)),w*=l[v],d[y]+=w}}return Dt(d,e.shape)},t.prototype.multinomial=function(e,r,o,i){X(e,"multinomial");for(var a=r?e:Vn(e),s=a.shape[0],u=a.shape[1],c=He([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(a.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var v=1;v<p.length;++v)p[v]=p[v-1]+f[d+v];for(var g=ma(i.toString()),m=h*o,x=0;x<o;++x){var b=g();l[m+x]=p.length;for(var y=0;y<p.length;y++)if(b<p[y]){l[m+x]=y;break}}}return c},t.prototype.oneHot=function(e,r,o,i){X(e,"oneHot");var a=new Float32Array(e.size*r);a.fill(i);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<r&&(a[u*r+s[u]]=o);return rr(a,[e.size,r],"int32")},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return X(e,"nonMaxSuppression"),Du(this.readSync(e.dataId),this.readSync(r.dataId),o,i,a)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,r){for(var o=e.shape[0],i=e.shape[1],a=xe(e.shape,"float32"),s=xe(e.shape,"float32"),u=$t(e).as2D(o,i),c=gn(e).as2D(o,i),l=0;l<o;l++)for(var f=u.slice([l,0],[1,i]),h=c.slice([l,0],[1,i]),d=ct(f,h),p=this.readSync(this.fftImpl(d,r).dataId),v=0;v<i;v++){var g=yl(p,v);a.values[l*i+v]=g.real,s.values[l*i+v]=g.imag}return ct(a.toTensor(),s.toTensor()).as2D(o,i)},t.prototype.fftImpl=function(e,r){var o=e.as1D(),i=o.size;if(this.isExponentOf2(i)){var a=this.fftRadix2(o,i,r).as2D(e.shape[0],e.shape[1]);return r&&(a=ct($t(a).div(re(i)),gn(a).div(re(i)))),a}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,i,r));return ct(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,r,o){if(r===1)return e;var i=this.readSync(e.dataId),a=r/2,s=function(m){for(var x=Math.ceil(m.length/4),b=new Float32Array(x),y=new Float32Array(x),w=0;w<m.length;w+=4)b[Math.floor(w/4)]=m[w],y[Math.floor(w/4)]=m[w+1];return{real:b,imag:y}}(i),u=ct(s.real,s.imag).as1D(),c=function(m){for(var x=Math.floor(m.length/4),b=new Float32Array(x),y=new Float32Array(x),w=2;w<m.length;w+=4)b[Math.floor(w/4)]=m[w],y[Math.floor(w/4)]=m[w+1];return{real:b,imag:y}}(i),l=ct(c.real,c.imag).as1D();u=this.fftRadix2(u,a,o),l=this.fftRadix2(l,a,o);var f=function(m,x){for(var b=new Float32Array(m/2),y=new Float32Array(m/2),w=0;w<Math.ceil(m/2);w++){var _=(x?2:-2)*Math.PI*(w/m);b[w]=Math.cos(_),y[w]=Math.sin(_)}return{real:b,imag:y}}(r,o),h=ct(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),v=$t(d).concat($t(p)),g=gn(d).concat(gn(p));return ct(v,g).as1D()},t.prototype.fourierTransformByMatmul=function(e,r,o){for(var i=new Float32Array(2*r),a=0;a<r;a++){for(var s=0,u=0,c=0;c<r;c++){var l=Qy(a*c,r,o),f=yl(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=r,u/=r),Jy(i,s,u,a)}return i},t.prototype.depthToSpace=function(e,r,o){R(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),R(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});for(var i=e.shape[0],a=e.shape[1],s=e.shape[2],u=e.shape[3],c=a*r,l=s*r,f=u/(r*r),h=this.readSync(e.dataId),d=new Float32Array(i*c*l*f),p=0,v=0;v<i;++v)for(var g=0;g<c;++g)for(var m=Math.floor(g/r),x=g%r,b=0;b<l;++b)for(var y=Math.floor(b/r),w=(x*r+b%r)*f,_=0;_<f;++_){var S=_+w+u*(y+s*(m+a*v));d[p++]=h[S]}return Dt(d,[i,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,r,o,i){var a=Te(e.shape,r.shape),s=xe(a,o),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=er(e.shape,a),f=er(r.shape,a),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=i(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),v=this.bufferSync(r),g=function(m){var x=s.indexToLoc(m),b=x.slice(-e.rank);l.forEach(function(S){return b[S]=0});var y=p.locToIndex(b),w=x.slice(-r.rank);f.forEach(function(S){return w[S]=0});var _=v.locToIndex(w);h[m]=i(u[y],c[_])};for(d=0;d<h.length;++d)g(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,r,o){var i=Te(e.shape,r.shape),a=xe(i,"float32"),s=xe(i,"float32"),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=er(e.shape,i),f=er(r.shape,i),h=a.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var v=p%u.length,g=p%c.length,m=o(u[2*v],u[2*v+1],c[2*g],c[2*g+1]);h[p]=m.real,d[p]=m.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(r.dataId).complexTensors.real),y=function(w){var _=a.indexToLoc(w),S=_.slice(-e.rank);l.forEach(function(A){return S[A]=0});var k=x.locToIndex(S),E=_.slice(-r.rank);f.forEach(function(A){return E[A]=0});var I=b.locToIndex(E),F=o(u[2*k],u[2*k+1],c[2*I],c[2*I+1]);h[w]=F.real,d[w]=F.imag};for(p=0;p<h.length;p++)y(p)}return this.complex(a.toTensor(),s.toTensor())},t.prototype.split=function(e,r,o){return Qh(e,r,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,r,o,i,a,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=r.shape[0],p=i[0],v=i[1],g=xe([d,p,v,h],"float32"),m=this.readSync(r.dataId),x=this.readSync(o.dataId),b=this.readSync(e.dataId),y=e.strides,w=g.strides,_=0;_<d;_++){var S=4*_,k=m[S],E=m[S+1],I=m[S+2],F=m[S+3],A=x[_];if(!(A>=c))for(var B=p>1?(I-k)*(l-1)/(p-1):0,W=v>1?(F-E)*(f-1)/(v-1):0,z=0;z<p;z++){var H=p>1?k*(l-1)+z*B:.5*(k+I)*(l-1);if(H<0||H>l-1)for(var V=0;V<v;V++)for(var L=0;L<h;L++){var K=L+V*w[2]+z*w[1]+_*w[0];g.values[K]=s}else if(a==="bilinear"){var Y=Math.floor(H),ne=Math.ceil(H),oe=H-Y;for(V=0;V<v;V++)if((Ne=v>1?E*(f-1)+V*W:.5*(E+F)*(f-1))<0||Ne>f-1)for(L=0;L<h;L++)K=L+V*w[2]+z*w[1]+_*w[0],g.values[K]=s;else{var pe=Math.floor(Ne),_e=Math.ceil(Ne),Ce=Ne-pe;for(L=0;L<h;L++){var be=b[K=L+pe*y[2]+Y*y[1]+A*y[0]],Re=b[K=L+_e*y[2]+Y*y[1]+A*y[0]],Se=b[K=L+pe*y[2]+ne*y[1]+A*y[0]],De=be+(Re-be)*Ce,We=Se+(b[K=L+_e*y[2]+ne*y[1]+A*y[0]]-Se)*Ce;K=L+V*w[2]+z*w[1]+_*w[0],g.values[K]=De+(We-De)*oe}}}else for(V=0;V<v;++V){var Ne;if((Ne=v>1?E*(f-1)+V*W:.5*(E+F)*(f-1))<0||Ne>f-1)for(L=0;L<h;L++)K=L+V*w[2]+z*w[1]+_*w[0],g.values[K]=s;else{var D=Math.round(Ne),T=Math.round(H);for(L=0;L<h;L++){var M=L+D*y[2]+T*y[1]+A*y[0],q=L+V*w[2]+z*w[1]+_*w[0];g.values[q]=b[M]}}}}}return g.toTensor()},t.prototype.sparseToDense=function(e,r,o,i){var a=Xi(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.sliceSize,l=a.strides,f=a.outputSize;return this.scatter(e,r,o,f,c,u,s,l,i,!1)},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=zh(e,r),s=a[0],u=a[1],c=a[2],l=a[3];if(u===0)return ft([],s,e.dtype);for(var f=new Vo([u,c],e.dtype),h=this.readSync(r.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var v=[],g=0,m=0;m<i;m++){var x=h[p*i+m];g+=x*l[m],v.push(x)}if(g<0||g>=e.size/c)throw new Error("Invalid indices: "+v+" does not index into "+e.shape);for(var b=0;b<c;b++)f.values[p*c+b]=d[g*c+b]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,r,o){var i=Xi(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=re(0);return this.scatter(e,r,o,l,u,s,a,c,f,!0)},t.prototype.fill=function(e,r,o){var i=Li(o=o||$o(r),le(e));return i.fill(r),P.makeTensor(i,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var r=Li(e.dtype,le(e.shape));return this.makeOutput(r,e.shape,e.dtype)},t.prototype.linspace=function(e,r,o){return Yh(e,r,o)},t.prototype.scatter=function(e,r,o,i,a,s,u,c,l,f){var h=[i/a,a],d=this.readSync(e.dataId),p=this.readSync(r.dataId);if(i===0)return ft([],o,r.dtype);var v=new Vo(h,r.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var g=0;g<s;g++){for(var m=[],x=0,b=0;b<u;b++){var y=d[g*u+b];m.push(y),x+=y*c[b]}if(x<0||x>=i/a)throw new Error("Invalid indices: "+m+" does not index into "+o);for(var w=0;w<a;w++)f?v.values[x*a+w]+=p[g*a+w]:v.values[x*a+w]=r.rank===0?p[0]:p[g*a+w]}return v.toTensor().reshape(o)},t}(Kh);P.registerBackend("cpu",function(){return new yw},1);for(var ls=0,Ul=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;X(i,"NonMaxSuppressionWithScore");var d=Tu(h.data.get(i.dataId).values,h.data.get(a.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e;X(r,"square");for(var i=o.data.get(r.dataId).values,a=new Float32Array(i.length),s=0;s<i.length;++s){var u=i[s];a[s]=u*u}return{dataId:o.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:Go,backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e;X([o,i],Go);var s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,c=function(h,d,p,v,g,m){var x=Te(h,d),b=x.length,y=bn(x),w=Uo(g,le(x)),_=h.length,S=d.length,k=bn(h),E=bn(d),I=er(h,x),F=er(d,x);if(I.length+F.length===0)for(var A=0;A<w.length;++A)w[A]=m(p[A%p.length],v[A%v.length]);else{var B=function(W){var z=km(W,b,y),H=z.slice(-_);I.forEach(function(Y){return H[Y]=0});var V=cl(H,_,k),L=z.slice(-S);F.forEach(function(Y){return L[Y]=0});var K=cl(L,S,E);w[W]=m(p[V],v[K])};for(A=0;A<w.length;++A)B(A)}return[w,x]}(o.shape,i.shape,s,u,o.dtype,function(h,d){var p=h-d;return p*p}),l=c[0],f=c[1];return{dataId:a.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];ls<Ul.length;ls++)wh(Ul[ls]);var Ur,xw=function(n){this.variableNames=["A"];var t=yt(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},bw=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=yt(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var fs=0,Vl=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t.pixels,i=r.numChannels,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,i];(s||a)&&(Ur==null&&(Ur=document.createElement("canvas").getContext("2d")),Ur.canvas.width=c,Ur.canvas.height=l,Ur.drawImage(o,0,0,c,l),o=Ur.canvas);var d=e.makeTensorInfo(f,"int32");e.texData.get(d.dataId).usage=Ut.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=G().getBool("WEBGL_PACK")?new bw(h):new xw(h),v=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs;zi("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,d=Tu(h.readSync(i.dataId),h.readSync(a.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e,i=new Ee(r.shape,"return x * x;");return o.runWebGLProgram(i,[r],r.dtype)}},{kernelName:Go,backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e,s=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Tn("return (a - b) * (a - b);",o.shape,i.shape):new Xe("return (a - b) * (a - b);",o.shape,i.shape);return a.compileAndRun(s,[o,i])}}];fs<Vl.length;fs++)wh(Vl[fs]);for(var hs=0,zl=[{kernelName:"Square",gradFunc:function(n,t){var e=t[0];return{x:function(){return n.mul(e.toFloat().mul(2))}}}},{kernelName:Go,gradFunc:function(n,t){var e=t[0],r=t[1],o=re(2);return{a:function(){return wt(n,wt(o,nt(e,r)))},b:function(){return wt(n,wt(o,nt(r,e)))}}}}];hs<zl.length;hs++)mm(zl[hs]);var ww=function(){function n(){}return n.prototype.fetch=function(t,e){return fetch(t,e)},n.prototype.now=function(){return performance.now()},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},n}();G().get("IS_BROWSER")&&G().setPlatform("browser",new ww);var ds,_w=function(){return require("node-fetch")},Cw=function(){function n(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return n.prototype.fetch=function(t,e){return G().global.fetch!=null?G().global.fetch(t,e):(ds==null&&(ds=_w()),ds(t,e))},n.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},n}();G().get("IS_NODE")&&G().setPlatform("node",new Cw);var Ks={float32:4,int32:4,uint16:2,uint8:1,bool:1},ta=4;function Gd(n,t){for(var e={},r=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=le(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=Ks[d.dtype],v=n.slice(r,r+f*p),g=d.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")h=Float32Array.from(g,function(_){return _*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(g,function(_){return Math.round(_*d.scale+d.min)})}r+=f*p}else if(c==="string"){var m=le(s.shape);h=[];for(var x=0;x<m;x++){var b=new Uint32Array(n.slice(r,r+ta))[0];r+=ta;var y=new Uint8Array(n.slice(r,r+b));h.push(y),r+=b}}else{var w=Ks[c];if(v=n.slice(r,r+f*w),c==="float32")h=new Float32Array(v);else if(c==="int32")h=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(v)}r+=f*w}e[u]=ft(h,l,c)},i=0,a=t;i<a.length;i++)o(a[i]);return e}function Ew(n){if(n===null)throw new Error("Invalid input value: "+JSON.stringify(n));var t=0,e=[];n.forEach(function(i){if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+i.constructor.name)});var r=new Uint8Array(t),o=0;return e.forEach(function(i){r.set(new Uint8Array(i.buffer),o),o+=i.byteLength}),r.buffer}var Xs=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Hl(n){return Xs?Buffer.byteLength(n):new Blob([n]).size}function Yu(n){var t=0;n.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),r=0;return n.forEach(function(o){e.set(new Uint8Array(o),r),r+=o.byteLength}),e.buffer}function Gl(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);var t=n.split("/");return t[t.length-1]}function ni(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Hl(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Hl(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}var Vt=function(){function n(){this.saveRouters=[],this.loadRouters=[]}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerSaveRouter=function(t){n.getInstance().saveRouters.push(t)},n.registerLoadRouter=function(t){n.getInstance().loadRouters.push(t)},n.getSaveHandlers=function(t){return n.getHandlers(t,"save")},n.getLoadHandlers=function(t,e){return n.getHandlers(t,"load",e)},n.getHandlers=function(t,e,r){var o=[];return(e==="load"?n.getInstance().loadRouters:n.getInstance().saveRouters).forEach(function(i){var a=i(t,r);a!==null&&o.push(a)}),o},n}(),to="://",or=function(){function n(){this.managers={}}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerManager=function(t,e){R(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(to)&&(t=t.slice(0,t.indexOf(to))),R(t.length>0,function(){return"scheme must not be an empty string."});var r=n.getInstance();R(r.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),r.managers[t]=e},n.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},n.getSchemes=function(){return Object.keys(this.getInstance().managers)},n}();function ki(n){if(n.indexOf(to)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+or.getSchemes().join(","));return{scheme:n.split(to)[0],path:n.split(to)[1]}}function jl(n,t,e){return e===void 0&&(e=!1),ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f;return se(this,function(h){switch(h.label){case 0:return R(n!==t,function(){return"Old path and new path are the same: '"+n+"'"}),R((r=Vt.getLoadHandlers(n)).length>0,function(){return"Copying failed because no load handler is found for source URL "+n+"."}),R(r.length<2,function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+n+"."}),o=r[0],R((i=Vt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),R(i.length<2,function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."}),a=i[0],s=ki(n).scheme,u=ki(n).path,c=s===ki(n).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,or.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,a.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,or.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var Ir="models_store",tr="model_info_store";function jd(){if(!G().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var n=window||self,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function $s(n){var t=n.result;t.createObjectStore(Ir,{keyPath:"modelPath"}),t.createObjectStore(tr,{keyPath:"modelPath"})}var no=function(){function n(t){if(this.indexedDB=jd(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){return se(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},n.prototype.load=function(){return ae(this,void 0,void 0,function(){return se(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},n.prototype.databaseAction=function(t,e){var r=this;return new Promise(function(o,i){var a=r.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return $s(a)},a.onsuccess=function(){var s=a.result;if(e==null){var u=s.transaction(Ir,"readonly"),c=u.objectStore(Ir).get(r.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),i(new Error("Cannot find model with path '"+r.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),i(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=ni(e),h=s.transaction(tr,"readwrite"),d=h.objectStore(tr),p=d.put({modelPath:r.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var v=(l=s.transaction(Ir,"readwrite")).objectStore(Ir).put({modelPath:r.modelPath,modelArtifacts:e,modelArtifactsInfo:f});v.onsuccess=function(){return o({modelArtifactsInfo:f})},v.onerror=function(g){var m=(d=h.objectStore(tr)).delete(r.modelPath);m.onsuccess=function(){return s.close(),i(v.error)},m.onerror=function(x){return s.close(),i(v.error)}}},p.onerror=function(v){return s.close(),i(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},a.onerror=function(s){return i(a.error)}})},n.URL_SCHEME="indexeddb://",n}(),ql=function(n){return G().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(no.URL_SCHEME)?(t=n.slice(no.URL_SCHEME.length),new no(t)):null;var t};Vt.registerSaveRouter(ql),Vt.registerLoadRouter(ql);var Iw=function(){function n(){this.indexedDB=jd()}return n.prototype.listModels=function(){return ae(this,void 0,void 0,function(){var t=this;return se(this,function(e){return[2,new Promise(function(r,o){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return $s(i)},i.onsuccess=function(){var a=i.result,s=a.transaction(tr,"readonly"),u=s.objectStore(tr).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}r(c)},u.onerror=function(c){return a.close(),o(u.error)},s.oncomplete=function(){return a.close()}},i.onerror=function(a){return o(i.error)}})]})})},n.prototype.removeModel=function(t){return ae(this,void 0,void 0,function(){var e=this;return se(this,function(r){var o;return t=(o=t).startsWith(no.URL_SCHEME)?o.slice(no.URL_SCHEME.length):o,[2,new Promise(function(i,a){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return $s(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(tr,"readwrite"),f=l.objectStore(tr),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),a(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=f.delete(t),p=function(){var v=(u=c.transaction(Ir,"readwrite")).objectStore(Ir).delete(t);v.onsuccess=function(){return i(h.result.modelArtifactsInfo)},v.onerror=function(g){return a(h.error)}};d.onsuccess=p,d.onerror=function(v){return p(),c.close(),a(h.error)}},h.onerror=function(d){return c.close(),a(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return a(s.error)}})]})})},n}();if(G().getBool("IS_BROWSER"))try{or.registerManager(no.URL_SCHEME,new Iw)}catch{}var On="/",Kr="tensorflowjs_models",qd="info",Rw="model_topology",Sw="weight_specs",kw="weight_data",Aw="model_metadata";function Kd(n){return{info:[Kr,n,qd].join(On),topology:[Kr,n,Rw].join(On),weightSpecs:[Kr,n,Sw].join(On),weightData:[Kr,n,kw].join(On),modelMetadata:[Kr,n,Aw].join(On)}}function Dw(n){var t=n.split(On);if(t.length<3)throw new Error("Invalid key format: "+n);return t.slice(1,t.length-1).join(On)}var ro=function(){function n(t){if(!G().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Kd(this.modelPath)}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){var e,r,o;return se(this,function(i){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),o=ni(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(a){if(Xs)return Buffer.from(a).toString("base64");for(var s=new Uint8Array(a),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},n.prototype.load=function(){return ae(this,void 0,void 0,function(){var t,e,r,o,i,a,s;return se(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(r=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=r,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,e.userDefinedMetadata=a.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Xs){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer}(s),[2,e]})})},n.URL_SCHEME="localstorage://",n}(),Kl=function(n){return G().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ro.URL_SCHEME)?(t=n.slice(ro.URL_SCHEME.length),new ro(t)):null;var t};Vt.registerSaveRouter(Kl),Vt.registerLoadRouter(Kl);var Tw=function(){function n(){R(G().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),R(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return n.prototype.listModels=function(){return ae(this,void 0,void 0,function(){var t,e,r,o,i,a;return se(this,function(s){for(t={},e=Kr+On,r=On+qd,o=0;o<this.LS.length;++o)(i=this.LS.key(o)).startsWith(e)&&i.endsWith(r)&&(a=Dw(i),t[a]=JSON.parse(this.LS.getItem(i)));return[2,t]})})},n.prototype.removeModel=function(t){return ae(this,void 0,void 0,function(){var e,r;return se(this,function(o){var i;if(t=(i=t).startsWith(ro.URL_SCHEME)?i.slice(ro.URL_SCHEME.length):i,e=Kd(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return r=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,r]})})},n}();if(G().getBool("IS_BROWSER"))try{or.registerManager(ro.URL_SCHEME,new Tw)}catch{}var Nw="model",Fw=".json",Pw=".weights.bin";function Xl(n){return new Promise(function(t){return setTimeout(t)}).then(n)}var ps=function(){function n(t){if(!G().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(n.URL_SCHEME)&&(t=t.slice(n.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Nw),this.modelTopologyFileName=t+Fw,this.weightDataFileName=t+Pw}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s;return se(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:r},i=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(a=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,Xl(function(){return a.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Xl(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:ni(t)}]}})})},n.URL_SCHEME="downloads://",n}(),Mw=function(){function n(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return n.prototype.load=function(){return ae(this,void 0,void 0,function(){var t,e,r=this;return se(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(i,a){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&i({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=r.checkManifestAndWeightFiles(f,e)}catch(g){return void a(g)}var d=[],p=[],v=[];f.forEach(function(g){g.paths.forEach(function(m){p.push(m),v.push(null)}),d.push.apply(d,g.weights)}),f.forEach(function(g){g.paths.forEach(function(m){var x=new FileReader;x.onload=function(b){var y=b.target.result,w=p.indexOf(m);v[w]=y,v.indexOf(null)===-1&&i({modelTopology:l,weightSpecs:d,weightData:Yu(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(b){return a("Failed to weights data from file of path '"+m+"'.")},x.readAsArrayBuffer(h[m])})})}else a(new Error("weightManifest field is missing from file "+t.name))}else a(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return a("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},n.prototype.checkManifestAndWeightFiles=function(t,e){for(var r=[],o=e.map(function(u){return Gl(u.name)}),i={},a=0,s=t;a<s.length;a++)s[a].paths.forEach(function(u){var c=Gl(u);if(r.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(r.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");i[u]=e[o.indexOf(c)]});if(r.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+r.length+") and the number of weight files provided ("+e.length+").");return i},n}();function $l(n,t,e,r){(function(i){R(i!=null&&Array.isArray(i)&&i.length>0,function(){return"promises must be a none empty array"})})(n),function(i,a){R(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+i}),R(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+a}),R(a>=i,function(){return"startFraction must be no more than endFraction, but got startFraction "+i+" and endFraction "+a})}(e=e??0,r=r??1);var o=0;return Promise.all(n.map(function(i){return i.then(function(a){var s=e+ ++o/n.length*(r-e);return t(s),a}),i}))}function Xd(n,t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l;return se(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?G().platform.fetch:t.fetchFunc,r=n.map(function(h){return e(h,t.requestInit,{isBinary:!0})}),o=0,i=.5,t.onProgress!=null?[3,2]:[4,Promise.all(r)];case 1:return a=f.sent(),[3,4];case 2:return[4,$l(r,t.onProgress,o,i)];case 3:a=f.sent(),f.label=4;case 4:return s=a.map(function(h){return h.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,$l(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function Yl(n){var t=this;return function(e,r,o){return r===void 0&&(r=""),ae(t,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p;return se(this,function(v){switch(v.label){case 0:if(i=e.map(function(){return!1}),a={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(g,m){var x=0;g.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,w=Ks[y]*le(b.shape),_=function(){i[m]=!0,a[m]==null&&(a[m]=[]),a[m].push({manifestEntry:b,groupOffset:x,sizeBytes:w})};o!=null?o.forEach(function(S,k){S===b.name&&(_(),s[k]=!0)}):_(),u.push(b.name),x+=w})}),!s.every(function(g){return g}))throw c=o.filter(function(g,m){return!s[m]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=i.reduce(function(g,m,x){return m&&g.push(x),g},[]),f=[],l.forEach(function(g){e[g].paths.forEach(function(m){var x=r+(r.endsWith("/")?"":"/")+m;f.push(x)})}),[4,n(f)];case 1:return h=v.sent(),d={},p=0,l.forEach(function(g){for(var m=e[g].paths.length,x=0,b=0;b<m;b++)x+=h[p+b].byteLength;for(var y=new ArrayBuffer(x),w=new Uint8Array(y),_=0,S=0;S<m;S++){var k=new Uint8Array(h[p+S]);w.set(k,_),_+=k.byteLength}a[g].forEach(function(E){var I=Gd(y.slice(E.groupOffset,E.groupOffset+E.sizeBytes),[E.manifestEntry]);for(var F in I)d[F]=I[F]}),p+=m}),[2,d]}})})}}Vt.registerSaveRouter(function(n){return G().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ps.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new ps(t)}(n.slice(ps.URL_SCHEME.length)):null});var $d=function(){function n(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(R(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=G().platform.fetch,R(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&R(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){var e,r,o,i;return se(this,function(a){switch(a.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:r},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:ni(t),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}})})},n.prototype.load=function(){return ae(this,void 0,void 0,function(){var t,e,r,o,i,a,s,u,c,l,f,h;return se(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),r="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",new Error(r);case 5:if(o=e.modelTopology,i=e.weightsManifest,a=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&i==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return i==null?[3,7]:[4,this.loadWeights(i)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:a,convertedBy:s,format:u}]}})})},n.prototype.loadWeights=function(t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f,h;return se(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,r=function(p){var v=p.lastIndexOf("/"),g=p.lastIndexOf("?"),m=p.substring(0,v),x=g>v?p.substring(g):"";return[m+"/",x]}(e),o=r[0],i=r[1],a=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(p){p.paths.forEach(function(v){f.push(a+v+i)})}),[4,Xd(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,Yu(h)]]}})})},n.URL_SCHEME_REGEX=/^https?:\/\//,n}();function Ys(n){return n.match($d.URL_SCHEME_REGEX)!=null}var Jl=function(n,t){return typeof fetch>"u"?null:(Array.isArray(n)?n.every(function(e){return Ys(e)}):Ys(n))?Js(n,{onProgress:t}):null};function Js(n,t){return new $d(n,t)}Vt.registerSaveRouter(Jl),Vt.registerLoadRouter(Jl);var vs=function(){function n(t){this.modelArtifacts=t}return n.prototype.load=function(){return ae(this,void 0,void 0,function(){return se(this,function(t){return[2,this.modelArtifacts]})})},n}(),Ow=function(){function n(t){this.saveHandler=t}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){return se(this,function(e){return[2,this.saveHandler(t)]})})},n}(),Yd=Object.freeze({browserFiles:function(n){return new Mw(n)},browserHTTPRequest:function(n,t){return Js(n,t)},concatenateArrayBuffers:Yu,decodeWeights:Gd,encodeWeights:function(n,t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s=this;return se(this,function(u){switch(u.label){case 0:for(e=[],r=[],o=Array.isArray(n)?n.map(function(c){return c.name}):Object.keys(n),i=function(c){var l=o[c],f=Array.isArray(n)?n[c].tensor:n[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise(function(p){return ae(s,void 0,void 0,function(){var v,g,m,x,b,y,w;return se(this,function(_){switch(_.label){case 0:return[4,f.bytes()];case 1:for(v=_.sent(),g=v.reduce(function(S,k){return S+k.length},0)+ta*v.length,m=new Uint8Array(g),x=0,b=0;b<v.length;b++)y=v[b],w=new Uint8Array(new Uint32Array([y.length]).buffer),m.set(w,x),x+=ta,m.set(y,x),x+=y.length;return p(m),[2]}})})});r.push(d)}else r.push(f.data());t!=null&&(h.group=t),e.push(h)},a=0;a<o.length;++a)i(a);return[4,Promise.all(r)];case 1:return[2,{data:Ew(u.sent()),specs:e}]}})})},fromMemory:function(n,t,e,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new vs(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new vs({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new vs({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r}))},getLoadHandlers:function(n,t){return Vt.getLoadHandlers(n,t)},getModelArtifactsInfoForJSON:ni,getSaveHandlers:function(n){return Vt.getSaveHandlers(n)},http:Js,isHTTPScheme:Ys,loadWeights:function(n,t,e,r){return t===void 0&&(t=""),ae(this,void 0,void 0,function(){return se(this,function(o){return[2,Yl(function(i){return Xd(i,{requestInit:r})})(n,t,e)]})})},registerLoadRouter:function(n){return Vt.registerLoadRouter(n)},registerSaveRouter:function(n){return Vt.registerSaveRouter(n)},weightsLoaderFactory:Yl,withSaveHandler:function(n){return new Ow(n)},copyModel:function(n,t){return ae(this,void 0,void 0,function(){return se(this,function(e){return[2,jl(n,t,!1)]})})},listModels:function(){return ae(this,void 0,void 0,function(){var n,t,e,r,o,i,a;return se(this,function(s){switch(s.label){case 0:n=or.getSchemes(),t={},e=0,r=n,s.label=1;case 1:return e<r.length?(o=r[e],[4,or.getManager(o).listModels()]):[3,4];case 2:for(a in i=s.sent())t[o+to+a]=i[a];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(n,t){return ae(this,void 0,void 0,function(){return se(this,function(e){return[2,jl(n,t,!0)]})})},removeModel:function(n){return ae(this,void 0,void 0,function(){var t;return se(this,function(e){return t=ki(n),[2,or.getManager(t.scheme).removeModel(t.path)]})})}}),Vr;N({confusionMatrix_:function(n,t,e){var r=C(n,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");R(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),R(r.rank===1,function(){return"Expected the rank of labels to be 1, but got "+r.rank}),R(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),R(r.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),R(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var i=zs(r.asType("int32"),e),a=zs(o.asType("int32"),e);return i.transpose().matMul(a).asType("int32")}});var Bw=N({fromPixels_:function(n,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,r=!1,o=!1,i=!1,a=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)i=!0;else{if(n.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+n.constructor.name);a=!0}if(o&&o&&n.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(bh("FromPixels",P.backendName)!=null)return P.runKernel("FromPixels",{pixels:n},{numChannels:t});var s,u,c=o?[n.videoWidth,n.videoHeight]:[n.width,n.height],l=c[0],f=c[1];if(a?s=n.getContext("2d").getImageData(0,0,l,f).data:r||e?s=n.data:(i||o)&&(Vr==null&&(Vr=document.createElement("canvas").getContext("2d")),Vr.canvas.width=l,Vr.canvas.height=f,Vr.drawImage(n,0,0,l,f),s=Vr.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var d=0;d<h;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return Iu(u,[f,l,t],"int32")}}),Ju=Object.freeze({toPixels:function(n,t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f,h,d,p,v,g,m,x,b,y,w,_,S,k;return se(this,function(E){switch(E.label){case 0:if(e=C(n,"img","toPixels"),n instanceof je||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(r=e.shape.slice(0,2),o=r[0],i=r[1],(a=e.rank===2?1:e.shape[2])>4||a===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);return[4,e.data()];case 1:return s=E.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=E.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(v=e.dtype==="float32"?255:1,g=new Uint8ClampedArray(i*o*4),m=0;m<o*i;++m)x=void 0,b=void 0,y=void 0,w=void 0,a===1?(x=s[m]*v,b=s[m]*v,y=s[m]*v,w=255):a===3?(x=s[3*m]*v,b=s[3*m+1]*v,y=s[3*m+2]*v,w=255):a===4&&(x=s[4*m]*v,b=s[4*m+1]*v,y=s[4*m+2]*v,w=s[4*m+3]*v),g[(_=4*m)+0]=Math.round(x),g[_+1]=Math.round(b),g[_+2]=Math.round(y),g[_+3]=Math.round(w);return t!=null&&(t.width=i,t.height=o,S=t.getContext("2d"),k=new ImageData(g,i,o),S.putImageData(k,0,0)),e!==n&&e.dispose(),[2,g]}})})},fromPixels:Bw}),Lw=function(){function n(){}return n.prototype.getClassName=function(){return this.constructor.className},n.fromConfig=function(t,e){return new t(e)},n}(),Ww=function(){function n(){this.classNameMap={}}return n.getMap=function(){return n.instance==null&&(n.instance=new n),n.instance},n.register=function(t){n.getMap().classNameMap[t.className]=[t,t.fromConfig]},n}();function Mr(n){R(n.className!=null,function(){return"Class being registered does not have the static className property defined."}),R(typeof n.className=="string",function(){return"className is required to be a string, but got type "+typeof n.className}),R(n.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Ww.register(n)}var Or=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return on(t,n),t.prototype.minimize=function(e,r,o){r===void 0&&(r=!1);var i=this.computeGradients(e,o),a=i.value,s=i.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return Nt(s),r?a:(a.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,r){return $y(e,r)},t.prototype.dispose=function(){this.iterations_!=null&&Nt(this.iterations_)},t.prototype.saveIterations=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:re(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){switch(o.label){case 0:return r=this,[4,e[0].tensor.data()];case 1:return r.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(Lw);Object.defineProperty(Or,Symbol.hasInstance,{value:function(n){return n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null}});var Uw=function(n){function t(e,r,o){o===void 0&&(o=null);var i=n.call(this)||this;return i.learningRate=e,i.rho=r,i.epsilon=o,i.accumulatedGrads=[],i.accumulatedUpdates=[],o==null&&(i.epsilon=P.backend.epsilon()),i}return on(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=P.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accum_grad",variable:ie(function(){return Fe(a).variable(!1)})}),r.accumulatedUpdates[i]==null&&(r.accumulatedUpdates[i]={originalName:o+"/accum_var",variable:ie(function(){return Fe(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable,c=r.accumulatedUpdates[i].variable;ie(function(){var l=u.mul(r.rho).add(s.square().mul(1-r.rho)),f=c.add(r.epsilon).sqrt().div(u.add(r.epsilon).sqrt()).mul(s),h=c.mul(r.rho).add(f.square().mul(1-r.rho));u.assign(l),c.assign(h);var d=f.mul(-r.learningRate).add(a);a.assign(d)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Nt(this.accumulatedGrads.map(function(e){return e.variable})),Nt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){var e;return se(this,function(r){switch(r.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=e.length/2,this.accumulatedGrads=e.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.rho,r.epsilon)},t.className="Adadelta",t}(Or);Mr(Uw);var Vw=function(n){function t(e,r){r===void 0&&(r=.1);var o=n.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=r,o.accumulatedGrads=[],o}return on(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=P.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accumulator",variable:ie(function(){return wn(a.shape,r.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable;ie(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(P.backend.epsilon()).sqrt()).mul(-r.learningRate).add(a);a.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&Nt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,r){return new e(r.learningRate,r.initialAccumulatorValue)},t.className="Adagrad",t}(Or);Mr(Vw);var zw=function(n){function t(e,r,o,i){i===void 0&&(i=null);var a=n.call(this)||this;return a.learningRate=e,a.beta1=r,a.beta2=o,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],ie(function(){a.accBeta1=re(r).variable(),a.accBeta2=re(o).variable()}),i==null&&(a.epsilon=P.backend.epsilon()),a}return on(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);ie(function(){var i=nt(1,r.accBeta1),a=nt(1,r.accBeta2);o.forEach(function(s,u){var c=P.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ie(function(){return Fe(c).variable(!1)})}),r.accumulatedSecondMoment[u]==null&&(r.accumulatedSecondMoment[u]={originalName:s+"/v",variable:ie(function(){return Fe(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedSecondMoment[u].variable,d=f.mul(r.beta1).add(l.mul(1-r.beta1)),p=h.mul(r.beta2).add(l.square().mul(1-r.beta2)),v=d.div(i),g=p.div(a);f.assign(d),h.assign(p);var m=v.div(g.sqrt().add(r.epsilon)).mul(-r.learningRate).add(c);c.assign(m)}}),r.accBeta1.assign(r.accBeta1.mul(r.beta1)),r.accBeta2.assign(r.accBeta2.mul(r.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Nt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&Nt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){var e;return se(this,function(r){switch(r.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){var r,o=this;return se(this,function(i){switch(i.label){case 0:return[4,this.extractIterations(e)];case 1:return e=i.sent(),ie(function(){o.accBeta1.assign(Zi(o.beta1,o.iterations_+1)),o.accBeta2.assign(Zi(o.beta2,o.iterations_+1))}),r=e.length/2,this.accumulatedFirstMoment=e.slice(0,r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(r,2*r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon)},t.className="Adam",t}(Or);Mr(zw);var Hw=function(n){function t(e,r,o,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var s=n.call(this)||this;return s.learningRate=e,s.beta1=r,s.beta2=o,s.epsilon=i,s.decay=a,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],ie(function(){s.iteration=re(0).variable(),s.accBeta1=re(r).variable()}),i==null&&(s.epsilon=P.backend.epsilon()),s}return on(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);ie(function(){var i=nt(1,r.accBeta1),a=Qt(-r.learningRate,r.iteration.mul(r.decay).add(1));o.forEach(function(s,u){var c=P.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Fe(c).variable(!1)}),r.accumulatedWeightedInfNorm[u]==null&&(r.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:Fe(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedWeightedInfNorm[u].variable,d=f.mul(r.beta1).add(l.mul(1-r.beta1)),p=h.mul(r.beta2),v=l.abs(),g=p.maximum(v);f.assign(d),h.assign(g);var m=a.div(i).mul(d.div(g.add(r.epsilon))).add(c);c.assign(m)}}),r.iteration.assign(r.iteration.add(1)),r.accBeta1.assign(r.accBeta1.mul(r.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Nt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&Nt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)},t.className="Adamax",t}(Or);Mr(Hw);var Jd=function(n){function t(e){var r=n.call(this)||this;return r.learningRate=e,r.setLearningRate(e),r}return on(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=Array.isArray(e)?e[i].tensor:e[o];if(a!=null){var s=P.registeredVariables[o];ie(function(){var u=r.c.mul(a).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=cy(re(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=r.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,r){return new e(r.learningRate)},t.className="SGD",t}(Or);Mr(Jd);var Gw=function(n){function t(e,r,o){o===void 0&&(o=!1);var i=n.call(this,e)||this;return i.learningRate=e,i.momentum=r,i.useNesterov=o,i.accumulations=[],i.m=re(i.momentum),i}return on(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=P.registeredVariables[o];r.accumulations[i]==null&&(r.accumulations[i]={originalName:o+"/momentum",variable:ie(function(){return Fe(a).variable(!1)})});var s=r.accumulations[i].variable,u=Array.isArray(e)?e[i].tensor:e[o];u!=null&&ie(function(){var c,l=r.m.mul(s).add(u);c=r.useNesterov?r.c.mul(u.add(l.mul(r.m))).add(a):r.c.mul(l).add(a),s.assign(l),a.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Nt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,r){return new e(r.learningRate,r.momentum,r.useNesterov)},t.className="Momentum",t}(Jd);Mr(Gw);var jw=function(n){function t(e,r,o,i,a){r===void 0&&(r=.9),o===void 0&&(o=0),i===void 0&&(i=null),a===void 0&&(a=!1);var s=n.call(this)||this;if(s.learningRate=e,s.decay=r,s.momentum=o,s.epsilon=i,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=a,i==null&&(s.epsilon=P.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return on(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=P.registeredVariables[o];r.accumulatedMeanSquares[i]==null&&(r.accumulatedMeanSquares[i]={originalName:o+"/rms",variable:ie(function(){return Fe(a).variable(!1)})}),r.accumulatedMoments[i]==null&&(r.accumulatedMoments[i]={originalName:o+"/momentum",variable:ie(function(){return Fe(a).variable(!1)})}),r.accumulatedMeanGrads[i]==null&&r.centered&&(r.accumulatedMeanGrads[i]={originalName:o+"/mg",variable:ie(function(){return Fe(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedMeanSquares[i].variable,c=r.accumulatedMoments[i].variable;ie(function(){var l=u.mul(r.decay).add(s.square().mul(1-r.decay));if(r.centered){var f=r.accumulatedMeanGrads[i].variable,h=f.mul(r.decay).add(s.mul(1-r.decay)),d=c.mul(r.momentum).add(s.mul(r.learningRate).div(l.sub(h.square().add(r.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=a.sub(d);a.assign(p)}else{var v=u.mul(r.decay).add(s.square().mul(1-r.decay));d=c.mul(r.momentum).add(s.mul(r.learningRate).div(v.add(r.epsilon).sqrt())),u.assign(v),c.assign(d),p=a.sub(d),a.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Nt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&Nt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&Nt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){var e;return se(this,function(r){switch(r.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*r,3*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,r){return new e(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)},t.className="RMSProp",t}(Or);Mr(jw);je.prototype.squaredDifference=function(n){return hd(this,n)},U=mw;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qs=function(n,t){return Qs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])},Qs(n,t)};function ye(n,t){Qs(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var gt=function(){return gt=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},gt.apply(this,arguments)};function he(n,t,e,r){function o(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(l){try{c(r.next(l))}catch(f){a(f)}}function u(l){try{c(r.throw(l))}catch(f){a(f)}}function c(l){l.done?i(l.value):o(l.value).then(s,u)}c((r=r.apply(n,[])).next())})}function de(n,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(n,e)}catch(l){c=[6,l],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function To(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;for(var r=Array(n),o=0,t=0;t<e;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var oo=function(){function n(t,e){if(!Sr(t)||!Sr(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),n.prototype.reverse=function(){return new n(1/this.width,1/this.height)},n}();function Ia(n,t){return n instanceof je&&n.shape.length===t}function qw(n){return Ia(n,2)}function Ra(n){return Ia(n,3)}function ir(n){return Ia(n,4)}function Kw(n){return n%1!==0}function Ql(n){return n%2===0}function Xw(n,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(n*e)/e}function Zl(n){return n&&n.width&&n.height}function $w(n,t){var e=n.width,r=n.height,o=t/Math.max(r,e);return new oo(Math.round(e*o),Math.round(r*o))}function Qu(n){return n.reduce(function(t,e){return t.add(e)},new Oe(0,0)).div(new Oe(n.length,n.length))}function jo(n,t,e){return Array(n).fill(0).map(function(r,o){return t+o*e})}function Sr(n){return!!n&&n!==1/0&&n!==-1/0&&!isNaN(n)||n===0}function ef(n){return Sr(n)&&0<=n&&n<=1}var Oe=function(){function n(t,e){this._x=t,this._y=e}return Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),n.prototype.add=function(t){return new n(this.x+t.x,this.y+t.y)},n.prototype.sub=function(t){return new n(this.x-t.x,this.y-t.y)},n.prototype.mul=function(t){return new n(this.x*t.x,this.y*t.y)},n.prototype.div=function(t){return new n(this.x/t.x,this.y/t.y)},n.prototype.abs=function(){return new n(Math.abs(this.x),Math.abs(this.y))},n.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},n.prototype.floor=function(){return new n(Math.floor(this.x),Math.floor(this.y))},n}(),cr=function(){function n(t,e){e===void 0&&(e=!0);var r=t||{},o=[r.left,r.top,r.right,r.bottom].every(Sr),i=[r.x,r.y,r.width,r.height].every(Sr);if(!i&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(r));var a=i?[r.x,r.y,r.width,r.height]:[r.left,r.top,r.right-r.left,r.bottom-r.top],s=a[0],u=a[1],c=a[2],l=a[3];n.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return n.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Sr)},n.assertIsValidBox=function(t,e,r){if(r===void 0&&(r=!1),!n.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!r&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topLeft",{get:function(){return new Oe(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topRight",{get:function(){return new Oe(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomLeft",{get:function(){return new Oe(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomRight",{get:function(){return new Oe(this.right,this.bottom)},enumerable:!0,configurable:!0}),n.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.round(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.floor(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.toSquare=function(){var t=this,e=t.x,r=t.y,o=t.width,i=t.height,a=Math.abs(o-i);return o<i&&(e-=a/2,o+=a),i<o&&(r-=a/2,i+=a),new n({x:e,y:r,width:o,height:i})},n.prototype.rescale=function(t){var e=Zl(t)?t.width:t,r=Zl(t)?t.height:t;return new n({x:this.x*e,y:this.y*r,width:this.width*e,height:this.height*r})},n.prototype.pad=function(t,e){var r=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=r[0],i=r[1],a=r[2],s=r[3];return new n({x:o,y:i,width:a,height:s})},n.prototype.clipAtImageBorders=function(t,e){var r=this,o=r.x,i=r.y,a=r.right,s=r.bottom,u=Math.max(o,0),c=Math.max(i,0),l=a-u,f=s-c,h=Math.min(l,t-u),d=Math.min(f,e-c);return new n({x:u,y:c,width:h,height:d}).floor()},n.prototype.shift=function(t,e){var r=this,o=r.width,i=r.height,a=this.x+t,s=this.y+e;return new n({x:a,y:s,width:o,height:i})},n.prototype.padAtBorders=function(t,e){var r=this.width+1,o=this.height+1,i=1,a=1,s=r,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+r,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:a,edy:u,dx:i,edx:s,y:l,ey:h,x:c,ex:f,w:r,h:o}},n.prototype.calibrate=function(t){return new n({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},n}(),Sa=function(n){ye(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{left:e,top:r,right:o,bottom:i},a)||this}return t}(cr),Qd=function(){function n(t,e,r,o,i){this._imageDims=new oo(i.width,i.height),this._score=t,this._classScore=e,this._className=r,this._box=new cr(o).rescale(this._imageDims)}return Object.defineProperty(n.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativeBox",{get:function(){return new cr(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new n(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},n}(),Rn=function(n){ye(t,n);function t(e,r,o){return n.call(this,e,e,"",r,o)||this}return t.prototype.forSize=function(e,r){var o=n.prototype.forSize.call(this,e,r),i=o.score,a=o.relativeBox,s=o.imageDims;return new t(i,a,s)},t}(Qd);function Yw(n,t,e){e===void 0&&(e=!0);var r=Math.max(0,Math.min(n.right,t.right)-Math.max(n.left,t.left)),o=Math.max(0,Math.min(n.bottom,t.bottom)-Math.max(n.top,t.top)),i=r*o;return e?i/(n.area+t.area-i):i/Math.min(n.area,t.area)}function Jw(n){var t=n.map(function(s){return s.x}),e=n.map(function(s){return s.y}),r=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),i=t.reduce(function(s,u){return s<u?u:s},0),a=e.reduce(function(s,u){return s<u?u:s},0);return new Sa(r,o,i,a)}function qo(n,t,e,r){r===void 0&&(r=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),i=[],a=function(){var s=o.pop();i.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=n[s],d=n[f];c.push(Yw(h,d,r))}o=o.filter(function(p,v){return c[v]<=e})};o.length>0;)a();return i}function ri(n,t){return ie(function(){var e=t[0],r=t[1],o=t[2],i=wn(To(n.shape.slice(0,3),[1]),e),a=wn(To(n.shape.slice(0,3),[1]),r),s=wn(To(n.shape.slice(0,3),[1]),o),u=Ze([i,a,s],3);return nt(n,u)})}function Qw(n,t){return t===void 0&&(t=!1),ie(function(){var e=n.shape.slice(1),r=e[0],o=e[1];if(r===o)return n;var i=Math.abs(r-o),a=Math.round(i*(t?.5:1)),s=r>o?2:1,u=function(d){var p=n.shape.slice();return p[s]=d,wn(p,0)},c=u(a),l=i-c.shape[s],f=t&&l?u(l):null,h=[f,n,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Ze(h,s)})}function gs(n){return 1/(1+Math.exp(-n))}var Zu=function(n){ye(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{x:e,y:r,width:o,height:i},a)||this}return t}(cr),Zw=.5,e2=.43,t2=.45,na=function(){function n(t,e,r){r===void 0&&(r=new Oe(0,0));var o=e.width,i=e.height;this._imgDims=new oo(o,i),this._shift=r,this._positions=t.map(function(a){return a.mul(new Oe(o,i)).add(r)})}return Object.defineProperty(n.prototype,"shift",{get:function(){return new Oe(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new Oe(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},n.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new Oe(t,e))},n.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},n.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var r=t instanceof Rn?t.box.floor():new cr(t);return this.shiftBy(r.x,r.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),i=o.useDlibAlignment,a=o.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},n.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],r=t[1],o=t[2],i=function(f){return o.sub(f).magnitude()},a=(i(e)+i(r))/2,s=Math.floor(a/t2),u=Qu(t),c=Math.floor(Math.max(0,u.x-Zw*s)),l=Math.floor(Math.max(0,u.y-e2*s));return new Zu(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},n.prototype.alignMinBbox=function(t){var e=Jw(this.positions);return e.pad(e.width*t,e.height*t)},n.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},n}(),n2=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Qu([e[3],e[4]])]},t}(na),r2=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Qu)},t}(na),tf=function(){function n(t,e){this._label=t,this._distance=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),n.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+Xw(this.distance)+")":"")},n}(),nf=function(n){ye(t,n);function t(e,r){var o=n.call(this,e)||this;return o._label=r,o}return t.assertIsValidLabeledBox=function(e,r){if(cr.assertIsValidBox(e,r),!Sr(e.label))throw new Error(r+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(cr),yi=function(){function n(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(r){return!(r instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),n.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},n.fromJSON=function(t){var e=t.descriptors.map(function(r){return new Float32Array(r)});return new n(t.label,e)},n}();(function(n){ye(t,n);function t(e,r,o,i){var a=n.call(this,e,r)||this;return a._score=o,a._classScore=i,a}return t.assertIsValidPredictedBox=function(e,r){if(nf.assertIsValidLabeledBox(e,r),!ef(e.score)||!ef(e.classScore))throw new Error(r+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(nf);function o2(n){return n.detection instanceof Rn}function ec(n,t){var e={detection:t};return Object.assign({},n,e)}function Zd(){var n=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:n,readFile:t}}function ep(n){var t="";if(!n)try{n=require("fs")}catch(r){t=r.toString()}var e=n?function(r){return new Promise(function(o,i){n.readFile(r,function(a,s){return a?i(a):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function tp(){var n=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(n)return new n;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},r=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},i=ep();return gt({Canvas:n||function(){function a(){}return a}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function a(){}return a}(),Image:t||function(){function a(){}return a}(),ImageData:global.ImageData||function(){function a(){}return a}(),Video:global.HTMLVideoElement||function(){function a(){}return a}(),createCanvasElement:e,createImageElement:r,fetch:o},i)}function np(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function rp(){return typeof global=="object"&&typeof require=="function"&&typeof Pp<"u"&&typeof process<"u"&&!!process.version}var Qe;function i2(){if(!Qe)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Qe}function Zs(n){Qe=n}function tc(){np()&&Zs(Zd()),rp()&&Zs(tp())}function a2(n){if(Qe||tc(),!Qe)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=n.Canvas,e=t===void 0?Qe.Canvas:t,r=n.Image,o=r===void 0?Qe.Image:r;Qe.Canvas=e,Qe.Image=o,Qe.createCanvasElement=n.createCanvasElement||function(){return new e},Qe.createImageElement=n.createImageElement||function(){return new o},Qe.ImageData=n.ImageData||Qe.ImageData,Qe.Video=n.Video||Qe.Video,Qe.fetch=n.fetch||Qe.fetch,Qe.readFile=n.readFile||Qe.readFile}var Ct={getEnv:i2,setEnv:Zs,initialize:tc,createBrowserEnv:Zd,createFileSystem:ep,createNodejsEnv:tp,monkeyPatch:a2,isBrowser:np,isNodejs:rp};tc();function op(n){return!Ct.isNodejs()&&typeof n=="string"?document.getElementById(n):n}function Dr(n){var t=Ct.getEnv(),e=t.Canvas,r=t.CanvasRenderingContext2D;if(n instanceof r)return n;var o=op(n);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var i=o.getContext("2d");if(!i)throw new Error("resolveContext2d - canvas 2d context is null");return i}var rf;(function(n){n.TOP_LEFT="TOP_LEFT",n.TOP_RIGHT="TOP_RIGHT",n.BOTTOM_LEFT="BOTTOM_LEFT",n.BOTTOM_RIGHT="BOTTOM_RIGHT"})(rf||(rf={}));function ip(n){var t=Ct.getEnv(),e=t.Image,r=t.Video;return n instanceof e&&n.complete||n instanceof r&&n.readyState>=3}function s2(n){return new Promise(function(t,e){if(n instanceof Ct.getEnv().Canvas||ip(n))return t();function r(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),t(i))}function o(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),e(i))}n.addEventListener("load",r),n.addEventListener("error",o)})}function ap(n){var t=Ct.getEnv(),e=t.Image,r=t.Video;return n instanceof e?new oo(n.naturalWidth,n.naturalHeight):n instanceof r?new oo(n.videoWidth,n.videoHeight):new oo(n.width,n.height)}function ka(n){var t=n.width,e=n.height,r=Ct.getEnv().createCanvasElement,o=r();return o.width=t,o.height=e,o}function nc(n,t){var e=Ct.getEnv().ImageData;if(!(n instanceof e)&&!ip(n))throw new Error("createCanvasFromMedia - media has not finished loading yet");var r=ap(n),o=r.width,i=r.height,a=ka({width:o,height:i});return n instanceof e?Dr(a).putImageData(n,0,0):Dr(a).drawImage(n,0,0,o,i),a}function u2(n,t){return he(this,void 0,void 0,function(){var e,r,o,i,a,s;return de(this,function(u){switch(u.label){case 0:return e=Ct.getEnv().createCanvasElement(),r=n.shape.slice(ir(n)?1:0),o=r[0],i=r[1],a=r[2],s=ie(function(){return n.as3D(o,i,a).toInt()}),[4,Ju.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function of(n){var t=Ct.getEnv(),e=t.Image,r=t.Canvas,o=t.Video;return n instanceof e||n instanceof r||n instanceof o}function c2(n,t,e){e===void 0&&(e=!1);var r=Ct.getEnv(),o=r.Image,i=r.Canvas;if(!(n instanceof o||n instanceof i))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var a=ap(n),s=t/Math.max(a.height,a.width),u=s*a.width,c=s*a.height,l=ka({width:t,height:t}),f=n instanceof i?n:nc(n),h=Math.abs(u-c)/2,d=e&&u<c?h:0,p=e&&c<u?h:0;return Dr(l).drawImage(f,d,p,u,c),l}var ra=function(){function n(t,e){var r=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,i){if(Ra(o)){r._imageTensors[i]=o,r._inputDimensions[i]=o.shape;return}if(ir(o)){var a=o.shape[0];if(a!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+a+" passed, but not supported in input array");r._imageTensors[i]=o,r._inputDimensions[i]=o.shape.slice(1);return}var s=o instanceof Ct.getEnv().Canvas?o:nc(o);r._canvases[i]=s,r._inputDimensions[i]=[s.height,s.width,3]})}return Object.defineProperty(n.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"reshapedInputDimensions",{get:function(){var t=this;return jo(this.batchSize,0,1).map(function(e,r){return t.getReshapedInputDimensions(r)})},enumerable:!0,configurable:!0}),n.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},n.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},n.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},n.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},n.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),r=this.getInputHeight(t);return $w({width:e,height:r},this.inputSize)},n.prototype.toBatchTensor=function(t,e){var r=this;return e===void 0&&(e=!0),this._inputSize=t,ie(function(){var o=jo(r.batchSize,0,1).map(function(a){var s=r.getInput(a);if(s instanceof je){var u=ir(s)?s:s.expandDims();return u=Qw(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=ju.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof Ct.getEnv().Canvas)return Ju.fromPixels(c2(s,t,e));throw new Error("toBatchTensor - at batchIdx "+a+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),i=Ht(o.map(function(a){return a.toFloat()})).as4D(r.batchSize,t,t,3);return i})},n}();function at(n){return he(this,void 0,void 0,function(){var t,e,r;return de(this,function(o){switch(o.label){case 0:if(n instanceof ra)return[2,n];if(t=Array.isArray(n)?n:[n],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(i){return Array.isArray(n)?" at input index "+i+":":""},r=t.map(op),r.forEach(function(i,a){if(!of(i)&&!Ra(i)&&!ir(i))throw typeof t[a]=="string"?new Error("toNetInput -"+e(a)+" string passed, but could not resolve HTMLElement for element id "+t[a]):new Error("toNetInput -"+e(a)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(ir(i)){var s=i.shape[0];if(s!==1)throw new Error("toNetInput -"+e(a)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(r.map(function(i){return of(i)&&s2(i)}))];case 1:return o.sent(),[2,new ra(r,Array.isArray(n))]}})})}function rc(n,t){return he(this,void 0,void 0,function(){var e,r,o,i,a,s,u;return de(this,function(c){switch(c.label){case 0:return e=Ct.getEnv().Canvas,r=n,n instanceof e?[3,5]:[4,at(n)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return i=o.getInput(0),i instanceof e?(a=i,[3,4]):[3,2];case 2:return[4,u2(i)];case 3:a=c.sent(),c.label=4;case 4:r=a,c.label=5;case 5:return s=Dr(r),u=t.map(function(l){return l instanceof Rn?l.forSize(r.width,r.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(r.width,r.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,v=ka({width:d,height:p});return Dr(v).putImageData(s.getImageData(f,h,d,p),0,0),v})]}})})}function oc(n,t){return he(this,void 0,void 0,function(){return de(this,function(e){if(!Ra(n)&&!ir(n))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(ir(n)&&n.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,ie(function(){var r=n.shape.slice(ir(n)?1:0),o=r[0],i=r[1],a=r[2],s=t.map(function(c){return c instanceof Rn?c.forSize(i,o).box:c}).map(function(c){return c.clipAtImageBorders(i,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return Fd(n.as3D(o,i,a),[f,l,0],[d,h,a])});return u})]})})}function l2(n,t){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return e=Ct.getEnv().fetch,[4,e(n,t)];case 1:if(r=o.sent(),!(r.status<400))throw new Error("failed to fetch: ("+r.status+") "+r.statusText+", from url: "+r.url);return[2,r]}})})}function f2(n){return he(this,void 0,void 0,function(){return de(this,function(t){switch(t.label){case 0:return[4,l2(n)];case 1:return[2,t.sent().json()]}})})}function sp(n,t){var e=t+"-weights_manifest.json";if(!n)return{modelBaseUri:"",manifestUri:e};if(n==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var r=n.startsWith("http://")?"http://":n.startsWith("https://")?"https://":"";n=n.replace(r,"");var o=n.split("/").filter(function(s){return s}),i=n.endsWith(".json")?o[o.length-1]:e,a=r+(n.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return a=n.startsWith("/")?"/"+a:a,{modelBaseUri:a,manifestUri:a==="/"?"/"+i:a+"/"+i}}function h2(n,t){return he(this,void 0,void 0,function(){var e,r,o,i;return de(this,function(a){switch(a.label){case 0:return e=sp(n,t),r=e.manifestUri,o=e.modelBaseUri,[4,f2(r)];case 1:return i=a.sent(),[2,Yd.loadWeights(i,o)]}})})}var Hn=function(){function n(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(n.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),n.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),r=e.obj,o=e.objProp;return r[o]},n.prototype.reassignParamFromPath=function(t,e){var r=this.traversePropertyPath(t),o=r.obj,i=r.objProp;o[i].dispose(),o[i]=e},n.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var r=e.paramPath;return{path:r,tensor:t.getParamFromPath(r)}})},n.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof so})},n.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof so)})},n.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var r=e.path,o=e.tensor;t.reassignParamFromPath(r,o.variable())})},n.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var r=e.path,o=e.tensor,i=ft(o.dataSync());o.dispose(),t.reassignParamFromPath(r,i)})},n.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},n.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},n.prototype.load=function(t){return he(this,void 0,void 0,function(){return de(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},n.prototype.loadFromUri=function(t){return he(this,void 0,void 0,function(){var e;return de(this,function(r){switch(r.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,h2(t,this.getDefaultModelName())];case 1:return e=r.sent(),this.loadFromWeightMap(e),[2]}})})},n.prototype.loadFromDisk=function(t){return he(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f;return de(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=Ct.getEnv().readFile,r=sp(t,this.getDefaultModelName()),o=r.manifestUri,i=r.modelBaseUri,a=function(d){return Promise.all(d.map(function(p){return e(p).then(function(v){return v.buffer})}))},s=Yd.weightsLoaderFactory(a),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,i)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},n.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.extractWeights=function(t){var e=this.extractParams(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(i,a){if(!i.nextObj.hasOwnProperty(a))throw new Error("traversePropertyPath - object does not have property "+a+", for path "+t);return{obj:i.nextObj,objProp:a,nextObj:i.nextObj[a]}},{nextObj:this.params}),r=e.obj,o=e.objProp;if(!r||!o||!(r[o]instanceof je))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:r,objProp:o}},n}();function zt(n,t,e){return ie(function(){var r=Uu(n,t.depthwise_filter,t.pointwise_filter,e,"same");return r=Ae(r,t.bias),r})}function ms(n,t,e){return e===void 0&&(e=!1),ie(function(){var r=qe(e?Ae(Jt(n,t.conv0.filters,[2,2],"same"),t.conv0.bias):zt(n,t.conv0,[2,2])),o=zt(r,t.conv1,[1,1]),i=qe(Ae(r,o)),a=zt(i,t.conv2,[1,1]);return qe(Ae(r,Ae(o,a)))})}function xi(n,t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!0),ie(function(){var o=qe(e?Ae(Jt(n,t.conv0.filters,r?[2,2]:[1,1],"same"),t.conv0.bias):zt(n,t.conv0,r?[2,2]:[1,1])),i=zt(o,t.conv1,[1,1]),a=qe(Ae(o,i)),s=zt(a,t.conv2,[1,1]),u=qe(Ae(o,Ae(i,s))),c=zt(u,t.conv3,[1,1]);return qe(Ae(o,Ae(i,Ae(s,c))))})}function nn(n,t,e,r){return e===void 0&&(e="same"),r===void 0&&(r=!1),ie(function(){var o=Ae(Jt(n,t.filters,[1,1],e),t.bias);return r?qe(o):o})}function Gn(n,t){Object.keys(n).forEach(function(e){t.some(function(r){return r.originalPath===e})||n[e].dispose()})}function Aa(n,t){return function(e,r,o,i){var a=Dt(n(e*r*o*o),[o,o,e,r]),s=Ye(n(r));return t.push({paramPath:i+"/filters"},{paramPath:i+"/bias"}),{filters:a,bias:s}}}function ic(n,t){return function(e,r,o){var i=rr(n(e*r),[e,r]),a=Ye(n(r));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:i,bias:a}}}var up=function(){function n(t,e,r){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=r}return n}();function ac(n,t){return function(e,r,o){var i=Dt(n(9*e),[3,3,e,1]),a=Dt(n(e*r),[1,1,e,r]),s=Ye(n(r));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new up(i,a,s)}}function sc(n){return function(t){var e=n(t+"/depthwise_filter",4),r=n(t+"/pointwise_filter",4),o=n(t+"/bias",1);return new up(e,r,o)}}function dr(n,t){return function(e,r,o){var i=n[e];if(!Ia(i,r))throw new Error("expected weightMap["+e+"] to be a Tensor"+r+"D, instead have "+i);return t.push({originalPath:e,paramPath:o||e}),i}}function jn(n){var t=n;function e(o){var i=t.slice(0,o);return t=t.slice(o),i}function r(){return t}return{extractWeights:e,getRemainingWeights:r}}function cp(n,t){var e=Aa(n,t),r=ac(n,t);function o(a,s,u,c){c===void 0&&(c=!1);var l=c?e(a,s,3,u+"/conv0"):r(a,s,u+"/conv0"),f=r(s,s,u+"/conv1"),h=r(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function i(a,s,u,c){c===void 0&&(c=!1);var l=o(a,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=r(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function d2(n){var t=[],e=jn(n),r=e.extractWeights,o=e.getRemainingWeights,i=cp(r,t).extractDenseBlock4Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2"),c=i(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u,dense3:c}}}function lp(n){return function(t){var e=n(t+"/filters",4),r=n(t+"/bias",1);return{filters:e,bias:r}}}function fp(n,t){var e=dr(n,t),r=lp(e),o=sc(e);function i(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function a(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function p2(n){var t=[],e=fp(n,t).extractDenseBlock4Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Gn(n,t),{params:r,paramMappings:t}}var hp=function(n){ye(t,n);function t(){return n.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceFeatureExtractor - load model before inference");return ie(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=ri(o,i).div(re(255)),s=xi(a,r.dense0,!0);return s=xi(s,r.dense1),s=xi(s,r.dense2),s=xi(s,r.dense3),s=ti(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,at(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return p2(e)},t.prototype.extractParams=function(e){return d2(e)},t}(Hn);function mn(n,t){return ie(function(){return Ae(_a(n,t.weights),t.bias)})}function v2(n,t,e){var r=[],o=jn(n),i=o.extractWeights,a=o.getRemainingWeights,s=ic(i,r),u=s(t,e,"fc");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:r,params:{fc:u}}}function g2(n){var t=[],e=dr(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:r("fc")};return Gn(n,t),{params:o,paramMappings:t}}function dp(n){var t={},e={};return Object.keys(n).forEach(function(r){var o=r.startsWith("fc")?e:t;o[r]=n[r]}),{featureExtractorMap:t,classifierMap:e}}var pp=function(n){ye(t,n);function t(e,r){var o=n.call(this,e)||this;return o._faceFeatureExtractor=r,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return ie(function(){var i=e instanceof ra?r.faceFeatureExtractor.forwardInput(e):e;return mn(i.as2D(i.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return v2(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var r=dp(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),g2(i)},t.prototype.extractParams=function(e){var r=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),i=o*r+o,a=e.slice(0,e.length-i),s=e.slice(e.length-i);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(s)},t}(Hn),af=["neutral","happy","sad","angry","fearful","disgusted","surprised"],m2=function(){function n(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);af.forEach(function(r,o){e[r]=t[o]})}return n.prototype.asSortedArray=function(){var t=this;return af.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,r){return r.probability-e.probability})},n}(),y2=function(n){ye(t,n);function t(e){return e===void 0&&(e=new hp),n.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var r=this;return ie(function(){return Vn(r.runNet(e))})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,at(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return he(this,void 0,void 0,function(){var r,o,i,a,s=this;return de(this,function(u){switch(u.label){case 0:return[4,at(e)];case 1:return r=u.sent(),[4,this.forwardInput(r)];case 2:return o=u.sent(),[4,Promise.all(et(o).map(function(c){return he(s,void 0,void 0,function(){var l;return de(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return i=u.sent(),o.dispose(),a=i.map(function(c){return new m2(c)}),[2,r.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(pp);function vp(n,t){var e={expressions:t};return Object.assign({},n,e)}function x2(n){return o2(n)&&n.landmarks instanceof na&&n.unshiftedLandmarks instanceof na&&n.alignedRect instanceof Rn}function uc(n,t){var e=n.detection.box,r=t.shiftBy(e.x,e.y),o=r.align(),i=n.detection.imageDims,a=new Rn(n.detection.score,o.rescale(i.reverse()),i),s={landmarks:r,unshiftedLandmarks:t,alignedRect:a};return Object.assign({},n,s)}function b2(n,t){var e=Aa(n,t),r=ac(n,t);function o(a,s,u){var c=r(a,s,u+"/separable_conv0"),l=r(s,s,u+"/separable_conv1"),f=e(a,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function i(a,s){var u=r(a,a,s+"/separable_conv0"),c=r(a,a,s+"/separable_conv1"),l=r(a,a,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:r,extractReductionBlockParams:o,extractMainBlockParams:i}}function w2(n,t){var e=[],r=jn(n),o=r.extractWeights,i=r.getRemainingWeights,a=b2(o,e),s=a.extractConvParams,u=a.extractSeparableConvParams,c=a.extractReductionBlockParams,l=a.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},v={};jo(t,0,1).forEach(function(b){v["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var g=c(128,256,"exit_flow/reduction_block"),m=u(256,512,"exit_flow/separable_conv"),x={reduction_block:g,separable_conv:m};if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:v,exit_flow:x}}}function _2(n,t){var e=dr(n,t),r=lp(e),o=sc(e);function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=r(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:r,extractSeparableConvParams:o,extractReductionBlockParams:i,extractMainBlockParams:a}}function C2(n,t){var e=[],r=_2(n,e),o=r.extractConvParams,i=r.extractSeparableConvParams,a=r.extractReductionBlockParams,s=r.extractMainBlockParams,u=o("entry_flow/conv_in"),c=a("entry_flow/reduction_block_0"),l=a("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};jo(t,0,1).forEach(function(g){h["main_block_"+g]=s("middle_flow/main_block_"+g)});var d=a("exit_flow/reduction_block"),p=i("exit_flow/separable_conv"),v={reduction_block:d,separable_conv:p};return Gn(n,e),{params:{entry_flow:f,middle_flow:h,exit_flow:v},paramMappings:e}}function gp(n,t,e){return Ae(Jt(n,t.filters,e,"same"),t.bias)}function ys(n,t,e){e===void 0&&(e=!0);var r=e?qe(n):n;return r=zt(r,t.separable_conv0,[1,1]),r=zt(qe(r),t.separable_conv1,[1,1]),r=ot(r,[3,3],[2,2],"same"),r=Ae(r,gp(n,t.expansion_conv,[2,2])),r}function E2(n,t){var e=zt(qe(n),t.separable_conv0,[1,1]);return e=zt(qe(e),t.separable_conv1,[1,1]),e=zt(qe(e),t.separable_conv2,[1,1]),e=Ae(e,n),e}var I2=function(n){ye(t,n);function t(e){var r=n.call(this,"TinyXception")||this;return r._numMainBlocks=e,r}return t.prototype.forwardInput=function(e){var r=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return ie(function(){var i=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],s=ri(i,a).div(re(256)),u=qe(gp(s,o.entry_flow.conv_in,[2,2]));return u=ys(u,o.entry_flow.reduction_block_0,!1),u=ys(u,o.entry_flow.reduction_block_1),jo(r._numMainBlocks,0,1).forEach(function(c){u=E2(u,o.middle_flow["main_block_"+c])}),u=ys(u,o.exit_flow.reduction_block),u=qe(zt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,at(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return C2(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return w2(e,this._numMainBlocks)},t}(Hn);function R2(n){var t=[],e=jn(n),r=e.extractWeights,o=e.getRemainingWeights,i=ic(r,t),a=i(512,1,"fc/age"),s=i(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:a,gender:s}}}}function S2(n){var t=[],e=dr(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:{age:r("fc/age"),gender:r("fc/gender")}};return Gn(n,t),{params:o,paramMappings:t}}var oa;(function(n){n.FEMALE="female",n.MALE="male"})(oa||(oa={}));var k2=function(n){ye(t,n);function t(e){e===void 0&&(e=new I2(2));var r=n.call(this,"AgeGenderNet")||this;return r._faceFeatureExtractor=e,r}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return ie(function(){var i=e instanceof ra?r.faceFeatureExtractor.forwardInput(e):e,a=ti(i,[7,7],[2,2],"valid").as2D(i.shape[0],-1),s=mn(a,o.fc.age).as1D(),u=mn(a,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var r=this;return ie(function(){var o=r.runNet(e),i=o.age,a=o.gender;return{age:i,gender:Vn(a)}})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,at(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return he(this,void 0,void 0,function(){var r,o,i,a,s,u,c=this;return de(this,function(l){switch(l.label){case 0:return[4,at(e)];case 1:return r=l.sent(),[4,this.forwardInput(r)];case 2:return o=l.sent(),i=et(o.age),a=et(o.gender),s=i.map(function(f,h){return{ageTensor:f,genderTensor:a[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return he(c,void 0,void 0,function(){var p,v,g,m,x;return de(this,function(b){switch(b.label){case 0:return[4,h.data()];case 1:return p=b.sent()[0],[4,d.data()];case 2:return v=b.sent()[0],g=v>.5,m=g?oa.MALE:oa.FEMALE,x=g?v:1-v,h.dispose(),d.dispose(),[2,{age:p,gender:m,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,r.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return R2(e)},t.prototype.extractParamsFromWeigthMap=function(e){var r=dp(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),S2(i)},t.prototype.extractParams=function(e){var r=1539,o=e.slice(0,e.length-r),i=e.slice(e.length-r);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(i)},t}(Hn),mp=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.postProcess=function(e,r,o){var i=o.map(function(s){var u=s.width,c=s.height,l=r/Math.max(c,u);return{width:u*l,height:c*l}}),a=i.length;return ie(function(){var s=function(h,d){return Ht([wn([68],h),wn([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=i[h],v=p.width,g=p.height;return d(v,g)?Math.abs(v-g)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=e.mul(wn([a,136],r)).sub(Ht(Array.from(Array(a),function(h,d){return s(c(d),l(d))}))).div(Ht(Array.from(Array(a),function(h,d){return s(i[d].width,i[d].height)})));return f})},t.prototype.forwardInput=function(e){var r=this;return ie(function(){var o=r.runNet(e);return r.postProcess(o,e.inputSize,e.inputDimensions.map(function(i){var a=i[0],s=i[1];return{height:a,width:s}}))})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,at(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return he(this,void 0,void 0,function(){var r,o,i,a=this;return de(this,function(s){switch(s.label){case 0:return[4,at(e)];case 1:return r=s.sent(),o=ie(function(){return et(a.forwardInput(r))}),[4,Promise.all(o.map(function(u,c){return he(a,void 0,void 0,function(){var l,f,h,d,p;return de(this,function(v){switch(v.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[v.sent()]),d=l.filter(function(g,m){return Ql(m)}),p=l.filter(function(g,m){return!Ql(m)}),[2,new r2(Array(68).fill(0).map(function(g,m){return new Oe(d[m],p[m])}),{height:r.getInputHeight(c),width:r.getInputWidth(c)})]}})})}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(pp),yp=function(n){ye(t,n);function t(e){return e===void 0&&(e=new hp),n.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(mp);function A2(n){var t=[],e=fp(n,t).extractDenseBlock3Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Gn(n,t),{params:r,paramMappings:t}}function D2(n){var t=[],e=jn(n),r=e.extractWeights,o=e.getRemainingWeights,i=cp(r,t).extractDenseBlock3Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u}}}var T2=function(n){ye(t,n);function t(){return n.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("TinyFaceFeatureExtractor - load model before inference");return ie(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=ri(o,i).div(re(255)),s=ms(a,r.dense0,!0);return s=ms(s,r.dense1),s=ms(s,r.dense2),s=ti(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,at(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return A2(e)},t.prototype.extractParams=function(e){return D2(e)},t}(Hn),N2=function(n){ye(t,n);function t(e){return e===void 0&&(e=new T2),n.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(mp);(function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(yp);function F2(n,t){return Ae(wt(n,t.weights),t.biases)}function cc(n,t,e,r,o){o===void 0&&(o="same");var i=t.conv,a=i.filters,s=i.bias,u=Jt(n,a,e,o);return u=Ae(u,s),u=F2(u,t.scale),r?qe(u):u}function P2(n,t){return cc(n,t,[1,1],!0)}function xp(n,t){return cc(n,t,[1,1],!1)}function bp(n,t){return cc(n,t,[2,2],!0,"valid")}function M2(n,t){function e(s,u,c){var l=n(s),f=l.length/(u*c*c);if(Kw(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return ie(function(){return ur(Dt(l,[u,f,c,c]),[2,3,1,0])})}function r(s,u,c,l){var f=e(s,u,c),h=Ye(n(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=Ye(n(s)),l=Ye(n(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function i(s,u,c,l){var f=r(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function a(s,u,c,l,f){f===void 0&&(f=!1);var h=i((f?.5:1)*s,u,c,l+"/conv1"),d=i(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function O2(n){var t=jn(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=M2(e,o),a=i.extractConvLayerParams,s=i.extractResidualLayerParams,u=a(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),g=s(147456,128,3,"conv128_down",!0),m=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),S=ie(function(){return ur(rr(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),r().length!==0)throw new Error("weights remaing after extract: "+r().length);var k={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:v,conv128_down:g,conv128_1:m,conv128_2:x,conv256_down:b,conv256_1:y,conv256_2:w,conv256_down_out:_,fc:S};return{params:k,paramMappings:o}}function B2(n,t){var e=dr(n,t);function r(a){var s=e(a+"/scale/weights",1),u=e(a+"/scale/biases",1);return{weights:s,biases:u}}function o(a){var s=e(a+"/conv/filters",4),u=e(a+"/conv/bias",1),c=r(a);return{conv:{filters:s,bias:u},scale:c}}function i(a){return{conv1:o(a+"/conv1"),conv2:o(a+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function L2(n){var t=[],e=B2(n,t),r=e.extractConvLayerParams,o=e.extractResidualLayerParams,i=r("conv32_down"),a=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),v=o("conv128_2"),g=o("conv256_down"),m=o("conv256_1"),x=o("conv256_2"),b=o("conv256_down_out"),y=n.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!qw(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:i,conv32_1:a,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:v,conv256_down:g,conv256_1:m,conv256_2:x,conv256_down_out:b,fc:y};return Gn(n,t),{params:w,paramMappings:t}}function cn(n,t){var e=P2(n,t.conv1);return e=xp(e,t.conv2),e=Ae(e,n),e=qe(e),e}function bi(n,t){var e=bp(n,t.conv1);e=xp(e,t.conv2);var r=ti(n,2,2,"valid"),o=He(r.shape),i=r.shape[3]!==e.shape[3],a=r.shape[1]!==e.shape[1]||r.shape[2]!==e.shape[2];if(a){var s=To(e.shape);s[1]=1;var u=He(s);e=Ze([e,u],1);var c=To(e.shape);c[2]=1;var l=He(c);e=Ze([e,l],2)}return r=i?Ze([r,o],3):r,e=Ae(r,e),e=qe(e),e}var W2=function(n){ye(t,n);function t(){return n.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceRecognitionNet - load model before inference");return ie(function(){var o=e.toBatchTensor(150,!0).toFloat(),i=[122.782,117.001,104.298],a=ri(o,i).div(re(256)),s=bp(a,r.conv32_down);s=ot(s,3,2,"valid"),s=cn(s,r.conv32_1),s=cn(s,r.conv32_2),s=cn(s,r.conv32_3),s=bi(s,r.conv64_down),s=cn(s,r.conv64_1),s=cn(s,r.conv64_2),s=cn(s,r.conv64_3),s=bi(s,r.conv128_down),s=cn(s,r.conv128_1),s=cn(s,r.conv128_2),s=bi(s,r.conv256_down),s=cn(s,r.conv256_1),s=cn(s,r.conv256_2),s=bi(s,r.conv256_down_out);var u=s.mean([1,2]),c=_a(u,r.fc);return c})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,at(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return he(this,void 0,void 0,function(){var r,o,i,a=this;return de(this,function(s){switch(s.label){case 0:return[4,at(e)];case 1:return r=s.sent(),o=ie(function(){return et(a.forwardInput(r))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return L2(e)},t.prototype.extractParams=function(e){return O2(e)},t}(Hn);function wp(n,t){var e={descriptor:t};return Object.assign({},n,e)}function _p(n,t){var e={age:t};return Object.assign({},n,e)}function Cp(n,t,e){var r={gender:t,genderProbability:e};return Object.assign({},n,r)}var Ep=function(){function n(t){var e=t===void 0?{}:t,r=e.minFaceSize,o=e.scaleFactor,i=e.maxNumScales,a=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=r||20,this._scaleFactor=o||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(n.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),n}();function U2(n,t){function e(u,c){var l=Dt(n(9*u),[3,3,u,1]),f=Ye(n(u)),h=Ye(n(u)),d=Ye(n(u)),p=Ye(n(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function r(u,c,l,f,h){var d=Dt(n(u*c*l*l),[l,l,u,c]),p=Ye(n(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,f){var h=r(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function i(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function a(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=i(32,64,"mobilenetv1/conv_1"),l=i(64,128,"mobilenetv1/conv_2"),f=i(128,128,"mobilenetv1/conv_3"),h=i(128,256,"mobilenetv1/conv_4"),d=i(256,256,"mobilenetv1/conv_5"),p=i(256,512,"mobilenetv1/conv_6"),v=i(512,512,"mobilenetv1/conv_7"),g=i(512,512,"mobilenetv1/conv_8"),m=i(512,512,"mobilenetv1/conv_9"),x=i(512,512,"mobilenetv1/conv_10"),b=i(512,512,"mobilenetv1/conv_11"),y=i(512,1024,"mobilenetv1/conv_12"),w=i(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,conv_8:g,conv_9:m,conv_10:x,conv_11:b,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),g=r(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),m=r(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=r(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=r(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=r(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=r(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=r(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),S=r(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),k=r(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),E=r(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),I=r(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),F=r(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:g,class_predictor:m},B={box_encoding_predictor:x,class_predictor:b},W={box_encoding_predictor:y,class_predictor:w},z={box_encoding_predictor:_,class_predictor:S},H={box_encoding_predictor:k,class_predictor:E},V={box_encoding_predictor:I,class_predictor:F};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,box_predictor_0:A,box_predictor_1:B,box_predictor_2:W,box_predictor_3:z,box_predictor_4:H,box_predictor_5:V}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:s}}function V2(n){var t=[],e=jn(n),r=e.extractWeights,o=e.getRemainingWeights,i=U2(r,t),a=i.extractMobilenetV1Params,s=i.extractPredictionLayerParams,u=a(),c=s(),l=Iu(r(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function z2(n,t){var e=dr(n,t);function r(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(f+"/depthwise_weights",4,h+"/filters"),v=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),g=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),m=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),x=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:v,batch_norm_offset:g,batch_norm_mean:m,batch_norm_variance:x},pointwise_conv:r("MobilenetV1",c,d)}}function i(){return{conv_0:r("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function a(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=a("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=a("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:r("Prediction",0,"prediction_layer/conv_0"),conv_1:r("Prediction",1,"prediction_layer/conv_1"),conv_2:r("Prediction",2,"prediction_layer/conv_2"),conv_3:r("Prediction",3,"prediction_layer/conv_3"),conv_4:r("Prediction",4,"prediction_layer/conv_4"),conv_5:r("Prediction",5,"prediction_layer/conv_5"),conv_6:r("Prediction",6,"prediction_layer/conv_6"),conv_7:r("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:u}}function H2(n){var t=[],e=z2(n,t),r=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,i=n["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!Ra(i))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+i);var a={mobilenetv1:r(),prediction_layer:o(),output_layer:{extra_dim:i}};return Gn(n,t),{params:a,paramMappings:t}}function fn(n,t,e){return ie(function(){var r=Jt(n,t.filters,e,"same");return r=Ae(r,t.batch_norm_offset),Ou(r,0,6)})}var G2=.0010000000474974513;function j2(n,t,e){return ie(function(){var r=wa(n,t.filters,e,"same");return r=yd(r,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,G2),Ou(r,0,6)})}function q2(n){return[2,4,6,12].some(function(t){return t===n})?[2,2]:[1,1]}function K2(n,t){return ie(function(){var e=null,r=fn(n,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(i,a){var s=a+1,u=q2(s);r=j2(r,i.depthwise_conv,u),r=fn(r,i.pointwise_conv,[1,1]),s===11&&(e=r)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:r,conv11:e}})}function X2(n,t,e,r,o){var i=n.shape[0],a=Math.min(e,i),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=r?1:0},c=[];return s.forEach(function(l){if(!(c.length>=a)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=$2(n,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function $2(n,t,e){var r=n.arraySync(),o=Math.min(r[t][0],r[t][2]),i=Math.min(r[t][1],r[t][3]),a=Math.max(r[t][0],r[t][2]),s=Math.max(r[t][1],r[t][3]),u=Math.min(r[e][0],r[e][2]),c=Math.min(r[e][1],r[e][3]),l=Math.max(r[e][0],r[e][2]),f=Math.max(r[e][1],r[e][3]),h=(a-o)*(s-i),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(o,u),v=Math.max(i,c),g=Math.min(a,l),m=Math.min(s,f),x=Math.max(g-p,0)*Math.max(m-v,0);return x/(h+d-x)}function Y2(n){var t=et(ur(n,[1,0])),e=[nt(t[2],t[0]),nt(t[3],t[1])],r=[Ae(t[0],Qt(e[0],re(2))),Ae(t[1],Qt(e[1],re(2)))];return{sizes:e,centers:r}}function J2(n,t){var e=Y2(n),r=e.sizes,o=e.centers,i=et(ur(t,[1,0])),a=Qt(wt(qs(Qt(i[2],re(5))),r[0]),re(2)),s=Ae(wt(Qt(i[0],re(10)),r[0]),o[0]),u=Qt(wt(qs(Qt(i[3],re(5))),r[1]),re(2)),c=Ae(wt(Qt(i[1],re(10)),r[1]),o[1]);return ur(Ht([nt(s,a),nt(c,u),Ae(s,a),Ae(c,u)]),[1,0])}function Q2(n,t,e){return ie(function(){var r=n.shape[0],o=J2(Zt(Zr(e.extra_dim,[r,1,1]),[-1,4]),Zt(n,[-1,4]));o=Zt(o,[r,o.shape[0]/r,4]);var i=pd(_n(t,[0,0,1],[-1,-1,-1])),a=_n(i,[0,0,0],[-1,-1,1]);a=Zt(a,[r,a.shape[1]]);var s=et(o),u=et(a);return{boxes:s,scores:u}})}function zr(n,t){return ie(function(){var e=n.shape[0],r=Zt(nn(n,t.box_encoding_predictor),[e,-1,1,4]),o=Zt(nn(n,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:r,classPrediction:o}})}function Z2(n,t,e){return ie(function(){var r=fn(n,e.conv_0,[1,1]),o=fn(r,e.conv_1,[2,2]),i=fn(o,e.conv_2,[1,1]),a=fn(i,e.conv_3,[2,2]),s=fn(a,e.conv_4,[1,1]),u=fn(s,e.conv_5,[2,2]),c=fn(u,e.conv_6,[1,1]),l=fn(c,e.conv_7,[2,2]),f=zr(t,e.box_predictor_0),h=zr(n,e.box_predictor_1),d=zr(o,e.box_predictor_2),p=zr(a,e.box_predictor_3),v=zr(u,e.box_predictor_4),g=zr(l,e.box_predictor_5),m=Ze([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,v.boxPredictionEncoding,g.boxPredictionEncoding],1),x=Ze([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,v.classPrediction,g.classPrediction],1);return{boxPredictions:m,classPredictions:x}})}var Da=function(){function n(t){var e=t===void 0?{}:t,r=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=r||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(n.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),n}(),Ip=function(n){ye(t,n);function t(){return n.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("SsdMobilenetv1 - load model before inference");return ie(function(){var o=e.toBatchTensor(512,!1).toFloat(),i=nt(wt(o,re(.007843137718737125)),re(1)),a=K2(i,r.mobilenetv1),s=Z2(a.out,a.conv11,r.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return Q2(u,c,r.output_layer)})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,at(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,g,m,x,b,y,w,_,S,k;return de(this,function(E){switch(E.label){case 0:return o=new Da(r),i=o.maxResults,a=o.minConfidence,[4,at(e)];case 1:for(s=E.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return g=(v=Array).from,[4,h.data()];case 2:return p=g.apply(v,[E.sent()]),m=.5,x=X2(f,p,i,m,a),b=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/b.width,_=y/b.height,S=f.arraySync(),k=x.map(function(I){var F=[Math.max(0,S[I][0]),Math.min(1,S[I][2])].map(function(V){return V*_}),A=F[0],B=F[1],W=[Math.max(0,S[I][1]),Math.min(1,S[I][3])].map(function(V){return V*w}),z=W[0],H=W[1];return new Rn(p[I],new Zu(z,A,H-z,B-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,k]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return H2(e)},t.prototype.extractParams=function(e){return V2(e)},t}(Hn);(function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(Ip);var e_=.4,t_=[new Oe(.738768,.874946),new Oe(2.42204,2.65704),new Oe(4.30971,7.04493),new Oe(10.246,4.59428),new Oe(12.6868,11.8741)],n_=[new Oe(1.603231,2.094468),new Oe(6.041143,7.080126),new Oe(2.882459,3.518061),new Oe(4.266906,5.178857),new Oe(9.041765,10.66308)],r_=[117.001,114.697,97.404],o_="tiny_yolov2_model",i_="tiny_yolov2_separable_conv_model",wi=function(n){return typeof n=="number"};function a_(n){if(!n)throw new Error("invalid config: "+n);if(typeof n.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+n.withSeparableConvs);if(!wi(n.iouThreshold)||n.iouThreshold<0||n.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+n.iouThreshold);if(!Array.isArray(n.classes)||!n.classes.length||!n.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(n.classes));if(!Array.isArray(n.anchors)||!n.anchors.length||!n.anchors.map(function(t){return t||{}}).every(function(t){return wi(t.x)&&wi(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(n.anchors));if(n.meanRgb&&(!Array.isArray(n.meanRgb)||n.meanRgb.length!==3||!n.meanRgb.every(wi)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(n.meanRgb))}function lc(n){return ie(function(){var t=wt(n,re(.10000000149011612));return Ae(qe(nt(n,t)),t)})}function Kn(n,t){return ie(function(){var e=Fr(n,[[0,0],[1,1],[1,1],[0,0]]);return e=Jt(e,t.conv.filters,[1,1],"valid"),e=nt(e,t.bn.sub),e=wt(e,t.bn.truediv),e=Ae(e,t.conv.bias),lc(e)})}function Xn(n,t){return ie(function(){var e=Fr(n,[[0,0],[1,1],[1,1],[0,0]]);return e=Uu(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=Ae(e,t.bias),lc(e)})}function s_(n,t){var e=Aa(n,t);function r(a,s){var u=Ye(n(a)),c=Ye(n(a));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(a,s,u){var c=e(a,s,3,u+"/conv"),l=r(s,u+"/bn");return{conv:c,bn:l}}var i=ac(n,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function u_(n,t,e,r){var o=jn(n),i=o.extractWeights,a=o.getRemainingWeights,s=[],u=s_(i,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var d=r[0],p=r[1],v=r[2],g=r[3],m=r[4],x=r[5],b=r[6],y=r[7],w=r[8],_=t.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),S=f(p,v,"conv1"),k=f(v,g,"conv2"),E=f(g,m,"conv3"),I=f(m,x,"conv4"),F=f(x,b,"conv5"),A=y?f(b,y,"conv6"):void 0,B=w?f(y,w,"conv7"):void 0,W=c(w||y||b,5*e,1,"conv8");h={conv0:_,conv1:S,conv2:k,conv3:E,conv4:I,conv5:F,conv6:A,conv7:B,conv8:W}}else{var d=r[0],p=r[1],v=r[2],g=r[3],m=r[4],x=r[5],b=r[6],y=r[7],w=r[8],_=l(d,p,"conv0"),S=l(p,v,"conv1"),k=l(v,g,"conv2"),E=l(g,m,"conv3"),I=l(m,x,"conv4"),F=l(x,b,"conv5"),A=l(b,y,"conv6"),B=l(y,w,"conv7"),W=c(w,5*e,1,"conv8");h={conv0:_,conv1:S,conv2:k,conv3:E,conv4:I,conv5:F,conv6:A,conv7:B,conv8:W}}if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:h,paramMappings:s}}function c_(n,t){var e=dr(n,t);function r(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function i(s){var u=o(s+"/conv"),c=r(s+"/bn");return{conv:u,bn:c}}var a=sc(e);return{extractConvParams:o,extractConvWithBatchNormParams:i,extractSeparableConvParams:a}}function l_(n,t){var e=[],r=c_(n,e),o=r.extractConvParams,i=r.extractConvWithBatchNormParams,a=r.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:u>7?a("conv6"):void 0,conv7:u>8?a("conv7"):void 0,conv8:o("conv8")}}else s={conv0:i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:i("conv6"),conv7:i("conv7"),conv8:o("conv8")};return Gn(n,e),{params:s,paramMappings:e}}var sf;(function(n){n[n.XS=224]="XS",n[n.SM=320]="SM",n[n.MD=416]="MD",n[n.LG=608]="LG"})(sf||(sf={}));var fc=function(){function n(t){var e=t===void 0?{}:t,r=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=r||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),n}(),Rp=function(n){ye(t,n);function t(e){var r=n.call(this,"TinyYolov2")||this;return a_(e),r._config=e,r}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,r){var o=Kn(e,r.conv0);return o=ot(o,[2,2],[2,2],"same"),o=Kn(o,r.conv1),o=ot(o,[2,2],[2,2],"same"),o=Kn(o,r.conv2),o=ot(o,[2,2],[2,2],"same"),o=Kn(o,r.conv3),o=ot(o,[2,2],[2,2],"same"),o=Kn(o,r.conv4),o=ot(o,[2,2],[2,2],"same"),o=Kn(o,r.conv5),o=ot(o,[2,2],[1,1],"same"),o=Kn(o,r.conv6),o=Kn(o,r.conv7),nn(o,r.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,r){var o=this.config.isFirstLayerConv2d?lc(nn(e,r.conv0,"valid",!1)):Xn(e,r.conv0);return o=ot(o,[2,2],[2,2],"same"),o=Xn(o,r.conv1),o=ot(o,[2,2],[2,2],"same"),o=Xn(o,r.conv2),o=ot(o,[2,2],[2,2],"same"),o=Xn(o,r.conv3),o=ot(o,[2,2],[2,2],"same"),o=Xn(o,r.conv4),o=ot(o,[2,2],[2,2],"same"),o=Xn(o,r.conv5),o=ot(o,[2,2],[1,1],"same"),o=r.conv6?Xn(o,r.conv6):o,o=r.conv7?Xn(o,r.conv7):o,nn(o,r.conv8,"valid",!1)},t.prototype.forwardInput=function(e,r){var o=this,i=this.params;if(!i)throw new Error("TinyYolov2 - load model before inference");return ie(function(){var a=e.toBatchTensor(r,!1).toFloat();return a=o.config.meanRgb?ri(a,o.config.meanRgb):a,a=a.div(re(256)),o.config.withSeparableConvs?o.runMobilenet(a,i):o.runTinyYolov2(a,i)})},t.prototype.forward=function(e,r){return he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,at(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent()]}})})},t.prototype.detect=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,g,m,x=this;return de(this,function(b){switch(b.label){case 0:return o=new fc(r),i=o.inputSize,a=o.scoreThreshold,[4,at(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,i)];case 2:return u=b.sent(),c=ie(function(){return et(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),a)];case 3:return f=b.sent(),u.dispose(),c.dispose(),h=f.map(function(y){return y.box}),d=f.map(function(y){return y.score}),p=f.map(function(y){return y.classScore}),v=f.map(function(y){return x.config.classes[y.label]}),g=qo(h.map(function(y){return y.rescale(i)}),d,this.config.iouThreshold,!0),m=g.map(function(y){return new Qd(d[y],p[y],v[y],h[y],l)}),[2,m]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return l_(e,this.config)},t.prototype.extractParams=function(e){var r=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=r?r.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return u_(e,this.config,this.boxEncodingSize,r)},t.prototype.extractBoxes=function(e,r,o){return he(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,g,m,x,b,y,w,_,S,k,E,I,F,A,B,W,z,H,V,L=this;return de(this,function(K){switch(K.label){case 0:return i=r.width,a=r.height,s=Math.max(i,a),u=s/i,c=s/a,l=e.shape[1],f=this.config.anchors.length,h=ie(function(){var Y=e.reshape([l,l,f,L.boxEncodingSize]),ne=Y.slice([0,0,0,0],[l,l,f,4]),oe=Y.slice([0,0,0,4],[l,l,f,1]),pe=L.withClassScores?Vn(Y.slice([0,0,0,5],[l,l,f,L.config.classes.length]),3):re(0);return[ne,oe,pe]}),d=h[0],p=h[1],v=h[2],g=[],[4,p.array()];case 1:return m=K.sent(),[4,d.array()];case 2:x=K.sent(),b=0,K.label=3;case 3:if(!(b<l))return[3,12];y=0,K.label=4;case 4:if(!(y<l))return[3,11];w=0,K.label=5;case 5:return w<f?(_=gs(m[b][y][w][0]),!o||_>o?(S=(y+gs(x[b][y][w][0]))/l*u,k=(b+gs(x[b][y][w][1]))/l*c,E=Math.exp(x[b][y][w][2])*this.config.anchors[w].x/l*u,I=Math.exp(x[b][y][w][3])*this.config.anchors[w].y/l*c,F=S-E/2,A=k-I/2,B={row:b,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,B)]:[3,7]):[3,9]):[3,10];case 6:return V=K.sent(),[3,8];case 7:V={classScore:1,label:0},K.label=8;case 8:W=V,z=W.classScore,H=W.label,g.push(gt({box:new Sa(F,A,F+E,A+I),score:_,classScore:_*z,label:H},B)),K.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return d.dispose(),p.dispose(),v.dispose(),[2,g]}})})},t.prototype.extractPredictedClass=function(e,r){return he(this,void 0,void 0,function(){var o,i,a,s;return de(this,function(u){switch(u.label){case 0:return o=r.row,i=r.col,a=r.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][i][a][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(Hn),f_=function(n){ye(t,n);function t(e){e===void 0&&(e=!0);var r=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:e_,classes:["face"]},e?{anchors:n_,meanRgb:r_}:{anchors:t_,withClassScores:!0});return r=n.call(this,o)||this,r}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new Rn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?i_:o_},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Rp),eu=function(n){ye(t,n);function t(){var e=n!==null&&n.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(fc),oi=function(){function n(){}return n.prototype.then=function(t){return he(this,void 0,void 0,function(){var e;return de(this,function(r){switch(r.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[r.sent()])]}})})},n.prototype.run=function(){return he(this,void 0,void 0,function(){return de(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},n}();function Ta(n,t,e,r,o){return o===void 0&&(o=function(i){var a=i.alignedRect;return a}),he(this,void 0,void 0,function(){var i,a,s,u,c;return de(this,function(l){switch(l.label){case 0:return i=n.map(function(f){return x2(f)?o(f):f.detection}),s=r,s?[3,5]:t instanceof je?[4,oc(t,i)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,rc(t,i)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return a=s,[4,e(a)];case 6:return c=l.sent(),a.forEach(function(f){return f instanceof je&&f.dispose()}),[2,c]}})})}function hc(n,t,e,r,o){return he(this,void 0,void 0,function(){var i=this;return de(this,function(a){return[2,Ta([n],t,function(s){return he(i,void 0,void 0,function(){return de(this,function(u){return[2,e(s[0])]})})},r,o)]})})}function h_(n){return ie(function(){return Ht(et(n,3).reverse(),3)})}var _i=2,ia=12;function d_(n,t){var e=Aa(n,t),r=ic(n,t);function o(c,l){var f=Ye(n(c));return t.push({paramPath:l}),f}function i(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),g=e(c[2],c[3],f?2:3,l+"/conv3"),m=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:v,conv3:g,prelu3_alpha:m}}function a(){var c=i([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return gt(gt({},c),{conv4_1:l,conv4_2:f})}function s(){var c=i([3,28,48,64],"rnet",!0),l=r(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=r(128,2,"rnet/fc2_1"),d=r(128,4,"rnet/fc2_2");return gt(gt({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=i([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=r(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=r(256,2,"onet/fc2_1"),v=r(256,4,"onet/fc2_2"),g=r(256,10,"onet/fc2_3");return gt(gt({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:v,fc2_3:g})}return{extractPNetParams:a,extractRNetParams:s,extractONetParams:u}}function p_(n){var t=jn(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=d_(e,o),a=i.extractPNetParams,s=i.extractRNetParams,u=i.extractONetParams,c=a(),l=s(),f=u();if(r().length!==0)throw new Error("weights remaing after extract: "+r().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function v_(n,t){var e=dr(n,t);function r(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function i(l){return e(l,1)}function a(l){var f=r(l+"/conv1"),h=i(l+"/prelu1_alpha"),d=r(l+"/conv2"),p=i(l+"/prelu2_alpha"),v=r(l+"/conv3"),g=i(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:v,prelu3_alpha:g}}function s(){var l=a("pnet"),f=r("pnet/conv4_1"),h=r("pnet/conv4_2");return gt(gt({},l),{conv4_1:f,conv4_2:h})}function u(){var l=a("rnet"),f=o("rnet/fc1"),h=i("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return gt(gt({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=a("onet"),f=r("onet/conv4"),h=i("onet/prelu4_alpha"),d=o("onet/fc1"),p=i("onet/prelu5_alpha"),v=o("onet/fc2_1"),g=o("onet/fc2_2"),m=o("onet/fc2_3");return gt(gt({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:v,fc2_2:g,fc2_3:m})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function g_(n){var t=[],e=v_(n,t),r=e.extractPNetParams,o=e.extractRNetParams,i=e.extractONetParams,a=r(),s=o(),u=i();return Gn(n,t),{params:{pnet:a,rnet:s,onet:u},paramMappings:t}}function tu(n,t){var e=t[0],r=t[1];return{height:Math.floor(e*n),width:Math.floor(r*n)}}function m_(n,t,e){for(var r=e[0],o=e[1],i=ia/n,a=[],s=Math.min(r,o)*i,u=0;s>=12;)a.push(i*Math.pow(t,u)),s=s*t,u+=1;return a}var dc=function(n){ye(t,n);function t(e,r,o,i){return n.call(this,{left:e,top:r,right:o,bottom:i},!0)||this}return t}(cr);function Sp(n){return ie(function(){return wt(nt(n,re(127.5)),re(.0078125))})}function io(n,t){return ie(function(){return Ae(qe(n),wt(t,Qi(qe(Qi(n)))))})}function pc(n,t,e){return e===void 0&&(e=!1),ie(function(){var r=nn(n,t.conv1,"valid");return r=io(r,t.prelu1_alpha),r=ot(r,e?[2,2]:[3,3],[2,2],"same"),r=nn(r,t.conv2,"valid"),r=io(r,t.prelu2_alpha),r=e?r:ot(r,[3,3],[2,2],"valid"),r=nn(r,t.conv3,"valid"),r=io(r,t.prelu3_alpha),r})}function y_(n,t){return ie(function(){var e=pc(n,t,!0),r=nn(e,t.conv4_1,"valid"),o=Xt(Ca(r,3),3),i=Vn(nt(r,o),3),a=nn(e,t.conv4_2,"valid");return{prob:i,regions:a}})}function x_(n,t){return ie(function(){var e=tu(t,n.shape.slice(1)),r=e.height,o=e.width,i=ju.resizeBilinear(n,[r,o]),a=Sp(i);return ur(a,[0,2,1,3])})}function b_(n,t,e,r){for(var o=[],i=n.arraySync(),a=0;a<n.shape[0];a++)for(var s=0;s<n.shape[1];s++)i[a][s]>=r&&o.push(new Oe(s,a));var u=o.map(function(c){var l=new Sa(Math.round((c.y*_i+1)/e),Math.round((c.x*_i+1)/e),Math.round((c.y*_i+ia)/e),Math.round((c.x*_i+ia)/e)),f=i[c.y][c.x],h=t.arraySync(),d=new dc(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function w_(n,t,e,r,o){o.stage1=[];var i=t.map(function(h){return ie(function(){var d={scale:h},p=x_(n,h),v=Date.now(),g=y_(p,r),m=g.prob,x=g.regions;d.pnet=Date.now()-v;var b=et(et(m,3)[1])[0],y=et(x)[0];return{scoresTensor:b,regionsTensor:y,scale:h,statsForScale:d}})}),a=i.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,v=h.scale,g=h.statsForScale,m=b_(d,p,v,e);if(d.dispose(),p.dispose(),!m.length)return o.stage1.push(g),[];var x=Date.now(),b=qo(m.map(function(y){return y.cell}),m.map(function(y){return y.score}),.5);return g.nms=Date.now()-x,g.numBoxes=b.length,o.stage1.push(g),b.map(function(y){return m[y]})}),s=a.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=qo(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new Sa(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function kp(n,t,e){var r=e.width,o=e.height;return he(this,void 0,void 0,function(){var i,a,s,u=this;return de(this,function(c){switch(c.label){case 0:return i=Dr(n),[4,Promise.all(t.map(function(l){return he(u,void 0,void 0,function(){var f,h,d,p,v,g,m,x;return de(this,function(b){return f=l.padAtBorders(n.height,n.width),h=f.y,d=f.ey,p=f.x,v=f.ex,g=p-1,m=h-1,x=i.getImageData(g,m,v-g,d-m),[2,Ct.isNodejs()?nc(x):createImageBitmap(x)]})})}))];case 1:return a=c.sent(),s=[],a.forEach(function(l){var f=ka({width:r,height:o}),h=Dr(f);h.drawImage(l,0,0,r,o);for(var d=h.getImageData(0,0,r,o).data,p=[],v=0;v<d.length;v+=4)p.push(d[v+2]),p.push(d[v+1]),p.push(d[v]);s.push(p)}),[2,s.map(function(l){var f=ie(function(){var h=ur(Dt(l,[1,r,o,3]),[0,2,1,3]).toFloat();return Sp(h)});return f})]}})})}function __(n,t){return ie(function(){var e=pc(n,t),r=Zt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=mn(r,t.fc1),i=io(o,t.prelu4_alpha),a=mn(i,t.fc2_1),s=Xt(Ca(a,1),1),u=Vn(nt(a,s),1),c=mn(i,t.fc2_2),l=et(u,1)[1];return{scores:l,regions:c}})}function C_(n,t,e,r,o){return he(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,g,m,x;return de(this,function(b){switch(b.label){case 0:return i=Date.now(),[4,kp(n,t,{width:24,height:24})];case 1:return a=b.sent(),o.stage2_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(y){var w=__(y,r);return y.dispose(),w}),o.stage2_rnet=Date.now()-i,u=s.length>1?Ze(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[b.sent()]),u.dispose(),h=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),d=h.map(function(y){return t[y]}),p=h.map(function(y){return c[y]}),v=[],g=[],d.length>0&&(i=Date.now(),m=qo(d,p,.7),o.stage2_nms=Date.now()-i,x=m.map(function(y){var w=s[h[y]].regions.arraySync();return new dc(w[0][0],w[0][1],w[0][2],w[0][3])}),g=m.map(function(y){return p[y]}),v=m.map(function(y,w){return d[y].calibrate(x[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:v,scores:g}]}})})}function E_(n,t){return ie(function(){var e=pc(n,t);e=ot(e,[2,2],[2,2],"same"),e=nn(e,t.conv4,"valid"),e=io(e,t.prelu4_alpha);var r=Zt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=mn(r,t.fc1),i=io(o,t.prelu5_alpha),a=mn(i,t.fc2_1),s=Xt(Ca(a,1),1),u=Vn(nt(a,s),1),c=mn(i,t.fc2_2),l=mn(i,t.fc2_3),f=et(u,1)[1];return{scores:f,regions:c,points:l}})}function I_(n,t,e,r,o){return he(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,g,m,x,b;return de(this,function(y){switch(y.label){case 0:return i=Date.now(),[4,kp(n,t,{width:48,height:48})];case 1:return a=y.sent(),o.stage3_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(w){var _=E_(w,r);return w.dispose(),_}),o.stage3_onet=Date.now()-i,u=s.length>1?Ze(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),h=c.map(function(w,_){return{score:w,idx:_}}).filter(function(w){return w.score>e}).map(function(w){var _=w.idx;return _}),d=h.map(function(w){var _=s[w].regions.arraySync();return new dc(_[0][0],_[0][1],_[0][2],_[0][3])}),p=h.map(function(w,_){return t[w].calibrate(d[_])}),v=h.map(function(w){return c[w]}),g=[],m=[],x=[],p.length>0&&(i=Date.now(),b=qo(p,v,.7,!1),o.stage3_nms=Date.now()-i,g=b.map(function(w){return p[w]}),m=b.map(function(w){return v[w]}),x=b.map(function(w,_){return Array(5).fill(0).map(function(S,k){var E=s[w].points.arraySync();return new Oe(E[0][k]*(g[_].width+1)+g[_].left,E[0][k+5]*(g[_].height+1)+g[_].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:g,scores:m,points:x}]}})})}var R_=function(n){ye(t,n);function t(){return n.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return he(this,void 0,void 0,function(){return de(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return he(this,void 0,void 0,function(){return de(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,g,m,x,b,y,w,_,S,k;return de(this,function(E){switch(E.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(i=e.canvases[0],!i)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return a={},s=Date.now(),u=ie(function(){return h_(Xt(Ju.fromPixels(i)).toFloat())}),c=function(I){return u.dispose(),a.total=Date.now()-s,I},l=u.shape.slice(1),f=l[0],h=l[1],d=new Ep(r),p=d.minFaceSize,v=d.scaleFactor,g=d.maxNumScales,m=d.scoreThresholds,x=d.scaleSteps,b=(x||m_(p,v,[f,h])).filter(function(I){var F=tu(I,[f,h]);return Math.min(F.width,F.height)>ia}).slice(0,g),a.scales=b,a.pyramid=b.map(function(I){return tu(I,[f,h])}),y=Date.now(),[4,w_(u,b,m[0],o.pnet,a)];case 1:return w=E.sent(),a.total_stage1=Date.now()-y,w.boxes.length?(a.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,C_(i,w.boxes,m[1],o.rnet,a)]):[2,c({results:[],stats:a})];case 2:return _=E.sent(),a.total_stage2=Date.now()-y,_.boxes.length?(a.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,I_(i,_.boxes,m[2],o.onet,a)]):[2,c({results:[],stats:a})];case 3:return S=E.sent(),a.total_stage3=Date.now()-y,k=S.boxes.map(function(I,F){return uc(ec({},new Rn(S.scores[F],new Zu(I.left/h,I.top/f,I.width/h,I.height/f),{height:f,width:h})),new n2(S.points[F].map(function(A){return A.sub(new Oe(I.left,I.top)).div(new Oe(I.width,I.height))}),{width:I.width,height:I.height}))}),[2,c({results:k,stats:a})]}})})},t.prototype.forward=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,at(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent().results]}})})},t.prototype.forwardWithStats=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,at(e)];case 1:return[2,o.apply(this,[i.sent(),r])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return g_(e)},t.prototype.extractParams=function(e){return p_(e)},t}(Hn),S_=.4,k_=[new Oe(1.603231,2.094468),new Oe(6.041143,7.080126),new Oe(2.882459,3.518061),new Oe(4.266906,5.178857),new Oe(9.041765,10.66308)],A_=[117.001,114.697,97.404],D_=function(n){ye(t,n);function t(){var e=this,r={withSeparableConvs:!0,iouThreshold:S_,classes:["face"],anchors:k_,meanRgb:A_,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=n.call(this,r)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new Rn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Rp),kt={ssdMobilenetv1:new Ip,tinyFaceDetector:new D_,tinyYolov2:new f_,mtcnn:new R_,faceLandmark68Net:new yp,faceLandmark68TinyNet:new N2,faceRecognitionNet:new W2,faceExpressionNet:new y2,ageGenderNet:new k2},Ap=function(n){ye(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t}(oi),vc=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o=this;return de(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,Ta(e,this.input,function(a){return he(o,void 0,void 0,function(){return de(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return kt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){return vp(a,r[s])})]}})})},t.prototype.withAgeAndGender=function(){return new xc(this,this.input)},t}(Ap),gc=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,hc(e,this.input,function(i){return kt.faceExpressionNet.predictExpressions(i)},this.extractedFaces)]:[2];case 2:return r=o.sent(),[2,vp(e,r)]}})})},t.prototype.withAgeAndGender=function(){return new bc(this,this.input)},t}(Ap),mc=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new wc(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Cc(this,this.input)},t}(vc),yc=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new _c(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Ec(this,this.input)},t}(gc),Dp=function(n){ye(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t}(oi),xc=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o=this;return de(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,Ta(e,this.input,function(a){return he(o,void 0,void 0,function(){return de(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return kt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){var u=r[s],c=u.age,l=u.gender,f=u.genderProbability;return _p(Cp(a,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new vc(this,this.input)},t}(Dp),bc=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o,i,a;return de(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,hc(e,this.input,function(u){return kt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return r=s.sent(),o=r.age,i=r.gender,a=r.genderProbability,[2,_p(Cp(e,i,a),o)]}})})},t.prototype.withFaceExpressions=function(){return new gc(this,this.input)},t}(Dp),wc=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new mc(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Cc(this,this.input)},t}(xc),_c=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new yc(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Ec(this,this.input)},t}(bc),Tp=function(n){ye(t,n);function t(e,r){var o=n.call(this)||this;return o.parentTask=e,o.input=r,o}return t}(oi),Cc=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,Ta(e,this.input,function(i){return Promise.all(i.map(function(a){return kt.faceRecognitionNet.computeFaceDescriptor(a)}))},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return r=o.sent(),[2,r.map(function(i,a){return wp(e[a],i)})]}})})},t.prototype.withFaceExpressions=function(){return new mc(this,this.input)},t.prototype.withAgeAndGender=function(){return new wc(this,this.input)},t}(Tp),Ec=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,hc(e,this.input,function(i){return kt.faceRecognitionNet.computeFaceDescriptor(i)},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return r=o.sent(),[2,wp(e,r)]}})})},t.prototype.withFaceExpressions=function(){return new yc(this,this.input)},t.prototype.withAgeAndGender=function(){return new _c(this,this.input)},t}(Tp),Np=function(n){ye(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.useTinyLandmarkNet=o,i}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?kt.faceLandmark68TinyNet:kt.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(oi),T_=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o,i,a,s=this;return de(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),r=e.map(function(c){return c.detection}),this.input instanceof je?[4,oc(this.input,r)]:[3,3];case 2:return i=u.sent(),[3,5];case 3:return[4,rc(this.input,r)];case 4:i=u.sent(),u.label=5;case 5:return o=i,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return a=u.sent(),o.forEach(function(c){return c instanceof je&&c.dispose()}),[2,e.map(function(c,l){return uc(c,a[l])})]}})})},t.prototype.withFaceExpressions=function(){return new mc(this,this.input)},t.prototype.withAgeAndGender=function(){return new wc(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Cc(this,this.input)},t}(Np),N_=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o,i,a;return de(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(r=e.detection,this.input instanceof je?[4,oc(this.input,[r])]:[3,3]):[2];case 2:return i=s.sent(),[3,5];case 3:return[4,rc(this.input,[r])];case 4:i=s.sent(),s.label=5;case 5:return o=i,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return a=s.sent(),o.forEach(function(u){return u instanceof je&&u.dispose()}),[2,uc(e,a)]}})})},t.prototype.withFaceExpressions=function(){return new yc(this,this.input)},t.prototype.withAgeAndGender=function(){return new _c(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Ec(this,this.input)},t}(Np),Fp=function(n){ye(t,n);function t(e,r){r===void 0&&(r=new Da);var o=n.call(this)||this;return o.input=e,o.options=r,o}return t}(oi),F_=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o,i;return de(this,function(a){switch(a.label){case 0:return e=this,r=e.input,o=e.options,o instanceof Ep?[4,kt.mtcnn.forward(r,o)]:[3,2];case 1:return[2,a.sent().map(function(s){return s.detection})];case 2:if(i=o instanceof eu?function(s){return kt.tinyFaceDetector.locateFaces(s,o)}:o instanceof Da?function(s){return kt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof fc?function(s){return kt.tinyYolov2.locateFaces(s,o)}:null,!i)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,i(r)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(r){return he(e,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o.map(function(a){return ec({},a)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new T_(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new vc(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new xc(this.runAndExtendWithFaceDetections(),this.input)},t}(Fp),P_=function(n){ye(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return[4,new F_(this.input,this.options)];case 1:return e=o.sent(),r=e[0],e.forEach(function(i){i.score>r.score&&(r=i)}),[2,r]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(r){return he(e,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o?ec({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new N_(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new gc(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new bc(this.runAndExtendWithFaceDetection(),this.input)},t}(Fp);function uf(n,t){return t===void 0&&(t=new Da),new P_(n,t)}function M_(n,t){if(n.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(n),r=Array.from(t);return Math.sqrt(e.map(function(o,i){return o-r[i]}).reduce(function(o,i){return o+Math.pow(i,2)},0))}(function(){function n(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var r=Array.isArray(t)?t:[t];if(!r.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,i=function(){return"person "+o++};this._labeledDescriptors=r.map(function(a){if(a instanceof yi)return a;if(a instanceof Float32Array)return new yi(i(),[a]);if(a.descriptor&&a.descriptor instanceof Float32Array)return new yi(i(),[a.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(n.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),n.prototype.computeMeanDistance=function(t,e){return e.map(function(r){return M_(r,t)}).reduce(function(r,o){return r+o},0)/(e.length||1)},n.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(r){var o=r.descriptors,i=r.label;return new tf(i,e.computeMeanDistance(t,o))}).reduce(function(r,o){return r.distance<o.distance?r:o})},n.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new tf("unknown",e.distance)},n.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},n.fromJSON=function(t){var e=t.labeledDescriptors.map(function(r){return yi.fromJSON(r)});return new n(e,t.distanceThreshold)},n})();const O_={class:"container"},B_={key:0,class:"status"},L_={key:1,class:"status error"},W_={class:"video-container"},U_=["disabled"],V_={key:3,class:"embedding-box"},Ci=.15,z_={__name:"FaceCapture",setup(n){const t=qt(null),e=qt(null),r=qt(!0),o=qt(""),i=qt(!1),a=qt(null),s=qt(!1),u=qt(!1),c=qt(0),l=qt({width:0,height:0}),f=qt({width:0,height:0}),h=qt({x:0,y:0,width:0,height:0});let d=null;async function p(){try{const w=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1});t.value.srcObject=w,await t.value.play(),r.value=!1}catch(w){o.value="Could not access the camera: "+w,r.value=!1}}async function v(){try{console.log("Loading Tiny Face Detector..."),await kt.tinyFaceDetector.loadFromUri("/models/tiny_face_detector"),console.log("Tiny Face Detector loaded."),console.log("Loading Face Landmark 68..."),await kt.faceLandmark68Net.loadFromUri("/models/face_landmark_68"),console.log("Face Landmark 68 loaded."),console.log("Loading Face Recognition Net..."),await kt.faceRecognitionNet.loadFromUri("/models/face_recognition"),console.log("Face Recognition Net loaded.")}catch(w){console.error("Model loading error:",w),o.value="Failed to load one or more models."}}function g(){t.value&&(l.value={width:t.value.offsetWidth,height:t.value.offsetHeight},f.value={width:t.value.videoWidth,height:t.value.videoHeight},c.value=t.value.offsetWidth)}mu(async()=>{await v(),await p(),m(),g(),window.addEventListener("resize",g)}),yu(()=>{d&&cancelAnimationFrame(d),window.removeEventListener("resize",g)});async function m(){if(!t.value)return;const w=async()=>{if(!t.value||t.value.readyState!==4){a.value=null,s.value=!1,u.value=!1,d=requestAnimationFrame(w);return}const _=await uf(t.value,new eu);if(_&&_.box){a.value=_.box,s.value=!0,u.value=!0;const S=b(_.box);h.value.x=h.value.x+(S.x-h.value.x)*Ci,h.value.y=h.value.y+(S.y-h.value.y)*Ci,h.value.width=h.value.width+(S.width-h.value.width)*Ci,h.value.height=h.value.height+(S.height-h.value.height)*Ci}else a.value=null,s.value=!1,u.value=!1;d=requestAnimationFrame(w)};d=requestAnimationFrame(w)}async function x(){if(!t.value)return;i.value=!0;const w=await uf(t.value,new eu).withFaceLandmarks().withFaceDescriptor();w&&w.descriptor?e.value=Array.from(w.descriptor):(e.value=null,o.value="No face detected."),i.value=!1}function b(w){const _=l.value,S=f.value;if(!_.width||!_.height||!S.width||!S.height)return w;const k=_.width/S.width,E=_.height/S.height,I={x:w.x*k,y:w.y*E,width:w.width*k,height:w.height*E};return{...I,x:_.width-I.x-I.width}}function y(){x().then(()=>{e.value&&console.log("Face embedding:",e.value)})}return(w,_)=>(Nn(),$n("div",O_,[r.value?(Nn(),$n("div",B_,"Loading camera...")):o.value?(Nn(),$n("div",L_,Ei(o.value),1)):po("",!0),Zn("div",W_,[Av(Zn("video",{ref_key:"videoRef",ref:t,autoplay:"",playsinline:"",class:"video-feed",onLoadedmetadata:g},null,544),[[Xg,!r.value&&!o.value]]),bt(Gc,{name:"face-overlay-fade"},{default:Es(()=>[s.value&&a.value&&l.value.width?(Nn(),$n("div",{key:0,class:"face-overlay",style:No({left:b(a.value).x+"px",top:b(a.value).y+"px",width:b(a.value).width+"px",height:b(a.value).height+"px"})},null,4)):po("",!0)]),_:1}),bt(Gc,{name:"capture-btn-fade"},{default:Es(()=>[u.value&&a.value&&l.value.width?(Nn(),$n("button",{key:0,class:"capture-face-btn",style:No({left:h.value.x+h.value.width/2+"px",top:h.value.y+h.value.height+16+"px",transform:"translateX(-50%)",position:"absolute",zIndex:10}),onClick:y}," Capture Face ",4)):po("",!0)]),_:1})]),!r.value&&!o.value?(Nn(),$n("button",{key:2,class:"capture-btn",disabled:i.value,onClick:x,style:{display:"none"}},Ei(i.value?"Processing...":"Get Face Embedding"),9,U_)):po("",!0),e.value?(Nn(),$n("div",V_,[_[0]||(_[0]=Zn("h3",null,"Face Embedding:",-1)),Zn("pre",null,Ei(e.value),1)])):po("",!0)]))}},H_={__name:"App",setup(n){return(t,e)=>(Nn(),$n("div",null,[e[0]||(e[0]=Zn("h1",null,"meqr",-1)),e[1]||(e[1]=Zn("p",null,"Scan a face to find their website. Upload your face so others can find you.",-1)),bt(z_)]))}};fm(H_).mount("#app")});export default G_();
