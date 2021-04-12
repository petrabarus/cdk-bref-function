import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const region = cdk.Stack.of(this).region;
    //arn:aws:lambda:ap-southeast-1:209497400698:layer:php-74:18
    const brefLayerVersion = `arn:aws:lambda:${region}:209497400698:layer:php-80:8`;
    const assetPath = path.join(__dirname, '../../lambda');
    const asset = lambda.Code.fromAsset(assetPath);
    
    const lambdaFunc = new lambda.Function(this, 'LambdaFunction', {
      runtime: lambda.Runtime.PROVIDED,
      handler: 'src/index.php',
      layers: [
        lambda.LayerVersion.fromLayerVersionArn(this, 'BrefPHPLayer', brefLayerVersion),
      ],
      code: asset,
    });
    
    new cdk.CfnOutput(this, 'LambdaFunctionArn', { value: lambdaFunc.functionArn });
  }
}
