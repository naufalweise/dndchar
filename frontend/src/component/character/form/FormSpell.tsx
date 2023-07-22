import {
  Typography,
  Divider,
  TextField,
  Box,
  Button,
	FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function FormSpell() {
  return (
    <Box>
			<Typography variant="h4">Spell</Typography>
      <Divider sx={{ mb: 1}}/>
			<Box sx={{ display: "flex" }}>
				<TextField fullWidth margin="dense" variant="outlined" size="small" sx={{ mr:1, minWidth:"80%", maxWidth:"80%" }} label="Spell Name"/>
				<TextField margin="dense" variant="outlined" size="small" type="number" label="Level"/>
			</Box>
			<Box sx={{ display: "flex" }}>
				<TextField fullWidth margin="dense" variant="outlined" size="small" sx={{ mr:1, minWidth:"50%", maxWidth:"50%" }} label="School"/>
				<TextField fullWidth margin="dense" variant="outlined" size="small" label="Class"/>
			</Box>
			<Box sx={{ display: "flex" }}>
				<TextField fullWidth margin="dense" variant="outlined" size="small" sx={{mr:1, maxWidth:"50%"}} label="Range"/>
				<FormControlLabel control={<Checkbox />} label="Prepared" />
			</Box>
			<Box sx={{ display: "flex" }}>
				<TextField fullWidth margin="dense" variant="outlined" size="small" sx={{mr:1, maxWidth:"50%"}} label="Casting Time"/>
				<FormControlLabel control={<Checkbox />} label="Ritual" />
			</Box>
			<Box sx={{ display: "flex" }}>
				<TextField fullWidth margin="dense" variant="outlined" size="small" sx={{mr:1, maxWidth:"50%"}} label="Duration"/>
				<FormControlLabel control={<Checkbox />} label="Concentration" />
			</Box>
			<Typography sx={{ mt: 1 }}>Components</Typography>
			<Box sx={{ alignItems:"center", maxWidth: 1 }}>
				<FormControlLabel control={<Checkbox />} label="Verbal" />
				<FormControlLabel control={<Checkbox />} label="Somatic" />
				<FormControlLabel control={<Checkbox />} label="Material" />
				<TextField fullWidth margin="dense" variant="outlined" size="small" label="Material"/>
			</Box>
			<TextField fullWidth margin="dense" variant="outlined" size="small" label="Short Description"/>
			<TextField fullWidth margin="dense" variant="outlined" size="small" multiline minRows={6} maxRows={6} label="Full Description"/>
    </Box>
  )
}