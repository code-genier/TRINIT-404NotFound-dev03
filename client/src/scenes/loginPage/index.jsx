import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import React from 'react'
import { useGeolocated } from "react-geolocated";

const LoginPage = () => {
  const theme = useTheme();
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
  // check if it is mobo or desktop 
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Farmers Hub.
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        // padding 
        p="2rem"
        // margin 
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Farmer's Hub, the Social Platform for Farmers.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
