interface theme {
  primary1: string,
  secondary1: string,
  base1: string,
}

const bp = {
  mobileS: `max-width: 330px`,
  mobileM: `max-width: 400px`,
  mobileL: `max-width: 480px`,
  tabletS: `max-width: 600px`,
  tabletL: `max-width: 768px`,
  desktopXS: `max-width: 900px`,
  desktopS: `max-width: 1080px`,
  desktopM: `max-width: 1200px`,
  desktopL: `max-width: 1400px`,
}

const color: theme = {
  primary1: `#ffffff`,
  secondary1: `#00ff00`,
  base1: `#121920`,
}

const dark = {
  bp,
  color,
};

export default dark;
