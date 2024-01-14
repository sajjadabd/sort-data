import React from "react";
import Actions from "./components/Actions";
import Table from "./components/Table";
import { useContentStore } from "./store/content";

import "./App.css";

function App() {
  const { content } = useContentStore();

  return (
    <>
      <Actions />
      <Table content={content} />
    </>
  );
}

export default App;
