import { Button, Frog, TextInput } from "frog";

export const app = new Frog();

app.frame("/", (c) => {
  const { buttonValue, inputText, status } = c;
  const fruit = inputText || buttonValue;
  return c.res({
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        {status === "initial" ? "Select your fruit!" : `Selected: ${fruit}`}
      </div>
    ),
    intents: [
      <TextInput placeholder="Enter a custom fruit..." />,
      <Button value="apple">Apple</Button>,
      <Button value="banana">Banana</Button>,
      <Button value="mango">Mango</Button>,
    ],
  });
});
