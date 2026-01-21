# Cloudflare Pages Deployment Guide for Astro

Astro works perfectly with Cloudflare Pages. Since your project currently uses static rendering (SSG), the setup is very straightforward.

## Option A: Git Integration (Recommended)
This is the easiest way. Every time you `git push` to GitHub, Cloudflare will automatically build and deploy your site.

1.  **Push your code to GitHub**: Make sure the `test` folder (or the whole repo) is on GitHub.
2.  **Login to Cloudflare Dashboard**: Go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3.  **Select Repository**: Choose your `Dorm-Finder` repository.
4.  **Configure Build Settings**:
    -   **Project name**: `dorm-finder` (or your choice)
    -   **Framework preset**: Select **Astro**.
    -   **Build command**: `npm run build`
    -   **Build output directory**: `dist`
    -   **Root directory**: `/test` (Since your Astro project is inside the `test` folder)
5.  **Save and Deploy**: Cloudflare will start the build process.

## Option B: Manual Upload (Wrangler)
If you don't want to use Git, you can deploy directly from your terminal.

1.  **Build the project**:
    ```bash
    cd test
    npm run build
    ```
2.  **Deploy using Wrangler**:
    ```bash
    npx wrangler pages deploy dist
    ```

## Why Cloudflare Pages?
-   **Automatic Framework Detection**: It knows how to build Astro out of the box.
-   **Faster Builds**: Generally faster than GitHub Actions.
-   **Preview Deployments**: Every branch/pull request gets its own temporary URL.
-   **No "Base Path" Issues**: Unlike GitHub Pages (which often needs `site/repo-name/`), Cloudflare Pages usually serves from the root `/`.

---

> [!TIP]
> **GitHub Pages Note**: If you still want to use GitHub Pages, you just need to add a `site` property to your `astro.config.mjs` and use a GitHub Action to build it. But Cloudflare is much simpler!
