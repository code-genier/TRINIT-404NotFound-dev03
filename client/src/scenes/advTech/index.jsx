import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import { useEffect, useState } from "react";
import TechMyPostWidget from "scenes/widgets/TechMyPostWidget";
import TechPostsWidget from "scenes/widgets/TechPostsWidget";

const AdvTech = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  
  const [user, setUser] = useState(null);
  const userId = _id;
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // calls function when page loads

  if (!user) return null;

  return (
    <> 
    <Navbar />
    
    <Box >
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box
          flexBasis={isNonMobileScreens ? "100%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {/* <TechMyPostWidget picturePath={picturePath} />  */}
          {user.type === "expert" ? <TechMyPostWidget picturePath={picturePath} /> : ""}
          <TechPostsWidget userId={_id} />
        </Box>

        </Box>
    </Box>
    </>
  );
};

export default AdvTech;
