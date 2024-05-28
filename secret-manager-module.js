const cdk = require('aws-cdk-lib');
const { Construct } = require('constructs');
const secretsmanager = require('aws-cdk-lib/aws-secretsmanager');

class secretManagerModule extends Construct {
  constructor(scope, id, props) {
    super(scope, id);

    const { Name, description, secret } = props;
    const secretObjectValue = {};

    for (const [key, value] of Object.entries(secret)) {
      secretObjectValue[key] = cdk.SecretValue.unsafePlainText(value);
    }

    new secretsmanager.Secret(this, Name, {
      secretName: Name,
      description: description,
      secretObjectValue: secretObjectValue,
    });
  }
}

module.exports = { secretManagerModule };
