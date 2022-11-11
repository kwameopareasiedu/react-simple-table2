import React from "react";
import {
  Badge,
  Box,
  Card,
  Code,
  Container,
  createStyles,
  Grid,
  Image,
  Text,
  Title
} from "@mantine/core";
import { Navbar, Feature, Footer } from "./components";
import BannerImg from "./assets/banner.png";
import {
  BiErrorAlt,
  BiSortAZ,
  FaMobileAlt,
  HiOutlineTableCells,
  TbCode,
  TbComponents
} from "react-icons/all";

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

      <Box py="3rem">
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
        <Container size="sm">
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
              This isn&apos;t a bad thing. Data grid are feature-rich for the
              reasons they exist.
            </Text>

            <Text mb="md">
              However for a large chunk of apps, a lot of these features
              aren&apos;t required and just add a lot of boilerplate code (
              <Text component="span" italic>
                and in some-cases even dealing with reducers for state
                management
              </Text>
              ) to the component&apos;s setup. This issue is amplified if a lot
              of simple tables are needed in these apps.
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
              It spits out a table with standard HTML semantics:{" "}
              <Code>table</Code>, <Code>thead</Code>, <Code>tbody</Code>,{" "}
              <Code>tr</Code>, <Code>th</Code> and <Code>td</Code> elements
              which allow you to easily target for custom styling
            </Text>
          </Card>
        </Container>
      </Box>

      <Box id="features" py="5rem">
        <Container size="md">
          <Title mb="xl">Features</Title>

          <Grid justify="center" gutter="xl">
            <Grid.Col xs={12} md={4}>
              <Feature label="Responsive" icon={<FaMobileAlt size="1.5rem" />}>
                <Text>
                  Display rows as cards or use column visibility to hide columns
                  on smaller screens. You can also just hide column headings.
                </Text>
              </Feature>
            </Grid.Col>

            <Grid.Col xs={12} md={4}>
              <Feature label="Clean Semantics" icon={<TbCode size="1.5rem" />}>
                <Text>
                  <Text component="span" weight="bold">
                    React Simple Table2
                  </Text>{" "}
                  outputs appropriate HTML semantic tags making it easier for
                  accessibility, search engine and custom styling.
                </Text>
              </Feature>
            </Grid.Col>

            <Grid.Col xs={12} md={4}>
              <Feature
                label="Powerful Cell Rendering"
                icon={<HiOutlineTableCells size="1.5rem" />}>
                <Text>
                  Use plain strings or dot-notated strings to access properties
                  from data objects or use functions to return custom values or
                  components.
                </Text>
              </Feature>
            </Grid.Col>

            <Grid.Col xs={12} md={4}>
              <Feature label="Sortable" icon={<BiSortAZ size="1.5rem" />}>
                <Text>
                  Use <Code>sort</Code> and <Code>onSort()</Code> to change the
                  way your data is displayed in{" "}
                  <Text component="span" weight="bold">
                    React Simple Table2
                  </Text>
                  .
                </Text>
              </Feature>
            </Grid.Col>

            <Grid.Col xs={12} md={4}>
              <Feature label="Composable" icon={<TbComponents size="1.5rem" />}>
                <Text>
                  Don&apos;t like the <Code>&lt;SimpleTable/&gt;</Code>, use the
                  various utility functions provided to build your own custom
                  table.
                </Text>
              </Feature>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box id="usage" py="5rem" bg="gray.0">
        <Container size="md">
          <Title>Usage</Title>
          <Text mb="xl" color="gray.7" italic>
            Awesome! You&apos;ve made it this far, meaning you most likely want
            to try out <Text component="span">React Simple Table2.</Text>
          </Text>

          <Title order={3}>Installation</Title>

          <Text mb="md">
            <Text component="span">React Simple Table2</Text> marks{" "}
            <Code>React</Code> and <Code>Styled Components</Code> as peer
            dependencies which must be installed alongside it
          </Text>

          <Code block bg="gray.1" mb="xl" p="md">
            yarn add react styled-components react-simple-table2
          </Code>

          {/*<iframe*/}
          {/*  src="https://codesandbox.io/embed/new?codemirror=1"*/}
          {/*  // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"*/}
          {/*  style={{*/}
          {/*    width: "100%",*/}
          {/*    height: "500px",*/}
          {/*    border: 0,*/}
          {/*    borderRadius: "4px",*/}
          {/*    overflow: "hidden"*/}
          {/*  }}*/}
          {/*  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"*/}
          {/*  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>*/}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
