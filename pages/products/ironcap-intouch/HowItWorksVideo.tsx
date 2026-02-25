"use client";

import { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import styled from "styled-components";

import playbutton from "../../../public/assets/play.png";

const VideoSection = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
`;

const VideoCard = styled.div`
  width: min(888px, calc(100vw - 64px));
  height: min(500px, 56vw);
  max-height: 500px;

  border-radius: 18px;
  overflow: hidden;

  display: grid;
  place-items: center;

  background: center / cover no-repeat
    url("https://i.ytimg.com/vi_webp/tzMxRHmP0s4/0.webp");

  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    pointer-events: none;
  }
`;

const PlayButton = styled.button`
  position: relative;
  z-index: 1;

  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  display: grid;
  place-items: center;
`;

export default function HowItWorksVideo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <VideoSection>
      <VideoCard>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="tzMxRHmP0s4"
          onClose={() => setOpen(false)}
        />

        <PlayButton onClick={() => setOpen(true)} aria-label="Play video">
          <Image src={playbutton} alt="Play" />
        </PlayButton>
      </VideoCard>
    </VideoSection>
  );
}
