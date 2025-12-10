# React Preview Demo

Demo React application showcasing zero-config PR previews using [serverless-infra](https://github.com/jonasneves/serverless-infra).

## Features

- Zero-config PR previews
- Automatic deployment on pull requests
- Preview URLs posted as PR comments
- No Cloudflare account required
- Powered by Cloudflare Quick Tunnels

## How It Works

1. Open a pull request
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds the React app
   - Deploys to a temporary tunnel
   - Posts preview URL in PR comment
3. Preview stays live for 6 hours
4. New commits update the preview automatically

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The app automatically deploys on every pull request. No configuration needed.

### Preview Workflow

See [.github/workflows/preview.yml](.github/workflows/preview.yml):

```yaml
- uses: jonasneves/serverless-infra/.github/actions/expose-service@main
  with:
    port: 4173
    command: npm run preview
```

That's it. No secrets, no setup.

## Tech Stack

- React 18
- Vite 6
- GitHub Actions
- Cloudflare Quick Tunnels

## Try It

1. Fork this repo
2. Make a change
3. Open a pull request
4. Get a preview URL in seconds

## License

MIT
