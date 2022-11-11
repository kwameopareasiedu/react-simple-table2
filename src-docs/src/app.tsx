import React from "react";
import {
  Badge,
  Box,
  Container,
  createStyles,
  Image,
  Text,
  Title
} from "@mantine/core";
import { Navbar } from "./components";
import BannerImg from "./assets/banner.png";
import { BiErrorAlt, TiWarningOutline } from "react-icons/all";

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

          <Text align="center" italic mb="xl">
            A lot of times, we just want a simple table to display data
            <br />
            Not all the bells, whistles and complexities of a{" "}
            <Text component="span" weight="bold">
              data grid
            </Text>
          </Text>

          <Box sx={{ display: "grid", placeItems: "center" }}>
            <Badge
              color="red"
              size="lg"
              variant="filled"
              leftSection={<BiErrorAlt />}>
              <Text sx={{ textTransform: "none" }} weight="normal">
                Please note:{" "}
                <Text component="span" weight="bold">
                  React Simple Table2
                </Text>{" "}
                is{" "}
                <Text component="span" weight="bold">
                  not
                </Text>{" "}
                a data-grid component.
              </Text>
            </Badge>
          </Box>
        </Container>
      </Box>

      <Box py="xl">
        <Container size="md">
          <Image src={BannerImg}></Image>
        </Container>
      </Box>
    </Box>
  );
}
