import {buildjs} from './buildtools.mjs';

const build = async () => {
  await buildjs("all");
};

build();
