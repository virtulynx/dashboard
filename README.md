- [Ads Insights API](https://developers.facebook.com/docs/marketing-api/insights/)
- [Page Insights API](https://developers.facebook.com/docs/platforminsights/page)

## Getting Started

- In order to run the app, you will need to update the configuration file by adding the:

  - [Ad Account ID and User Access Token](https://developers.facebook.com/docs/facebook-login/guides/access-tokens/)
  - [Facebook Page ID and Access Token](https://developers.facebook.com/docs/pages/access-tokens)

### Prerequisites

- If running locally:
  - [Node.js](https://nodejs.org/en/download/), which you can install via Homebrew (MacOS only) - `brew install node`
- If running in dev container:

  - [Docker](https://www.docker.com/) or another environment that supports dev containers e.g. [GitHub Codespaces](https://github.com/features/codespaces).

- **You will need to have a Facebook Page / Ad account and an App created in Meta Developers**. If you don’t have an app, follow the guide [here](https://developers.facebook.com/docs/development/) to create your app first.

### Installation

1. Run `npm install`

   Installs project dependencies.
   Open the terminal and run `npm install`.

2. Set up `.env.local` file

   Copy the file `.sample.env.local` to `.env.local`

   ```
   cp .sample.env.local .env.local
   ```

   Edit the `.env.local` file to add all the values for your project including your Meta information related to Pages and Ad Account to fetch the Insights data.

## Usage

1. Install Docker
2. Run `docker compose up`
