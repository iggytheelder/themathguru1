import React, { useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';
import { renderToString } from 'react-dom/server';
import { InlineMath, BlockMath, AlignedMath } from 'react-katex';

const LatexRenderer = ({ latex, inline, align }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      if (inline) {
        renderInlineMath();
      } else if (align) {
        renderAlignedMath();
      } else {
        renderBlockMath();
      }
    }
  }, [latex, inline]);

  const renderInlineMath = () => {
    const latexString = renderToString(<InlineMath>{latex}</InlineMath>);
    containerRef.current.innerHTML = `<span>${latexString}</span>`;
  };

  const latexStyle = {
    fontSize: '24px', // Adjust the value to increase or decrease the text size
  };

  const renderBlockMath = () => {
    const latexString = renderToString(<BlockMath>{latex}</BlockMath>);
    containerRef.current.innerHTML = latexString;
  };

  const renderAlignedMath = () => {
    const latexString = renderToString(<BlockMath>{latex}</BlockMath>);
    containerRef.current.innerHTML = latexString;
  }

  return <span ref={containerRef} />;
};

export default LatexRenderer;
