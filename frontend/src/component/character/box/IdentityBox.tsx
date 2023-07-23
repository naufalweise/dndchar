import { Card, CardContent, Checkbox, Stack, Typography } from "@mui/material";

export default function IdentityBox() {
  return (
    <Card sx={{ backgroundColor: "paper.main" }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <DescCol title="Name">Ethan Hunter Biden</DescCol>
          <DescCol title="Race">Human</DescCol>
          <DescCol title="Class/Level">Rogue 1</DescCol>
          <DescCol title="Background">Faction Agent</DescCol>
          <DescCol title="XP">0</DescCol>
          <DescCol title="Inspiration">
            <Checkbox checked readOnly />
          </DescCol>
        </Stack>
      </CardContent>
    </Card>
  );
}

type DescColProps = {
  title: string;
  children: React.ReactNode;
};
function DescCol(props: DescColProps) {
  let descContainer;
  if (typeof props.children == "string") {
    descContainer = <Typography variant="h6">{props.children}</Typography>;
  } else {
    descContainer = props.children;
  }
  return (
    <Stack direction="column">
      <Typography>{props.title}</Typography>
      {descContainer}
    </Stack>
  );
}
