import React from "react";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Group,
  Text
} from "@mantine/core";
import { DiGithubAlt } from "react-icons/all";

const useStyles = createStyles(theme => ({
  links: {
    display: "none",
    [theme.fn.largerThan("md")]: {
      display: "flex",
      width: "360px"
    },
    button: {}
  },
  social: {
    justifyContent: "end",
    [theme.fn.largerThan("md")]: {
      width: "360px"
    }
  }
}));

export const Navbar = (): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box py="sm">
      <Container size="lg">
        <Flex justify="space-between" align="center">
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
            <ActionIcon variant="outline" size="md">
              <DiGithubAlt />
            </ActionIcon>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};
