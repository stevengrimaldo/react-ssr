// Color names generated from http://chir.ag/projects/name-that-color/
export const color = {
  black: '#000',
  boulder: '#757575', // dark grey
  concrete: '#f3f3f3', // light grey
  ecstasy: '#f58025', // orange
  mercury: '#e6e6e6', // grey
  pictonBlue: '#34b6e4', // light blue
  piper: '#dc701c', // dark orange
  prussianBlue: '#003c51', // dark blue
  tealBlue: '#04506c', // blue
  white: '#fff'
};

export const fontFamily = {
  caecilia: "'Caecilia', 'Times New Roman', serif",
  myriad: "'Myriad', 'Arial', sans-serif"
};

export const fontWeight = {
  black: '900', // available in: Myriad
  bold: '700', // available in: Caecilia, Myriad
  light: '300', // available in: Caecilia
  regular: '400', // available in: Caecilia, Myriad
  semiBold: '600' // available in: Myriad
};

export const fontStyle = {
  italic: 'italic', // available in: Myriad
  normal: 'normal' // available in: Caecilia, Myriad
};

export const fontSize = {
  body: '16px',
  button: '16px',
  callout: '24px',
  featured: '20px',
  headline: '36px',
  mainHeadline: '48px',
  pageTitle: '64px',
  specChar: '50%',
  subHeadline: '30px'
};

export const lineHeight = {
  body: '24px',
  button: '18px',
  callout: '28px',
  featured: '22px',
  headline: '42px',
  mainHeadline: '52px',
  pageTitle: '68px',
  subHeadline: '36px'
};

export const letterSpacing = {
  body: '0',
  button: '1.69px',
  callout: '0.9px',
  featured: '0.2px',
  headline: '-1px',
  mainHeadline: '-1px',
  pageTitle: '-1px',
  subHeadline: '0'
};

export const textTransform = {
  body: 'none',
  button: 'uppercase',
  callout: 'none',
  featured: 'none',
  headline: 'none',
  mainHeadline: 'none',
  pageTitle: 'none',
  subHeadline: 'none'
};

export const spacing = {
  horizontalPadding: '20px',
  verticalPadding: '80px',
  verticalPaddingHalf: '40px'
};

export const timing = {
  default: '400ms',
  fast: '200ms',
  slow: '800ms'
};

export const easing = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeInOut: 'ease-in-out',
  easeOut: 'ease-out',
  linear: 'linear'
};

export const type = {
  body: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.body}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.regular}`,
    letterSpacing: `${letterSpacing.body}`,
    lineHeight: `${lineHeight.body}`,
    textTransform: `${textTransform.body}`
  },
  button: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.button}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.button}`,
    lineHeight: `${lineHeight.button}`,
    textTransform: `${textTransform.button}`
  },
  callout: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.callout}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.semiBold}`,
    letterSpacing: `${letterSpacing.callout}`,
    lineHeight: `${lineHeight.callout}`,
    textTransform: `${textTransform.callout}`
  },
  featured: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.featured}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.semiBold}`,
    letterSpacing: `${letterSpacing.featured}`,
    lineHeight: `${lineHeight.featured}`,
    textTransform: `${textTransform.featured}`
  },
  headline: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.headline}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.headline}`,
    lineHeight: `${lineHeight.headline}`,
    textTransform: `${textTransform.headline}`
  },
  mainHeadline: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.mainHeadline}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.mainHeadline}`,
    lineHeight: `${lineHeight.mainHeadline}`,
    textTransform: `${textTransform.mainHeadline}`
  },
  pageTitle: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.pageTitle}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.pageTitle}`,
    lineHeight: `${lineHeight.pageTitle}`,
    textTransform: `${textTransform.pageTitle}`
  },
  subHeadline: {
    fontFamily: `${fontFamily.myriad}`,
    fontSize: `${fontSize.subHeadline}`,
    fontStyle: `${fontStyle.normal}`,
    fontWeight: `${fontWeight.bold}`,
    letterSpacing: `${letterSpacing.subHeadline}`,
    lineHeight: `${lineHeight.subHeadline}`,
    textTransform: `${textTransform.subHeadline}`
  }
};

export default {
  color,
  easing,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
  textTransform,
  timing,
  type
};
