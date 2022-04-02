(()=>{var t={642:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(419);const r=i.directive((t=>e=>{if(!i.isNodePart(e))throw Error("The `unsafeHTML` directive can only be used in text nodes");e.setValue(`${i.unsafePrefixString}${t}`)}));e.unsafeHTML=r},419:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.directive=function(t){return function(...e){const s=t(...e);if("function"!=typeof s)throw Error("directives are factory functions and must return a function when called");return s.isDirective=!0,s}},e.isAttributePart=function(t){return t&&void 0!==t.getValue&&"name"in t},e.isDirective=function(t){return"function"==typeof t&&t.isDirective},e.isNodePart=function(t){return t&&void 0!==t.getValue&&!("name"in t)},e.isPrimitive=function(t){const e=typeof t;return null===t||!("object"===e||"function"===e)},e.nothing="__nothing-lit-html-server-string__",e.unsafePrefixString="__unsafe-lit-html-server-string__"},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,s="millisecond",i="second",r="minute",a="hour",n="day",o="week",l="month",u="quarter",d="year",c="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,s){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(s)+t},$={s:m,z:function(t){var e=-t.utcOffset(),s=Math.abs(e),i=Math.floor(s/60),r=s%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(r,2,"0")},m:function t(e,s){if(e.date()<s.date())return-t(s,e);var i=12*(s.year()-e.year())+(s.month()-e.month()),r=e.clone().add(i,l),a=s-r<0,n=e.clone().add(i+(a?-1:1),l);return+(-(i+(s-r)/(a?r-n:n-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:o,d:n,D:c,h:a,m:r,s:i,ms:s,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",v={};v[g]=_;var M=function(t){return t instanceof D},b=function t(e,s,i){var r;if(!e)return g;if("string"==typeof e){var a=e.toLowerCase();v[a]&&(r=a),s&&(v[a]=s,r=a);var n=e.split("-");if(!r&&n.length>1)return t(n[0])}else{var o=e.name;v[o]=e,r=o}return!i&&r&&(g=r),r||!i&&g},y=function(t,e){if(M(t))return t.clone();var s="object"==typeof e?e:{};return s.date=t,s.args=arguments,new D(s)},w=$;w.l=b,w.i=M,w.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function _(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=_.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,e){var s=y(t);return this.startOf(e)<=s&&s<=this.endOf(e)},m.isAfter=function(t,e){return y(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<y(t)},m.$g=function(t,e,s){return w.u(t)?this[e]:this.set(s,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var s=this,u=!!w.u(e)||e,h=w.p(t),f=function(t,e){var i=w.w(s.$u?Date.UTC(s.$y,e,t):new Date(s.$y,e,t),s);return u?i:i.endOf(n)},p=function(t,e){return w.w(s.toDate()[t].apply(s.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),s)},_=this.$W,m=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case d:return u?f(1,0):f(31,11);case l:return u?f(1,m):f(0,m+1);case o:var v=this.$locale().weekStart||0,M=(_<v?_+7:_)-v;return f(u?$-M:$+(6-M),m);case n:case c:return p(g+"Hours",0);case a:return p(g+"Minutes",1);case r:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var o,u=w.p(t),h="set"+(this.$u?"UTC":""),f=(o={},o[n]=h+"Date",o[c]=h+"Date",o[l]=h+"Month",o[d]=h+"FullYear",o[a]=h+"Hours",o[r]=h+"Minutes",o[i]=h+"Seconds",o[s]=h+"Milliseconds",o)[u],p=u===n?this.$D+(e-this.$W):e;if(u===l||u===d){var _=this.clone().set(c,1);_.$d[f](p),_.init(),this.$d=_.set(c,Math.min(this.$D,_.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[w.p(t)]()},m.add=function(s,u){var c,h=this;s=Number(s);var f=w.p(u),p=function(t){var e=y(h);return w.w(e.date(e.date()+Math.round(t*s)),h)};if(f===l)return this.set(l,this.$M+s);if(f===d)return this.set(d,this.$y+s);if(f===n)return p(1);if(f===o)return p(7);var _=(c={},c[r]=t,c[a]=e,c[i]=1e3,c)[f]||1,m=this.$d.getTime()+s*_;return w.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,s=this.$locale();if(!this.isValid())return s.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),a=this.$H,n=this.$m,o=this.$M,l=s.weekdays,u=s.months,d=function(t,s,r,a){return t&&(t[s]||t(e,i))||r[s].substr(0,a)},c=function(t){return w.s(a%12||12,t,"0")},f=s.meridiem||function(t,e,s){var i=t<12?"AM":"PM";return s?i.toLowerCase():i},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:d(s.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(s.weekdaysMin,this.$W,l,2),ddd:d(s.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:w.s(a,2,"0"),h:c(1),hh:c(2),a:f(a,n,!0),A:f(a,n,!1),m:String(n),mm:w.s(n,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(t,e){return e||_[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(s,c,h){var f,p=w.p(c),_=y(s),m=(_.utcOffset()-this.utcOffset())*t,$=this-_,g=w.m(this,_);return g=(f={},f[d]=g/12,f[l]=g,f[u]=g/3,f[o]=($-m)/6048e5,f[n]=($-m)/864e5,f[a]=$/e,f[r]=$/t,f[i]=$/1e3,f)[p]||$,h?g:w.a(g)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),i=b(t,e,!0);return i&&(s.$L=i),s},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},_}(),S=D.prototype;return y.prototype=S,[["$ms",s],["$s",i],["$m",r],["$H",a],["$W",n],["$M",l],["$y",d],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,D,y),t.$i=!0),y},y.locale=b,y.isDayjs=M,y.unix=function(t){return y(1e3*t)},y.en=v[g],y.Ls=v,y.p={},y}()},600:function(t,e,s){t.exports=function(t){"use strict";var e=function(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}(t),s="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),i="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),r="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),a="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),n=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function o(t,e,s){var i,r;return"m"===s?e?"минута":"минуту":t+" "+(i=+t,r={mm:e?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[s].split("_"),i%10==1&&i%100!=11?r[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?r[1]:r[2])}var l=function(t,e){return n.test(e)?s[t.month()]:i[t.month()]};l.s=i,l.f=s;var u=function(t,e){return n.test(e)?r[t.month()]:a[t.month()]};u.s=a,u.f=r;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:l,monthsShort:u,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:o,mm:o,h:"час",hh:o,d:"день",dd:o,M:"месяц",MM:o,y:"год",yy:o},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};return e.default.locale(d,null,!0),d}(s(484))},176:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,s,i){var r=s.prototype,a=r.format;i.en.formats=t,r.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var s=this.$locale().formats,i=function(e,s){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,i,r){var a=r&&r.toUpperCase();return i||s[r]||t[r]||s[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,s){return e||s.slice(1)}))}))}(e,void 0===s?{}:s);return a.call(this,i)}}}()},178:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(i,r,a){var n=r.prototype;a.utc=function(t){return new r({date:t,utc:!0,args:arguments})},n.utc=function(e){var s=a(this.toDate(),{locale:this.$L,utc:!0});return e?s.add(this.utcOffset(),t):s},n.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var o=n.parse;n.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var l=n.init;n.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else l.call(this)};var u=n.utcOffset;n.utcOffset=function(i,r){var a=this.$utils().u;if(a(i))return this.$u?0:a(this.$offset)?u.call(this):this.$offset;if("string"==typeof i&&(i=function(t){void 0===t&&(t="");var i=t.match(e);if(!i)return null;var r=(""+i[0]).match(s)||["-",0,0],a=r[0],n=60*+r[1]+ +r[2];return 0===n?0:"+"===a?n:-n}(i),null===i))return this;var n=Math.abs(i)<=16?60*i:i,o=this;if(r)return o.$offset=n,o.$u=0===i,o;if(0!==i){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(n+l,t)).$offset=n,o.$x.$localOffset=l}else o=this.utc();return o};var d=n.format;n.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,e)},n.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},n.isUTC=function(){return!!this.$u},n.toISOString=function(){return this.toDate().toISOString()},n.toString=function(){return this.toDate().toUTCString()};var c=n.toDate;n.toDate=function(t){return"s"===t&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var h=n.diff;n.diff=function(t,e,s){if(t&&this.$u===t.$u)return h.call(this,t,e,s);var i=this.local(),r=a(t).local();return h.call(i,r,e,s)}}}()},293:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ApiClient=void 0;const r=i(s(89)),a=i(s(913)),n=s(209),o=s(832);class l{async browseBoards(){const t=`${a.default.api.host}/${l.BASE_URL}/boards`,e=await(0,r.default)(t);if(200!==e.status)throw new n.ApiError(e.status,e.statusText);return(await e.json()).items.map(o.convertBoardDtoToModel)}async readBoard(t){const e=`${a.default.api.host}/${l.BASE_URL}/boards/${t}`,s=await(0,r.default)(e);if(200!==s.status)throw new n.ApiError(s.status,s.statusText);const i=await s.json();return(0,o.convertBoardDtoToModel)(i.item)}async browseThreads(t){const e=`${a.default.api.host}/${l.BASE_URL}/boards/${t}/threads`,s=await(0,r.default)(e);if(200!==s.status)throw new n.ApiError(s.status,s.statusText);return(await s.json()).items.map(o.convertThreadDtoToModel)}async readThread(t,e){const s=`${a.default.api.host}/${l.BASE_URL}/boards/${t}/threads/${e}`,i=await(0,r.default)(s);if(200!==i.status)throw new n.ApiError(i.status,i.statusText);const u=await i.json();return(0,o.convertThreadDtoToModel)(u.item)}async browsePosts(t,e){const s=`${a.default.api.host}/${l.BASE_URL}/boards/${t}/threads/${e}/posts`,i=await(0,r.default)(s);if(200!==i.status)throw new n.ApiError(i.status,i.statusText);return(await i.json()).items.map(o.convertPostDtoToModel)}}e.ApiClient=l,l.BASE_URL="api/v1",e.default=l},832:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.convertFileDtoToModel=e.convertPostDtoToModel=e.convertThreadDtoToModel=e.convertBoardDtoToModel=void 0;const r=i(s(812)),a=i(s(27)),n=i(s(894)),o=i(s(624));function l(t){return new a.default(t.hash,t.name,t.extension,t.path,t.type,+t.size,t.width?+t.width:null,t.height?+t.height:null,t.length?+t.length:null,new Date(t.created_at))}e.convertBoardDtoToModel=function(t){return new r.default(t.slug,t.title,new Date(t.created_at),+t.post_count)},e.convertThreadDtoToModel=function(t){return new o.default(+t.id,t.slug,t.subject,t.name,t.tripcode,t.message,t.message_parsed,t.files.map(l),new Date(t.created_at),new Date(t.bumped_at),+t.post_count)},e.convertPostDtoToModel=function(t){return new n.default(+t.id,t.slug,+t.parent_id,t.name,t.tripcode,t.message,t.message_parsed,t.files.map(l),new Date(t.created_at))},e.convertFileDtoToModel=l},752:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=void 0;const r=i(s(406)),a=i(s(741)),n=i(s(5)),o=i(s(885)),l=i(s(552)),u=i(s(440)),d=i(s(97)),c=s(689),h=i(s(293)),f=i(s(911));e.createApp=function(){const t=new h.default,e=new c.BoardController(t),s=new f.default(t),i=new a.default;i.get("/",e.index),i.get("/:slug",e.show),i.get("/:slug/res/:threadId",s.index);const p=new r.default;return p.use(n.default.contentSecurityPolicy({directives:{defaultSrc:["'self'"],baseUri:["'self'"],fontSrc:["'self'","https:","data:"],formAction:["'self'"],frameAncestors:["'self'"],imgSrc:["'self'","data:"],objectSrc:["'none'"],scriptSrc:["'self'","'unsafe-inline'"],styleSrc:["'self'","'unsafe-inline'"]}})),p.use(n.default.referrerPolicy()),p.use(n.default.noSniff()),p.use(n.default.dnsPrefetchControl()),p.use(n.default.hidePoweredBy()),p.use((0,o.default)()),p.use((0,l.default)()),p.use((0,u.default)()),p.use((0,d.default)("public",{maxAge:6048e5})),p.use(i.routes()),p.use(i.allowedMethods()),p}},913:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.config=void 0;const r=i(s(142)),a=s(282);r.default.config(),e.config={api:{host:a.env.API_HOST||"http://127.0.0.1:3000"},content:{host:a.env.CONTENT_HOST||"http://127.0.0.1:3000"},frontend:{host:a.env.FRONTEND_HOST||"http://127.0.0.1:3001"},dev:{host:a.env.DEV_HOST||"http://127.0.0.1:9000"},http:{port:+(a.env.HTTP_PORT||3001)},site:{title:a.env.SITE_TITLE||"Imageboard"}},e.default=e.config},689:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.BoardController=void 0;const r=s(632),a=i(s(758)),n=i(s(704));e.BoardController=class{constructor(t){this.apiClient=t,this.index=async t=>{const e=await this.apiClient.browseBoards();t.set("Content-Type","text/html"),t.body=(0,r.renderToStream)((0,a.default)({path:t.path,boards:e}))},this.show=async t=>{const e=String(t.params.slug||"").trim(),[s,i]=await Promise.all([await this.apiClient.browseBoards(),await this.apiClient.browseThreads(e)]),a=s.find((t=>t.slug===e));if(void 0===a)throw new Error;t.set("Content-Type","text/html"),t.body=(0,r.renderToStream)((0,n.default)({path:t.path,boards:s,board:a,threads:i}))}}}},911:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.PostController=void 0;const r=s(632),a=i(s(611));class n{constructor(t){this.apiClient=t,this.index=async t=>{const e=String(t.params.slug||"").trim(),s=+(t.params.threadId||0),[i,n,o]=await Promise.all([await this.apiClient.browseBoards(),await this.apiClient.readThread(e,s),await this.apiClient.browsePosts(e,s)]),l=i.find((t=>t.slug===e));if(void 0===l)throw new Error;t.set("Content-Type","text/html"),t.body=(0,r.renderToStream)((0,a.default)({path:t.path,boards:i,board:l,thread:n,posts:o}))}}}e.PostController=n,e.default=n},209:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ApiError=void 0;class s extends Error{constructor(t,e){super(e),this.status=t}}e.ApiError=s},607:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(685)),a=i(s(484)),n=i(s(176)),o=i(s(178));s(600);const l=s(752),u=i(s(913));a.default.extend(n.default),a.default.extend(o.default),a.default.locale("ru");const d=(0,l.createApp)();r.default.createServer(d.callback()).listen(u.default.http.port)},812:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Board=void 0;class s{constructor(t,e,s,i){this.slug=t,this.title=e,this.createdAt=s,this.postCount=i}getData(){return{slug:this.slug,title:this.title,created_at:this.createdAt.toISOString(),post_count:+this.postCount}}}e.Board=s,e.default=s},27:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.File=void 0;class s{constructor(t,e,s,i,r,a,n,o,l,u){this.hash=t,this.name=e,this.extension=s,this.path=i,this.type=r,this.size=a,this.width=n,this.height=o,this.length=l,this.createdAt=u}getData(){return{hash:this.hash,name:this.name,extension:this.extension,path:this.path,type:this.type,size:+this.size,width:this.width?+this.width:null,height:this.height?+this.height:null,length:this.length?+this.length:null,created_at:this.createdAt.toISOString()}}}e.File=s,e.default=s},894:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Post=void 0;class s{constructor(t,e,s,i,r,a,n,o,l){this.id=t,this.slug=e,this.parentId=s,this.name=i,this.tripcode=r,this.message=a,this.parsedMessage=n,this.files=o,this.createdAt=l}getData(){return{id:+this.id,slug:this.slug,parent_id:+this.parentId,name:this.name,tripcode:this.tripcode,message:this.message,message_parsed:this.parsedMessage,files:this.files.map((t=>t.getData())),created_at:this.createdAt.toISOString()}}}e.Post=s,e.default=s},624:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Thread=void 0;class s{constructor(t,e,s,i,r,a,n,o,l,u,d){this.id=t,this.slug=e,this.subject=s,this.name=i,this.tripcode=r,this.message=a,this.parsedMessage=n,this.files=o,this.createdAt=l,this.bumpedAt=u,this.postCount=d}getData(){return{id:+this.id,slug:this.slug,subject:this.subject,name:this.name,tripcode:this.tripcode,message:this.message,message_parsed:this.parsedMessage,files:this.files.map((t=>t.getData())),created_at:this.createdAt.toISOString(),bumped_at:this.bumpedAt.toISOString(),post_count:+this.postCount}}}e.Thread=s,e.default=s},298:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.layout=void 0;const r=s(632),a=(i(s(913)),i(s(715)));function n({title:t,path:e,boards:s,content:i}){return r.html`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />

        <title>${t}</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2f3136" />

        ${r.html`<link rel="stylesheet" href="/assets/bundle.css" />
              <script type="module" src="/assets/bundle.js" defer></script>`}
      </head>

      <body class="layout">
        ${(0,a.default)({className:"layout__sidebar",path:e,boards:s})}

        <main class="layout__content">${i}</main>
      </body>
    </html>`}e.layout=n,e.default=n},377:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markup=void 0;const i=s(632);function r(t){switch(t.type){case"text":return t.text;case"newline":return i.html`<br />`;case"link":return i.html`<a href="${t.url}" target="_blank" rel="ugc">${t.text}</a>`;case"reflink":return i.html`<a class="reflink" href="#post_${t.postID}" rel="ugc">${t.postID}</a>`;case"style":const e=a(t.children);switch(t.style){case"bold":return i.html`<strong>${e}</strong>`;case"italic":return i.html`<em>${e}</em>`;case"underline":return i.html`<span class="underline">${e}</span>`;case"strike":return i.html`<del>${e}</del>`;case"superscript":return i.html`<sup>${e}</sup>`;case"subscript":return i.html`<sub>${e}</sub>`;case"spoiler":return i.html`<span class="spoiler">${e}</span>`;case"code":return i.html`<code>${e}</code>`;case"size":return i.html`<span style="${`font-size: ${t.value}px;`}">${e}</span>`;case"color":return i.html`<span style="${`color: ${t.value};`}">${e}</span>`;case"quote":return i.html`<span class="quote">${e}</span>`;default:return i.html`${e}`}default:return}}function a(t){return t.map(r)}e.markup=a,e.default=a},704:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.boardPage=void 0;const r=s(632),a=s(642),n=i(s(298)),o=i(s(204)),l=i(s(537));function u({path:t,boards:e,board:s,threads:i}){const u=`/${s.slug}/ — ${s.title}`;return(0,n.default)({path:t,title:u,boards:e,content:r.html`<h1 class="layout__title">${u}</h1>

      <div class="layout__board-page board-page">
        <h2 class="board-page__title">Создать тред</h2>

        ${(0,o.default)({className:"board-page__post-form",slug:s.slug})}
        ${i.length?r.html`<h2 class="board-page__title">Список тредов</h2>

              <div id="thread-list" class="board-page__thread-list">
                ${i.map((t=>(0,l.default)({className:"board-page__thread",thread:t})))}
              </div>`:void 0}
      </div>

      <app-gallery id="gallery" class="layout__gallery"></app-gallery>

      <script>
        window.ssr = ${(0,a.unsafeHTML)(JSON.stringify({boards:e.map((t=>t.getData())),board:s.getData(),threads:i.map((t=>t.getData()))}))};
      </script>`})}e.boardPage=u,e.default=u},758:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.indexPage=void 0;const r=s(632),a=s(642),n=i(s(913)),o=i(s(298));function l({path:t,boards:e}){const s=n.default.site.title;return(0,o.default)({path:t,title:s,boards:e,content:r.html`<h1 class="layout__title">${s}</h1>

      <div class="layout__index-page index-page">
        <h2 class="index-page__title">Список досок</h2>

        <table class="index-page__table table">
          <thead class="table__header">
            <tr class="table__row">
              <th class="table__cell">Доска</th>
              <th class="table__cell">Название</th>
              <th class="table__cell">Количество постов</th>
            </tr>
          </thead>

          <tbody class="table__body">
            ${e.map((t=>r.html`<tr class="table__row">
                <th scope="row" class="table__cell"><a href="/${t.slug}/">/${t.slug}/</a></th>
                <td class="table__cell">${t.title}</td>
                <td class="table__cell">${t.postCount}</td>
              </tr>`))}
          </tbody>
        </table>
      </div>

      <script>
        window.ssr = ${(0,a.unsafeHTML)(JSON.stringify({boards:e.map((t=>t.getData()))}))};
      </script>`})}e.indexPage=l,e.default=l},611:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.threadPage=void 0;const r=s(632),a=s(642),n=i(s(298)),o=i(s(954)),l=i(s(924));function u({path:t,boards:e,board:s,thread:i,posts:u}){const d=`/${s.slug}/ — ${i.subject??`Тред #${i.id}`}`;return(0,n.default)({path:t,title:d,boards:e,content:r.html`<h1 class="layout__title">${d}</h1>

      <div class="layout__thread-page thread-page">
        <div id="post-list" class="thread-page__post-list">
          ${u.map((t=>(0,o.default)({className:"thread-page__post",post:t})))}
        </div>

        <h2 class="thread-page__title">Ответить в тред</h2>

        ${(0,l.default)({className:"thread-page__post-form",slug:s.slug,threadId:i.id})}
      </div>

      <app-gallery id="gallery" class="layout__gallery"></app-gallery>

      <script>
        window.ssr = ${(0,a.unsafeHTML)(JSON.stringify({boards:e.map((t=>t.getData())),board:s.getData(),thread:i.getData(),posts:u.map((t=>t.getData()))}))};
      </script>`})}e.threadPage=u,e.default=u},762:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.postFiles=void 0;const r=s(632),a=i(s(913)),n=250,o=["webp","png","gif"];function l(t){const e=0===t?0:Math.floor((31-Math.clz32(t))/10);return`${(t/Math.pow(1024,e)).toFixed(2)} ${["Б","КБ","МБ","ГБ","ТБ"][e]}`}function u({className:t,post:e,files:s}){if(s.length)return t=[t,"post-files"].filter((t=>void 0!==t)).join(" "),r.html`<ul class=${t}>
    ${s.map(((t,s)=>{const i=t.type.split("/").shift()||"image",u=o.includes(t.extension)?"png":"jpg",d=o.includes(t.extension)?"image/png":"image/jpeg",c=`${a.default.content.host}/original/${t.hash}.${t.extension}`,h=`${a.default.content.host}/thumbnails/${t.hash}.webp`,f=`${a.default.content.host}/thumbnails/${t.hash}.${u}`,p=t.width||96,_=t.height||96,m=Math.round(p/Math.max(1,p/n,_/n)),$=Math.round(_/Math.max(1,p/n,_/n));return r.html`<li class="${`post-files__item post-file post-file_${i}`}">
        <div class="post-file__info">
          <div class="post-file__name">
            <a class="post-file__info-link" href="${c}" target="_blank">${function(t){if(t.length>20){const e=t.split("."),s=e.length>1?e[e.length-1]:null;return null!==s?t.substring(0,16-s.length)+"[…]."+s:t.substring(0,16)+"[…]"}return t}(t.name)}</a>
          </div>

          <div class="post-file__dimensions">${function(t){const e=[l(t.size)];return null!==t.width&&null!==t.height&&e.push(`${t.width}x${t.height}`),null!==t.length&&e.push(function(t){const e=(Math.floor(t)%60).toString().padStart(2,"0"),s=(Math.floor(t/60)%60).toString().padStart(2,"0"),i=(Math.floor(t/3600)%60).toString().padStart(2,"0");return+i>0?`${i}:${s}:${e}`:`${s}:${e}`}(t.length)),e.join(", ")}(t)}</div>
        </div>

        <a
          class="post-file__link"
          href="${c}"
          target="_blank"
          data-gallery=${JSON.stringify({id:`${e.id}-${s}`,original:{url:c,type:t.type,width:t.width||800,height:t.height||44}})}
        >
          <picture class="post-file__picture">
            <source srcset="${h}" type="image/webp" />
            <source srcset="${f}" type="${d}" />

            <img
              class="post-file__image"
              src="${f}"
              alt=""
              title="${t.name}"
              width="${m}"
              height="${$}"
            />
          </picture>
        </a>
      </li>`}))}
  </ul>`}e.postFiles=u,e.default=u},924:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.postForm=void 0;const r=s(632),a=i(s(913));function n({className:t,slug:e,threadId:s}){t=[t,"post-form"].filter((t=>void 0!==t)).join(" ");const i=`${a.default.frontend.host}/${e}/res/${s}`,n=`${a.default.api.host}/api/v1/boards/${e}/threads/${s}/posts?redirect=${encodeURIComponent(i)}`;return r.html` <div class=${t}>
    <form id="post-form" class="post-form__inner" method="post" action=${n} enctype="multipart/form-data">
      <div class="post-form__row">
        <input class="post-form__name" name="name" placeholder="Имя" maxlength="40" value="" />
        <button type="submit" class="post-form__submit">Отправить</button>
      </div>

      <div class="post-form__row">
        <textarea class="post-form__message" name="message" placeholder="Сообщение" maxlength="8000"></textarea>
      </div>

      <div class="post-form__row">
        <input type="file" class="post-form__files" name="files" multiple />
      </div>
    </form>
  </div>`}e.postForm=n,e.default=n},954:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.post=void 0;const r=s(632),a=i(s(484)),n=i(s(377)),o=i(s(762));function l({className:t,post:e}){t=[t,"post",e.files.length>0?e.files.length>1?"post_multiple-files":"post_single-file":"post_without-files"].filter((t=>void 0!==t)).join(" ");const s=a.default.utc(e.createdAt).format("L LTS");return r.html`<section class=${t} id=${`post_${e.id}`}>
    <div class="post__header">
      <span class="post__author">
        <span class="post__name">${e.name||"Anonymous"}</span>
        <span class="post__tripcode">${e.tripcode||""}</span>
      </span>

      <time class="post__date" datetime=${e.createdAt.toISOString()}>${s}</time>

      <span class="post__id">${e.id}</span>
    </div>

    <div class="post__content">
      ${(0,o.default)({className:"post__files",post:e,files:e.files})}

      <div class="post__message">${(0,n.default)(e.parsedMessage)}</div>
    </div>

    <div class="post__footer"></div>
  </section>`}e.post=l,e.default=l},715:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sidebar=void 0;const i=s(632);function r({className:t,path:e,boards:s}){return t=[t,"sidebar"].filter((t=>t)).join(" "),i.html`<aside class="${t}">
    <nav class="sidebar__inner">
      <ul class="sidebar__list">
        <li class="sidebar__item">
          <a
            class="${["sidebar__link","/"===e?"sidebar__link_active":null].filter((t=>t)).join(" ")}"
            href="/"
            >Главная</a
          >
        </li>

        ${s.slice(0,5).map((t=>i.html`<li class="sidebar__item">
            <a
              class="${["sidebar__link",e===`/${t.slug}`||e.startsWith(`/${t.slug}/`)?"sidebar__link_active":null].filter((t=>t)).join(" ")}"
              href="${`/${t.slug}/`}"
              >${t.title}</a
            >
          </li>`))}
      </ul>
    </nav>
  </aside>`}e.sidebar=r,e.default=r},204:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.threadForm=void 0;const r=s(632),a=i(s(913));function n({className:t,slug:e}){t=[t,"post-form"].filter((t=>void 0!==t)).join(" ");const s=`${a.default.frontend.host}/${e}`,i=`${a.default.api.host}/api/v1/boards/${e}/threads?redirect=${encodeURIComponent(s)}`;return r.html` <div class=${t}>
    <form id="post-form" class="post-form__inner" method="post" action=${i} enctype="multipart/form-data">
      <div class="post-form__row">
        <input class="post-form__subject" name="subject" placeholder="Тема" maxlength="40" value="" />
        <button type="submit" class="post-form__submit">Отправить</button>
      </div>

      <div class="post-form__row">
        <input class="post-form__name" name="name" placeholder="Имя" maxlength="40" value="" />
      </div>

      <div class="post-form__row">
        <textarea class="post-form__message" name="message" placeholder="Сообщение" maxlength="8000"></textarea>
      </div>

      <div class="post-form__row">
        <input type="file" class="post-form__files" name="files" multiple />
      </div>
    </form>
  </div>`}e.threadForm=n,e.default=n},537:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.thread=void 0;const r=s(632),a=i(s(484)),n=i(s(377)),o=i(s(762));function l({className:t,thread:e}){t=[t,"thread",e.files.length>0?e.files.length>1?"thread_multiple-files":"thread_single-file":"thread_without-files"].filter((t=>void 0!==t)).join(" ");const s=a.default.utc(e.createdAt).format("L LTS");return r.html`<section class=${t} id=${`post_${e.id}`}>
    <div class="thread__header">
      <span class="thread__subject">${e.subject||""}</span>

      <span class="thread__author">
        <span class="thread__name">${e.name||"Anonymous"}</span>
        <span class="thread__tripcode">${e.tripcode||""}</span>
      </span>

      <time class="thread__date" datetime=${e.createdAt.toISOString()}>${s}</time>

      <span class="thread__id">${e.id}</span>

      <a class="thread__reply" href=${`/${e.slug}/res/${e.id}`}>Перейти в тред</a>
    </div>

    <div class="thread__content">
      ${(0,o.default)({className:"thread__files",post:e,files:e.files})}

      <div class="thread__message">${(0,n.default)(e.parsedMessage)}</div>
    </div>

    <div class="thread__footer">
      <span class="thread__replies">Ответов: ${e.postCount-1}</span>
    </div>
  </section>`}e.thread=l,e.default=l},885:t=>{"use strict";t.exports=require("@koa/cors")},632:t=>{"use strict";t.exports=require("@popeindustries/lit-html-server")},142:t=>{"use strict";t.exports=require("dotenv")},406:t=>{"use strict";t.exports=require("koa")},552:t=>{"use strict";t.exports=require("koa-conditional-get")},440:t=>{"use strict";t.exports=require("koa-etag")},5:t=>{"use strict";t.exports=require("koa-helmet")},741:t=>{"use strict";t.exports=require("koa-router")},97:t=>{"use strict";t.exports=require("koa-static")},89:t=>{"use strict";t.exports=require("node-fetch-commonjs")},685:t=>{"use strict";t.exports=require("http")},282:t=>{"use strict";t.exports=require("process")}},e={};!function s(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,s),a.exports}(607)})();