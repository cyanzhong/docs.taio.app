function renderMathJax() {
  if (typeof MathJax !== 'undefined') {
    MathJax.Hub.Config({
      extensions: ['tex2jax.js'],
      jax: ['input/TeX', 'output/HTML-CSS'],
      tex2jax: {
        inlineMath: [
          ['$', '$'],
          ['\\(', '\\)']
        ],
        displayMath: [
          ['$$', '$$'],
          ['\\[', '\\]']
        ],
        processEscapes: true
      },
      'HTML-CSS': {availableFonts: ['TeX']}
    });
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }
}

function renderDiagrams() {
  if (typeof Diagram !== 'undefined') {
    const sequences = document.querySelectorAll('code[class=lang-sequence]');
    sequences.forEach((sequence, index) => {
      const diagram = Diagram.parse(sequence.textContent);
      const canvas = document.createElement('div');
      canvas.id = `diagram-${index}`;
      canvas.className = 'sequence';
      const container = sequence.parentNode;
      container.parentNode.replaceChild(canvas, container);
      diagram.drawSVG(canvas.id, {theme: 'simple'});
    });
  }

  if (typeof flowchart !== 'undefined') {
    const charts = document.querySelectorAll('code[class=lang-flow]');
    charts.forEach((chart, index) => {
      const diagram = flowchart.parse(chart.textContent);
      const canvas = document.createElement('div');
      canvas.id = `flowchart-${index}`;
      canvas.className = 'flowchart';
      const container = chart.parentNode;
      container.parentNode.replaceChild(canvas, container);
      diagram.drawSVG(canvas.id);
    });
  }

  if (typeof mermaid !== 'undefined') {
    mermaid.mermaidAPI.initialize({
      startOnLoad: false
    });

    const charts = document.querySelectorAll('code[class=lang-mermaid]');
    charts.forEach((chart, index) => {
      const canvas = document.createElement('div');
      canvas.id = `mermaid-${index}`;
      canvas.className = 'mermaid';
      const container = chart.parentNode;
      container.parentNode.replaceChild(canvas, container);
      mermaid.mermaidAPI.render(canvas.className, chart.textContent, svg => {
        canvas.innerHTML = svg;
      });
    });
  }
}