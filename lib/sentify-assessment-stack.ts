import { aws_s3, App, Stack, StackProps } from 'aws-cdk-lib';

export class SentifyAssessmentStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new aws_s3.Bucket(this, 'EncryptedBucket', {
      versioned: true,
      // Encrypt the bucket, use encryption with S3 key management
      encryption: aws_s3.BucketEncryption.S3_MANAGED,
      // Uncomment the following to tear down the bucket with the stack
      // removalPolicy: RemovalPolicy.DESTROY,
      // autoDeleteObjects: true,
    });
    
  }
}

const app = new App();
new SentifyAssessmentStack(app, "the-only-stack-for-now");
app.synth();
