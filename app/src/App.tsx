const App = () => {
  const calculateCurrentUrl = (): string => {
    if (process.env.NODE_ENV === "production") {
      return `${globalThis.location.href}api/stream`;
    }

    return "http://localhost:3000/api/stream";
  };

  return (
    <video controls>
      <source src={calculateCurrentUrl()} type="video/mp4"></source>
    </video>
  );
};

export default App;
