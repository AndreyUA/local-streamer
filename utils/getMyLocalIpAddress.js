import os from "os";

const getMyLocalIpAddress = () => {
  const networkInterfaces = os.networkInterfaces();

  return networkInterfaces.enp7s0.find(
    (networkInterface) => networkInterface.family === "IPv4"
  ).address;
};

export default getMyLocalIpAddress;
