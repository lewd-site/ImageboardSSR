import { html } from '@popeindustries/lit-html-server';
import Board from '../models/board';

interface SidebarProps {
  readonly className: string;
  readonly path: string;
  readonly boards: Board[];
}

export function sidebar({ className, path, boards }: SidebarProps) {
  className = [className, 'sidebar'].filter((c) => c).join(' ');

  return html`<aside class="${className}">
    <nav class="sidebar__inner">
      <ul class="sidebar__list">
        <li class="sidebar__item">
          <a
            class="${['sidebar__link', path === '/' ? 'sidebar__link_active' : null].filter((c) => c).join(' ')}"
            href="/"
            >Главная</a
          >
        </li>

        ${boards.slice(0, 5).map(
          (board) => html`<li class="sidebar__item">
            <a
              class="${[
                'sidebar__link',
                path === `/${board.slug}` || path.startsWith(`/${board.slug}/`) ? 'sidebar__link_active' : null,
              ]
                .filter((c) => c)
                .join(' ')}"
              href="${`/${board.slug}/`}"
              >${board.title}</a
            >
          </li>`
        )}
      </ul>
    </nav>
  </aside>`;
}

export default sidebar;
