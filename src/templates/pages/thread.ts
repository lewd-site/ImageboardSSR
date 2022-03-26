import { html } from '@popeindustries/lit-html-server';
import { unsafeHTML } from '@popeindustries/lit-html-server/directives/unsafe-html.js';
import Board from '../../models/board';
import Post from '../../models/post';
import Thread from '../../models/thread';
import layout from '../layout';
import { post } from '../post';

interface ThreadPageProps {
  readonly path: string;
  readonly boards: Board[];
  readonly board: Board;
  readonly thread: Thread;
  readonly posts: Post[];
}

export function threadPage({ path, boards, board, thread, posts }: ThreadPageProps) {
  const title = `/${board.slug}/ — ${thread.subject ?? `Тред #${thread.id}`}`;

  return layout({
    path,
    title,
    boards,
    content: html`<h1 class="layout__title">${title}</h1>

      <div id="post-list" class="thread-page">
        ${posts.map((p) => post({ className: 'thread-page__post', post: p }))}
      </div>

      <app-gallery id="gallery"></app-gallery>

      <script>
        window.ssr = ${unsafeHTML(
          JSON.stringify({
            boards: boards.map((board) => board.getData()),
            board: board.getData(),
            thread: thread.getData(),
            posts: posts.map((post) => post.getData()),
          })
        )};
      </script>`,
  });
}

export default threadPage;
