import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

//?Date picker component
function Search() {
  const history = useHistory();
  const [starDate, setStarDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    starDate: starDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStarDate(ranges.selection.starDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
