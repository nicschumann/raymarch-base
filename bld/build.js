const {buildjs} = require('./buildtools.js');

const build = async () => {
  await buildjs("all");
};

build();
