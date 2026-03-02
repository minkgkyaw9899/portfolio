# Vultr CI/CD Deployment

This repo ships with a GitHub Actions workflow that builds a Docker image and deploys it to a Vultr server over SSH.

## Prerequisites

- A Vultr VPS with Docker installed
- A domain (optional) pointed to the server IP
- GitHub repository secrets configured

## Required GitHub Secrets

Set these in **Settings → Secrets and variables → Actions**:

- `VULTR_HOST`: Server IP or hostname
- `VULTR_USER`: SSH user (e.g., `root` or `deploy`)
- `VULTR_SSH_KEY`: Private SSH key with access to the server

## How It Works

- On every push to `main`, the workflow:
  - Builds the image with Bun
  - Pushes it to GHCR
  - SSHes into Vultr
  - Pulls the latest image
  - Restarts the container named `portfolio`

The container is exposed on port 80 → 3000.

## Server Setup (One-Time)

```bash
# Install Docker on Ubuntu
sudo apt update && sudo apt install -y docker.io
sudo systemctl enable --now docker

# Optional: create deploy user
sudo adduser deploy
sudo usermod -aG docker deploy
```

## Verifying Deployment

After a push to `main`, confirm the container is running:

```bash
docker ps --filter "name=portfolio"
```

If you want HTTPS, put Nginx or Caddy in front of the container and proxy to `localhost:3000`.
