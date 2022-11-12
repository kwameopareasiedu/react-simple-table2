import React from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Code,
  Container,
  createStyles,
  Grid,
  Group,
  Image,
  List,
  Text,
  Title
} from "@mantine/core";
import { Feature, Footer, Navbar } from "./components";
import BannerImg from "./assets/banner.png";
import {
  BiErrorAlt,
  BiSortAZ,
  BsGithub,
  FaMobileAlt,
  HiOutlineTableCells,
  TbCode,
  TbComponents
} from "react-icons/all";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-simple-table2";

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
  table: {
    boxShadow: "2px 2px 10px #e3e3e3",
    borderRadius: "4px",
    overflow: "auto"
  }
}));

export default function App() {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Navbar />

      <Box id="home" py="3rem">
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
              filtering, grouping and so much more. Don&apos;t get me wrong.
              This isn&apos;t a bad thing. Data grids are feature-rich for the
              reasons they exist.
            </Text>

            <Text mb="md">
              However, for a large chunk of apps, a lot of these features
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
              rendering. It simplifies React tables without sacrificing
              customization options.
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

          <Title order={3}>Example Usage</Title>
          <Text mb="md">
            The following CodeSandbox illustrates how to use React Simple
            Table2. You can play around with the example and resize the preview
            window on the right to see how it appears on different screen sizes.
          </Text>
        </Container>

        <Box mb="xl">
          <iframe
            title="React Simple Table2"
            src="https://codesandbox.io/embed/react-simple-table2-l067l3?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fapp.tsx&theme=dark"
            style={{
              width: "100%",
              height: "500px",
              border: 0,
              borderRadius: "4px",
              overflow: "hidden"
            }}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </Box>

        <Container size="md">
          <Title order={3}>All SimpleTable Props</Title>
          <Text mb="md">
            The table below 😉 describes all the properties of the{" "}
            <Code>&lt;SimpleTable/&gt;</Code> component.
          </Text>

          <Box mb="xl">
            <Table className={classes.table}>
              <Thead>
                <Tr>
                  <Th>Property</Th>
                  <Th>Required</Th>
                  <Th>Description</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>
                    <Code>data</Code>
                  </Td>
                  <Td>
                    <Badge color="red">Yes</Badge>
                  </Td>
                  <Td>
                    <Text>The array of items to be displayed in the table</Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>cols</Code>
                  </Td>
                  <Td>
                    <Badge color="red">Yes</Badge>
                  </Td>
                  <Td>
                    <Text>The array of column definitions</Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>dataKeyFn</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      A function which is called for every item in{" "}
                      <Code>data</Code>. It should return the React key of the
                      item
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>headerAttrs</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      The HTML props to assign to the table <Code>thead</Code>{" "}
                      component
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>bodyAttrs</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      The HTML props to assign to the table <Code>tbody</Code>{" "}
                      component
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>rowAttrsBuilder</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      A function which is called for every <Code>tr</Code>{" "}
                      component. This should return the HTML props to assign to
                      each <Code>tbody</Code> <Code>tr</Code> component
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>mobileCards</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      If true, each item is displayed using a card on small
                      screens
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>sort</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      The sorting data object. Contains the <Code>id</Code> of
                      the sorted column and the <Code>dir</Code> sorting
                      direction
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>onSort</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      A function which is called when a column is sorted. It is
                      called with the new <Code>sort</Code> object
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>loading</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      If true, the <Code>SimpleTable</Code> displays an
                      indeterminate linear progress bar right under the{" "}
                      <Code>thead</Code> component
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Title order={3}>Column Definition</Title>
          <Text mb="md">
            A column is a{" "}
            <Text component="span" weight="bold">
              3 or 4 element array
            </Text>
            . The 4th array element is optional. The array elements are defined
            below:
          </Text>

          <List type="ordered" mb="md">
            <List.Item>Column id</List.Item>
            <List.Item>Column header</List.Item>
            <List.Item>Column value resolver</List.Item>
            <List.Item>Optional column property object</List.Item>
          </List>

          <Text mb="md">
            An example taken from the above sandbox is{" "}
            <Code>
              [ &quot;email&quot;, &quot;Email&quot;, &quot;contact.email&quot;,
              &#123; visibility: &quot;md&quot; &#125; ]
            </Code>
            . This means our column:
          </Text>

          <List type="ordered" mb="md">
            <List.Item>
              Has an{" "}
              <Text component="span" weight="bold">
                id
              </Text>{" "}
              of{" "}
              <Text component="span" italic>
                &quot;email&quot;
              </Text>
            </List.Item>
            <List.Item>
              Has a{" "}
              <Text component="span" weight="bold">
                header text
              </Text>{" "}
              of{" "}
              <Text component="span" italic>
                &quot;Email&quot;
              </Text>
            </List.Item>
            <List.Item>
              Has an{" "}
              <Text component="span" weight="bold">
                value resolver
              </Text>{" "}
              of <Code>&quot;contact.email&quot;</Code> (More on this later)
            </List.Item>
            <List.Item>
              Is visible on{" "}
              <Text component="span" italic>
                medium screens and larger
              </Text>
            </List.Item>
          </List>

          <Box mb="xl" className={classes.table}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Property</Th>
                  <Th>Index</Th>
                  <Th>Required</Th>
                  <Th>Description</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>
                    <Code>id</Code>
                  </Td>
                  <Td>0</Td>
                  <Td>
                    <Badge color="red">Yes</Badge>
                  </Td>
                  <Td>
                    <Text>
                      The unique id of the column used for rendering and sorting
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>header</Code>
                  </Td>
                  <Td>1</Td>
                  <Td>
                    <Badge color="red">Yes</Badge>
                  </Td>
                  <Td>
                    <Text>
                      The column header. This can be a string or a React
                      component
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>valueResolver</Code>
                  </Td>
                  <Td>2</Td>
                  <Td>
                    <Badge color="red">Yes</Badge>
                  </Td>
                  <Td>
                    <Text mb="md">
                      For each data item, the value resolver extracts the value
                      to display under the column. It can be specified in the
                      following ways:
                    </Text>

                    <List type="ordered">
                      <List.Item>
                        <Text>
                          <Text component="span" weight="bold">
                            Plain string
                          </Text>{" "}
                          ( E.g. <Code>name</Code>) For each data item, the
                          column value would be <Code>item.name</Code>.
                        </Text>
                      </List.Item>

                      <List.Item>
                        <Text>
                          <Text component="span" weight="bold">
                            Dot-notated string
                          </Text>{" "}
                          ( E.g. <Code>contact.email</Code>) For each data item,
                          the column value would be{" "}
                          <Code>item.contact.email</Code>.
                        </Text>
                      </List.Item>

                      <List.Item>
                        <Text>
                          <Text component="span" weight="bold">
                            Function
                          </Text>{" "}
                          ( E.g.{" "}
                          <Code>item =&gt; /* Return Custom value */</Code>) For
                          each data item, the column value would be the custom
                          value returned from the function
                        </Text>
                      </List.Item>
                    </List>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>additionalProperties</Code>
                  </Td>
                  <Td>3</Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      An additional object of properties for the column
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Text mb="md">
            The <Code>additionalProperties</Code> (I.e. the 4th optional
            element) of a column are described below:
          </Text>

          <Box mb="xl">
            <Table className={classes.table}>
              <Thead>
                <Tr>
                  <Th>Property</Th>
                  <Th>Required</Th>
                  <Th>Description</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>
                    <Code>sortable</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>Indicates if the column is sortable</Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>headerAttrs</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      The HTML props to assign to the <Code>th</Code> component
                      of the column
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>bodyAttrs</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      The HTML props to assign to every <Code>td</Code>{" "}
                      component of the column
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>visibility</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      The window width at which the column is visible. It can
                      take values of <Code>xs</Code>, <Code>sm</Code>,{" "}
                      <Code>md</Code>, <Code>lg</Code>, <Code>xl</Code> or a
                      number
                    </Text>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Code>headerVisibility</Code>
                  </Td>
                  <Td>
                    <Badge color="green">No</Badge>
                  </Td>
                  <Td>
                    <Text>
                      The window width at which the column{" "}
                      <Text component="span" weight="bold">
                        header
                      </Text>{" "}
                      is visible. It can take values of <Code>xs</Code>,{" "}
                      <Code>sm</Code>, <Code>md</Code>, <Code>lg</Code>,{" "}
                      <Code>xl</Code> or a number. (Not to be confused with{" "}
                      <Code>visibility</Code>)
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Container>
      </Box>

      <Box id="support" py="5rem">
        <Container>
          <Title>Supporting</Title>
          <Text mb="xl">
            Thanks for checking out the{" "}
            <Text component="span" weight="bold">
              React Simple Table2
            </Text>{" "}
            project. Simple tables in React doesn&apos;t need to be rocket
            science and we hope this project provides that. If you like what we
            are doing here, you can help by leaving a star on the GitHub project
            and talking about it as much as possible.
          </Text>

          <Card shadow="xl" py="5rem">
            <Center>
              <Group>
                <Button
                  component="a"
                  variant="light"
                  leftIcon={<BsGithub />}
                  href="https://github.com/kwameopareasiedu/react-simple-table2"
                  target="_blank"
                  size="xl">
                  Star On GitHub
                </Button>

                <Button
                  component="a"
                  variant="outline"
                  leftIcon={<BsGithub />}
                  href="https://github.com/kwameopareasiedu"
                  target="_blank"
                  size="xl">
                  Follow Me On GitHub
                </Button>
              </Group>
            </Center>
          </Card>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
