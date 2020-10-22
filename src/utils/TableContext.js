import React from "react";

const TableContext = React.createContext({
  list: '',
  tableHeaders: '',
  setData: () => {},
  resetData: () => {}
});

export default TableContext;