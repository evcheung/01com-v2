import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, PrimaryButton, SecondaryButton, ButtonTextColors, ButtonSizes } from "../../components/core"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import { Anchor } from "../../components/core/anchor"
import Link from "next/link"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { breakpoints } from "../../utils/breakpoints"


export default function Pricing() {
	return (
		<IITLayout>
			<Head>
				<title>Remote Desktop Connection & Control Software | 01com.com</title>
				<meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<IITPageBanner heading="General Support">
				<Text variant={TextVariants.Body1} textColor={TextColors.White}>Contact our knowledgeable staff anytime for immediate assistance. Whether you need technical support while operating one of our programs or have questions regarding pricing or features of our remote access and remote control software, we are available at your convenience.</Text>
				<Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
					<Link href='/imintouch-remote-pc-desktop/users-guide/'>
						<PrimaryButton textColor={ButtonTextColors.Blue}>
							User's Guide
						</PrimaryButton>
					</Link>
					<Link href='/imintouch-remote-pc-desktop/faqs/'>
						<SecondaryButton> FAQ</SecondaryButton>
					</Link>
				</Box>
			</IITPageBanner>
			<PageContentContainer>


			</PageContentContainer>
		</IITLayout>
	)
}
