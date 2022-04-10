import { App, aws_s3 } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SentifyAssessmentStack } from '../lib/sentify-assessment-stack';

test('Encrypted S3 Bucket Created', () => {
    const app = new App();
    const stack = new SentifyAssessmentStack(app, 'MyTestStack');

    const template = Template.fromStack(stack);
    // Assert that exactly one S3 bucket has been created
    template.resourceCountIs("AWS::S3::Bucket", 1);
    // Assert that the bucket is encrypted with a key managed by S3
    template.hasResourceProperties('AWS::S3::Bucket', {
        encryption: aws_s3.BucketEncryption.S3_MANAGED,
    });
});
