const chokidar = require('chokidar');
const liveserver = require('live-server');
const {buildjs} = require('./buildtools.js')


let src_watcher = chokidar.watch('src/**/*.*', {
  ignored: ["src/**/bundle*"],
  persistent: true
});

src_watcher.on('ready', async () => {
  buildjs('all');

  src_watcher.on('add', buildjs);
  src_watcher.on('change', buildjs);
});

// define more compilation processes here, as needed.

liveserver.start({
  open: true,
  host: '0.0.0.0',
  port: +process.env.PORT || 8080,
  root: "pub",
  logLevel: 0
});
