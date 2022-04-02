import { html } from '@popeindustries/lit-html-server';
import dayjs from 'dayjs';
import Thread from '../models/thread';
import markup from './markup';
import postFiles from './post-files';

interface ThreadProps {
  readonly className?: string;
  readonly thread: Thread;
}

const DEFAULT_NAME = 'Anonymous';

function formatName(thread: Thread): string {
  if (thread.name !== null && thread.name.length) {
    return thread.name;
  }

  if (thread.tripcode !== null && thread.tripcode.length) {
    return '';
  }

  return DEFAULT_NAME;
}

export function thread({ className, thread }: ThreadProps) {
  className = [
    className,
    'thread',
    thread.files.length > 0
      ? thread.files.length > 1
        ? 'thread_multiple-files'
        : 'thread_single-file'
      : 'thread_without-files',
  ]
    .filter((c) => typeof c !== 'undefined')
    .join(' ');

  const date = dayjs.utc(thread.createdAt).format('L LTS');

  return html`<section class=${className} id=${`post_${thread.id}`}>
    <div class="thread__header">
      <span class="thread__subject">${thread.subject || ''}</span>

      <span class="thread__author">
        <span class="thread__name">${formatName(thread)}</span>
        <span class="thread__tripcode">${thread.tripcode || ''}</span>
      </span>

      <time class="thread__date" datetime=${thread.createdAt.toISOString()}>${date}</time>

      <span class="thread__id">${thread.id}</span>

      <a class="thread__reply" href=${`/${thread.slug}/res/${thread.id}`}>Перейти в тред</a>
    </div>

    <div class="thread__content">
      ${postFiles({ className: 'thread__files', post: thread, files: thread.files })}

      <div class="thread__message">${markup(thread.parsedMessage)}</div>
    </div>

    <div class="thread__footer">
      <span class="thread__replies">Ответов: ${thread.postCount - 1}</span>
    </div>
  </section>`;
}

export default thread;
