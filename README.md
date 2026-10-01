# BarberDog — сайт зоосалона

Сайт зоосалона BarberDog (Петропавловск-Камчатский): груминг собак и
кошек, экспресс-линька, дополнительный уход.

Next.js (App Router) + TypeScript + Tailwind CSS. Контент вынесен в отдельный
типизированный слой — страницы услуг и разделы главной собираются из данных,
в JSX нет зашитого текста.

## Запуск

```bash
npm install
npm run dev
```

Открыть http://localhost:3000

Полезные команды:

```bash
npm run build       # продакшен-сборка
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm run format      # prettier
```

## Структура

```
src/
  app/                     маршруты (App Router)
    page.tsx               главная
    uslugi/                каталог услуг
    uslugi/[slug]/         страница услуги (генерируется из content/services.ts)
    raboty/                работы (пока заглушка)
    o-salone/  otzyvy/  kontakty/
    sitemap.ts  robots.ts  not-found.tsx
  content/                 контентный слой — единственный источник текстов
    salon.ts               адрес, телефон, режим, рейтинг, мастер
    services.ts            4 услуги, цены, «что входит», «от чего зависит стоимость»
    reviews.ts             отзывы с 2ГИС
    works.ts               работы «до/после» и тексты страницы /raboty
    home.ts  pages.ts      тексты главной и внутренних страниц
    nav.ts  types.ts
  components/
    layout/                шапка, футер, шапка внутренней страницы, логотип
    sections/              секции главной и переиспользуемые блоки
    cards/                 карточки услуги и работы «до/после»
    ui/                    Container, ButtonLink, SectionHeading, Reveal, TouchHover
    icons.tsx              весь набор иконок одним файлом
  lib/
    image.ts               пропсы для next/image из контентной картинки
    image-meta.ts          генерируется скриптом, руками не правим
    jsonld.ts              LocalBusiness и хлебные крошки
public/images/             оптимизированные фотографии и логотип
scripts/prepare-assets.py  подготовка фотографий из исходной папки
```

### Как поменять контент

- телефон, адрес, режим работы, рейтинг → `src/content/salon.ts`;
- услуги и цены → `src/content/services.ts` (там же общий блок «Что входит в
  стрижку» и обязательный блок «От чего зависит стоимость»);
- отзывы → `src/content/reviews.ts`;
- работы «до/после» → `src/content/works.ts`.

Новая услуга появляется на главной, в каталоге и получает собственную страницу
`/uslugi/<slug>` сразу после добавления объекта в `services`.

### Как добавить фотографии

Положить исходники в папку с ассетами и прогнать скрипт — он уменьшит,
пережмёт, разложит по `/public/images` и перегенерирует `src/lib/image-meta.ts`:

```bash
python3 -m venv .venv && .venv/bin/pip install pillow
.venv/bin/python scripts/prepare-assets.py "/путь/к/папке/с/ассетами"
```

## Записи и контакты

Все кнопки «Записаться» — это `tel:`-ссылка на номер салона. Форм и модалок на
сайте нет: запись только по телефону, WhatsApp или Telegram (тот же номер).

## Деплой

Проект рассчитан на Vercel: импортировать репозиторий, фреймворк определится
автоматически.

Переменная окружения (необязательная, но нужна для правильных canonical,
sitemap и Open Graph после привязки домена):

```
NEXT_PUBLIC_SITE_URL=https://ваш-домен.ру
```

Без неё используется адрес по умолчанию из `src/content/salon.ts`.
