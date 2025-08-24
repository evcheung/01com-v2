This is a Next.js-powered corporate website for 01 Quantum, a technology pioneer in Post-Quantum Cybersecurity and Remote Access Software.

## 🚀 Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Styled Components with theme system
- **CMS**: Sanity Studio for content management
- **UI Components**: React Bootstrap, custom component library
- **Build Tools**: SWC compiler for optimized builds
- **Deployment**: Vercel-ready with static generation

## 📦 Dependencies

### Core Dependencies

- `next` (14.1.3) - React framework
- `react` (18.2.0) - UI library
- `typescript` (4.7.4) - Type safety
- `styled-components` (5.2) - CSS-in-JS styling

### CMS & Content

- `sanity` (3.16.7) - Headless CMS
- `next-sanity` (5.5.4) - Sanity integration
- `@portabletext/react` (3.0.11) - Rich text rendering

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. Install dependencies:

```bash
yarn install
```

2. Start the development server:

```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser!

4. Go to [http://localhost:3000/studio](http://localhost:3000/studio) for the local version of Sanity Studio.

## 📁 Project Structure

```
01com-v2/
├── components/          # Reusable UI components
│   ├── core/            # Core design system components
│   ├── im-in-touch/     # Product-specific components
│   └── Layout.tsx       # Main layout wrapper
├── pages/               # Next.js pages and routing
│   ├── imintouch-remote-pc-desktop/  # Product pages
│   ├── studio/          # Sanity Studio
│   └── _app.tsx         # Application wrapper
├── public/              # Static assets
│   └── assets/          # Images, icons, logos
├── sanity/              # Sanity CMS configuration
│   ├── schemas/         # Content schemas
│   └── lib/            # Sanity utilities
├── utils/               # Utility functions
└── theme.ts            # Design system theme
```

## 🎨 Design System

The application uses a design system with:

- **Components**: Reusable UI components in `components/core/`
- **Theme**: Centralized colors, typography, and spacing in `theme.ts`
- **Breakpoints**: Responsive design utilities in `utils/breakpoints.ts`
- **Styled Components**: Component-level styling with theme integration

The designs for this site are managed in [Figma](https://www.figma.com/design/HxiBacjCO3ukwsPRrZcPwX/01com-Design?node-id=0-1&p=f&t=FFnPrsroIq94Tp2d-0), and assets are exported from here for development.

## 🔐 Content Management

To get started on learning Sanity Studio, they provide a helpful [learning module](https://www.sanity.io/learn/course/day-one-with-sanity-studio/prerequisites) with everything you'll need.

Their [docs](https://www.sanity.io/docs/apis-and-sdks/introduction-to-schemas) on how to design schemas are a helpful resource to keep on hand, and will also contain recipes for common content models.

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server

## 🚀 Deployment

### Production Build

```bash
yarn build
```

### Vercel Deployment

This application is optimized for Vercel deployment. Deployment of this Studio will happen automatically on push to `main`.

This will deploy both 01com and Sanity Studio to https://01com-v2.vercel.app/ and https://01com-v2.vercel.app/studio. This is handy for validating deployments prior to deploying real 01com, which uses traditional hosting instead. See below for 01com deployment instructions.

### Static Export

For traditional hosting, the build output can be found in the `out/` folder after running `yarn build`.

To deploy 01com, run `yarn build` on a computer with access to the SFTP servers. Take the entire `out/` folder and drop it into the Test server at path `/usr/local/01comm/01com` to replace the existing one that is deployed.

Navigate to https://www.01com.com and https://www.01com.com/studio with cleared browser cache to check the deployment (ensure the computer you are checking from is pointing its hosts file to the Test server).

## 📱 Features

- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Optimized images, lazy loading, and efficient bundling
- **Content Management**: Easy content updates via Sanity Studio
- **Interactive Elements**: Carousels, modals, and animated components
- **Accessibility**: WCAG compliant components and navigation

### Notes

This project was initially generated with `yarn create next-app --example with-styled-components with-styled-components-app`. This starter contained the below warnings:

_Nextjs with styled-components_

This example features how you use a different styling solution than [styled-jsx](https://github.com/vercel/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

This example uses the Rust-based [SWC](https://nextjs.org/docs/advanced-features/compiler#styled-components) in Next.js for better performance than Babel.

Currently, only the `ssr` and `displayName` transforms have been implemented. These two transforms are the main requirement for using `styled-components` in Next.js.

_Link Component_

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from "next/link";
import styled from "styled-components";

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`;
```

**pages/index.js**

```javascript
import StyledLink from "../components/StyledLink";

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
);
```

</details>
