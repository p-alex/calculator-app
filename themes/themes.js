import { createGlobalStyle } from "styled-components";
export const themeOne = {
  main_bg: "hsl(222, 26%, 31%)",
  keypad_and_toggle_bg: "hsl(223, 31%, 20%)",
  screen_bg: "hsl(224, 36%, 15%)",
  key_primary_bg: "hsl(30, 25%, 89%)",
  key_primary_bg_shadow: "hsl(28, 16%, 65%)",
  key_secondary_bg: "hsl(225, 21%, 49%)",
  key_secondary_bg_shadow: "hsl(225, 21%, 49%)",
  key_tertiary_bg: "hsl(6, 63%, 50%)",
  key_tertiary_bg_shadow: "hsl(6, 70%, 34%)",
  primary_textColor: "hsl(221, 14%, 31%)",
  secondary_textColor: "#fff",
  tertiary_textColor: "hsl(0, 0, 100%)",
  logo_and_labels: "#fff",
};
export const themeTwo = {
  main_bg: "hsl(0, 0%, 90%)",
  keypad_and_toggle_bg: "hsl(0, 5%, 81%)",
  screen_bg: "hsl(0, 0%, 93%)",
  key_primary_bg: "hsl(45, 7%, 89%)",
  key_primary_bg_shadow: "hsl(35, 11%, 61%)",
  key_secondary_bg: "hsl(185, 42%, 37%)",
  key_secondary_bg_shadow: "hsl(185, 58%, 25%)",
  key_tertiary_bg: "hsl(25, 98%, 40%)",
  key_tertiary_bg_shadow: "hsl(25, 99%, 27%)",
  primary_textColor: "hsl(60, 10%, 19%)",
  secondary_textColor: "#fff",
  tertiary_textColor: "hsl(0, 0, 100%)",
  logo_and_labels: "#222",
};
export const themeThree = {
  main_bg: "hsl(268, 75%, 9%)",
  keypad_and_toggle_bg: "hsl(268, 71%, 12%)",
  screen_bg: "hsl(268, 71%, 12%)",
  key_primary_bg: "hsl(268, 47%, 21%)",
  key_primary_bg_shadow: "hsl(290, 70%, 36%)",
  key_secondary_bg: "hsl(281, 89%, 26%)",
  key_secondary_bg_shadow: "hsl(285, 91%, 52%)",
  key_tertiary_bg: "hsl(176, 100%, 44%)",
  key_tertiary_bg_shadow: "hsl(177, 92%, 70%)",
  primary_textColor: "hsl(52, 100%, 62%)",
  secondary_textColor: "#fff",
  tertiary_textColor: "hsl(198, 20%, 13%)",
  logo_and_labels: "hsl(52, 100%, 62%)",
};

export const GlobalStyles = createGlobalStyle`
   body{
    background-color:${(props) => props.theme.main_bg}
   }
`;
