// Путь к приложению
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// HTML плагин, сам обновляет ссылки на dist
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HTMLWebpackPlugin = require('html-webpack-plugin');
// Плагин для очистки dist
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// Плагин для копирования static files.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Позволяет добавить извлечь css из файлов
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Минификация JS
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserWebpackPlugin = require('terser-webpack-plugin');
// Минификация CSS
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// Закоменнтить при переводе на прод
const configMode = 'development';
// Закомментить при разработке
// const configMode = 'production';

module.exports = {
  'watch': true,
  // Если не нужны мапы в дистрибутиве - закомментить
  'devtool': 'source-map',
  'context': path.resolve(__dirname, 'src_front'), // Путь до файлов проекта
  'mode': configMode, // Сборка development/production
  'entry': './app.tsx', // Точка входа для сборки приложения
  'output': {
    // Выходной файл. Добавляем в название хэш по контенту.
    filename: '[name].[contenthash].js',
    // Можно указать несколько точек входа
    // Путь для конечных файлов
    path: path.resolve(__dirname, 'dist'),
  },
  'resolve': {
    // Указываем расширения, которые будут автоматически подхватываться
    // extensions: ['.ts', '.jsx'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // Для замены пути к дирректории
    alias: {
      // Позволяет обращаться к дирректории через '@src'
      // Нужно указывать одинаковые и в tsconfig, и в webpack.config
      '@src': path.resolve(__dirname, 'src_front/'),
      '@store': path.resolve(__dirname, 'src_front/ts/stateStorage/'),
      '@modals': path.resolve(__dirname, 'src_front/ts/modals/'),
      '@comp': path.resolve(__dirname, 'src_front/ts/components/'),
      '@pages': path.resolve(__dirname, 'src_front/ts/pages/'),
      '@types': path.resolve(__dirname, 'src_front/ts/types/types.ts'),
      // Можно указать просто @, неплохо для глубокой вложенности.
    },
  },
  // При наличии нескольких точек входа или подключении библиотек неглобально -
  // позволяет оптимизировать загрузки
  'optimization': {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      // Минификация JS
      new TerserWebpackPlugin(),
      // Минификация CSS
      new CssMinimizerPlugin(),
    ],
  },
  // Сервер для разработки с автоматическим обновлением контента
  'devServer': {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 8001,
    // disableHostCheck: true,
    allowedHosts: [
      '.tk079-6743',
      'localhost',
    ],
  },
  'plugins': [
    new HTMLWebpackPlugin({
      // Можно передать заголовок через Webpack
      title: 'TITLE',
      // Минифицирование html
      minify: configMode === 'production',
      // Путь к шаблону
      template: './index.html',
    }),
    // Плагин для очистки dist
    new CleanWebpackPlugin(),
    // Плагин для отделения css
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // Плагин для копирования статических файлов
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src_front/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
  'module': {
    rules: [
      // Правила для JS
      // {
      //   test: /\.(js|jsx)$/, // Регулярка для JS, JSX
      //   exclude: /node_modules/, // Пропускаем папку node_modules
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         '@babel/preset-env', // Пресет для JS
      //         '@babel/preset-react', // Пресет для TS
      //       ],
      //     },
      //   },
      // },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      // Правила для CSS
      {
        test: /\.css$/, // Указываем регулярку для обработки css
        use: [
          MiniCssExtractPlugin.loader, // Плагин для минификации
          'css-loader',
        ],
      },
      // Правила для изображений
      {
        test: /\.(png|jpg|svg|gif)$/, // Регулярка для изображений
        use: ['file-loader'], // Обработчик
      },
      // Правила для шрифтов
      {
        test: /\.(ttf|woff|woff2|eot)$/, // Регулярка для шрифтов
        use: ['file-loader'], // Обработчик
      },
      // Правило для XML
      {
        test: /\.xml$/, // Регулярка для XML
        use: ['xml-loader'], // Обработчик
      },
      // Правило для CSV
      {
        test: /\.csv$/, // Регулярка для CSV
        use: ['csv-loader'], // Обработчик
      },
    ],
  },
};
