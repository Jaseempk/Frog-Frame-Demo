import { Button, Frog, TextInput } from "frog";

export const app = new Frog();

app.frame("/", (c) => {
  const { buttonValue, inputText, status } = c;
  const fruit = inputText || buttonValue;
  return c.res({
    image: "https://i.ytimg.com/vi/R3UACX5eULI/maxresdefault.jpg",

    intents: [
      <TextInput placeholder="Enter a custom fruit..." />,
      <Button value="apple">Apple</Button>,
      <Button value="banana">Banana</Button>,
      <Button value="mango">Mango</Button>,
    ],
  });
});
