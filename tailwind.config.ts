import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: 'Satoshi',
      },
      backgroundImage: {
        cardSections: "linear-gradient(to right, #73FF9299, #00BE9B99)",
        neonLight: "linear-gradient(to bottom right, #5AFF43, #21B26B, #21B26B, #5AFF43)",
        shimmerGreen: "linear-gradient(to bottom right, #5DE7C1, #107B37)",
        aquaLight: "linear-gradient(to right, #21B26B, #41EAD4, #21B26B)",
        countdown: "linear-gradient(130deg, #00FF4880, #11FFE233, #0001010D, #0001010D, #0001010D, #0001010D, #0001010D, #0001010D, #0001010D, #0001010D, #11FFE233, #00FF4880)",

        // Button
        "primary-enabled": "linear-gradient(to bottom right, #5AFF43, #21B26B, #117846, #117846, #21B26B, #5AFF43)",
        "primary-hover": "linear-gradient(to bottom right, #BEFF05, #48d964, #1d8151, #1d8151, #48d964, #BEFF05)",
        "primary-pressed": "linear-gradient(to bottom right, #5AFF43DD, #21B26BDD, #117846DD, #117846DD, #21B26BDD, #5AFF43DD)",

        "secondary-enabled": "#FFFFFF03",
        "secondary-hover": "linear-gradient(to bottom, #24E7F433, #5AFF4300)",
        "secondary-pressed": "linear-gradient(to bottom, #24E7F433, #5AFF4300)",
      },
      backgroundColor: {
        primary: "#0D1816",
        sections: "#10201D",
        cards: "#7CBE9733",
      },
      colors: {
        white: {
          1: "#FFFFFFFF",
          2: "#FFFFFFCC",
          3: "#FFFFFF1A",
        },
        black: {
          1: "#000000FF",
          2: "#00000080",
          3: "#0000001A",
        },
        icy: {
          1: "#84DADB",
          2: "#009EA4",
          3: "#00687A",
          4: "#004A61",
        },
        lime: {
          1: "#EDFF9C",
          2: "#D6FF4F",
          3: "#BEFF05",
          4: "#A2E605",
        },
        screaminGreen: {
          1: "#A5FAD1",
          2: "#65F7A0",
          3: "#24F462",
          4: "#1FDB54",
        },
        shimmerGreen: {
          1: "#5DE7C1",
          2: "#107B37",
        },
        aqua: {
          1: "#B0F7F0",
          2: "#41EAD4",
          3: "#35D4B7",
          4: "#25B090",
        },
        grass: {
          1: "#51B075",
          2: "#218F3F",
          3: "#126B27",
          4: "#064012",
        },
      },
    },
  },
  plugins: [],
};
export default config;
