import React from "react";
import {
  ActionIcon,
  Container,
  Group,
  MantineProvider,
  Paper,
  Text,
  useMantineTheme
} from "@mantine/core";
import { DiGithubAlt } from "react-icons/all";

export const Footer = (): JSX.Element => {
  const theme = useMantineTheme();

  return (
    <MantineProvider theme={{ ...theme, colorScheme: "dark" }}>
      <Paper radius={0}>
        <Container p="xl">
          <Group position="apart">
            <Text>React Simple Table2, MIT License, 2022</Text>

            <ActionIcon
              component="a"
              href="https://github.com/kwameopareasiedu/react-simple-table2"
              target="_blank"
              variant="outline"
              size="md">
              <DiGithubAlt />
            </ActionIcon>
          </Group>
        </Container>
      </Paper>
    </MantineProvider>
  );
};
