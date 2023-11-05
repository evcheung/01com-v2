import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { PaginatedNewsletterItems } from '../components/PaginatedNewsletterItems'
import { PressRoomNav } from '../components/PressRoomNav';
import { Box, ButtonColors, PrimaryButton } from '../components/core';
import styled from 'styled-components';
import { breakpoints } from '../utils/breakpoints';
import { Anchor } from '../components/core/anchor';

/*
// *[_type == "newsletter"]{
//   _id, title,
//   newsletter[date].year(): [
      {
        month: January
        articles: [
          '/',
          '/',
          '/',
        ]
      },
      {
        month: February
        articles: [
          '/',
          '/',
          '/',
        ]
      },
// ]
// }
*/
const newsletterItems = [
  {
    year: '2023',
    items: [
      {
        label: 'October',
        link: 'https://www.01com.com/newsletter/oct23/letter01.html'
      },
      {
        label: 'July',
        link: 'https://www.01com.com/newsletter/jul23/letter01.html'
      },
      {
        label: 'June',
        link: 'https://www.01com.com/newsletter/jun23/letter01.html'
      },
      {
        label: 'May',
        link: 'https://www.01com.com/newsletter/may23/letter01.html'
      },
      {
        label: 'April',
        link: 'https://www.01com.com/newsletter/apr23/letter01.html'
      },
      {
        label: 'March',
        link: 'https://www.01com.com/newsletter/mar23/letter01.html'
      },
      {
        label: 'February',
        link: 'https://www.01com.com/newsletter/feb23/letter01.html'
      },
      {
        label: 'January',
        link: 'https://www.01com.com/newsletter/jan23/letter01.html'
      },
    ]
  },
  {
    year: '2022',
    items: [
      {
        label: 'December',
        link: 'https://www.01com.com/newsletter/dec22/letter01.html'
      },
      {
        label: 'November',
        link: 'https://www.01com.com/newsletter/nov22/letter01.html'
      },
      {
        label: 'October',
        link: 'https://www.01com.com/newsletter/oct22/letter01.html'
      },
      {
        label: 'September',
        link: 'https://www.01com.com/newsletter/sep22/letter01.html'
      },
      {
        label: 'August',
        link: 'https://www.01com.com/newsletter/aug22/letter01.html'
      },
      {
        label: 'July',
        link: 'https://www.01com.com/newsletter/jul22/letter01.html'
      },
      {
        label: 'June',
        link: 'https://www.01com.com/newsletter/jun22/letter01.html'
      },
      {
        label: 'May',
        link: 'https://www.01com.com/newsletter/may22/letter01.html'
      },
      {
        label: 'April',
        link: 'https://www.01com.com/newsletter/apr22/letter01.html'
      },
      {
        label: 'March',
        link: 'https://www.01com.com/newsletter/mar22/letter01.html'
      },
      {
        label: 'February',
        link: 'https://www.01com.com/newsletter/feb22/letter01.html'
      },
      {
        label: 'January',
        link: 'https://www.01com.com/newsletter/jan22/letter01.html'
      }
    ]
  },
  {
    year: '2021',
    items: [
      {
        label: 'December',
        link: 'https://www.01com.com/newsletter/dec21/letter01.html'
      },
      {
        label: 'October',
        link: 'https://www.01com.com/newsletter/oct21/letter01.html'
      },
      {
        label: 'September',
        items: [
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/sep21/letter01.html'
          }
        ]
      },
      {
        label: 'August',
        items: [
          {
            label: '#3',
            link: 'https://www.01com.com/newsletter/aug21/letter03.html'
          },
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/aug21/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/aug21/letter01.html'
          },
        ]
      },
      {
        label: 'July',
        items: [
          {
            label: '#3',
            link: 'https://www.01com.com/newsletter/jul21/letter03.html'
          },
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/jul21/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/jul21/letter01.html'
          },
        ]
      },
      {
        label: 'June',
        items: [
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/jun21/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/jun21/letter01.html'
          },
        ]
      },
      {
        label: 'May',
        items: [
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/may21/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/may21/letter01.html'
          },
        ]
      },
      {
        label: 'April',
        items: [
          {
            label: '#3',
            link: 'https://www.01com.com/newsletter/apr21/letter03.html'
          },
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/apr21/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/apr21/letter01.html'
          },
        ]
      },
      {
        label: 'March',
        items: [
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/mar21/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/mar21/letter01.html'
          },
        ]
      },
      {
        label: 'February',
        items: [
          {
            label: '#4',
            link: 'https://www.01com.com/newsletter/feb21/letter04.html'
          },
          {
            label: '#3',
            link: 'https://www.01com.com/newsletter/feb21/letter03.html'
          },
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/feb21/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/feb21/letter01.html'
          },
        ]
      },
      {
        label: 'January',
        items: [
          {
            label: '#4',
            link: 'https://www.01com.com/newsletter/jan21/letter04.html'
          },
          {
            label: '#3',
            link: 'https://www.01com.com/newsletter/jan21/letter03.html'
          },
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/jan21/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/jan21/letter01.html'
          },
        ]
      },
    ]
  },
  {
    year: '2020',
    items: [
      {
        label: 'December',
        items: [
          {
            label: '#5',
            link: 'https://www.01com.com/newsletter/dec20/letter05.html'
          },
          {
            label: '#4',
            link: 'https://www.01com.com/newsletter/dec20/letter04.html'
          },
          {
            label: '#3',
            link: 'https://www.01com.com/newsletter/dec20/letter03.html'
          },
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/dec20/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/dec20/letter01.html'
          },
        ]
      },
      {
        label: 'November',
        items: [
          {
            label: '#4',
            link: 'https://www.01com.com/newsletter/nov20/letter04.html'
          },
          {
            label: '#3',
            link: 'https://www.01com.com/newsletter/nov20/letter03.html'
          },
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/nov20/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/nov20/letter01.html'
          },
        ]
      },
      {
        label: 'October',
        items: [
          {
            label: '#3',
            link: 'https://www.01com.com/newsletter/oct20/letter03.html'
          },
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/oct20/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/oct20/letter01.html'
          },
        ]
      },
      {
        label: 'September',
        items: [
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/sep20/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/sep20/letter01.html'
          },
        ]
      },
      {
        label: 'August',
        items: [
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/aug20/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/aug20/letter01.html'
          },
        ]
      },
      {
        label: 'July',
        items: [
          {
            label: '#4',
            link: 'https://www.01com.com/newsletter/jul20/letter04.html'
          },
          {
            label: '#3',
            link: 'https://www.01com.com/newsletter/jul20/letter03.html'
          },
          {
            label: '#2',
            link: 'https://www.01com.com/newsletter/jul20/letter02.html'
          },
          {
            label: '#1',
            link: 'https://www.01com.com/newsletter/jul20/letter01.html'
          },
        ]
      },
    ]
  },
];

const ButtonContainer = styled(Box)`
margin: 48px 0 12px 0;

${breakpoints("margin", "", [
  { 760: '0' },
])}
${breakpoints("width", "", [
  { 760: '100%' },
])}

button {
  ${breakpoints("width", "", [
  { 760: '100%' },
])}
  }
`

// TODO: update all meta tags
export default function Newsletters() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Press Room">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PressRoomNav activePage='newsletters' />
      <ButtonContainer>
        <PrimaryButton btnColor={ButtonColors.Blue}>
          <Anchor href="https://www.01com.com/newsletter/Latest/letter01.html" target="_blank" style={{ color: 'white' }}>
            Read the latest issue</Anchor></PrimaryButton>
      </ButtonContainer>
      <PaginatedNewsletterItems itemsPerPage={6} items={newsletterItems} />
    </Layout>
  )
}
