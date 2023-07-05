/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: {
        profile: "#535353",
        base: "#121212",
        highlight: "#1a1a1a",
        press: "#000",
        elevatedBase: "#242424",
        elevatedHighlight: "#2a2a2a",
        elevatedPress: "#000",
        tintedBase: "hsla(0, 0%, 100%, 0.07)",
        tintedHighlight: "hsla(0, 0%, 100%, 0.1)",
        tintedPress: "hsla(0, 0%, 100%, 0.04)",
        unsafeForSmallTextBase: "#121212",
        unsafeForSmallTextHighlight: "#121212",
        unsafeForSmallTextPress: "#121212",
      },
      text: {
        base: "#fff",
        subdued: "#a7a7a7",
        brightAccent: "#1ed760",
        negative: "#f15e6c",
        warning: "#ffa42b",
        positive: "#1ed760",
        announcement: "#3d91f4",
        subtle: "#b3b3b3",
      },
      essential: {
        base: "#fff",
        subdued: "#727272",
        brightAccent: "#1ed760",
        negative: "#e91429",
        warning: "#ffa42b",
        positive: "#1ed760",
        announcement: "#0d72ea",
      },
      decorative: {
        base: "#fff",
        subdued: "#292929",
      },
    },
  },
  plugins: [],
};
