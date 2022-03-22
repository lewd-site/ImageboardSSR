import { html, TemplateResult } from '@popeindustries/lit-html-server';
import config from '../config';
import Board from '../models/board';
import sidebar from './sidebar';

interface LayoutProps {
  readonly path: string;
  readonly title: string;
  readonly boards: Board[];
  readonly content?: TemplateResult | string;
}

export function layout({ title, path, boards, content }: LayoutProps) {
  return html`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>${title}</title>

        ${process.env.NODE_ENV === 'development'
          ? html`<script src="${config.dev.host}/assets/bundle.js"></script>`
          : html`<link rel="stylesheet" href="/assets/bundle.css" />
              <script type="module" src="/assets/bundle.js" defer></script>`}
      </head>

      <body class="layout">
        ${sidebar({ className: 'layout__sidebar', path, boards })}

        <main class="layout__content">${content}</main>
      </body>
    </html>`;
}

export default layout;
