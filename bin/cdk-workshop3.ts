#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWorkshop3Stack } from '../lib/cdk-workshop3-stack';

const app = new cdk.App();
new CdkWorkshop3Stack(app, 'CdkWorkshop3Stack');
