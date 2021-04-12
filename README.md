# cdk-bref-function
Example of using Bref Custom Runtime using AWS CDK for Event-Driven Function.

## Requirement

- AWS CLI
- AWS CDK

## Deploying

To deploy execute

```bash
bash init.sh
```

This will deploy CloudFormation stack and display the lambda function ARN.

### Executing

After we obtain the Lambda function ARN, invoke the function by executing

```bash
aws lambda invoke \
    --function-name <arn> \
    output.txt
```