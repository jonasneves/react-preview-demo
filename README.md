# React Preview Demo

Demo React application showcasing container-based PR previews using [serverless-infra](https://github.com/jonasneves/serverless-infra).

## How It Works

1. Open a pull request
2. GitHub Actions builds a Docker image and exposes it via Cloudflare Tunnel
3. Preview URL posted in PR comment
4. Preview stays live for 6 hours

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
docker build -t react-preview-demo .
docker run -p 3000:3000 react-preview-demo
```

## Deployment

See [.github/workflows/preview.yml](.github/workflows/preview.yml):

```yaml
- uses: jonasneves/serverless-infra/.github/actions/expose-service@main
  with:
    dockerfile: ./Dockerfile
    port: 3000
```

## License

MIT
