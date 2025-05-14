import localFont from 'next/font/local';


export const helveticaNow = localFont({
    src: [
     
      {
        path: '../../public/fonts/helvetica-neue/HelveticaNowDisplay-Medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../../public/fonts/helvetica-neue/HelveticaNowDisplay-Bold.woff2',
        weight: '700',
        style: 'normal',
      }
    ],
    display: 'swap', // Ensures text is visible during font loading
    variable: '--font-helvetica-now', // For Tailwind CSS usage
  });