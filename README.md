# Corona Statistics Project

Simple web application, completely responsive to show Corona statistics about Germany allowing the user to select between the next timeframes from now:

- Last Week.
- Last 2 Weeks.
- Last 3 Weeks.
- Last 4 Weeks.

Note: Timeframes can be changed inside `src/app/common/data/timeframe.data.ts`

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

Note: All scripts are running from a local npm package with `npx`

## Build

Run `npm run build:production:compress` to build the project minifying the HTML files and compressing (scss,js,html,json,ico,svg) files with gzip and brotli.

Note: For more information check the scripts inside package.

## Documentation

Run `npm run compodoc` to generate a the project documentation using Compodoc.

## Tests

Run `npm run test` will check lint and prettier format before running all unit tests.

## Bundle size

Run `npm run build:production:analyze` will analize the bundle size of the project with webpack-bundle-analyzer.

## Data Source

Robert Koch-Institut: [COVID-19](https://npgeo-corona-npgeo-de.hub.arcgis.com/)

## Credits

### SVG Germany Map

Free SVG Maps from [AMCHARTS](https://www.amcharts.com/svg-maps/?map=germany)

### Icon (Germany map)

Flag map of Germany from [Wikimedia Commons](https://en.wikipedia.org/wiki/File:Flag_map_of_Germany.svg)

### Angular Template

Xtreme Angular 11 Admin Lite from [WrapPixel](https://www.wrappixel.com/templates/xtreme-angular-lite/)
