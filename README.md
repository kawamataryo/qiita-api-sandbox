# qiita-api-sandbox

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## API configuration

Copy `.env.example` to `.env.local` and set `VUE_APP_QIITA_USER` to the
Qiita user whose public posts you want to display. This browser app uses the
public user-items API without an API token. Private posts are not requested.

Do not put a personal token in a `VUE_APP_*` variable: Vue embeds those values
in the downloadable JavaScript. Authenticated/private API operations need a
separately authenticated backend or a per-user OAuth flow.
