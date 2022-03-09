import Koa from 'koa';
import { renderToStream } from '@popeindustries/lit-html-server';
import ApiClient from '../api/client';
import threadPage from '../templates/pages/thread';

export class PostController {
  public constructor(protected readonly apiClient: ApiClient) {}

  public index = async (ctx: Koa.Context) => {
    const slug = String(ctx.params.slug || '').trim();
    const threadId = +(ctx.params.threadId || 0);
    const board = await this.apiClient.readBoard(slug);
    const thread = await this.apiClient.readThread(slug, threadId);
    const posts = await this.apiClient.browsePosts(slug, threadId);

    ctx.set('Content-Type', 'text/html');
    ctx.body = renderToStream(threadPage({ board, thread, posts }));
  };
}

export default PostController;
