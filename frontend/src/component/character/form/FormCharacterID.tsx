import {
  Typography,
  Divider,
  TextField,
  Box,
  Button,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

type PCClass = {
  className: string;
  level: number;
};

function PCClassField({ value }: { value: PCClass }) {
  return (
    <Box sx={{ display: "flex" }}>
      <TextField
        value={value.className}
        margin="dense"
        variant="outlined"
        sx={{ flexBasis: "200%", mr: 1 }}
        label="Class"
      />
      <TextField
        value={value.level}
        margin="dense"
        variant="outlined"
        type="number"
        label="Level"
      />
    </Box>
  );
}
/*
function MultiClassField() {
  const [valueList, setValueList] = useState<PCClass[]>([]);
  const [currentValue, setCurrentValue] = useState<PCClass>();

  return (
    <Box>
      {valueList.map((v) => (
        <PCClassField value={v} />
      ))}
      <PCClassField value={} />
    </Box>
  );
}
*/

export default function FormCharacterID() {
  return (
    <Box>
      <Typography variant="h4">Character ID</Typography>
      <Divider sx={{ mb: 1}}/>
      <Box sx={{ display: "flex", flexDirection: 'column'}}>
        <TextField fullWidth margin="dense" variant="outlined" size="small" label="Name" />
        <TextField fullWidth margin="dense" variant="outlined" size="small" label="Race" />
        <Box sx={{ display: "flex" }}>
          <Box sx={{ minWidth:"80%",  mr: 1 }}>
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              size="small"
              label="Class"
            />
          </Box>
          <Box sx={{ flexGrow: 1}}>
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              type="number"
              size="small" label="Level"
            />
          </Box>
        </Box>
        <Button variant="text">Add Class</Button>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          size="small" label="Background"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          type="number"
          size="small" label="XP"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          type="number"
          size="small" label="Inspiration Tokens"
        />
      </Box>
    </Box>
  );
}
