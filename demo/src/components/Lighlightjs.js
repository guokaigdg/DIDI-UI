import React from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

function CircularIndeterminate() {
  return (
    <div>
      <pre>
        <code class="css">
          //hello // 这里是需要高亮的代码 import React, {Component} from 'react'
          class ErrorBoundary extends
        </code>
      </pre>
    </div>
  );
}
export default CircularIndeterminate;
