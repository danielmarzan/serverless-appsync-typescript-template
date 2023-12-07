const appSync = {
  name: "${self:service}",
  authentication: {
    type: "AMAZON_COGNITO_USER_POOLS",
    config: {
      awsRegion: "us-east-1",
      userPoolId: {
        Ref: "CognitoUserPool",
      },
      defaultAction: "ALLOW",
    },
  },
  resolvers: [
  ],
  dataSources: [
    {
      usersTable: {
        type: "AMAZON_DYNAMODB",
        config: {
          tableName: { Ref: "UsersTable" },
        },
      },
    },
    {
      companiesTable: {
        type: "AMAZON_DYNAMODB",
        config: {
          tableName: { Ref: "CompaniesTable" },
        },
      },
    },
  ],
};

export default appSync;
