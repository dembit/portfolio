import React, { useEffect, useRef, useState, useCallback } from "react";

import CrazyCircls from "./CrazyCircls";

type Props = {};

const AnimateCanvas = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationCount = useRef(0);
  const timerCount = useRef<NodeJS.Timeout>();
  const [, makeRender] = useState(false);

  const [crazyCircle, setCrazyCicle] = useState<null | CrazyCircls>(null);

  crazyCircle && crazyCircle.animate();

  const renderFc = useCallback(() => {
    makeRender((prev) => !prev);
    timerCount.current = setTimeout(() => {
      requestAnimationFrame(renderFc);
    }, 1000 / 20);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      setCrazyCicle(new CrazyCircls(250, canvasRef.current.getContext("2d")));
    }
    animationCount.current = requestAnimationFrame(renderFc);
    return () => {
      cancelAnimationFrame(animationCount.current);
      clearTimeout(timerCount.current);
    };
  }, [renderFc]);
  return <canvas ref={canvasRef}></canvas>;
};

export default AnimateCanvas;
