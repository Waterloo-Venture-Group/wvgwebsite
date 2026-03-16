"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import "./BounceCards.css";

export interface AssociateItem {
  name: string;
  image: string;
  linkedin: string;
}

interface BounceCardsProps {
  className?: string;
  items: AssociateItem[];
  cardSize?: number;
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  enableHover?: boolean;
  overlapPx?: number;
  rows?: number;
}

/** Generate horizontal stacked transforms for N cards. Slight alternating tilt left/right. */
function getTransformStyles(count: number, overlapPx = 42): string[] {
  const styles: string[] = [];
  const half = (count - 1) / 2;
  const tiltDeg = 1.5; // very subtle tilt per card

  for (let i = 0; i < count; i++) {
    const offsetFromCenter = i - half;
    const x = offsetFromCenter * overlapPx;
    const rotate = (i % 2 === 0 ? 1 : -1) * tiltDeg; // alternate left/right
    styles.push(`rotate(${rotate}deg) translate(${x}px)`);
  }
  return styles;
}

function BounceCardsRow({
  items,
  transformStyles,
  animationDelay,
  animationStagger,
  easeType,
  enableHover,
  cardSize,
  containerWidth,
  containerHeight,
}: {
  items: AssociateItem[];
  transformStyles: string[];
  animationDelay: number;
  animationStagger: number;
  easeType: string;
  enableHover: boolean;
  cardSize: number;
  containerWidth: number;
  containerHeight: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform: string, offsetX: number): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === "none"
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    items.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] ?? "none";

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -80 : 80;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    items.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);
      const baseTransform = transformStyles[i] ?? "none";
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      className="bounceCardsContainer"
      ref={containerRef}
      style={{
        position: "relative",
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`card card-${idx}`}
          style={{
            transform: transformStyles[idx] ?? "none",
            width: cardSize,
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <div className="relative w-full h-full">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="card-image object-cover"
              sizes={`${cardSize}px`}
            />
          </div>
          <div className="card-overlay">
            <div className="card-content">
              <div className="card-name">{item.name}</div>
              <a
                href={item.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                onClick={(e) => e.stopPropagation()}
              >
                <span>LinkedIn</span>
                <svg
                  className="w-2.5 h-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BounceCards({
  className = "",
  items,
  cardSize = 220,
  containerWidth,
  containerHeight,
  animationDelay = 0.3,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.5)",
  enableHover = true,
  overlapPx = 58,
  rows = 2,
}: BounceCardsProps) {
  const itemsPerRow = Math.ceil(items.length / rows);
  const rowItems: AssociateItem[][] = [];
  for (let i = 0; i < items.length; i += itemsPerRow) {
    rowItems.push(items.slice(i, i + itemsPerRow));
  }

  const rowHeight = cardSize + 24;
  const effectiveContainerWidth =
    containerWidth ?? Math.max(700, itemsPerRow * overlapPx + cardSize);
  const effectiveContainerHeight =
    containerHeight ?? rowHeight * rows + 24;

  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      {rowItems.map((rowAssociates, rowIdx) => (
        <div key={rowIdx} className="flex justify-center">
          <BounceCardsRow
            items={rowAssociates}
            transformStyles={getTransformStyles(rowAssociates.length, overlapPx)}
            animationDelay={animationDelay + rowIdx * 0.12}
            animationStagger={animationStagger}
            easeType={easeType}
            enableHover={enableHover}
            cardSize={cardSize}
            containerWidth={effectiveContainerWidth}
            containerHeight={rowHeight}
          />
        </div>
      ))}
    </div>
  );
}
