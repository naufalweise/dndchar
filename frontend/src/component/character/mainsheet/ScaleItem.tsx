import { Stack, Typography } from "@mui/material";

export default function ScaleItem() {
  return (
    <Stack direction="row">
      <Typography>
        <Typography
          component="span"
          sx={{ textDecoration: "underline", mr: 1 }}
        >
          +3
        </Typography>
        Saving Throw
      </Typography>
    </Stack>
  );
}
