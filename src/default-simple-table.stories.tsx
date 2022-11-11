import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultSimpleTable } from "./default-simple-table";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(advancedFormat);

const data = [
  {
    name: "Item-01",
    created_at: "2019-01-01",
    nested: { value: "Item_01 nested property current value" }
  },
  {
    name: "Item-02",
    created_at: "2019-01-02",
    nested: { value: "Item 02 nested property current value" }
  },
  {
    name: "Item-03",
    created_at: "2019-01-03",
    nested: { value: "Item 03 nested property current value" }
  },
  {
    name: "Item-04",
    created_at: "2019-01-04",
    nested: { value: "Item 04 nested property current value" }
  },
  {
    name: "Item-05",
    created_at: "2019-01-05",
    nested: { value: "Item 05 nested property current value" }
  },
  null,
  {
    name: "Item-06",
    created_at: "2019-01-06",
    nested: { value: "Item 06 nested property current value" }
  },
  {
    name: "Item-07",
    created_at: "2019-01-07",
    nested: { value: "Item_07 nested property current value" }
  },
  {
    name: "Item-08",
    created_at: "2019-01-08",
    nested: { value: "Item 08 nested property current value" }
  },
  {
    name: "Item-09",
    created_at: "2019-01-09",
    nested: { value: "Item 09 nested property current value" }
  },
  {
    name: "Item-10",
    created_at: "2019-01-10",
    nested: { value: "Item 10 nested property current value" }
  },
  {
    name: "Item-11",
    created_at: "2019-01-11",
    nested: { value: "Item 11 nested property current value" }
  },
  {
    name: "Item-12",
    created_at: "2019-01-12",
    nested: { value: "Item 12 nested property current value" }
  },
  {
    name: "Item-13",
    created_at: "2019-01-13",
    nested: { value: "Item 12 nested property current value" }
  },
  {
    name: "Item-14",
    created_at: "2019-01-14",
    nested: { value: "Item 14 nested property current value" }
  },
  {
    name: "Item-15",
    created_at: "2019-01-15",
    nested: { value: "Item 15 nested property current value" }
  },
  {
    name: "Item-16",
    created_at: "2019-01-16",
    nested: { value: "Item 16 nested property current value" }
  },
  {
    name: "Item-17",
    created_at: "2019-01-17",
    nested: { value: "Item 17 nested property current value" }
  },
  {
    name: "Item-18",
    created_at: "2019-01-18",
    nested: { value: "Item 18 nested property current value" }
  },
  {
    name: "Item-19",
    created_at: "2019-01-19",
    nested: { value: "Item 19 nested property current value" }
  },
  {
    name: "Item-20",
    created_at: "2019-01-20",
    nested: { value: "Item 20 nested property current value" }
  }
];

export default {
  title: "Default Simple Table",
  component: DefaultSimpleTable
} as ComponentMeta<typeof DefaultSimpleTable>;

export const Default: ComponentStory<typeof DefaultSimpleTable> = () => {
  return (
    <DefaultSimpleTable
      data={data}
      dataKeyFn={item => item?.name || "empty"}
      cols={[
        ["name", "Name", "name"],
        [
          "date",
          <i>Created at</i>,
          item => djs(item.created_at).format("Do MMMM YYYY")
        ],
        ["nested", "Nested Value", "nested.value"]
      ]}
    />
  );
};

export const ColumnVisibility: ComponentStory<
  typeof DefaultSimpleTable
> = () => {
  return (
    <DefaultSimpleTable
      data={data}
      dataKeyFn={item => item?.name || "empty"}
      cols={[
        ["name", "Name", "name"],
        [
          "date",
          <i>Created at (Medium screens &gt;= 768px)</i>,
          item => djs(item.created_at).format("Do MMMM YYYY"),
          { visibility: "md" }
        ],
        [
          "nested",
          "Nested Value (Large screens >= 992px)",
          "nested.value",
          { visibility: "lg" }
        ]
      ]}
    />
  );
};
