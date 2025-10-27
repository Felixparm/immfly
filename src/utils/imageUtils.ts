export const getImageSource = (id: number) => {
  switch (id) {
    case 1: return require('../../public/1.png');
    case 2: return require('../../public/2.png');
    case 3: return require('../../public/3.png');
    case 4: return require('../../public/4.png');
    case 5: return require('../../public/5.png');
    case 6: return require('../../public/6.png');
    case 7: return require('../../public/7.png');
    default: return require('../../public/1.png');
  }
};