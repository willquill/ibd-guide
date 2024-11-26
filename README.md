# IBD Guide

![IBD Guide](https://github.com/willquill/ibd-guide/blob/main/logo-color.png?raw=true)

## Welcome

This GitHub repository hosts the code that deploys the [IBD Guide](https://ibd.guide) website at [https://ibd.guide](https://ibd.guide)

I'm using the [Nextra](https://nextra.site/) framework to make this website.

## About

IBD Guide is essentially a landing page for all things IBD. The idea is to provide some basic info and then link to everything you need to know about IBD.

## How to contribute

Use your GitHub account (free) to submit an issue or pull request with the modifications you'd like to make! Get more info [here](https://ibd.guide/contribute).

## Development

In my READMEs for all of my repos, I like to be detailed in my development and deployment process because I tinker a lot, and if I don't document what I'm doing, I'll forget how I set it up. Unfortunately, **I did not record how I initially set this up**, so I'm going to have to piece it together five months after the initial deployment.

Essentially, I've created a Next.js application that is deployed using Cloudflare Pages.

If I recall, I followed some basic guides related to creating a static site with Nextra, and then I followed the instructions [at this link](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) to deploy the static site to Nextra.

It works like this:

1. I created a "Workers & Pages" deployment in Cloudflare and connected it to this GitHub repository. By doing that, a new "Cloudflare Workers and Pages" application is configured in my GitHub account's settings page under Integrations > Applications. This application has permission to read my code, and read and write access to checks, deployments, and pull requests. At the time of this writing, the application only has permission to this repository.
2. In my Cloudflare account, I can go to Workers & pages > ibd-guide > Settings to configure how the application responds to pushes to my various branches.
3. Anytime my default branch (main) receives a new commit (usually via a PR from a branch I've been working on), Cloudflare builds and deploys my Next.js site to a "production" URL. Right now, it appears to be `https://a27b019c.ibd-guide.pages.dev/`. Obviously, that's not great for handing out to people, so in my "Workers & Pages" application for this site, I've configured `ibd.guide` and `www.ibd.guide` in my custom domains section. I don't remember if this autoconfigures my DNS records, since I use Cloudflare nameservers for `ibd.guide`, or if I had to manually configure them myself, but my records consist of two CNAME records that point `ibd.guide` and `www` to `ibd-guide.pages.dev`, both proxied. What is `a27b019c`? It seems to be an ID given to a deployment version. As soon as I do my next deployment to production, there will be a new ID.
4. In addition to the production deployment, which reacts to commits to my default branch, I have a preview deployment which triggers a build upon commits to non-default branches. Presumably, if the Preview fails, it's going to prevent that same commit from being deployed to Production.

Sorry about the vagueness and uncertainty, but I've only used Cloudflare Workers & Pages once, and it was when I was still in the hospital recovering from my total colectomy with end ileostomy surgery. I was on a lot of painkillers when I created this whole thing, as they made me extremely motivated for some reason.

Additional notes:

- In my build settings for my production deployment, my build output directory is `/.vercel/output/static`. I originally used Vercel instead of Cloudflare pages while still setting this up, and somehow that Vercel artifact still exists.

### Building the application

See [Nextra Docs Theme documentation](https://nextra.site/docs/docs-theme) to see how to add content to the pages.

When you make a change, you can see it with:

```sh
npm run dev
```

If it hands without making the site ready, try this:

```sh
rm -rf node_modules && npm i --force
```

### On my to-do list

- Create a feedback page so you don't have to create a GitHub account to submit your personal story.
- Add a logo (I already have it! I just need to add it to the website somehow)

## License

Distributed under the MIT License. See LICENSE for more information.
