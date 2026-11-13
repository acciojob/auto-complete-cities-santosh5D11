import React, { useState } from "react";
function AutoComplete({ suggestion }) {
  const [input, setInput] = useState("");

  const filteredSuggestions = suggestion.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase()),
  );

  const handleSelect = (item) => {
    setInput(item);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder=""
        onChange={(e) => setInput(e.target.value)}
      />
      {input && (
        <ul>
          {filteredSuggestions.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
