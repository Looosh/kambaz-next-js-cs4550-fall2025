import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function DateStateVariable() {
  const today = new Date();
  const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // zero-padded month
    const dd = String(date.getDate()).padStart(2, "0");      // zero-padded day
    return `${yyyy}-${mm}-${dd}`;
  };

  const [startDate, setStartDate] = useState(formatDate(today));

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{startDate}</h3> {/* display as YYYY-MM-DD */}
      <FormControl
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <hr />
    </div>
  );
}
