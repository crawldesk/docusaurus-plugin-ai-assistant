# docusaurus-plugin-ai-assistant

![npm version](https://img.shields.io/npm/v/docusaurus-plugin-ai-assistant) ![License](https://img.shields.io/npm/l/docusaurus-plugin-ai-assistant) ![Downloads](https://img.shields.io/npm/dt/docusaurus-plugin-ai-assistant)

**CrawlDesk Ask AI Assistant for Docusaurus** — add an **interactive Ask AI assistant** to your documentation effortlessly.

This plugin lazy-loads the CrawlDesk **Ask AI widget** for **fast performance** and allows simple configuration for theme, and other options.

🌐 Visit [CrawlDesk](https://www.crawldesk.com) to learn more or [Request a Demo](https://www.crawldesk.com/demo-request).

---

## 🚀 Features

- **Lazy-loaded**: non-blocking widget for faster page loads
- **Theme support**: dark, light, or custom
- **Secure API key injection**: only your key is required
- **Seamless integration** with any Docusaurus v3 site
- **Easy configuration** via plugin options
- **Ask AI ready**: lets users ask questions directly inside your docs

---

## Installation

```bash
npm install --save docusaurus-plugin-ai-assistant
# or
yarn add docusaurus-plugin-ai-assistant
```

## Usage

In your docusaurus.config.js:

```js
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-ai-assistant",
      {
        key: "YOUR_CRAWLDESK_WIDGET_KEY",
        config: {
          theme: "dark",
        },
      },
    ],
  ],
};
```

- **`key`**: Your CrawlDesk Ask AI widget API key

- **`config`**: _Optional local overrides for the widget._  
  Most settings are **managed via the [CrawlDesk Dashboard](https://www.crawldesk.com)**, but you can **override values locally here if needed**.

That’s it — the Ask AI assistant will automatically appear in your docs!

## Why Use CrawlDesk Ask AI Assistant?

Make your docs smarter with an interactive Ask AI assistant

Reduce support load by letting users ask questions directly in docs

Fully managed by CrawlDesk, easy to drop into any Docusaurus site
