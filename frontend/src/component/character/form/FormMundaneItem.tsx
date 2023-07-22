"use client";

import {
  Typography,
  Divider,
  TextField,
  Box,
	Select,
	FormControlLabel,
  Checkbox,
	SelectChangeEvent,
	InputLabel,
	MenuItem,
	FormControl,
	FormGroup,
	Switch,
	Collapse,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function FormSpell() {
	//TODO Item Name
	//TODO Item Type
	// Item Count
  const [itemCount, setItemCount] = useState('1');
  const handleItemCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemCount(event.target.value as string);
  };
	// Item Weight
  const [itemWeight, setItemWeight] = useState('0');
  const handleItemWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemWeight(event.target.value as string);
  };
	//Item Weight Unit
  const [weightUnit, setWeightUnit] = useState('1');
  const handleWeightUnitChange = (event: SelectChangeEvent) => {
    setWeightUnit(event.target.value as string);
  };
	//TODO Value
	// Coin Type
  const [coinage, setCoinage] = useState('gp');
  const handleCoinageChange = (event: SelectChangeEvent) => {
    setCoinage(event.target.value as string);
  };
	//Container
  const [container, setContainer] = useState('');
  const handleContainerChange = (event: SelectChangeEvent) => {
    setContainer(event.target.value as string);
  };
	//TODO Ignore Item Weight

	// Show On
	// Attack
	const [attackChecked, setAttackChecked] = useState(false);
  const handleAttackCheckedChange = () => {
    setAttackChecked((prev) => !prev);
  };
	//TODO Ammunition
	//TODO Spell Material
	//TODO Tools
	//TODO Equipped
	//TODO Short Description
	//TODO Full Description

	// Attacks
	// Damage Dice Count
	const [damageDiceCount, setDamageDiceCount] = useState('1');
	const handleDamageDiceCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDamageDiceCount(event.target.value as string);
  };
	// Damage Dice Type
	const [damageDice, setDamageDice] = useState('d6');
	const handleDamageDiceChange = (event: SelectChangeEvent) => {
    setDamageDice(event.target.value as string);
  };
	// Damage Type
	const [damageType, setDamageType] = useState('');
	const handleDamageTypeChange = (event: SelectChangeEvent) => {
    setDamageType(event.target.value as string);
  };
	// AS Type
	const [ASType, setASType] = useState('STR');
	const handleASTypeChange = (event: SelectChangeEvent) => {
    setASType(event.target.value as string);
  };
	//TODO Weapon Proficiency
	//TODO Manual Override Switch
	//TODO Manual To-Hit
	//TODO Manual Damage Modifier



  return (
    <Box>
			<Typography variant="h4">Mundane Item</Typography>
      <Divider sx={{ mb: 1}}/>

			<TextField fullWidth margin="dense" variant="outlined" size="small" label="Item Name"/>

			<Box sx={{ display: "flex" }}>
				<TextField fullWidth margin="dense" variant="outlined" size="small" sx={{mr:1, minWidth: "70%"}} label="Item Type"/>
				<TextField fullWidth margin="dense" variant="outlined" size="small" type="number" label="Count" value={itemCount} onChange={handleItemCountChange}/>
			</Box>

			<Box sx={{ display: "flex", alignItems: 'baseline' }}>
				<TextField margin="dense" variant="outlined" size="small" sx={{ maxWidth: "30%", mr: 1 }} type="number" label="Weight" value={itemWeight} onChange={handleItemWeightChange}/>
				<FormControl sx={{ minWidth: "15%", mr: 1 }} size="small">
					<InputLabel>Unit</InputLabel>
					<Select
						value={weightUnit}
						onChange={handleWeightUnitChange}
						label="Unit"
					>
						<MenuItem value={"0.0625"}>oz</MenuItem>
						<MenuItem value={"1"}>lb</MenuItem>
					</Select>
				</FormControl>
				<Typography> = {Number(itemWeight) * Number(weightUnit)} lb x {itemCount} = {Number(itemWeight) * Number(weightUnit) * Number(itemCount)} </Typography>
			</Box>

			<Box sx={{ display: "flex", alignItems: 'baseline' }}>
			<TextField margin="dense" variant="outlined" size="small" sx={{ maxWidth: "30%", mr: 1 }} type="number" label="Value"/>
				<FormControl sx={{ minWidth: "15%" }} size="small">
					<InputLabel>Coin</InputLabel>
					<Select
						value={coinage}
						onChange={handleCoinageChange}
						label="Coin"
					>
						<MenuItem value={"cp"}>cp</MenuItem>
						<MenuItem value={"sp"}>sp</MenuItem>
						<MenuItem value={"gp"}>gp</MenuItem>
						<MenuItem value={"pp"}>pp</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<Box sx={{ display: "flex", alignItems: 'center' }}>
				<FormControl sx={{ minWidth: "60%", mr: 1 }} size="small" margin="dense">
						<InputLabel>Container</InputLabel>
						<Select
							value={container}
							onChange={handleContainerChange}
							
							label="Container"
						>
							<MenuItem value={"Equipped"}>Equipped</MenuItem>
							<MenuItem value={"a"}>a</MenuItem>
							<MenuItem value={"b"}>b</MenuItem>
							<MenuItem value={"c"}>c</MenuItem>
						</Select>
					</FormControl>
				<FormControlLabel control={<Checkbox />} label="Ignore Wgt." />
			</Box>

			<Typography sx={{ m: 1 }}>Show On</Typography>
			<FormGroup>
				<FormControlLabel control={<Switch />} label="Attacks" onChange={handleAttackCheckedChange}/>
				<Box sx={{ display: "flex", }}>
					<Collapse in={attackChecked}>
						<Box sx={{ display: "flex", alignItems: 'baseline' }}>
							<Typography>Damage dice</Typography>
							<TextField margin="dense" variant="outlined" size="small" sx={{ maxWidth: "12%", mr: 1, ml: 1 }} type="number" value={damageDiceCount} onChange={handleDamageDiceCountChange}/>
							<FormControl sx={{ minWidth: "15%", mr: 1 }} size="small">
								<Select
									value={damageDice}
									onChange={handleDamageDiceChange}
								>
									<MenuItem value={""}>No Dice</MenuItem>
									<MenuItem value={"d4"}>d4</MenuItem>
									<MenuItem value={"d6"}>d6</MenuItem>
									<MenuItem value={"d8"}>d8</MenuItem>
									<MenuItem value={"d10"}>d10</MenuItem>
									<MenuItem value={"d12"}>d12</MenuItem>
									<MenuItem value={"d20"}>d20</MenuItem>
								</Select>
							</FormControl>
							<FormControl sx={{ minWidth: "20%", mr: 1 }} size="small">
								<InputLabel>Dmg. Type</InputLabel>
								<Select
									value={damageType}
									onChange={handleDamageTypeChange}
									label="Dmg. Type"
								>
									<MenuItem value={"acid"}>Acid</MenuItem>
									<MenuItem value={"blud"}>Bludgeoning</MenuItem>
									<MenuItem value={"cold"}>Cold</MenuItem>
									<MenuItem value={"fire"}>Fire</MenuItem>
									<MenuItem value={"frce"}>Force</MenuItem>
									<MenuItem value={"lght"}>Lightning</MenuItem>
									<MenuItem value={"ncro"}>Necrotic</MenuItem>
									<MenuItem value={"pier"}>Piercing</MenuItem>
									<MenuItem value={"pois"}>Poison</MenuItem>
									<MenuItem value={"psyc"}>Psychic</MenuItem>
									<MenuItem value={"radi"}>Radiant</MenuItem>
									<MenuItem value={"slsh"}>Slashing</MenuItem>
									<MenuItem value={"thnd"}>Thunder</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Box sx={{ display: "flex", alignItems: 'center' }}>
							<FormControl sx={{ minWidth: "15%", mr: 1 }} size="small">
								<InputLabel>Skill</InputLabel>
								<Select
									label="Skill"
									value={ASType}
									onChange={handleASTypeChange}
								>
									<MenuItem value={"STR"}>STR</MenuItem>
									<MenuItem value={"DEX"}>DEX</MenuItem>
								</Select>
							</FormControl>
							<FormControlLabel control={<Checkbox />} label="Prof." sx={{ mr: 1 }} />
							<Typography sx={{ color:"gray" }}>+X to hit, +Y damage</Typography>
						</Box>
						<Box sx={{ display: "flex", alignItems: 'baseline' }}>
							<FormControlLabel control={<Switch />} sx={{ pt: 1 }} label="Manual"/>
							<TextField margin="dense" variant="outlined" size="small" sx={{ maxWidth: "15%", mr: 1 }} type="number" label="To-Hit"/>
							<TextField margin="dense" variant="outlined" size="small" sx={{ maxWidth: "15%", mr: 1 }} type="number" label="Dmg. Bns."/>

						</Box>

					</Collapse>
				</Box>
				<FormControlLabel control={<Switch />} label="Ammunitions"/>
				<FormControlLabel control={<Switch />} label="Spell Materials"/>
				<FormControlLabel control={<Switch />} label="Tools"/>
				<FormControlLabel control={<Switch />} label="Equipped"/>
			</FormGroup>


			<TextField fullWidth margin="dense" variant="outlined" size="small" label="Short Description"/>
			
			<TextField fullWidth margin="dense" variant="outlined" size="small" multiline minRows={6} maxRows={6} label="Full Description"/>
    </Box>
  )
}