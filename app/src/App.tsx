const App = () => {
  const calculateCurrentUrl = (): string =>
    `${globalThis.location.href}api/stream`;

  return (
    <video controls>
      <source src={calculateCurrentUrl()} type="video/mp4"></source>
    </video>
  );
};

export default App;
