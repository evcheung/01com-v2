"use client";

import { useEffect, useRef, useState } from "react";

interface Item {
  name: string;
  desc: string;
  icon: string;
}

interface IronCapSectionProps {
  products: Item[];
  services: Item[];
}

function AnimatedList({
  items,
  nameColor,
  visible,
  columnOffset = 0,
}: {
  items: Item[];
  nameColor: string;
  visible: boolean;
  columnOffset?: number;
}) {
  return (
    <ul className="space-y-6">
      {items.map(({ name, desc, icon }, index) => {
        const itemDelay = (columnOffset + index) * 0.1;
        const iconDelay = itemDelay + 0.5;
        return (
          <li
            key={name}
            style={{
              transformOrigin: "bottom left",
              opacity: visible ? 1 : 0,
              animation: visible
                ? `item-expand 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${itemDelay}s both`
                : "none",
            }}
          >
            <div className="flex gap-2 items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={icon}
                aria-hidden="true"
                className="w-6 h-6 object-contain flex-shrink-0"
                style={{
                  opacity: visible ? 1 : 0,
                  animation: visible
                    ? `icon-fade-in 0.4s ease-out ${iconDelay}s both`
                    : "none",
                }}
              />
              <div>
                <p
                  className="text-[18px] font-semibold uppercase leading-none mb-2"
                  style={{ color: nameColor }}
                >
                  {name}
                </p>
                <p className="text-white text-[16px] font-normal leading-none mb-1">
                  {desc}
                </p>
                <p className="text-[#6e8090] text-[12px] font-medium uppercase">
                  More · · ·
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function IronCapSection({ products, services }: IronCapSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-[1512px] mx-auto px-6 md:px-[95px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
    >
      {/* Products */}
      <div className="border border-white/20 rounded-[2vw] p-6 md:p-10">
        <div className="flex items-center gap-3 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/home_assets/products_icon.svg"
            aria-hidden="true"
            className="w-15 h-15 object-contain"
          />
          <h3 className="text-white text-[22px] md:text-[30px] font-medium leading-none">
            IronCAP<sup className="text-[10px] align-super">™</sup> Products
          </h3>
        </div>
        <p className="text-white/70 text-[15px] md:text-[18px] font-normal leading-[22px] md:leading-[24px] mb-8">
          From end-to-end quantum-safe email and file encryption to secure
          remote access, blockchain transactions, and digital signatures,
          IronCAP secures your data in a post-quantum world.
        </p>
        <AnimatedList
          items={products}
          nameColor="#79c99c"
          visible={visible}
          columnOffset={0}
        />
      </div>

      {/* Services */}
      <div className="border border-white/20 rounded-[2vw] p-6 md:p-10">
        <div className="flex items-center gap-3 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/home_assets/products_icon.svg"
            aria-hidden="true"
            className="w-15 h-15 object-contain"
          />
          <h3 className="text-white text-[22px] md:text-[30px] font-medium leading-none">
            IronCAP<sup className="text-[10px] align-super">™</sup> Services
          </h3>
        </div>
        <p className="text-white/70 text-[15px] md:text-[18px] font-normal leading-[22px] md:leading-[24px] mb-8">
          Professional and managed services securing AI and digital assets via
          open source cryptography integration and hardware acceleration.
        </p>
        <AnimatedList
          items={services}
          nameColor="#71bfff"
          visible={visible}
          columnOffset={products.length}
        />
      </div>
    </div>
  );
}
