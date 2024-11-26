# IBD Guide

![IBD Guide](https://github.com/willquill/ibd-guide/blob/main/logo-color.png?raw=true)

## Welcome

This GitHub repository hosts the code that deploys the [IBD Guide](https://ibd.guide) website at [https://ibd.guide](https://ibd.guide)

I'm using the [Nextra](https://nextra.site/) framework to make this website.

## About

IBD Guide is essentially a landing page for all things IBD. The idea is to provide some basic info and then link to everything you need to know about IBD.

## Deployment

This gets deployed via [Vercel](https://vercel.com/docs/deployments/git/vercel-for-github).

## How to contribute

Use your GitHub account (free) to submit an issue or pull request with the modifications you'd like to make! Get more info [here](https://ibd.guide/contribute).

## Development

See [Nextra Docs Theme documentation](https://nextra.site/docs/docs-theme) to see how to add content to the pages.

In general, I did this:

```sh
npm create cloudflare@latest ibd-guide -- --framework=next
```

[This post](https://stefanblos.com/posts/nextjs-new-app/) helped me pick out the options.

After it finished, it said this:

```
├  SUCCESS  View your deployed application at https://ibd-guide.pages.dev
│ 
│ Navigate to the new directory cd ibd-guide
│ Run the development server npm run dev
│ Preview your application npm run preview
│ Deploy your application npm run deploy
│ Read the documentation https://developers.cloudflare.com/pages
│ Stuck? Join us at https://discord.cloudflare.com
```

After the `https://ibd-guide.pages.dev/` starter site had been deployed, I





Get files written inside pages, then do:

```sh
npm install
```

Then test locally:

```sh
npm run dev
```

If it hands without making the site ready, try this:

```sh
rm -rf node_modules && npm i --force
```

### Logo

Nextra does not support SVG files, so [SVGR](https://bratislava.github.io/frontend/svg) must be used.

I followed the linked guide but used npm instead of yarn.

```sh
npm i @svgr/webpack
```

### On my to-do list

- Create a feedback page so you don't have to create a GitHub account to submit your personal story.
- Add a logo (I already have it! I just need to add it to the website somehow)

## License

Distributed under the MIT License. See LICENSE for more information.
