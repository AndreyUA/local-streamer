import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TheatersIcon from "@mui/icons-material/Theaters";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";

import calculateCurrentUrl from "../../utils/calculateCurrentUrl";

const Home = () => {
  const [videos, setVideos] = useState<Array<String>>([]);

  const navigate = useNavigate();

  const getAllVideos = async (): Promise<void> => {
    const response = await axios.get(calculateCurrentUrl());

    setVideos(response.data);
  };

  const navigateToVideo = (videoId: number): void => {
    navigate(`player/${videoId}`);
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <>
      {/* Non empty array of films */}
      {videos.length > 0 && (
        <List>
          {videos.map((video, index) => (
            <ListItem key={index}>
              <ListItemButton onClick={() => navigateToVideo(index)}>
                <ListItemIcon>
                  <TheatersIcon fontSize="large" color="secondary" />
                </ListItemIcon>
                <ListItemText primary={video} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}

      {/* Empty array of films */}
      {videos.length === 0 && (
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SettingsAccessibilityIcon fontSize="large" color="secondary" />
              </ListItemIcon>
              <ListItemText primary="I haven't any film." />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </>
  );
};

export default Home;
