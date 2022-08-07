# Template Lambda

Typescript/Node template for AWS Lambda that deploys with AWS SAM using Github Actions

### Prerequisites

* Node.js 14/NVM ([Instructions](https://github.com/nvm-sh/nvm#installing-and-updating))

* AWS Sam CLI ([Instructions](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html))


### Development

Install dependencies
```
npm ci
```

running tests
```
npm test
```

run lambda locally
```
sam local invoke
```
