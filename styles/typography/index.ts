import { baseBody } from "./baseBody";
import { baseHead } from "./baseHead";

export const typography = (theme: any) => ({
  body1: {
    ...baseBody(theme)
  },
  body2: {
    ...baseBody(theme)
  },
  h1: {
    fontSize: "30px",
    ...baseHead(theme),
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '32px',
    //   marginBottom: "40px",
    // },
  },
  h2: {
    fontSize: "20px",
    ...baseHead(theme),
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '24px',
    // },
  },
  h3: {
    fontSize: "14px",
    ...baseHead(theme),
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '20px',
    // },
  },
  h4: {
    fontSize: "12px",
    ...baseHead(theme),
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
})