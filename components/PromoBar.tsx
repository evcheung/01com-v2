import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";
import greenVector from "../public/assets/green-vector.png";
import { breakpoints } from "../utils/breakpoints";

const BAR_H = 139;

type BannerButton = {
  label: string;
  href: string; // you'll fill in later
  img: StaticImageData | string;
  width: number;
  height: number;
};

type GreenBannerProps = {
  text?: string;
  buttons?: BannerButton[];
  className?: string;
};

const PromoBar = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  height: ${BAR_H}px;
  overflow: hidden;

  @media (max-width: 760px) {
    height: auto;
    min-height: ${BAR_H}px;
    padding: 14px 0 18px;
    overflow: hidden;
  }
`;

const Bg = styled(Image)`
  position: absolute !important;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  user-select: none;
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  width: min(1400px, 92vw);
  margin: 0 auto;

  display: flex;
  align-items: center;

  @media (max-width: 760px) {
    height: auto;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;
  padding: 0 18px;

  @media (max-width: 900px) {
    padding: 0 12px;
    gap: 16px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 12px;
    padding: 0 10px;
  }
`;

const LeftText = styled.h3`
  margin: 0;
  white-space: nowrap;

  color: #5b70ab;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 600;
  font-size: clamp(20px, 2.1vw, 34px);
  letter-spacing: 0.01em;

  @media (max-width: 900px) {
    white-space: normal;
    line-height: 1.15;
  }

  @media (max-width: 760px) {
    white-space: normal;
    max-width: 22ch;
    line-height: 1.15;
    font-size: 20px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;

  @media (max-width: 900px) {
    gap: 12px;
  }

  @media (max-width: 760px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
  }
`;

const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 10px;

  transform: translateY(0);
  transition:
    transform 180ms ease,
    filter 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.06) saturate(1.08);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.75);
    outline-offset: 3px;
  }
`;

const BtnImgWrap = styled.span<{ $w: number; $h: number }>`
  position: relative;
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  display: inline-block;
  transform-origin: center;

  ${breakpoints("transform", "", [{ 900: "scale(0.94)" }])}

  @media (max-width: 760px) {
    transform: scale(0.82);
  }

  @media (max-width: 420px) {
    transform: scale(0.74);
  }
`;

const CenterOnlyText = styled.h3`
  width: 100%;
  margin: 0;
  text-align: center;

  color: #0a0f18;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 600;
  font-size: clamp(18px, 1.8vw, 26px);
  letter-spacing: 0.01em;
`;

export function GreenBanner({ text, buttons, className }: GreenBannerProps) {
  const hasButtons = !!buttons?.length;

  return (
    <PromoBar className={className}>
      <Bg src={greenVector} alt="" aria-hidden="true" priority />
      <Inner>
        {hasButtons ? (
          <Row>
            <LeftText>{text}</LeftText>

            <ButtonsRow>
              {buttons!.map((b) => (
                <ButtonLink key={b.label} href={b.href}>
                  <BtnImgWrap $w={b.width} $h={b.height}>
                    <Image
                      src={b.img}
                      alt={b.label}
                      fill
                      sizes={`${b.width}px`}
                      style={{ objectFit: "contain" }}
                    />
                  </BtnImgWrap>
                </ButtonLink>
              ))}
            </ButtonsRow>
          </Row>
        ) : (
          <CenterOnlyText>{text}</CenterOnlyText>
        )}
      </Inner>
    </PromoBar>
  );
}
