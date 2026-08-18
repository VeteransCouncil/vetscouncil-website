# Veterans Council of Highlands County — Website

Official website for vetscouncil.org, built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the Gmail credentials so the Contact page's email form works. See that file for instructions on generating a Gmail App Password.

## Deployment

This project is designed to deploy on [Vercel](https://vercel.com). Import this repository into Vercel, set the `GMAIL_USER` and `GMAIL_APP_PASSWORD` environment variables in the Vercel project settings, and deploy.
