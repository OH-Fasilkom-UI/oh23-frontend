import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        cardSections: 'linear-gradient(to right, #73FF9299, #00BE9B99)',
        neonLight: 'linear-gradient(to bottom right, #5AFF43, #21B26B, #5AFF43)',
        shimmerGreen: 'linear-gradient(to bottom right, #5DE7C1, #107B37)',
        aquaLight: 'linear-gradient(to right, #21B26B, #41EAD4, #21B26B)',
      },
      backgroundColor: {
        primary: '#0D1816',
        sections: '#10201D',
        cards: '#7CBE9733',
      },
      colors: {
        'white-1': '#FFFFFFFF',
        'white-2': '#FFFFFFCC',
        'white-3': '#FFFFFF1A',
        'black-1': '#000000FF',
        'black-2': '#00000080',
        'black-3': '#0000001A',
        'icy-1': '#84DADB',
        'icy-2': '#009EA4',
        'icy-3': '#00687A',
        'icy-4': '#004A61',
        'lime-1': '#EDFF9C',
        'lime-2': '#D6FF4F',
        'lime-3': '#BEFF05',
        'lime-4': '#A2E605',
        'screaminGreen-1': '#A5FAD1',
        'screaminGreen-2': '#65F7A0',
        'screaminGreen-3': '#24F462',
        'screaminGreen-4': '#1FDB54',
        'aqua-1': '#B0F7F0',
        'aqua-2': '#41EAD4',
        'aqua-3': '#35D4B7',
        'aqua-4': '#25B090',
        'grass-1': '#51B075',
        'grass-2': '#218F3F',
        'grass-3': '#126B27',
        'grass-4': '#064012',
      }
    },
  },
  plugins: [],
}
export default config
