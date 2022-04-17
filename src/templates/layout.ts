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
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />

        <title>${title}</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2f3136" />

        ${process.env.NODE_ENV === 'development'
          ? html`<script src="${config.dev.host}/assets/bundle.js"></script>`
          : html`<link rel="stylesheet" href="/assets/bundle.css" />
              <script type="module" src="/assets/bundle.js" defer></script>`}
      </head>

      <body class="layout">
        <header class="layout__header header">
          <div class="header__inner">
            <div class="header__left">
              <button type="button" id="header-menu" class="header__menu">
                <span class="icon icon_menu-mask"></span>
              </button>
            </div>

            <div class="header__main"></div>

            <div class="header__right">
              <button type="button" id="header-settings" class="header__settings">
                <span class="icon icon_settings-mask"></span>
              </button>
            </div>
          </div>
        </header>

        ${sidebar({ className: 'layout__sidebar layout__sidebar_hidden', path, boards })}

        <div id="notifications" class="layout__notifications notifications"></div>
        <div id="settings" class="layout__settings layout__settings_hidden settings"></div>

        <main class="layout__content">${content}</main>
      </body>
    </html>`;
}

export default layout;
