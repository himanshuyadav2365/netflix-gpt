import React from "react";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";
import Header from "./Header";
import Primary from "./Primary";
import Secondary from "./Secondary";

const Browse = () => {
  const gptValue = useSelector((store) => store.gptSlice.showGpt);

  return (
    <div>
      <Header />
      {gptValue ? (
        <GPTSearchPage />
      ) : (
        <>
          <Primary />
          <Secondary />
        </>
      )}
    </div>
  );
};

export default Browse;
