import React, { useState } from "react";
import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Button,
  Container,
  createStyles,
  Divider,
  Drawer,
  Flex,
  Group,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import { DiGithubAlt } from "react-icons/all";
import KwameImg from "../assets/kwame.jpg";

const useStyles = createStyles(theme => ({
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
  }
}));

export const Navbar = (): JSX.Element => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <Box py="sm">
      <Container size="lg">
        <Flex justify="space-between" align="center">
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            className={classes.burger}
            size="sm"
          />

          <Group className={classes.links} spacing="sm">
            <Button component="a" href="/" size="md" p="xs" variant="subtle">
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
          </Group>

          <Text size="xl" weight="bold">
            React Simple Table2
          </Text>

          <Group className={classes.social}>
            <ActionIcon
              component="a"
              href="https://github.com/kwameopareasiedu/react-simple-table2"
              target="_blank"
              variant="outline"
              size="md">
              <DiGithubAlt />
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
            href="/"
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
