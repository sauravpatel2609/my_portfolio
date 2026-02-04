# Environment Variables Required for Contact Form

Add these environment variables in your Vercel project settings:

## Required for EmailJS (Contact Form)

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create an account and set up a service
3. Add these variables in Vercel:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Required for API Route

```
NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
```

## Optional: Google ReCAPTCHA (if using captcha)

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=your_secret_key
```

## How to Add in Vercel:

1. Go to your Vercel project
2. Click **Settings** → **Environment Variables**
3. Add each variable with its value
4. Redeploy your project

## Local Development:

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
