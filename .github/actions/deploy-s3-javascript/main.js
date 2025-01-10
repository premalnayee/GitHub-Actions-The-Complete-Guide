import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from '@actions/exec';

function run() {
  // get some input values
  const bucket = core.getInput('bucket', { required: true });
  const source = core.getInput('source', { required: true });
  const region = core.getInput('region', { required: true });

  // Pretend to deploy to S3
  const s3uri = `s3://${bucket}/${source}`;
  exec.exec('echo', ['Deploying to', s3uri, 'in', region]);

  // Show the  AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
  exec.exec('echo', ['AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID]);
  exec.exec('echo', [
    'AWS_SECRET_ACCESS_KEY:',
    process.env.AWS_SECRET_ACCESS_KEY,
  ]);
  core.notice('Deploying to S3');
}

run();
