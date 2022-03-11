import { html } from '@popeindustries/lit-html-server';
import config from '../../config';
import Board from '../../models/board';
import layout from '../layout';

interface IndexPageProps {
  readonly path: string;
  readonly boards: Board[];
}

export function indexPage({ path, boards }: IndexPageProps) {
  const title = config.site.title;

  return layout({
    path,
    title,
    boards,
    content: html`<h1 class="layout__title">${title}</h1>

      <div class="index-page">
        <h2 class="index-page__title">Список досок</h2>

        <table class="index-page__table table">
          <thead class="table__header">
            <tr class="table__row">
              <th class="table__cell">Доска</th>
              <th class="table__cell">Название</th>
              <th class="table__cell">Количество постов</th>
            </tr>
          </thead>

          <tbody class="table__body">
            ${boards.map(
              (board) => html`<tr class="table__row">
                <th scope="row" class="table__cell"><a href="/${board.slug}/">/${board.slug}/</a></th>
                <td class="table__cell">${board.title}</td>
                <td class="table__cell">${board.postCount}</td>
              </tr>`
            )}
          </tbody>
        </table>
      </div>`,
  });
}

export default indexPage;
