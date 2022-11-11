import React from "react";
import {
  Badge,
  Box,
  Card,
  Container,
  createStyles,
  Image,
  Text,
  Title
} from "@mantine/core";
import { Navbar } from "./components";
import BannerImg from "./assets/banner.png";
import { BiErrorAlt } from "react-icons/all";

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

      <Box py="5rem" bg="gray.0">
        <Container size="xs">
          <Title>Why though?</Title>
          <Text mb="xl" color="gray.7" italic>
            Aren&apos;t there so many React table libraries to choose from?
          </Text>

          <Card shadow="xl">
            <Text mb="md">
              A lot of React &quot;table&quot; implementations function more or
              less like a data-grid spreadsheet-like components with several
              features like editing, reordering rows and columns, in-table
              filtering, grouping and so much more. Don&apos;t get us wrong.
              This isn&apos;t a bad thing. These components are feature-rich for
              the reasons they exist.
            </Text>

            <Text mb="md">
              However for a large chunk of apps, a lot of these features
              aren&apos;t required and just add a lot of boilerplate code (
              <Text component="span" italic>
                and in some-cases even dealing with reducers for state
                management
              </Text>
              ) to the component&apos;s setup.
            </Text>

            <Text mb="md">
              <Text component="span" weight="bold">
                React Simple Table2
              </Text>{" "}
              is just that; a table with simple but intuitive cell value
              rendering. It make React tables clutter free without sacrificing
              customizability.
            </Text>

            <Text mb="md">
              It spits out standard a standard semantic table with thead, tbody,
              tr, th and td elements which allow you to easily target for custom
              styling
            </Text>
          </Card>
        </Container>
      </Box>

      <Box py="5rem">
        <Container size="md">
          <Title mb="xl">Features</Title>
        </Container>
      </Box>
    </Box>
  );
}
