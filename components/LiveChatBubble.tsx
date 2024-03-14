import Image from 'next/image';
import styled from 'styled-components';
import Bubble from '../public/assets/livechat-bubble.png'
import Link from 'next/link';

const StyledImage = styled(Image)`
  width: 82px;
  height: auto;
`
const LiveChatButton = styled(Link)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 9999;
`
export const LiveChatBubble = () =>
(<LiveChatButton href="#" target="_blank" onClick={() => { window.open('https://imoncall.01com.com/pre-sales/', 'pagename', 'resizable,height=600,width=500'); return false; }}>
  <StyledImage src={Bubble.src} alt="click to start chat session" width={50} height={50} />
</LiveChatButton>)
