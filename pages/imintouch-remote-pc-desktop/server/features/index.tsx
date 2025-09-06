import Head from "next/head";
import styled from "styled-components";
import {
  Box,
  Text,
  TextColors,
  TextVariants
} from "../../../../components/core";
import { breakpoints } from "../../../../utils/breakpoints";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../../components/im-in-touch/IITLayout";
import { theme } from "../../../../theme";
import Image from "next/image";
import Link from "next/link";
import {
  FullPageContentContainer,
  PageContentContainer
} from "../../../../components/PageContentContainer";
import { FeatureCard } from "../../../../components/im-in-touch/IITFeatureCard";
import Settings from "../../../../public/assets/settings.png";
import List from "../../../../public/assets/list.png";
import LinkArrow from "../../../../public/assets/link-arrow.png";
import { useWindowSize } from "usehooks-ts";

const FeaturesGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  ${breakpoints("grid-template-columns", "", [{ 680: "1fr" }])}
`;

const FeatureRowItemContainer = styled(Box)<{
  index: number;
  borderSecondItem?: boolean;
}>`
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.neutral.md};
  border-top: ${props =>
    props.index === 0 || (props.index === 1 && props.borderSecondItem)
      ? `1px solid ${theme.colors.neutral.md}`
      : "none"};
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoints("padding", "", [{ 760: "12px 0" }])}
  p {
    line-height: 28px;
    font-size: 18px;

    ${breakpoints("line-height", "", [{ 760: "22px" }])}
  }

  ${breakpoints("font-size", "", [{ 1350: "18px" }])}
`;

const FeatureRowItem = ({
  index,
  pageRoute,
  description,
  borderSecondItem
}: {
  index: number;
  pageRoute?: string;
  description: string;
  borderSecondItem?: boolean;
}) => {
  return (
    <FeatureRowItemContainer index={index} borderSecondItem={borderSecondItem}>
      {pageRoute ? (
        <Link href={pageRoute}>
          <Box
            flexDirection="row"
            flexAlignment="center"
            flexJustify="space-between"
          >
            <Text>{description}</Text>
            <Box margin="0 0 0 48px">
              <Image src={LinkArrow.src} alt="" width={32} height={24} />
            </Box>
          </Box>
        </Link>
      ) : (
        <Text>{description}</Text>
      )}
    </FeatureRowItemContainer>
  );
};

const ADMINISTRATION_FEATURES = [
  {
    description:
      "Add/Remove/Edit user accounts of your I'm InTouch remote access system",
    pageRoute:
      "/imintouch-remote-pc-desktop/server/features/add-remove-accounts"
  },
  {
    description:
      "Manage Access Rights of user accounts including time-of-accessibility",
    pageRoute: "/imintouch-remote-pc-desktop/server/features/access-rights"
  },
  {
    description: "Create Template for easy bulk management of user accounts",
    pageRoute: "/imintouch-remote-pc-desktop/server/features/access-rights"
  },
  {
    description: "Monitor Usage Statistics of user accounts",
    pageRoute: "/imintouch-remote-pc-desktop/server/features/statistics"
  }
];

const GENERAL_FEATURES = [
  {
    description:
      "Controlling desktop computer as if you were sitting in front of it"
  },
  {
    description: "Wireless notification of new emails"
  },
  {
    description: "Remote printing"
  },
  {
    description: "Online calendar"
  },
  {
    description: "Remote audio"
  },
  {
    description: "Remote contact management"
  },
  {
    description: "File transfer"
  },
  {
    description: "Live streaming of webcam"
  },
  {
    description: "Multi-Monitor support"
  },
  {
    description:
      "Auto-Login/Physical Authentication via the I'm InTouch SecureKEY (optional device)"
  },
  {
    description: "Email access"
  },
  {
    description: "Guest invitation"
  }
];

const GENERAL_FEATURES_MOBILE = [
  {
    description:
      "Controlling desktop computer as if you were sitting in front of it"
  },
  {
    description: "Remote printing"
  },
  {
    description: "Remote audio"
  },
  {
    description: "File transfer"
  },
  {
    description: "Multi-Monitor support"
  },
  {
    description: "Email access"
  },
  {
    description: "Wireless notification of new emails"
  },
  {
    description: "Online calendar"
  },
  {
    description: "Remote contact management"
  },
  {
    description: "Live streaming of webcam"
  },
  {
    description:
      "Auto-Login/Physical Authentication via the I'm InTouch SecureKEY (optional device)"
  },
  {
    description: "Guest invitation"
  }
];

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export default function ServerFeaturesHome() {
  const { width } = useWindowSize();
  return (
    <IITLayout subSite="server">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Features">
        <Text textColor={TextColors.White}>
          Fundamentally the remote access features of the I'm InTouch Server
          Edition is identical to the I'm InTouch subscription service. The only
          difference is that you are hosting your own I'm InTouch service for
          your employees. In other words, your employees are remotely accessing
          their office computers via your own I'm InTouch servers located at
          your own office or data center instead of the servers hosted by 01
          Quantum.
        </Text>
      </IITPageBanner>
      <FullPageContentContainer>
        <FeaturesGrid>
          <FeatureCard
            title="Administration Features"
            imgSrc={Settings.src}
            columns={1}
          >
            {ADMINISTRATION_FEATURES.map((feature, index) => (
              <FeatureRowItem
                index={index}
                key={feature.pageRoute}
                description={feature.description}
                pageRoute={feature.pageRoute}
              />
            ))}
          </FeatureCard>
          <FeatureCard
            title="General Features"
            imgSrc={List.src}
            columns={2}
            subText={
              <Text
                style={{
                  marginBottom: "24px",
                  fontSize: "18px",
                  lineHeight: "24px"
                }}
              >
                Click to{" "}
                <StyledLink
                  href="/imintouch-remote-pc-desktop/features/"
                  target="_blank"
                >
                  Learn More
                </StyledLink>{" "}
                from www.imintouch.com
              </Text>
            }
          >
            {width > 1200
              ? GENERAL_FEATURES.map((feature, index) => (
                  <FeatureRowItem
                    index={index}
                    borderSecondItem={true}
                    key={feature.description}
                    description={feature.description}
                  />
                ))
              : GENERAL_FEATURES_MOBILE.map((feature, index) => (
                  <FeatureRowItem
                    index={index}
                    borderSecondItem={false}
                    key={feature.description}
                    description={feature.description}
                  />
                ))}
          </FeatureCard>
        </FeaturesGrid>
      </FullPageContentContainer>
    </IITLayout>
  );
}
