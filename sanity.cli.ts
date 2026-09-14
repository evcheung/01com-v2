'use client';
/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({
  api: {projectId, dataset},
  // This is the existing Studio application selected in Sanity Manage.
  // Pinning it makes CLI deployments non-interactive and prevents creating a
  // second hosted Studio by accident.
  deployment: {
    appId: '090d7f7c2343872183aa0fef',
    autoUpdates: true,
  },
})
