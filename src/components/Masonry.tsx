"use client";

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

import "./Masonry.css";

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
): number => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const updateSize = () => {
      if (ref.current) {
        const w = ref.current.offsetWidth || ref.current.parentElement?.clientWidth || 600;
        setSize((prev) => (prev.width !== w ? { ...prev, width: w } : prev));
      }
    };
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width || (ref.current?.offsetWidth ?? 0) || 600;
      setSize((prev) => ({ ...prev, width: w }));
    });
    ro.observe(ref.current);
    updateSize();
    const t = requestAnimationFrame(updateSize);
    return () => {
      cancelAnimationFrame(t);
      ro.disconnect();
    };
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src.startsWith("/") ? `${window.location.origin}${src}` : src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

export interface MasonryItem {
  id: string;
  img: string;
  url?: string;
  height: number;
  title?: string;
  date?: string;
  location?: string;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  grayscale?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.98,
  blurToFocus = true,
  colorShiftOnHover = false,
  grayscale = true,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;

    if (animateFrom === "random") {
      const directions = ["top", "bottom", "left", "right"];
      direction = directions[
        Math.floor(Math.random() * directions.length)
      ] as typeof animateFrom;
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo<GridItem[]>(() => {
    const effectiveWidth = width || (typeof window !== "undefined" ? Math.min(600, window.innerWidth - 48) : 600);
    if (!effectiveWidth) return [];

    const colHeights = new Array(columns).fill(0);
    const columnWidth = effectiveWidth / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height;

      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: "blur(10px)" }),
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: "blur(0px)" }),
          duration: 0.8,
          ease: "power3.out",
          delay: index * stagger,
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (_e: React.MouseEvent, item: GridItem) => {
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = document.querySelector(
        `[data-key="${item.id}"] .color-overlay`
      ) as HTMLElement;
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3,
        });
      }
    }
  };

  const handleMouseLeave = (_e: React.MouseEvent, item: GridItem) => {
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = document.querySelector(
        `[data-key="${item.id}"] .color-overlay`
      ) as HTMLElement;
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
        });
      }
    }
  };

  const handleClick = (item: GridItem) => {
    if (item.url) {
      window.open(item.url, "_blank", "noopener");
    }
  };

  const containerHeight = useMemo(() => {
    if (grid.length === 0) return 0;
    const maxY = Math.max(...grid.map((g) => g.y + g.h));
    return maxY + 24;
  }, [grid]);

  return (
    <div
      ref={containerRef}
      className="masonry-list"
      style={{ height: Math.max(containerHeight, 400), minHeight: 400 }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className={`masonry-item-wrapper ${!item.url ? "masonry-item-no-link" : ""}`}
          onClick={() => handleClick(item)}
          onMouseEnter={(e) => handleMouseEnter(e, item)}
          onMouseLeave={(e) => handleMouseLeave(e, item)}
          role={item.url ? "link" : undefined}
          tabIndex={item.url ? 0 : undefined}
          onKeyDown={(e) => {
            if (item.url && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              handleClick(item);
            }
          }}
        >
          <div
            className="masonry-item-img"
            style={{
              backgroundImage: `url(${item.img})`,
              filter: grayscale ? "grayscale(100%) contrast(1.1)" : undefined,
            }}
          >
            {colorShiftOnHover && (
              <div
                className="color-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))",
                  opacity: 0,
                  pointerEvents: "none",
                  borderRadius: "10px",
                }}
              />
            )}
            {(item.title || item.date || item.location) && (
              <div className="masonry-item-overlay">
                {item.title && (
                  <h3 className="masonry-item-title">{item.title}</h3>
                )}
                {(item.date || item.location) && (
                  <div className="masonry-item-meta">
                    {item.date && <span>{item.date}</span>}
                    {item.date && item.location && (
                      <span className="masonry-item-meta-dot" />
                    )}
                    {item.location && <span>{item.location}</span>}
                  </div>
                )}
                {item.url && (
                  <span className="masonry-item-link">View post →</span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
