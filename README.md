<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1oPUrWjuHSLZZsMKuPliWM9XCSiR4_8sd

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Cloudflare Pages

This project is configured for automatic deployment to Cloudflare Pages using GitHub Actions.

### Setup Instructions:

1. **Create a Cloudflare Pages project:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your GitHub repository: `vivekinvitra/MarriageRegistration`
   - Set build settings:
     - Build command: `npm run build`
     - Build output directory: `dist`
     - Root directory: `/` (leave empty)

2. **Set up GitHub Secrets:**
   - Go to your GitHub repository settings
   - Navigate to "Secrets and variables" > "Actions"
   - Add the following secrets:
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token (create one at https://dash.cloudflare.com/profile/api-tokens)
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID (found in your Cloudflare dashboard)

3. **Deploy:**
   - Push changes to the `main` branch
   - The GitHub Action will automatically build and deploy your app to Cloudflare Pages

### Environment Variables

If your app requires the `GEMINI_API_KEY`, you can set it as an environment variable in your Cloudflare Pages project settings under "Environment variables".

### Manual Deployment

If you prefer manual deployment:

1. Build the project: `npm run build`
2. Upload the `dist` folder to Cloudflare Pages via the dashboard
