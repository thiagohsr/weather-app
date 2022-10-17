![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=therealsujitk-vercel-badge)

# Weather app code challenge for Tamanna

App to look up for weather based on geolocation and throught the Open Weather Api endpoints. Visit <a href="https://weather-app-thiagoramos.vercel.app/" target="_blank" rel="noopener noreferrer">app on vercel</a>.

## Run the project
### Required
- Nodejs v14.17.6 - I do recommend [NVM](https://github.com/creationix/nvm#installation) to install and manage node js versions.

## Install dependencies
After has the right node version, you need to run:

```bash
npm install
#or
yarn
```

## Getting Started
Before run the project, you need to:
- Create a account in [Open weather map](https://openweathermap.org/) to get your API KEY.
- Rename the `sample.env.local` to `.env.local` and update the keys to your variable values, mainly the `NEXT_PUBLIC_WEATHER_API_KEY`. This will enable the communication with the openweathermap API.

To get the project running in you local development server, run:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test the project
To see tests results you can run:
```bash
npm run test
# or
yarn test
```
If you need to see the coverage:
```bash
npm run test:coverage
# or
yarn test:coverage
```
## Commit Policy [git-cz](https://www.npmjs.com/package/git-cz)
I've using while build this project the command `npx git-cz` and following the recipe. They suggest a good way to organize the project history.

## Learn more about depencies on the project

### NextJS
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Redux ToolKit
- https://redux-toolkit.js.org/
- https://redux-toolkit.js.org/rtk-query/overview

