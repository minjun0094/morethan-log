import localFont from 'next/font/local'

export const roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Roboto-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-roboto'
})
