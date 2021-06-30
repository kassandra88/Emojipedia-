import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

let meanings = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(meanings);

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
