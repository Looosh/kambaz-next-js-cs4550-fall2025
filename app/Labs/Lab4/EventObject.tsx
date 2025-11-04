"use client";
import { useState } from "react";

interface EventInfo {
  type: string;
  target: string;
}

export default function EventObject() {
  const [event, setEvent] = useState<EventInfo | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEvent({
      type: e.type,
      target: e.currentTarget.outerHTML,
    });
  };

  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={handleClick}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}
