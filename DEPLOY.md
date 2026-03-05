# Deploy to GitHub Pages with Custom Domain

This guide walks through hosting lanacanada.com on GitHub Pages (free).

---

## Prerequisites

- GitHub repo: `michaeldemb/lanacanada`
- Domain: `lanacanada.com` (already purchased)
- GitHub CLI (`gh`) installed — or use the GitHub web UI

---

## Step 1: Commit and Push All Changes

```bash
cd /path/to/lanacanada
git add -A
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

---

## Step 2: Enable GitHub Pages

**Option A — GitHub CLI:**
```bash
gh api repos/michaeldemb/lanacanada/pages -X POST -f source='{"branch":"main","path":"/"}'
```

**Option B — GitHub Web UI:**
1. Go to https://github.com/michaeldemb/lanacanada/settings/pages
2. Under "Source", select **Branch: main**, folder: **/ (root)**
3. Click **Save**

The site will be live at: `https://michaeldemb.github.io/lanacanada/`

---

## Step 3: Add CNAME File

Create a file called `CNAME` in the repo root with your domain:

```
www.lanacanada.com
```

Then commit and push:
```bash
echo "www.lanacanada.com" > CNAME
git add CNAME
git commit -m "Add CNAME for custom domain"
git push origin main
```

---

## Step 4: Configure Custom Domain in GitHub

**Option A — GitHub CLI:**
```bash
gh api repos/michaeldemb/lanacanada/pages -X PUT -f cname="www.lanacanada.com" -F https_enforced=true
```

**Option B — GitHub Web UI:**
1. Go to https://github.com/michaeldemb/lanacanada/settings/pages
2. Under "Custom domain", enter `www.lanacanada.com`
3. Click **Save**
4. Check "Enforce HTTPS" (may take a few minutes to become available)

---

## Step 5: Configure DNS at Your Domain Registrar

Log into your domain registrar (where you purchased lanacanada.com) and add these DNS records:

### A Records (for apex domain `lanacanada.com`)

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### CNAME Record (for `www.lanacanada.com`)

| Type | Name | Value |
|------|------|-------|
| CNAME | www | michaeldemb.github.io |

> **Note:** DNS propagation can take up to 48 hours, but usually completes within 1-2 hours.

---

## Step 6: Verify

1. Wait 10-30 minutes after DNS changes
2. Visit `https://lanacanada.com` — should load your site
3. Visit `https://www.lanacanada.com` — should also work
4. Check the padlock icon in the browser — HTTPS should be active
5. In GitHub Pages settings, "DNS check" should show a green checkmark

---

## Troubleshooting

- **404 error on GitHub Pages:** Make sure the source branch is `main` and the folder is `/` (root)
- **HTTPS not available:** Wait for DNS to propagate, then re-check "Enforce HTTPS" in settings
- **Domain not resolving:** Verify DNS records are correct using `dig lanacanada.com` or https://dnschecker.org
- **Old cached site:** Hard refresh with Ctrl+Shift+R (or Cmd+Shift+R on Mac)

---

## Cost Summary

| Item | Cost |
|------|------|
| GitHub Pages hosting | Free |
| SSL/HTTPS certificate | Free (automatic) |
| Custom domain | ~$10-15/year (renewal at your registrar) |
| **Total** | **~$10-15/year** |
