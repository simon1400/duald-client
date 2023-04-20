export const baseHead = (theme: any) => ({
  fontWeight: 500,
  lineHeight: 1.5,
  color: theme.palette.text.primary,
  "&::selection": {
    backgroundColor: theme.palette.primary.main,
  },
})