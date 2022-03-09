import Koa from 'koa';
import { renderToStream } from '@popeindustries/lit-html-server';
import ApiClient from '../api/client';
import indexPage from '../templates/pages/index';
import boardPage from '../templates/pages/board';

export class BoardController {
  public constructor(protected readonly apiClient: ApiClient) {}

  public index = async (ctx: Koa.Context) => {
    const boards = await this.apiClient.browseBoards();

    ctx.set('Content-Type', 'text/html');
    ctx.body = renderToStream(indexPage({ boards }));
  };

  public show = async (ctx: Koa.Context) => {
    const slug = String(ctx.params.slug || '').trim();
    const board = await this.apiClient.readBoard(slug);
    const threads = await this.apiClient.browseThreads(slug);

    ctx.set('Content-Type', 'text/html');
    ctx.body = renderToStream(boardPage({ board, threads }));
  };
}
