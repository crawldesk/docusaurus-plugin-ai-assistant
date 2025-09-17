function aiAssistantPlugin(context, options) {
  return {
    name: "docusaurus-plugin-ai-assistant",

    getClientModules() {
      return [];
    },

    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: "script",
            innerHTML: `
              (function() {
                function loadAiWidget() {
                  if (window.initAIWidget) {
                    window.initAIWidget({
                      key: "${options.key || ""}",
                      config: ${JSON.stringify(options.config || {})}
                    });
                    return;
                  }

                  var script = document.createElement("script");
                  script.src = "https://cdn.crawldesk.com/widget.iife.js";
                  script.async = true;
                  script.onload = function() {
                    if (window.initAIWidget) {
                      window.initAIWidget({
                        key: "${options.key || ""}",
                        config: ${JSON.stringify(options.config || {})}
                      });
                    }
                  };
                  document.body.appendChild(script);
                }

                if (document.readyState === "complete") {
                  loadAiWidget();
                } else {
                  window.addEventListener("load", loadAiWidget);
                }
              })();
            `,
          },
        ],
      };
    },
  };
}

module.exports = aiAssistantPlugin;
