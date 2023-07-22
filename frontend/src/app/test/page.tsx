import FormCharacterID from "@/component/character/form/FormCharacterID";
import FormSpell from "@/component/character/form/FormSpell";
import FormMundaneItem from  "@/component/character/form/FormMundaneItem";
import { Box, Toolbar } from "@mui/material";

export default function Page() {
  return (
    <Box sx={{ p: 3 }}>
      <Toolbar />
      <FormCharacterID />
    </Box>
  );
}
