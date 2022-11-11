import React from "react";
import { Box, Container, createStyles, Title, Text } from "@mantine/core";
import styled from "styled-components";
import { Navbar } from "./components";

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: "66px"
  },
  title: {
    fontSize: "3rem",
    [theme.fn.largerThan("md")]: {
      fontSize: "4.5rem"
    }
  },
  section: {}
}));

export default function App() {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Navbar />

      <Box py="xl">
        <Container size="xl">
          <Title
            order={1}
            className={classes.title}
            align="center"
            weight="bold"
            variant="gradient"
            gradient={{
              from: "blue",
              to: "purple",
              deg: 45
            }}>
            Clean, Simple, Responsive
            <br />
            React Tables In Seconds
          </Title>
          <Text align="center" italic>
            A lot of times, we just want a simple table to display data
            <br />
            Not all the bells, whistles and complexities of a{" "}
            <Text component="span" weight="bold">
              data grid
            </Text>
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
