"use client";

import { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";

const HERO_SCENE_URL =
  "https://prod.spline.design/2fFMhw34bG44HsUz/scene.splinecode";

function dispatchSplinePointerEvent(
  target: EventTarget,
  type: "pointerenter" | "pointermove",
  canvas: HTMLCanvasElement,
) {
  const rect = canvas.getBoundingClientRect();

  if (rect.width === 0 || rect.height === 0) {
    return;
  }

  const time = performance.now() / 1000;
  const clientX = rect.left + rect.width * (0.5 + Math.cos(time * 0.42) * 0.18);
  const clientY = rect.top + rect.height * (0.5 + Math.sin(time * 0.36) * 0.14);

  target.dispatchEvent(
    new PointerEvent(type, {
      bubbles: true,
      cancelable: true,
      clientX,
      clientY,
      pointerId: 1,
      pointerType: "mouse",
    }),
  );
}

export const HeroSpline = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    let disposed = false;
    let syntheticPointerActive = false;
    let pointerAnimationFrame = 0;
    const app = new Application(canvas, { renderMode: "continuous" });
    appRef.current = app;

    const resumeScene = () => {
      const currentApp = appRef.current;

      if (!currentApp) {
        return;
      }

      currentApp.play();
      currentApp.requestRender();
    };

    const animateSyntheticPointer = () => {
      if (document.visibilityState === "visible" && !document.hasFocus()) {
        if (!syntheticPointerActive) {
          syntheticPointerActive = true;
          dispatchSplinePointerEvent(window, "pointerenter", canvas);
          dispatchSplinePointerEvent(canvas, "pointerenter", canvas);
        }

        dispatchSplinePointerEvent(window, "pointermove", canvas);
        dispatchSplinePointerEvent(canvas, "pointermove", canvas);
        resumeScene();
      } else {
        syntheticPointerActive = false;
      }

      pointerAnimationFrame = window.requestAnimationFrame(animateSyntheticPointer);
    };

    app
      .load(HERO_SCENE_URL)
      .then(() => {
        if (!disposed) {
          app.setGlobalEvents(true);
          resumeScene();
        }
      })
      .catch((error) => {
        if (!disposed) {
          console.error("Failed to load homepage Spline scene", error);
        }
      });

    document.addEventListener("visibilitychange", resumeScene);
    window.addEventListener("focus", resumeScene);
    window.addEventListener("pageshow", resumeScene);
    pointerAnimationFrame = window.requestAnimationFrame(animateSyntheticPointer);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(pointerAnimationFrame);
      document.removeEventListener("visibilitychange", resumeScene);
      window.removeEventListener("focus", resumeScene);
      window.removeEventListener("pageshow", resumeScene);
      app.dispose();
      appRef.current = null;
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};
