import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper marginTop="5rem">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          News
        </Typography>
        <Typography color={medium}>now</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/govt-atta-prices.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Govt slashes wheat reserve price to reduce flour price</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      To reduce the price of wheat and atta, the Department of Food & PD, in consultation with Ministry of Finance on Friday decided that the reserve price for sale of wheat under OMSS will be Rs 2350/Qtl (Pan India).
      </Typography>

      <hr/>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/news2.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Government may reduce reserve price of wheat auction from Rs 2,350 to Rs 2,200 per 100 kg</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      The government may reduce the price of wheat auction under Open Market Sale Scheme (OMSS) to further bring down prices. Wheat auction prices may be brought down from Rs 2,350 per 100 kilograms to below Rs 2,200 per 100 kilogramme, informed sources told ANI on Thursday.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
