const CognitoResources = {
    CognitoUserPool: {
        Type: 'AWS::Cognito::UserPool',
        Properties: {
            AutoVerifiedAttributes: ['email'],
            Policies: {
                PasswordPolicy: {
                    MinimumLength: 8,
                    RequireLowercase: false,
                    RequireNumbers: false,
                    RequireUppercase: false,
                    RequireSymbols: false,
                },
            },
            UsernameAttributes: ['email'],
            Schema: [
                {
                    AttributeDataType: 'String',
                    Name: 'name',
                    Required: false,
                    Mutable: true,
                },
            ],
        },
    },
};
export default CognitoResources;
