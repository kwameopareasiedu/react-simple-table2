# React Simple Table2

![](https://img.shields.io/badge/version-1.0.0--test-blue) ![](https://img.shields.io/badge/react-v18.2.0-blue) [![](https://img.shields.io/badge/github-star-lightgrey)](https://github.com/kwameopareasiedu/react-simple-table2)

A clean, composable, mobile-friendly table library for React

## Really? Another React table library 😐?

> Wait! Before you dismiss this one, hear me out.

A lot of React "table" implementations function more or less like a data-grid
spreadsheet-like components with several features like editing, reordering rows
and columns, in-table filtering, grouping and so much more. Don't get us wrong.
This isn't a bad thing. Data grids are feature-rich for the reasons they exist.

However, for a large chunk of apps, a lot of these features aren't required and
just add a lot of boilerplate code (_and in some-cases even dealing with
reducers for state management_) to the component's setup. This issue is
amplified if a lot of simple tables are needed in these apps.

**React Simple Table2** is just that; a table with simple but intuitive cell
value rendering. It simplifies React tables without sacrificing
customization options.

It also spits out a table with standard HTML semantics: `table`, `thead`
, `tbody`, `tr`, `th` and `td` elements which allow you to easily target for
custom styling.

## Demo

Visit
the [project website](https://kwameopareasiedu.github.io/react-simple-table2/)
for the full documentation and a CodeSandbox demo.

## Installation

React Simple Table2 marks `React` and `StyledComponents` as peer dependencies.

```bash
yarn add react styled-components react-simple-table2
```

## Usage

```bash
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";
import { randEmail, randFullName, randPastDate } from "@ngneat/falso";

djs.extend(advancedFormat);

// Generate mock data for our table
const data = Array(20)
  .fill(1)
  .map(() => {
    const date = randPastDate();
    return {
      name: randFullName(),
      contact: {
        email: randEmail()
      },
      dob: {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
      }
    };
  });

function App() {
  return (
    <SimpleTable
      data={data}
      dataKeyFn={item => item?.name || "empty"}
      cols={[
        ["name", "Name", "name"],
        ["email", "Email", "contact.email"],
        [
          "dob",
          <i>Date Of Birth</i>,
          item =>
            djs(`${item.dob.year}-${item.dob.month}-${item.dob.day}`).format(
              "Do MMMM YYYY"
            )
        ]
      ]}
    />
  );
}
```

## Maintainers

- [Kwame Opare Asiedu](https://github.com/kwameopareasiedu/)
