import Koa from 'koa';
import Router from 'koa-router';
import helmet from 'koa-helmet';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import serve from 'koa-static';
import { BoardController } from './controllers/board-controller';
import ApiClient from './api/client';
import PostController from './controllers/post-controller';

const MS_IN_WEEK = 1000 * 60 * 60 * 24 * 7;

export function createApp() {
  const apiClient = new ApiClient();

  const boardController = new BoardController(apiClient);
  const postController = new PostController(apiClient);

  const router = new Router();
  router.get('/', boardController.index);
  router.get('/:slug', boardController.show);

  router.get('/:slug/res/:threadId', postController.index);

  const app = new Koa();

  if (process.env.NODE_ENV !== 'development') {
    app.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ['self'],
          baseUri: ['self'],
          fontSrc: ['self', 'https:', 'data:'],
          formAction: ['self'],
          frameAncestors: ['self'],
          imgSrc: ['self', 'data:'],
          objectSrc: ['none'],
          scriptSrc: ['self'],
          styleSrc: ['self'],
        },
      })
    );
  }

  app.use(helmet.referrerPolicy());
  app.use(helmet.noSniff());
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.hidePoweredBy());
  app.use(conditional());
  app.use(etag());
  app.use(serve('public', { maxAge: MS_IN_WEEK }));
  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
}
