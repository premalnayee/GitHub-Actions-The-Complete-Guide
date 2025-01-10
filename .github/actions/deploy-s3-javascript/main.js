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

  core.notice('Deploying to S3');
}

run();
