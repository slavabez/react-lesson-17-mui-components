import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import AppBar from "./AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SimpleForm from "./SimpleForm";
import { CustomButtonCssInJS, CustomButtonEmotion } from "./CustomButton";
import ToggleButton from "./ToggleButton";
import RegularButton from "./RegularButton";
import ProductCard from "./ProductCard";

const themeOne = createTheme({
  palette: {
    primary: {
      main: "#084C61",
      contrastText: "#fff",
    },
    secondary: {
      main: "#DB504A",
      contrastText: "#000",
    },
  },
  spacing: 8,
  typography: {
    h4: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
  },
});

const themeTwo = createTheme({
  palette: {
    primary: {
      main: "#DB504A",
      contrastText: "#000",
    },
    secondary: {
      main: "#084C61",
      contrastText: "#fff",
    },
  },
  spacing: 8,
  typography: {
    h4: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
  },
});

const themes = [themeOne, themeTwo];

const fakeItems = [
  {
    id: 1,
    title: "BELCANDO Mini Dog Food",
    activePrice: 23,
    inactivePrice: 35,
    percentDiscount: "-17%",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "BELCANDO Mini Dog Food",
    activePrice: 23,
    inactivePrice: 35,
    percentDiscount: "-19%",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "BELCANDO Mini Dog Food",
    activePrice: 23,
    inactivePrice: 35,
    percentDiscount: "-17%",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 4,
    title: "BELCANDO Mini Dog Food",
    activePrice: 23,
    inactivePrice: 35,
    percentDiscount: "-17%",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 5,
    title: "BELCANDO Mini Dog Food",
    activePrice: 23,
    inactivePrice: 35,
    percentDiscount: "-17%",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 6,
    title: "BELCANDO Mini Dog Food",
    activePrice: 23,
    inactivePrice: 35,
    percentDiscount: "-17%",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 7,
    title: "BELCANDO Mini Dog Food",
    activePrice: 23,
    inactivePrice: 35,
    percentDiscount: "-17%",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 8,
    title: "BELCANDO Mini Dog Food",
    activePrice: 23,
    inactivePrice: 35,
    percentDiscount: "-17%",
    imageUrl: "https://placehold.co/600x400",
  },
];

function App() {
  const [themeIndex, setThemeIndex] = useState(0);

  function toggleTheme() {
    setThemeIndex((themeIndex + 1) % themes.length);
  }

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <CssBaseline />
      <Box>
        <AppBar />
        <Container>
          <Grid container spacing={2}>
            {fakeItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <ProductCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container sx={{ pt: 2 }}>
          <RegularButton>Inactive</RegularButton>
          <RegularButton isActive>Active</RegularButton>
          <RegularButton disabled>Disabled</RegularButton>
          <Stack direction="column" spacing={2}>
            <Stack spacing={2} direction="row">
              <ToggleButton />
              <CustomButtonCssInJS
                type="button"
                onClick={() => {
                  console.log("Click");
                }}
              >
                Custom Button
              </CustomButtonCssInJS>
              <CustomButtonEmotion />

              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button
                onClick={toggleTheme}
                variant="contained"
                color="secondary"
              >
                Change theme
              </Button>
            </Stack>
            <Rating precision={0.2} max={20} />
          </Stack>
          <form>
            <Stack spacing={2}>
              <Typography variant="h4" component="p" gutterBottom>
                A simple form
              </Typography>
              <TextField
                error
                label="Email"
                variant="outlined"
                type="email"
                required
                helperText="We'll never share your email."
              />
              <TextField label="Filled" variant="filled" type="password" />
              <TextField label="Standard" variant="standard" type="number" />
              <Button variant="contained" type="submit" size="large">
                Submit
              </Button>
            </Stack>
          </form>
          <SimpleForm />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
