import { html, TemplateResult } from '@popeindustries/lit-html-server';
import config from '../config';

interface LayoutProps {
  readonly title: string;
  readonly content?: TemplateResult | string;
}

export function layout(props: LayoutProps) {
  return html`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>${props.title}</title>

        ${process.env.NODE_ENV === 'development'
          ? html`<script src="${config.dev.host}/assets/bundle.js"></script>`
          : html`<link rel="stylesheet" href="/styles/bundle.css" />
              <script type="module" src="/scripts/bundle.js" defer></script>`}
      </head>

      <body class="layout">
        <main class="layout__content">${props.content}</main>
      </body>
    </html>`;
}

export default layout;
