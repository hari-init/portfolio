import { useEffect, useRef, useState } from "react";
import { p5i } from "p5i";

const SCALE = 200;
const LENGTH = 10;
const SPACING = 15;

const Dots = (): JSX.Element => {
  const canvasRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [offsetY, setOffsetY] = useState(window.scrollY);

  const existingPoints = useRef(new Set()).current;
  const points = useRef<any[]>([]).current;

  const {
    mount,
    unmount,
    createCanvas,
    background,
    noFill,
    stroke,
    noise,
    noiseSeed,
    resizeCanvas,
    cos,
    sin,
    TWO_PI,
  } = p5i();

  const getForceOnPoint = (x: number, y: number, z: number) => {
    return (noise(x / SCALE, y / SCALE, z) - 0.5) * 2 * TWO_PI;
  };

  const addPoints = () => {
    for (let x = -SPACING / 2; x < windowSize.width + SPACING; x += SPACING) {
      for (
        let y = -SPACING / 2;
        y < windowSize.height + offsetY + SPACING;
        y += SPACING
      ) {
        const id = `${x}-${y}`;
        if (existingPoints.has(id)) continue;
        existingPoints.add(id);
        points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 });
      }
    }
  };

  const setup = () => {
    createCanvas(windowSize.width, windowSize.height);
    background("#ffffff");
    stroke("#ccc");
    noFill();
    noiseSeed(Date.now());
    addPoints();
  };

  const draw = ({ circle }: any) => {
    background("#ffffff");
    const t = Date.now() / 10000;

    points.forEach(({ x, y, opacity }) => {
      const rad = getForceOnPoint(x, y, t);
      const length = (noise(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH;
      const nx = x + cos(rad) * length;
      const ny = y + sin(rad) * length;
      stroke(200, 200, 200, (Math.abs(cos(rad)) * 0.8 + 0.2) * opacity * 255);
      circle(nx, ny - offsetY, 1);
    });
  };

  const restart = () => {
    if (canvasRef.current) mount(canvasRef.current, { setup, draw });
  };

  useEffect(() => {
    restart();

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      resizeCanvas(window.innerWidth, window.innerHeight);
      addPoints();
    };

    const handleScroll = () => {
      setOffsetY(window.scrollY);
      // Uncomment to dynamically add points during scroll:
      // addPoints()
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      unmount();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: -1,
        filter: "invert(0%)",
      }}
    />
  );
};

export default Dots;
