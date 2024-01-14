import React from "react";
import { useContentStore } from "../store/content";

const Actions = () => {
  const sortBasedOnEmail = useContentStore((state) => state.sortBasedOnEmail);
  const sortBasedOnDate = useContentStore((state) => state.sortBasedOnDate);

  return (
    <div className="actions">
      <button
        onClick={() => {
          sortBasedOnEmail();
        }}
      >
        email
      </button>
      <button onClick={sortBasedOnDate}>date</button>
    </div>
  );
};

export default Actions;
