import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const EduPostWidget = ({name}) => {
  const dispatch = useDispatch();

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  // console.log(primary)

  return (
    <WidgetWrapper paddingTop="5rem">
      <Typography color={main} fontSize="2rem" sx={{ mt: "2rem"}}>
        {name}
      </Typography>
      {/* {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )} */}

    </WidgetWrapper>
  );
};

export default EduPostWidget;
