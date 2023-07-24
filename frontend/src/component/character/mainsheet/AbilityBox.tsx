import { Box, Typography, Stack } from "@mui/material";
import ScaleItem from "./ScaleItem";

export default function AbilityBox() {
  return (
    <Box
      sx={{
        minWidth: "11rem",
        minHeight: "20rem",
        //backgroundColor: "paper.main",
        border: "1px solid black",
        p: 1,
      }}
    >
      <Typography variant="h6" align="center">
        Strength
      </Typography>
      <Stack sx={{ position: "relative", border: "1px solid black", px: 1 }}>
        <Typography variant="h4">+2</Typography>
        <Typography variant="h4" align="right">
          +13
        </Typography>
      </Stack>
      <Stack sx={{ border: "1px solid black", mt: 1, px: 1 }}>
        <ScaleItem />
        <ScaleItem />
        <ScaleItem />
        <ScaleItem />
        <ScaleItem />
      </Stack>
    </Box>
  );
}
