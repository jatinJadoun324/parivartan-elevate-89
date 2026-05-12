"use client";
import { useEffect, useRef } from "react";

interface CalendlyWidgetProps {
  url: string;
  minWidth?: string;
  height?: string;
}

export function CalendlyWidget({ url, minWidth = "320px", height = "700px" }: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "calendly-inline-widget";
    widgetDiv.setAttribute("data-url", url);
    widgetDiv.style.minWidth = minWidth;
    widgetDiv.style.height = height;
    container.appendChild(widgetDiv);

    if (!scriptRef.current) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      scriptRef.current = script;
    }

    return () => {
      if (container.contains(widgetDiv)) {
        container.removeChild(widgetDiv);
      }
    };
  }, [url, minWidth, height]);

  return <div ref={containerRef} />;
}
