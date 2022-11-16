import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";
import { ObjectTable } from "./object-table";
import { action } from "@storybook/addon-actions";

djs.extend(advancedFormat);

const logClick = action("Row clicked");

const person = {
  id: 1,
  name: "Kwame Opare Asiedu",
  email: "test@gmail.com",
  dob: "2022-11-12",
  address: {
    physical: "A place on Earth",
    box: {
      number: "1234",
      street: "St.",
      city: "Accra"
    }
  }
};

export default {
  title: "Object Table",
  component: ObjectTable
} as ComponentMeta<typeof ObjectTable>;

export const Default: ComponentStory<typeof ObjectTable> = () => {
  return (
    <ObjectTable
      data={person}
      props={[
        ["Name", "name"],
        ["Email", "email"],
        [<i>Date Of Birth</i>, item => djs(item.dob).format("Do MMMM YYYY")]
      ]}
      trAttrs={{ onClick: logClick }}
    />
  );
};
