import type { NextPage } from "next";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Home: NextPage = () => {
  const [loadedTheme, setLoadedTheme] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://62b45a4e530b26da4cbc8a8e.mockapi.io/api/v1/theme"
      );

      setLoadedTheme(response.data[0]);
    })();
  }, []);

  const theme = useMemo(
    () =>
      createTheme(
        loadedTheme || {
          palette: {
            primary: {
              main: "#556cd6",
            },
            secondary: {
              main: "#19857b",
            },
          },
        }
      ),
    [loadedTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Button variant="primary" color="primary">
              Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="contained">Container</Button>
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
          </Stack>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Home;
