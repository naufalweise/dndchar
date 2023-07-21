import FormCharacter from "@/component/character/form/FormCharacter";
import { Box, Toolbar } from "@mui/material";

export default function Page() {
  return (
    <Box sx={{ p: 3 }}>
      <Toolbar />
      <FormCharacter />
    </Box>
  );
}
