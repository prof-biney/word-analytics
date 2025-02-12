import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        numberOfWords={numberOfWords}
        numberOfCharacters={numberOfCharacters}
      />
    </main>
  );
}
