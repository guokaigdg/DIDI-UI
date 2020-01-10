// import React from "react";
// import PrismCode from "./component";
// Prism.highlightAll();
// const code = `
// const foo = 'foo';
// const bar = 'bar';
// console.log(foo + bar);
// `;
// const Example = () => (
//   <PrismCode code={code} language="js" plugins={["line-numbers"]} />
// );
// export default Example;
import React from "react";
import ReactDOM from "react-dom";
import Prism from "prismjs";
const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim();
class Page extends React.Component {
  componentDidMount() {
    // You can call the Prism.js API here
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    setTimeout(() => Prism.highlightAll(), 0);
  }
  render() {
    return (
      <pre className="line-numbers">
        <code className="language-js">{code}</code>
      </pre>
    );
  }
}
export default Page;

// ReactDOM.render(<Page />, document.getElementById("root"));
// // Or call the Prism.js API here
// setTimeout(() => Prism.highlightAll(), 0);
