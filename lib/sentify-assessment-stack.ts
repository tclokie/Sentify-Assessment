import { App, Stack, StackProps } from 'aws-cdk-lib';
import { aws_s3 } from 'aws-cdk-lib';

export class SentifyAssessmentStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new aws_s3.Bucket(this, 'myBucket', {
      versioned: true
    });
  }
}
