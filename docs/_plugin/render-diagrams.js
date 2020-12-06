MathJax.Hub.Config({
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
    processEscapes: true
  },
  "HTML-CSS": { availableFonts: ["TeX"] }
});

mermaid.initialize({ startOnLoad: true });

function renderFlowcharts() {
  const charts = document.querySelectorAll("code[class=lang-flow]");
  charts.forEach((chart, index) => {
    const diagram = flowchart.parse(chart.textContent);
    const canvas = document.createElement("div");
    canvas.id = `flowchart-${index}`;
    canvas.className = "flowchart";
    const container = chart.parentNode;
    container.parentNode.replaceChild(canvas, container);
    diagram.drawSVG(canvas.id);
  });
}