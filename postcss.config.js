// https://github.com/michael-ciniawsky/postcss-load-config

import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import removeDeclarations from "postcss-remove-declaration";

const conflictingClasses = [
  "order-first",
  "order-last",
  "cursor-not-allowed",
  "cursor-pointer",
  "block",
  "inline-block",
  "text-justify",
  "hidden",
  "invisible",
  "overflow-auto",
  "overflow-hidden",
];

const removeObj = {
  ...Object.fromEntries(conflictingClasses.map((cc) => [`.${cc}`, "*"])),
  body: ["font-family", "font-size"],
  ".row, .column, .flex": "flex-wrap",
};

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        "last 4 Chrome versions",
        "last 4 Firefox versions",
        "last 4 Edge versions",
        "last 4 Safari versions",
        "last 4 Android versions",
        "last 4 ChromeAndroid versions",
        "last 4 FirefoxAndroid versions",
        "last 4 iOS versions",
      ],
    }),
    removeDeclarations({ remove: removeObj }),
    tailwindcss,
    autoprefixer,
  ],
};
