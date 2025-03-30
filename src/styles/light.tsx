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
  primary1: `#000000`,
  secondary1: `#00ff00`,
  base1: `#ffffff`,
}

const light = {
  bp,
  color,
  // dark,
};

export default light;
