"use strict";var c=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var b=c(function(C,w){"use strict";var T=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,E=require("@stdlib/assert-is-ndarray-like"),O=require("@stdlib/assert-is-plain-object"),j=require("@stdlib/assert-is-nonnegative-integer-array").primitives,N=require("@stdlib/assert-is-empty-collection"),t=require("@stdlib/assert-has-own-property"),P=require("@stdlib/array-base-assert-contains").factory,k=require("@stdlib/ndarray-base-shape2strides"),D=require("@stdlib/ndarray-base-buffer"),V=require("@stdlib/ndarray-base-numel"),F=require("@stdlib/ndarray-base-fill"),m=require("@stdlib/ndarray-dtype"),g=require("@stdlib/ndarray-shape"),y=require("@stdlib/ndarray-order"),I=require("@stdlib/ndarray-ctor"),L=require("@stdlib/ndarray-dtypes"),q=require("@stdlib/array-base-join"),s=require("@stdlib/string-format"),d=L("boolean_and_generic"),h=P(d);function S(i){var e,a,n,f,o,u,v,l,p,r;if(!E(i))throw new TypeError(s("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",i));if(v=!1,o={},arguments.length>1){if(e=arguments[1],!O(e))throw new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",e));if(t(e,"dtype")){if(a=e.dtype,!h(a))throw new TypeError(s('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",q(d,'", "'),a));v=!0}else a=m(i);if(t(e,"shape")){if(r=e.shape,T(r))r=[r];else if(!j(r)&&!N(r))throw new TypeError(s("invalid option. `%s` option must be a nonnegative integer or an array of nonnegative integers. Option: `%s`.","shape",r))}else r=g(i);t(e,"order")?n=e.order:n=y(i),t(e,"mode")&&(o.mode=e.mode),t(e,"submode")&&(o.submode=e.submode),t(e,"readonly")&&(o.readonly=e.readonly)}else a=m(i),r=g(i),n=y(i);if(!v&&!h(a))throw new TypeError(s('invalid argument. First argument must have one of the following data types: "%s". Value: `%s`.',q(d,'", "'),a));return f=r.length,f>0?(u=V(r),p=k(r,n)):(u=1,p=[0]),l=new I(a,D(a,u),r,p,0,n,o),F(l,!0),l}w.exports=S});var _=b();module.exports=_;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
