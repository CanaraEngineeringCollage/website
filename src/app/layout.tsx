import localFont from 'next/font/local';
import "./globals.css";;
import Layout from "@/components/Common/Layout/Layout";


const helveticaNeue = localFont({
  src: [
    {
      path: '../../public/fonts/helvetica-neue/HelveticaNeue-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helvetica-neue/HelveticaNeue-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helvetica-neue/HelveticaNeue-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helvetica-neue/HelveticaNeue-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helvetica-neue/HelveticaNeue-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helvetica-neue/HelveticaNeue-Heavy.woff2',
      weight: '800', // Adjusted to avoid conflict with Black
    },
    {
      path: '../../public/fonts/helvetica-neue/HelveticaNeue-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap', // Ensures text is visible during font loading
  variable: '--font-helvetica-neue', // For Tailwind CSS usage
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={helveticaNeue.className}>
      <body
      >
       <Layout>
        {children}
       </Layout>
      </body>
    </html>
  );
}
