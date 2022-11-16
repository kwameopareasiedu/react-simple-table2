# Changelog

- 1.2.0
  - Added `breakpoint` prop to [SimpleTable](src/simple-table.tsx).
    When `breakpoint` is set and `mobileCards` is true, table switches between
    mobile view and desktop view.
  - Added `thBuilder` and `tdBuilder` props
    to [SimpleTable](src/simple-table.tsx). For cells that resolve to a string
    value, these props allow you to override the table cell value.
