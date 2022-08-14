const fileSystem = require("./fs");

const exec = require("child_process").exec;

const spawnCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);

      if (error !== null) {
        reject(error);
        console.log(`exec error: ${error}`);
      }
      resolve("OK");
    });
  });
};

const sudoAutoPassword = () =>
  `echo ${process.env.LINUX_PASSWORD} | sudo -S -k`;

const addProxyCommand = async (src) => {
  await spawnCommand(
    `${sudoAutoPassword()} iptables -t nat -L -n -v | grep "6000" || ${sudoAutoPassword()} iptables -t nat -A OUTPUT -o lo -p tcp --dport ${src} -j REDIRECT --to-port 5000`
  );
  const ports = fileSystem.read();
  if (ports?.findIndex((p) => p === src) === -1) ports?.push(src);
  fileSystem.write(ports);
};

const removeProxyCommand = async (src) => {
  console.log("REMOVING PORT FORWARDING RULES");
  console.log(`FOR PORT => ${src}`);

  await spawnCommand(
    `${sudoAutoPassword()} iptables -t nat -D OUTPUT -o lo -p tcp --dport ${src} -j REDIRECT --to-port 5000`
  );
  const ports = fileSystem.read();

  fileSystem.write(ports?.filter((p) => +p !== +src));
};

const verifyPortRange = (src) => {
  const formattedSrc = +src;
  if (!formattedSrc) throw new Error(`Add proxy - No Source`);
  if (!(formattedSrc >= 3000 && formattedSrc <= 10000))
    throw new Error(`Add proxy - PORT [${formattedSrc}] - Port out of range`);
  return formattedSrc;
};

module.exports = {
  addProxy: (src) => {
    addProxyCommand(verifyPortRange(src));
  },
  removeProxy: async (src) => {
    return await removeProxyCommand(verifyPortRange(src));
  },
};
