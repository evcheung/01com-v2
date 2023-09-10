import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { PaginatedNewsletterItems } from '../components/PaginatedNewsletterItems'
import { PressRoomNav } from '../components/PressRoomNav';
import { Box, ButtonColors, PrimaryButton } from '../components/core';

const newsletterItems = [
  {
    year: '2023',
    items: [
      {
        label: 'February',
        link: '/'
      },
      {
        label: 'January',
        link: '/'
      }
    ]
  },
  {
    year: '2022',
    items: [
      {
        label: 'December',
        link: '/'
      },
      {
        label: 'November',
        link: '/'
      },
      {
        label: 'October',
        link: '/'
      },
      {
        label: 'September',
        link: '/'
      },
      {
        label: 'August',
        link: '/'
      },
      {
        label: 'July',
        link: '/'
      },
      {
        label: 'June',
        link: '/'
      },
      {
        label: 'May',
        link: '/'
      },
      {
        label: 'April',
        link: '/'
      },
      {
        label: 'March',
        link: '/'
      },
      {
        label: 'February',
        link: '/'
      },
      {
        label: 'January',
        link: '/'
      }
    ]
  },
  {
    year: '2021',
    items: [
      {
        label: 'December',
        link: '/'
      },
      {
        label: 'October',
        link: '/'
      },
      {
        label: 'September',
        items: [
          {
            label: '#1',
            link: '/'
          }
        ]
      },
      {
        label: 'August',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'July',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'June',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'May',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'April',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'March',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'February',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'January',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
    ]
  },
  {
    year: '2021',
    items: [
      {
        label: 'December',
        link: '/'
      },
      {
        label: 'October',
        link: '/'
      },
      {
        label: 'September',
        items: [
          {
            label: '#1',
            link: '/'
          }
        ]
      },
      {
        label: 'August',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'July',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'June',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'May',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'April',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'March',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'February',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'January',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
    ]
  },
  {
    year: '2021',
    items: [
      {
        label: 'December',
        link: '/'
      },
      {
        label: 'October',
        link: '/'
      },
      {
        label: 'September',
        items: [
          {
            label: '#1',
            link: '/'
          }
        ]
      },
      {
        label: 'August',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'July',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'June',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'May',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'April',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'March',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'February',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'January',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
    ]
  },
  {
    year: '2021',
    items: [
      {
        label: 'December',
        link: '/'
      },
      {
        label: 'October',
        link: '/'
      },
      {
        label: 'September',
        items: [
          {
            label: '#1',
            link: '/'
          }
        ]
      },
      {
        label: 'August',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'July',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'June',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'May',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'April',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'March',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'February',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'January',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
    ]
  },
  {
    year: '2021',
    items: [
      {
        label: 'December',
        link: '/'
      },
      {
        label: 'October',
        link: '/'
      },
      {
        label: 'September',
        items: [
          {
            label: '#1',
            link: '/'
          }
        ]
      },
      {
        label: 'August',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'July',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'June',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'May',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'April',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'March',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'February',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'January',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
    ]
  },
  {
    year: '2021',
    items: [
      {
        label: 'December',
        link: '/'
      },
      {
        label: 'October',
        link: '/'
      },
      {
        label: 'September',
        items: [
          {
            label: '#1',
            link: '/'
          }
        ]
      },
      {
        label: 'August',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'July',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'June',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'May',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'April',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'March',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'February',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
      {
        label: 'January',
        items: [
          {
            label: '#3',
            link: '/'
          },
          {
            label: '#2',
            link: '/'
          },
          {
            label: '#1',
            link: '/'
          },
        ]
      },
    ]
  },
];

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
      <Box margin="48px 0 12px 0">
        <PrimaryButton btnColor={ButtonColors.Blue}>Read the latest issue</PrimaryButton>
      </Box>
      <PaginatedNewsletterItems itemsPerPage={6} items={newsletterItems} />
    </Layout>
  )
}
