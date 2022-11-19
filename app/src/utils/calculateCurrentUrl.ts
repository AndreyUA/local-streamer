const calculateCurrentUrl = (): string => {
  if (process.env.NODE_ENV === "production") {
    return `${globalThis.location.href}api`;
  }

  return "http://localhost:3000/api";
};

export default calculateCurrentUrl;
