// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Сервис бронирования парковочных мест в близи аэропорта',
  tagline: 'Документация для сервиса бронирования парковочных мест в близи аэропорта',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sickhexd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/t-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sickhexd', // Usually your GitHub org/user name.
  projectName: 't-documentation', // Usually your repo name.
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [
            [require('@akebifiky/remark-simple-plantuml'), {}],
          ],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'docs/API-спецификация/openapi.yaml',
            route: '/api-docs/',
          },
        ],
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-drawio',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Сервис бронирования парковочных мест в близи аэропорта',
        logo: {
          alt: 'Сервис бронирования парковочных мест в близи аэропорта',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Документация',
          },
          {
            to: '/api-docs/',
            label: 'API',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Общая информация',
                to: '/docs/intro',
              },
              {
                label: 'Пользовательские сценарии',
                to: '/docs/scenarios/use-cases',
              },
            ],
          },
          {
            title: 'Архитектура',
            items: [
              {
                label: 'Архитектура системы',
                to: '/docs/architecture/arch',
              },
              {
                label: 'Модели данных',
                to: '/docs/db/data-model',
              },
            ],
          },
          {
            title: 'API',
            items: [
              {
                label: 'Описание API',
                to: '/docs/API-спецификация/api-reference',
              },
              {
                label: 'OpenAPI',
                to: '/api-docs/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Сервис бронирования парковочных мест в близи аэропорта`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
