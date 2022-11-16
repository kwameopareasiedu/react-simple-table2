# Changelog

- 2.0.0
    - Renamed `headAttrs` prop to `theadAttrs`
      in [SimpleTable](src/simple-table.tsx).
    - Renamed `bodyAttrs` prop to `tbodyAttrs`
      in [SimpleTable](src/simple-table.tsx).
    - Renamed `rowAttrsBuilder` prop to `trAttrsBuilder`
      in [SimpleTable](src/simple-table.tsx).
    - Renamed `mobileCards` prop to `useCards`
      in [SimpleTable](src/simple-table.tsx).
    - Renamed `headerAttrs` **column option** to `thAttrs`
      in [SimpleTable](src/simple-table.tsx).
    - Renamed `bodyAttrs` **column option** to `tdAttrs`
      in [SimpleTable](src/simple-table.tsx).
    - Renamed `headerVisible` **column option** to `thVisible`
      in [SimpleTable](src/simple-table.tsx).


- 1.2.0
    - Added `breakpoint` prop to [SimpleTable](src/simple-table.tsx).
      When `breakpoint` is set and `mobileCards` is true, table switches between
      mobile view and desktop view.
    - Added `thBuilder` and `tdBuilder` props
      to [SimpleTable](src/simple-table.tsx). For cells that resolve to a string
      value, these props allow you to override the table cell value.
