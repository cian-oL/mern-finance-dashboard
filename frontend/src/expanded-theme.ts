import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  // extend the Palette for our extra shades
  interface Palette {
    tertiary: PaletteColor;
  }

  interface PaletteColor {
    [key: number]: string;
  }
}
