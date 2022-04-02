import { html } from '@popeindustries/lit-html-server';
import config from '../config';

interface PostFormProps {
  readonly className?: string;
  readonly slug: string;
  readonly threadId: number;
}

export function postForm({ className, slug, threadId }: PostFormProps) {
  className = [className, 'post-form'].filter((c) => typeof c !== 'undefined').join(' ');

  const redirectUri = `${config.frontend.host}/${slug}/res/${threadId}`;
  const url = `${config.api.host}/api/v1/boards/${slug}/threads/${threadId}/posts?redirect=${encodeURIComponent(
    redirectUri
  )}`;

  return html` <div class=${className}>
    <form id="post-form" class="post-form__inner" method="post" action=${url} enctype="multipart/form-data">
      <div class="post-form__row">
        <input class="post-form__name" name="name" placeholder="Имя" maxlength="40" value="" />
        <button type="submit" class="post-form__submit">Отправить</button>
      </div>

      <div class="post-form__row">
        <textarea class="post-form__message" name="message" placeholder="Сообщение" maxlength="8000"></textarea>
      </div>

      <div class="post-form__row">
        <input type="file" class="post-form__files" name="files" multiple />
      </div>
    </form>
  </div>`;
}

export default postForm;
