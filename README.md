vivibruce.github.io
Projects based on Javascript, HTML & CSS

## What is the purpose of this PR
- This PR fixes the error resulting from flaky test: `org.broadleafcommerce.common.sitemap.service.CustomUrlSiteMapGeneratorTest.testCustomUrlSiteMapGenerator`
- The mentioned tests may fail or pass without changes made to the source code

## Why the tests fail


## Reproduce the test failure
- Run the tests with NonDex maven plugin. The commands to recreate the flaky test failures are:



## Expected results
- Test should run successfully when run with NonDex

## Actual Result


## Fix



