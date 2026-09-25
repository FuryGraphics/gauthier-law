import Script from "next/script";

// LeadConnector (HighLevel) chat bubble, on every page. Its position, colors, and
// greeting are configured in the LeadConnector dashboard, not here. Loaded at idle
// time so it never competes with the page's first paint.
const WIDGET_ID = "6aa2f76b19574704fd2508e5";

export function ChatWidget() {
  return (
    <Script
      id="leadconnector-chat"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={WIDGET_ID}
      strategy="lazyOnload"
    />
  );
}
