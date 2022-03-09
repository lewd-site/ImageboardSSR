import { html } from '@popeindustries/lit-html-server';
import Board from '../../models/board';
import Post from '../../models/post';
import Thread from '../../models/thread';
import layout from '../layout';

interface ThreadPageProps {
  readonly board: Board;
  readonly thread: Thread;
  readonly posts: Post[];
}

export function threadPage({ board, thread, posts }: ThreadPageProps) {
  const title = `/${board.slug}/ — ${thread.subject ?? `Тред #${thread.id}`}`;

  return layout({
    title,
    content: html`<h1 class="layout__title">${title}</h1>

      <div class="thread-page">
        ${posts.map(
          (post) => html`<section class="thread-page__post post">
          <div class="post__header">
            <span class="post__author">
              <span class="post__name">${post.name || ''}</span
              <span class="post__tripcode">${post.tripcode || ''}</span
            </span>

            <time class="post__date" datetime="${post.createdAt.toISOString()}">
              ${post.createdAt.toLocaleDateString()}
              ${post.createdAt.toLocaleTimeString()}
            </time>

            <span class="post__id">${post.id}</span>
          </div>

          <div class="post__content">${post.message}</div>

          <div class="post__footer">
          </div>
        </section>`
        )}
      </div>`,
  });
}

export default threadPage;
