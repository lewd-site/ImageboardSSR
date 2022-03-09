(()=>{"use strict";var t={293:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ApiClient=void 0;const o=a(s(89)),r=a(s(913)),i=s(209),l=s(832);class n{async browseBoards(){const t=`${r.default.api.host}/${n.BASE_URL}/boards`,e=await(0,o.default)(t);if(200!==e.status)throw new i.ApiError(e.status,e.statusText);return(await e.json()).items.map(l.convertBoardDtoToModel)}async readBoard(t){const e=`${r.default.api.host}/${n.BASE_URL}/boards/${t}`,s=await(0,o.default)(e);if(200!==s.status)throw new i.ApiError(s.status,s.statusText);const a=await s.json();return(0,l.convertBoardDtoToModel)(a.item)}async browseThreads(t){const e=`${r.default.api.host}/${n.BASE_URL}/boards/${t}/threads`,s=await(0,o.default)(e);if(200!==s.status)throw new i.ApiError(s.status,s.statusText);return(await s.json()).items.map(l.convertThreadDtoToModel)}async readThread(t,e){const s=`${r.default.api.host}/${n.BASE_URL}/boards/${t}/threads/${e}`,a=await(0,o.default)(s);if(200!==a.status)throw new i.ApiError(a.status,a.statusText);const d=await a.json();return(0,l.convertThreadDtoToModel)(d.item)}async browsePosts(t,e){const s=`${r.default.api.host}/${n.BASE_URL}/boards/${t}/threads/${e}/posts`,a=await(0,o.default)(s);if(200!==a.status)throw new i.ApiError(a.status,a.statusText);return(await a.json()).items.map(l.convertPostDtoToModel)}}e.ApiClient=n,n.BASE_URL="api/v1",e.default=n},832:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.convertFileDtoToModel=e.convertPostDtoToModel=e.convertThreadDtoToModel=e.convertBoardDtoToModel=void 0;const o=a(s(812)),r=a(s(27)),i=a(s(894)),l=a(s(624));function n(t){return new r.default(t.hash,t.name,t.extension,t.path,t.type,+t.size,t.width?+t.width:null,t.height?+t.height:null,t.length?+t.length:null,new Date(t.created_at))}e.convertBoardDtoToModel=function(t){return new o.default(t.slug,t.title,new Date(t.created_at),+t.post_count)},e.convertThreadDtoToModel=function(t){return new l.default(+t.id,t.slug,t.subject,t.name,t.tripcode,t.message,t.message_parsed,t.files.map(n),new Date(t.created_at),new Date(t.bumped_at),+t.post_count)},e.convertPostDtoToModel=function(t){return new i.default(+t.id,t.slug,+t.parent_id,t.name,t.tripcode,t.message,t.message_parsed,t.files.map(n),new Date(t.created_at))},e.convertFileDtoToModel=n},752:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=void 0;const o=a(s(406)),r=a(s(741)),i=a(s(5)),l=a(s(552)),n=a(s(440)),d=a(s(97)),u=s(689),c=a(s(293)),h=a(s(911)),p=a(s(913));e.createApp=function(){const t=new c.default,e=new u.BoardController(t),s=new h.default(t),a=new r.default;a.get("/",e.index),a.get("/:slug",e.show),a.get("/:slug/res/:threadId",s.index);const _=new o.default;return _.use(i.default.contentSecurityPolicy({directives:{defaultSrc:["self"],baseUri:["self"],fontSrc:["self","https:","data:"],formAction:["self"],frameAncestors:["self"],imgSrc:["self",p.default.api.host,"data:"],objectSrc:["none"],scriptSrc:["self"],styleSrc:["self","https:","unsafe-inline"]}})),_.use(i.default.referrerPolicy()),_.use(i.default.noSniff()),_.use(i.default.dnsPrefetchControl()),_.use(i.default.hidePoweredBy()),_.use((0,l.default)()),_.use((0,n.default)()),_.use((0,d.default)("public",{maxAge:6048e5})),_.use(a.routes()),_.use(a.allowedMethods()),_}},913:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.config=void 0;const o=a(s(142)),r=s(282);o.default.config(),e.config={api:{host:r.env.API_HOST||"http://127.0.0.1:3000"},http:{port:+(r.env.HTTP_PORT||3001)},site:{title:r.env.SITE_TITLE||"Imageboard"}},e.default=e.config},689:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.BoardController=void 0;const o=s(632),r=a(s(758)),i=a(s(704));e.BoardController=class{constructor(t){this.apiClient=t,this.index=async t=>{const e=await this.apiClient.browseBoards();t.set("Content-Type","text/html"),t.body=(0,o.renderToStream)((0,r.default)({boards:e}))},this.show=async t=>{const e=String(t.params.slug||"").trim(),s=await this.apiClient.readBoard(e),a=await this.apiClient.browseThreads(e);t.set("Content-Type","text/html"),t.body=(0,o.renderToStream)((0,i.default)({board:s,threads:a}))}}}},911:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.PostController=void 0;const o=s(632),r=a(s(611));class i{constructor(t){this.apiClient=t,this.index=async t=>{const e=String(t.params.slug||"").trim(),s=+(t.params.threadId||0),a=await this.apiClient.readBoard(e),i=await this.apiClient.readThread(e,s),l=await this.apiClient.browsePosts(e,s);t.set("Content-Type","text/html"),t.body=(0,o.renderToStream)((0,r.default)({board:a,thread:i,posts:l}))}}}e.PostController=i,e.default=i},209:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ApiError=void 0;class s extends Error{constructor(t,e){super(e),this.status=t}}e.ApiError=s},607:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=a(s(685)),r=s(752),i=a(s(913)),l=(0,r.createApp)();o.default.createServer(l.callback()).listen(i.default.http.port)},812:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Board=void 0;class s{constructor(t,e,s,a){this.slug=t,this.title=e,this.createdAt=s,this.postCount=a}}e.Board=s,e.default=s},27:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.File=void 0;class s{constructor(t,e,s,a,o,r,i,l,n,d){this.hash=t,this.name=e,this.extension=s,this.path=a,this.type=o,this.size=r,this.width=i,this.height=l,this.length=n,this.createdAt=d}}e.File=s,e.default=s},894:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Post=void 0;class s{constructor(t,e,s,a,o,r,i,l,n){this.id=t,this.slug=e,this.parentId=s,this.name=a,this.tripcode=o,this.message=r,this.parsedMessage=i,this.files=l,this.createdAt=n}}e.Post=s,e.default=s},624:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Thread=void 0;class s{constructor(t,e,s,a,o,r,i,l,n,d,u){this.id=t,this.slug=e,this.subject=s,this.name=a,this.tripcode=o,this.message=r,this.parsedMessage=i,this.files=l,this.createdAt=n,this.bumpedAt=d,this.postCount=u}}e.Thread=s,e.default=s},298:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.layout=void 0;const a=s(632);function o(t){return a.html`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>${t.title}</title>

        <link rel="stylesheet" href="/styles/bundle.css" />
        <script type="module" src="/scripts/bundle.js" defer></script>
      </head>

      <body class="layout">
        <main class="layout__content">${t.content}</main>
      </body>
    </html>`}e.layout=o,e.default=o},704:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.boardPage=void 0;const o=s(632),r=a(s(298)),i=a(s(762));function l({board:t,threads:e}){const s=`/${t.slug}/ — ${t.title}`;return(0,r.default)({title:s,content:o.html`<h1 class="layout__title">${s}</h1>

      <div class="board-page">
        <h2 class="board-page__title">Список тредов</h2>

        ${e.map((t=>o.html`<section class="board-page__thread thread">
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
              ${(0,i.default)({className:"thread__files",files:t.files})}

              <div class="thread__message">${t.message}</div>
            </div>

            <div class="thread__footer">
              <span class="thread__replies">Ответов: ${t.postCount}</span>
            </div>
          </section>`))}
      </div>`})}e.boardPage=l,e.default=l},758:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.indexPage=void 0;const o=s(632),r=a(s(913)),i=a(s(298));function l({boards:t}){const e=r.default.site.title;return(0,i.default)({title:e,content:o.html`<h1 class="layout__title">${e}</h1>

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
            ${t.map((t=>o.html`<tr class="table__row">
                <th scope="row" class="table__cell"><a href="/${t.slug}/">/${t.slug}/</a></th>
                <td class="table__cell">${t.title}</td>
                <td class="table__cell">${t.postCount}</td>
              </tr>`))}
          </tbody>
        </table>
      </div>`})}e.indexPage=l,e.default=l},611:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.threadPage=void 0;const o=s(632),r=a(s(298)),i=a(s(762));function l({board:t,thread:e,posts:s}){const a=`/${t.slug}/ — ${e.subject??`Тред #${e.id}`}`;return(0,r.default)({title:a,content:o.html`<h1 class="layout__title">${a}</h1>

      <div class="thread-page">
        ${s.map((t=>o.html`<section class="thread-page__post post">
            <div class="post__header">
              <span class="post__author">
                <span class="post__name">${t.name||""}</span>
                <span class="post__tripcode">${t.tripcode||""}</span>
              </span>

              <time class="post__date" datetime="${t.createdAt.toISOString()}">
                ${t.createdAt.toLocaleDateString()} ${t.createdAt.toLocaleTimeString()}
              </time>

              <span class="post__id">${t.id}</span>
            </div>

            <div class="post__content">
              ${(0,i.default)({className:"post__files",files:t.files})}

              <div class="post__message">${t.message}</div>
            </div>

            <div class="post__footer"></div>
          </section>`))}
      </div>`})}e.threadPage=l,e.default=l},762:function(t,e,s){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.postFiles=void 0;const o=s(632),r=a(s(913)),i=250,l=["webp","png","gif"];function n(t){const e=0===t?0:Math.floor((31-Math.clz32(t))/10);return`${(t/Math.pow(1024,e)).toFixed(2)} ${["Б","КБ","МБ","ГБ","ТБ"][e]}`}function d(t){const e=[t.className,"post-files"].filter((t=>t)).join(" ");return o.html`<ul class="${e}">
    ${t.files.map((t=>{const e=t.type.split("/").shift()||"image",s=l.includes(t.extension)?"png":"jpg",a=l.includes(t.extension)?"image/png":"image/jpeg",d=`${r.default.api.host}/original/${t.hash}.${t.extension}`,u=`${r.default.api.host}/thumbnails/${t.hash}.webp`,c=`${r.default.api.host}/thumbnails/${t.hash}.${s}`,h=t.width||96,p=t.height||96,_=Math.round(h/Math.max(1,h/i,p/i)),f=Math.round(p/Math.max(1,h/i,p/i));return o.html`<li class="${`post-files__item post-file post-file_${e}`}">
        <div class="post-file__info">
          <div class="post-file__name">
            <a class="post-file__info-link" href="${d}" target="_blank">${function(t){if(t.length>20){const e=t.split("."),s=e.length>1?e[e.length-1]:null;return null!==s?t.substring(0,16-s.length)+"[…]."+s:t.substring(0,16)+"[…]"}return t}(t.name)}</a>
          </div>

          <div class="post-file__dimensions">${function(t){const e=[n(t.size)];return null!==t.width&&null!==t.height&&e.push(`${t.width}x${t.height}`),null!==t.length&&e.push(function(t){const e=(Math.floor(t)%60).toString().padStart(2,"0"),s=(Math.floor(t/60)%60).toString().padStart(2,"0"),a=(Math.floor(t/3600)%60).toString().padStart(2,"0");return+a>0?`${a}:${s}:${e}`:`${s}:${e}`}(t.length)),e.join(", ")}(t)}</div>
        </div>

        <a class="post-file__link" href="${d}" target="_blank">
          <picture class="post-file__picture">
            <source srcset="${u}" type="image/webp" />
            <source srcset="${c}" type="${a}" />

            <img
              class="post-file__image"
              src="${c}"
              alt=""
              title="${t.name}"
              width="${_}"
              height="${f}"
            />
          </picture>
        </a>
      </li>`}))}
  </ul>`}e.postFiles=d,e.default=d},632:t=>{t.exports=require("@popeindustries/lit-html-server")},142:t=>{t.exports=require("dotenv")},406:t=>{t.exports=require("koa")},552:t=>{t.exports=require("koa-conditional-get")},440:t=>{t.exports=require("koa-etag")},5:t=>{t.exports=require("koa-helmet")},741:t=>{t.exports=require("koa-router")},97:t=>{t.exports=require("koa-static")},89:t=>{t.exports=require("node-fetch-commonjs")},685:t=>{t.exports=require("http")},282:t=>{t.exports=require("process")}},e={};!function s(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,s),r.exports}(607)})();