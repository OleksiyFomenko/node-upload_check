const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function unzip(file, destination) {
  const expandCommand =
    os.platform() === 'win32'
      ? `powershell -command "& {&'Expand-Archive' ${file} -DestinationPath ${destination}}"`
      : `unzip ${file} -d ${destination}`;

  const { stdout, stderr } = await exec(expandCommand);
  return stderr ? Promise.reject(stderr) : stdout;
}
