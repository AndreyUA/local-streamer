import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import calculateCurrentUrl from "../utils/calculateCurrentUrl";

const Home = () => {
  const [videos, setVideos] = useState<Array<String>>([]);

  const getAllVideos = async (): Promise<void> => {
    const response = await axios.get(calculateCurrentUrl());

    setVideos(response.data);
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <Link to={`player/${index}`}>{video}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
