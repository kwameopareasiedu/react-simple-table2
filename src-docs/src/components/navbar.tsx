import React, { useState } from "react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Burger,
  Button,
  Container,
  createStyles,
  Divider,
  Drawer,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import { BsGithub } from "react-icons/all";
import KwameImg from "../assets/kwame.jpg";

const useStyles = createStyles(theme => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 10,
    boxShadow: "2px 2px 10px #e3e3e3",
    backgroundColor: "white"
  },
  burger: {
    display: "block",
    [theme.fn.largerThan("md")]: {
      display: "none"
    }
  },
  links: {
    display: "none",
    [theme.fn.largerThan("md")]: {
      display: "flex",
      width: "360px"
    }
  },
  social: {
    justifyContent: "end",
    [theme.fn.largerThan("md")]: {
      width: "360px"
    }
  },
  drawer: {
    ".mantine-Drawer-drawer": {
      display: "flex",
      flexDirection: "column"
    }
  },
  author: {
    display: "none",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.fn.largerThan("md")]: {
      display: "flex"
    }
  }
}));

export const Navbar = (): JSX.Element => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <Box className={classes.root} py="sm">
      <Container size="lg">
        <Flex justify="space-between" align="center">
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            className={classes.burger}
            size="sm"
          />

          <Group className={classes.links} spacing="sm">
            <Button
              component="a"
              href="#home"
              size="md"
              p="xs"
              variant="subtle">
              Home
            </Button>

            <Button
              component="a"
              href="#features"
              size="md"
              p="xs"
              variant="subtle">
              Features
            </Button>

            <Button
              component="a"
              href="#usage"
              size="md"
              p="xs"
              variant="subtle">
              Usage
            </Button>

            <Button
              component="a"
              href="#support"
              size="md"
              p="xs"
              variant="subtle">
              Support
            </Button>
          </Group>

          <Text size="xl" weight="bold">
            React Simple Table2{" "}
            <Text
              component="span"
              size="sm"
              weight="normal"
              sx={{ verticalAlign: "text-bottom" }}>
              v1.2.0
            </Text>
          </Text>

          <Group className={classes.social}>
            <Badge
              component="a"
              className={classes.author}
              href="https://github.com/kwameopareasiedu"
              target="_blank"
              radius="xl"
              size="lg"
              pl={0}
              leftSection={
                <Avatar
                  src={KwameImg}
                  radius="xl"
                  size={24}
                  mr={5}
                  alt="Kwame Opare Asiedu"
                />
              }>
              <Text component="span" transform="capitalize">
                Kwame Opare Asiedu
              </Text>
            </Badge>

            <ActionIcon
              component="a"
              href="https://github.com/kwameopareasiedu/react-simple-table2"
              target="_blank"
              variant="outline"
              size="md">
              <BsGithub />
            </ActionIcon>
          </Group>
        </Flex>
      </Container>

      <Drawer
        opened={opened}
        className={classes.drawer}
        padding="xl"
        size="md"
        title={
          <Stack spacing={0}>
            <Title order={4} mb={0}>
              React Simple Table2
            </Title>
            <Text size="sm">
              A clean, composable, mobile-friendly table library for React
            </Text>
          </Stack>
        }
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        onClose={() => setOpened(false)}>
        <Stack>
          <Button
            component="a"
            href="#home"
            variant="outline"
            onClick={() => setOpened(false)}>
            Home
          </Button>

          <Button
            component="a"
            href="#features"
            variant="outline"
            onClick={() => setOpened(false)}>
            Features
          </Button>

          <Button
            component="a"
            href="#usage"
            variant="outline"
            onClick={() => setOpened(false)}>
            Usage
          </Button>

          <Button
            component="a"
            href="#support"
            variant="outline"
            onClick={() => setOpened(false)}>
            Support
          </Button>
        </Stack>

        <Box sx={{ flex: "1" }} />

        <Divider mb="lg" />

        <Group>
          <Avatar
            src={KwameImg}
            radius="xl"
            size="lg"
            alt="Kwame Opare Asiedu"
          />

          <Stack spacing={0}>
            <Text>MIT License, 2022</Text>
            <Text
              component="a"
              href="https://github.com/kwameopareasiedu"
              target="_blank"
              size="sm"
              color={theme.colors.blue[7]}>
              Kwame Opare Asiedu
            </Text>
          </Stack>
        </Group>
      </Drawer>
    </Box>
  );
};
