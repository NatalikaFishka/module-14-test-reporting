### Install all dependencies
npm i

### Run e2e tests
npm run test

#### Following options could be specified

* Use `--tag` flag to specify tests to run, like `@smoke`, `@full`, `@nav`, `@lang`, `@so`. 
```
npm run test -- --tag "@smoke"
```

#### JSON and HTML reports could be found in `reports` folder after test run