import type { AWS } from "@serverless/typescript";

import appSync from "./serverless/appsync";
import CognitoResources from "./serverless/cognitoResources";
import DynamoDBResources from "./serverless/dynamodb";

const serverlessConfiguration: AWS & {
  appSync: unknown;
} = {
  service: "appsync-typescript-template",
  frameworkVersion: "3",
  plugins: [
    "serverless-offline",
    "serverless-dynamodb-local",
    "serverless-appsync-plugin",
    "serverless-iam-roles-per-function",
    "serverless-better-credentials",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    stage: "${opt:stage, 'dev'}",
    region: "us-east-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      region: "${self:provider.region}",
    },
    lambdaHashingVersion: "20201221",
  },
  package: {
    exclude: ["package-lock.json", "package.json"],
  },
  resources: {
    Resources: {
      ...CognitoResources,
      ...DynamoDBResources,
    },
    Outputs: {
      CognitoUserPoolId: {
        Value: { Ref: "CognitoUserPool" },
      },
    },
  },
  appSync,
  custom: {
   
  },
};

module.exports = serverlessConfiguration;
