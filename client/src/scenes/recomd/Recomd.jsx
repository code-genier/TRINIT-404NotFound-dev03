import {
   Box,
   MenuItem,
   Select,
   Typography,
   useTheme,
   TextField,
   InputLabel,
   Button,
   useMediaQuery,
} from "@mui/material";
import React from "react";
import { useGeolocated } from "react-geolocated";
import { useNavigate } from "react-router-dom";

const Recomd = () => {
   const theme = useTheme();
   const { palette } = useTheme();
   const { coords, isGeolocationAvailable, isGeolocationEnabled } =
      useGeolocated({
         positionOptions: {
            enableHighAccuracy: false,
         },
         userDecisionTimeout: 5000,
      });
   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
   const navigate = useNavigate();

   return (
      <>
         <Box>
            <Box
               width="100%"
               backgroundColor={theme.palette.background.alt}
               p="1rem 6%"
               textAlign="center"
            >
               <Typography fontWeight="bold" fontSize="32px" color="primary">
                  Farmers Hub - Extra
               </Typography>
            </Box>

            <Box
               width={isNonMobileScreens ? "50%" : "83%"}
               // padding
               p="2rem"
               // margin
               m="2rem auto"
               borderRadius="1.5rem"
               backgroundColor={theme.palette.background.alt}
            >
               <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                  please enter your current assets for us to recommend the best
                  crop for you
               </Typography>
               <Box display="flex" flexDirection="column" gap="2rem">
                  <InputLabel id="demo-simple-select-label">
                     Enter the size of owned land (in acres)
                  </InputLabel>
                  <TextField
                     id="outlined-basic"
                     label="Outlined"
                     variant="outlined"
                  />
                  <InputLabel id="demo-simple-select-label">
                     select Yearly Income
                  </InputLabel>
                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     //   label="Age"
                  >
                     <MenuItem value={20}>less than 1,00,000</MenuItem>
                     <MenuItem value={30}>1,00,000 - 2,00,000</MenuItem>
                     <MenuItem value={10}>2,00,000 - 3,00,000</MenuItem>
                     <MenuItem value={20}>3,00,000 - 4,00,000</MenuItem>
                     <MenuItem value={30}>4,00,000 - 5,00,000</MenuItem>
                     <MenuItem value={10}>greater than 6,00,000</MenuItem>
                  </Select>
                  <InputLabel id="demo-simple-select-label">
                     *we will access your location via GPS Location.
                  </InputLabel>
                  <Button
                     fullWidth
                     type="submit"
                     sx={{
                        m: "2rem 0",
                        p: "1rem",
                        backgroundColor: palette.primary.main,
                        color: palette.background.alt,
                        "&:hover": { color: palette.primary.main },
                     }}
                     onClick = {() => navigate("/recmdHelper")}
                  >
                     Submit
                  </Button>
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default Recomd;
