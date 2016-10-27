const exec = require('child_process').exec;

module.exports.handler = function() {

  exec('LD_LIBRARY_PATH=./lib TESSDATA_PREFIX=./ ./tesseract test.png stdout -l eng -psm 8', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

};

