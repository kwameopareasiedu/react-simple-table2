import React from "react";
import {
  Box,
  Card,
  CardProps,
  createStyles,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";

interface FeatureProps extends CardProps {
  label: string;
  icon: React.ReactNode;
}

const useStyles = createStyles(theme => ({}));

export const Feature = ({
  icon,
  label,
  children,
  ...rest
}: FeatureProps): JSX.Element => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Card shadow="xl" {...rest}>
      <Stack spacing="sm">
        {icon}
        <Title order={3}>{label}</Title>
        <Box w={50} h={2} bg={theme.primaryColor} />
        {children}
      </Stack>
    </Card>
  );
};
