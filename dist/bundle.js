(()=>{"use strict";var t={642:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});var a=s(419);const i=a.directive((t=>e=>{if(!a.isNodePart(e))throw Error("The `unsafeHTML` directive can only be used in text nodes");e.setValue(`${a.unsafePrefixString}${t}`)}));e.unsafeHTML=i},419:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.directive=function(t){return function(...e){const s=t(...e);if("function"!=typeof s)throw Error("directives are factory functions and must return a function when called");return s.isDirective=!0,s}},e.isAttributePart=function(t){return t&&void 0!==t.getValue&&"name"in t},e.isDirective=function(t){return"function"==typeof t&&t.isDirective},e.isNodePart=function(t){return t&&void 0!==t.getValue&&!("name"in t)},e.isPrimitive=function(t){const e=typeof t;return null===t||!("object"===e||"function"===e)},e.nothing="__nothing-lit-html-server-string__",e.unsafePrefixString="__unsafe-lit-html-server-string__"},293:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ApiClient=void 0;const i=a(s(89)),r=a(s(913)),o=s(209),n=s(832);class l{async browseBoards(){const t=`${r.default.api.host}/${l.BASE_URL}/boards`,e=await(0,i.default)(t);if(200!==e.status)throw new o.ApiError(e.status,e.statusText);return(await e.json()).items.map(n.convertBoardDtoToModel)}async readBoard(t){const e=`${r.default.api.host}/${l.BASE_URL}/boards/${t}`,s=await(0,i.default)(e);if(200!==s.status)throw new o.ApiError(s.status,s.statusText);const a=await s.json();return(0,n.convertBoardDtoToModel)(a.item)}async browseThreads(t){const e=`${r.default.api.host}/${l.BASE_URL}/boards/${t}/threads`,s=await(0,i.default)(e);if(200!==s.status)throw new o.ApiError(s.status,s.statusText);return(await s.json()).items.map(n.convertThreadDtoToModel)}async readThread(t,e){const s=`${r.default.api.host}/${l.BASE_URL}/boards/${t}/threads/${e}`,a=await(0,i.default)(s);if(200!==a.status)throw new o.ApiError(a.status,a.statusText);const d=await a.json();return(0,n.convertThreadDtoToModel)(d.item)}async browsePosts(t,e){const s=`${r.default.api.host}/${l.BASE_URL}/boards/${t}/threads/${e}/posts`,a=await(0,i.default)(s);if(200!==a.status)throw new o.ApiError(a.status,a.statusText);return(await a.json()).items.map(n.convertPostDtoToModel)}}e.ApiClient=l,l.BASE_URL="api/v1",e.default=l},832:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.convertFileDtoToModel=e.convertPostDtoToModel=e.convertThreadDtoToModel=e.convertBoardDtoToModel=void 0;const i=a(s(812)),r=a(s(27)),o=a(s(894)),n=a(s(624));function l(t){return new r.default(t.hash,t.name,t.extension,t.path,t.type,+t.size,t.width?+t.width:null,t.height?+t.height:null,t.length?+t.length:null,new Date(t.created_at))}e.convertBoardDtoToModel=function(t){return new i.default(t.slug,t.title,new Date(t.created_at),+t.post_count)},e.convertThreadDtoToModel=function(t){return new n.default(+t.id,t.slug,t.subject,t.name,t.tripcode,t.message,t.message_parsed,t.files.map(l),new Date(t.created_at),new Date(t.bumped_at),+t.post_count)},e.convertPostDtoToModel=function(t){return new o.default(+t.id,t.slug,+t.parent_id,t.name,t.tripcode,t.message,t.message_parsed,t.files.map(l),new Date(t.created_at))},e.convertFileDtoToModel=l},752:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=void 0;const i=a(s(406)),r=a(s(741)),o=a(s(5)),n=a(s(885)),l=a(s(552)),d=a(s(440)),u=a(s(97)),c=s(689),h=a(s(293)),p=a(s(911));e.createApp=function(){const t=new h.default,e=new c.BoardController(t),s=new p.default(t),a=new r.default;a.get("/",e.index),a.get("/:slug",e.show),a.get("/:slug/res/:threadId",s.index);const f=new i.default;return f.use(o.default.contentSecurityPolicy({directives:{defaultSrc:["'self'"],baseUri:["'self'"],fontSrc:["'self'","https:","data:"],formAction:["'self'"],frameAncestors:["'self'"],imgSrc:["'self'","data:"],objectSrc:["'none'"],scriptSrc:["'self'","'unsafe-inline'"],styleSrc:["'self'","'unsafe-inline'"]}})),f.use(o.default.referrerPolicy()),f.use(o.default.noSniff()),f.use(o.default.dnsPrefetchControl()),f.use(o.default.hidePoweredBy()),f.use((0,n.default)()),f.use((0,l.default)()),f.use((0,d.default)()),f.use((0,u.default)("public",{maxAge:6048e5})),f.use(a.routes()),f.use(a.allowedMethods()),f}},913:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.config=void 0;const i=a(s(142)),r=s(282);i.default.config(),e.config={api:{host:r.env.API_HOST||"http://127.0.0.1:3000"},content:{host:r.env.CONTENT_HOST||"http://127.0.0.1:3000"},dev:{host:r.env.DEV_HOST||"http://127.0.0.1:9000"},http:{port:+(r.env.HTTP_PORT||3001)},site:{title:r.env.SITE_TITLE||"Imageboard"}},e.default=e.config},689:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.BoardController=void 0;const i=s(632),r=a(s(758)),o=a(s(704));e.BoardController=class{constructor(t){this.apiClient=t,this.index=async t=>{const e=await this.apiClient.browseBoards();t.set("Content-Type","text/html"),t.body=(0,i.renderToStream)((0,r.default)({path:t.path,boards:e}))},this.show=async t=>{const e=String(t.params.slug||"").trim(),[s,a]=await Promise.all([await this.apiClient.browseBoards(),await this.apiClient.browseThreads(e)]),r=s.find((t=>t.slug===e));if(void 0===r)throw new Error;t.set("Content-Type","text/html"),t.body=(0,i.renderToStream)((0,o.default)({path:t.path,boards:s,board:r,threads:a}))}}}},911:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.PostController=void 0;const i=s(632),r=a(s(611));class o{constructor(t){this.apiClient=t,this.index=async t=>{const e=String(t.params.slug||"").trim(),s=+(t.params.threadId||0),[a,o,n]=await Promise.all([await this.apiClient.browseBoards(),await this.apiClient.readThread(e,s),await this.apiClient.browsePosts(e,s)]),l=a.find((t=>t.slug===e));if(void 0===l)throw new Error;t.set("Content-Type","text/html"),t.body=(0,i.renderToStream)((0,r.default)({path:t.path,boards:a,board:l,thread:o,posts:n}))}}}e.PostController=o,e.default=o},209:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ApiError=void 0;class s extends Error{constructor(t,e){super(e),this.status=t}}e.ApiError=s},607:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=a(s(685)),r=s(752),o=a(s(913)),n=(0,r.createApp)();i.default.createServer(n.callback()).listen(o.default.http.port)},812:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Board=void 0;class s{constructor(t,e,s,a){this.slug=t,this.title=e,this.createdAt=s,this.postCount=a}getData(){return{slug:this.slug,title:this.title,created_at:this.createdAt.toISOString(),post_count:+this.postCount}}}e.Board=s,e.default=s},27:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.File=void 0;class s{constructor(t,e,s,a,i,r,o,n,l,d){this.hash=t,this.name=e,this.extension=s,this.path=a,this.type=i,this.size=r,this.width=o,this.height=n,this.length=l,this.createdAt=d}getData(){return{hash:this.hash,name:this.name,extension:this.extension,path:this.path,type:this.type,size:+this.size,width:this.width?+this.width:null,height:this.height?+this.height:null,length:this.length?+this.length:null,created_at:this.createdAt.toISOString()}}}e.File=s,e.default=s},894:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Post=void 0;class s{constructor(t,e,s,a,i,r,o,n,l){this.id=t,this.slug=e,this.parentId=s,this.name=a,this.tripcode=i,this.message=r,this.parsedMessage=o,this.files=n,this.createdAt=l}getData(){return{id:+this.id,slug:this.slug,parent_id:+this.parentId,name:this.name,tripcode:this.tripcode,message:this.message,message_parsed:this.parsedMessage,files:this.files.map((t=>t.getData())),created_at:this.createdAt.toISOString()}}}e.Post=s,e.default=s},624:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Thread=void 0;class s{constructor(t,e,s,a,i,r,o,n,l,d,u){this.id=t,this.slug=e,this.subject=s,this.name=a,this.tripcode=i,this.message=r,this.parsedMessage=o,this.files=n,this.createdAt=l,this.bumpedAt=d,this.postCount=u}getData(){return{id:+this.id,slug:this.slug,subject:this.subject,name:this.name,tripcode:this.tripcode,message:this.message,message_parsed:this.parsedMessage,files:this.files.map((t=>t.getData())),created_at:this.createdAt.toISOString(),bumped_at:this.bumpedAt.toISOString(),post_count:+this.postCount}}}e.Thread=s,e.default=s},298:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.layout=void 0;const i=s(632),r=(a(s(913)),a(s(715)));function o({title:t,path:e,boards:s,content:a}){return i.html`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>${t}</title>

        ${i.html`<link rel="stylesheet" href="/assets/bundle.css" />
              <script type="module" src="/assets/bundle.js" defer></script>`}
      </head>

      <body class="layout">
        ${(0,r.default)({className:"layout__sidebar",path:e,boards:s})}

        <main class="layout__content">${a}</main>
      </body>
    </html>`}e.layout=o,e.default=o},377:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.markup=void 0;const a=s(632);function i(t){switch(t.type){case"text":return t.text;case"newline":return a.html`<br />`;case"link":return a.html`<a href="${t.url}" target="_blank" rel="ugc">${t.text}</a>`;case"reflink":return a.html`<a class="reflink" href="#post_${t.postID}" rel="ugc">${t.postID}</a>`;case"style":const e=r(t.children);switch(t.style){case"bold":return a.html`<strong>${e}</strong>`;case"italic":return a.html`<em>${e}</em>`;case"underline":return a.html`<span class="underline">${e}</span>`;case"strike":return a.html`<del>${e}</del>`;case"superscript":return a.html`<sup>${e}</sup>`;case"subscript":return a.html`<sub>${e}</sub>`;case"spoiler":return a.html`<span class="spoiler">${e}</span>`;case"code":return a.html`<code>${e}</code>`;case"size":return a.html`<span style="${`font-size: ${t.value}px;`}">${e}</span>`;case"color":return a.html`<span style="${`color: ${t.value};`}">${e}</span>`;case"quote":return a.html`<span class="quote">${e}</span>`;default:return a.html`${e}`}default:return}}function r(t){return t.map(i)}e.markup=r,e.default=r},704:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.boardPage=void 0;const i=s(632),r=s(642),o=a(s(298)),n=a(s(377)),l=a(s(762));function d({path:t,boards:e,board:s,threads:a}){const d=`/${s.slug}/ — ${s.title}`;return(0,o.default)({path:t,title:d,boards:e,content:i.html`<h1 class="layout__title">${d}</h1>

      <div class="board-page">
        <h2 class="board-page__title">Список тредов</h2>

        ${a.map((t=>i.html`<section class="board-page__thread thread" id="${`post_${t.id}`}">
            <div class="thread__header">
              <span class="thread__subject">${t.subject||""}</span>

              <span class="thread__author">
                <span class="thread__name">${t.name||""}</span>
                <span class="thread__tripcode">${t.tripcode||""}</span>
              </span>

              <time class="thread__date" datetime="${t.createdAt.toISOString()}">
                ${t.createdAt.toLocaleDateString()} ${t.createdAt.toLocaleTimeString()}
              </time>

              <span class="thread__id">${t.id}</span>

              <a class="thread__reply" href="/${t.slug}/res/${t.id}">Перейти в тред</a>
            </div>

            <div class="thread__content">
              ${(0,l.default)({className:"thread__files",post:t,files:t.files})}

              <div class="thread__message">${(0,n.default)(t.parsedMessage)}</div>
            </div>

            <div class="thread__footer">
              <span class="thread__replies">Ответов: ${t.postCount}</span>
            </div>
          </section>`))}
      </div>

      <app-gallery id="gallery"></app-gallery>

      <script>
        window.ssr = ${(0,r.unsafeHTML)(JSON.stringify({boards:e.map((t=>t.getData())),board:s.getData(),threads:a.map((t=>t.getData()))}))};
      </script>`})}e.boardPage=d,e.default=d},758:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.indexPage=void 0;const i=s(632),r=s(642),o=a(s(913)),n=a(s(298));function l({path:t,boards:e}){const s=o.default.site.title;return(0,n.default)({path:t,title:s,boards:e,content:i.html`<h1 class="layout__title">${s}</h1>

      <div class="index-page">
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
            ${e.map((t=>i.html`<tr class="table__row">
                <th scope="row" class="table__cell"><a href="/${t.slug}/">/${t.slug}/</a></th>
                <td class="table__cell">${t.title}</td>
                <td class="table__cell">${t.postCount}</td>
              </tr>`))}
          </tbody>
        </table>
      </div>

      <script>
        window.ssr = ${(0,r.unsafeHTML)(JSON.stringify({boards:e.map((t=>t.getData()))}))};
      </script>`})}e.indexPage=l,e.default=l},611:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.threadPage=void 0;const i=s(632),r=s(642),o=a(s(298)),n=s(954);function l({path:t,boards:e,board:s,thread:a,posts:l}){const d=`/${s.slug}/ — ${a.subject??`Тред #${a.id}`}`;return(0,o.default)({path:t,title:d,boards:e,content:i.html`<h1 class="layout__title">${d}</h1>

      <div id="post-list" class="thread-page">
        ${l.map((t=>(0,n.post)({className:"thread-page__post",post:t})))}
      </div>

      <app-gallery id="gallery"></app-gallery>

      <script>
        window.ssr = ${(0,r.unsafeHTML)(JSON.stringify({boards:e.map((t=>t.getData())),board:s.getData(),thread:a.getData(),posts:l.map((t=>t.getData()))}))};
      </script>`})}e.threadPage=l,e.default=l},762:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.postFiles=void 0;const i=s(632),r=a(s(913)),o=250,n=["webp","png","gif"];function l(t){const e=0===t?0:Math.floor((31-Math.clz32(t))/10);return`${(t/Math.pow(1024,e)).toFixed(2)} ${["Б","КБ","МБ","ГБ","ТБ"][e]}`}function d({className:t,post:e,files:s}){return t=[t,"post-files"].filter((t=>void 0!==t)).join(" "),i.html`<ul class=${t}>
    ${s.map(((t,s)=>{const a=t.type.split("/").shift()||"image",d=n.includes(t.extension)?"png":"jpg",u=n.includes(t.extension)?"image/png":"image/jpeg",c=`${r.default.content.host}/original/${t.hash}.${t.extension}`,h=`${r.default.content.host}/thumbnails/${t.hash}.webp`,p=`${r.default.content.host}/thumbnails/${t.hash}.${d}`,f=t.width||96,_=t.height||96,m=Math.round(f/Math.max(1,f/o,_/o)),g=Math.round(_/Math.max(1,f/o,_/o));return i.html`<li class="${`post-files__item post-file post-file_${a}`}">
        <div class="post-file__info">
          <div class="post-file__name">
            <a class="post-file__info-link" href="${c}" target="_blank">${function(t){if(t.length>20){const e=t.split("."),s=e.length>1?e[e.length-1]:null;return null!==s?t.substring(0,16-s.length)+"[…]."+s:t.substring(0,16)+"[…]"}return t}(t.name)}</a>
          </div>

          <div class="post-file__dimensions">${function(t){const e=[l(t.size)];return null!==t.width&&null!==t.height&&e.push(`${t.width}x${t.height}`),null!==t.length&&e.push(function(t){const e=(Math.floor(t)%60).toString().padStart(2,"0"),s=(Math.floor(t/60)%60).toString().padStart(2,"0"),a=(Math.floor(t/3600)%60).toString().padStart(2,"0");return+a>0?`${a}:${s}:${e}`:`${s}:${e}`}(t.length)),e.join(", ")}(t)}</div>
        </div>

        <a
          class="post-file__link"
          href="${c}"
          target="_blank"
          data-gallery=${JSON.stringify({id:`${e.id}-${s}`,original:{url:c,type:t.type,width:t.width||800,height:t.height||44}})}
        >
          <picture class="post-file__picture">
            <source srcset="${h}" type="image/webp" />
            <source srcset="${p}" type="${u}" />

            <img
              class="post-file__image"
              src="${p}"
              alt=""
              title="${t.name}"
              width="${m}"
              height="${g}"
            />
          </picture>
        </a>
      </li>`}))}
  </ul>`}e.postFiles=d,e.default=d},954:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.post=void 0;const i=s(632),r=a(s(377)),o=a(s(762));e.post=function({className:t,post:e}){return t=[t,"post"].filter((t=>void 0!==t)).join(" "),i.html`<section class=${t} id=${`post_${e.id}`}>
    <div class="post__header">
      <span class="post__author">
        <span class="post__name">${e.name||""}</span>
        <span class="post__tripcode">${e.tripcode||""}</span>
      </span>

      <time class="post__date" datetime=${e.createdAt.toISOString()}>
        ${e.createdAt.toLocaleDateString()} ${e.createdAt.toLocaleTimeString()}
      </time>

      <span class="post__id">${e.id}</span>
    </div>

    <div class="post__content">
      ${(0,o.default)({className:"post__files",post:e,files:e.files})}

      <div class="post__message">${(0,r.default)(e.parsedMessage)}</div>
    </div>

    <div class="post__footer"></div>
  </section>`}},715:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sidebar=void 0;const a=s(632);function i({className:t,path:e,boards:s}){return t=[t,"sidebar"].filter((t=>t)).join(" "),a.html`<aside class="${t}">
    <nav class="sidebar__inner">
      <ul class="sidebar__list">
        <li class="sidebar__item">
          <a
            class="${["sidebar__link","/"===e?"sidebar__link_active":null].filter((t=>t)).join(" ")}"
            href="/"
            >Главная</a
          >
        </li>

        ${s.slice(0,5).map((t=>a.html`<li class="sidebar__item">
            <a
              class="${["sidebar__link",e===`/${t.slug}`||e.startsWith(`/${t.slug}/`)?"sidebar__link_active":null].filter((t=>t)).join(" ")}"
              href="${`/${t.slug}/`}"
              >${t.title}</a
            >
          </li>`))}
      </ul>
    </nav>
  </aside>`}e.sidebar=i,e.default=i},885:t=>{t.exports=require("@koa/cors")},632:t=>{t.exports=require("@popeindustries/lit-html-server")},142:t=>{t.exports=require("dotenv")},406:t=>{t.exports=require("koa")},552:t=>{t.exports=require("koa-conditional-get")},440:t=>{t.exports=require("koa-etag")},5:t=>{t.exports=require("koa-helmet")},741:t=>{t.exports=require("koa-router")},97:t=>{t.exports=require("koa-static")},89:t=>{t.exports=require("node-fetch-commonjs")},685:t=>{t.exports=require("http")},282:t=>{t.exports=require("process")}},e={};!function s(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,s),r.exports}(607)})();