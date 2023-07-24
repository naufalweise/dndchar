import { Stack, Card } from "@mui/material";
import AbilityBox from "./AbilityBox";

export default function AbilityListBox() {
  return (
    <Card sx={{ backgroundColor: "paper.main", p: 2 }}>
      <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
        <AbilityBox />
        <AbilityBox />
        <AbilityBox />
        <AbilityBox />
        <AbilityBox />
        <AbilityBox />
      </Stack>
    </Card>
  );
}
