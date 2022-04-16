import { html } from '@popeindustries/lit-html-server';
import { unsafeHTML } from '@popeindustries/lit-html-server/directives/unsafe-html.js';
import Board from '../../models/board';
import Thread from '../../models/thread';
import layout from '../layout';
import threadForm from '../thread-form';
import thread from '../thread';

interface BoardPageProps {
  readonly path: string;
  readonly boards: Board[];
  readonly board: Board;
  readonly threads: Thread[];
}

export function boardPage({ path, boards, board, threads }: BoardPageProps) {
  const title = `/${board.slug}/ — ${board.title}`;

  return layout({
    path,
    title,
    boards,
    content: html`<h1 class="layout__title">${title}</h1>

      <div class="layout__board-page board-page">
        ${threadForm({ className: 'board-page__post-form', title: 'Создать тред', slug: board.slug })}
        ${threads.length
          ? html`<h2 class="board-page__title">Список тредов</h2>

              <div id="thread-list" class="board-page__thread-list">
                ${threads.map((t) => thread({ className: 'board-page__thread', thread: t }))}
              </div>`
          : undefined}
      </div>

      <app-gallery id="gallery" class="layout__gallery"></app-gallery>

      <script>
        window.ssr = ${unsafeHTML(
          JSON.stringify({
            boards: boards.map((board) => board.getData()),
            board: board.getData(),
            threads: threads.map((thread) => thread.getData()),
          })
        )};
      </script>`,
  });
}

export default boardPage;
