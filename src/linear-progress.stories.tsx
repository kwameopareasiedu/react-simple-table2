import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinearProgress } from "./linear-progress";

export default {
  title: "Linear Progress",
  component: LinearProgress,
  decorators: [
    Story => (
      <div style={{ padding: "2rem" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof LinearProgress>;

export const Default: ComponentStory<typeof LinearProgress> = () => {
  return <LinearProgress />;
};
