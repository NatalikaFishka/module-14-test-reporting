### Install all dependencies
npm i

### Run e2e tests (all tests run by default)
npm run test

#### Following options could be specified

* Use `--tags` flag to specify tests to run, like `@smoke`, `@full`, `@nav`, `@lang`, `@so`. 
```
npm run test -- --tags "@smoke"
```

#### JSON, XML and HTML reports could be found in `test/reports` folder after test run