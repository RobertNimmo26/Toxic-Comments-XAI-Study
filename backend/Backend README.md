# Backend

Our backend has been designed to store results from our user study to MongoDB. It uses [Cloudflare Workers](https://developers.cloudflare.com/workers/) (serverless function) which are written in Javascript and uses MongoDB to store results

The CF worker function can be customised for your study and preferred storage method.

## Overview of CF workers files

- `index.js` - the serverless function code which is hosted
- `wrangler.toml` - CF worker site configurations
- `.dev.vars` - CF worker environmental variables secrets in development

## Prerequisites

- Cloudflare developer account. Can sign up here https://dash.cloudflare.com/sign-up

- MongoDB Atlas account. Can sign up here https://account.mongodb.com/account/login

## Getting started

1. Create or select a MongoDB Project at https://cloud.mongodb.com

2. Deploy a MongoDB database cluster in your project and call it `XAIStudy`. A free shared cluster should be sufficient for most use cases.

3. Connect to cluster and then create three databases in our database cluster (`Dev`, `Testing`, `Production`), each should include `Results` as a collection. MongoDB compass is a free simple application to connect to MongoDB clusters.

   Your cluster should look like this:

   - Dev
     - Results
   - Testing
     - Results
   - Production
     - Results

4. Install all dependencies from `package.json`

   ```
   $ npm install
   ```

5. Publish CF worker functions

   ```
   $ npx wrangler publish
   ```

   The project should now be viewable on https://dash.cloudflare.com/

6. Create MongoDB Data API key
   In the MongoDB project in which you have deployed your cluster, create a new Data API key - https://cloud.mongodb.com

7. Set CF worker secrets
   The necessary secrets are:

   - MONGODB_APIKEY
     - Data API Key which was generated in step 6
   - MONGODB_APIURL
     - Data API endpoint

   For each secret:

   ```
   $ wrangler secret put <NAME>
   ```
