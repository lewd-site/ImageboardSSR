import { html } from '@popeindustries/lit-html-server';
import Board from '../../models/board';
import Thread from '../../models/thread';
import layout from '../layout';
import markup from '../markup';
import postFiles from '../post-files';

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

      <div class="board-page">
        <h2 class="board-page__title">Список тредов</h2>

        ${threads.map(
          (thread) => html`<section class="board-page__thread thread" id="${`post_${thread.id}`}">
            <div class="thread__header">
              <span class="thread__subject">${thread.subject || ''}</span>

              <span class="thread__author">
                <span class="thread__name">${thread.name || ''}</span>
                <span class="thread__tripcode">${thread.tripcode || ''}</span>
              </span>

              <time class="thread__date" datetime="${thread.createdAt.toISOString()}">
                ${thread.createdAt.toLocaleDateString()} ${thread.createdAt.toLocaleTimeString()}
              </time>

              <span class="thread__id">${thread.id}</span>

              <a class="thread__reply" href="/${thread.slug}/res/${thread.id}">Перейти в тред</a>
            </div>

            <div class="thread__content">
              ${postFiles({ className: 'thread__files', post: thread, files: thread.files })}

              <div class="thread__message">${markup(thread.parsedMessage)}</div>
            </div>

            <div class="thread__footer">
              <span class="thread__replies">Ответов: ${thread.postCount}</span>
            </div>
          </section>`
        )}
      </div>

      <app-gallery></app-gallery>`,
  });
}

export default boardPage;
