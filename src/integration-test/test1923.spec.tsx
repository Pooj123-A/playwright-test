
import { test, expect } from "@playwright/experimental-ct-react";
import App1923 from "../example/App1923.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1923 />);
  await expect(component).toContainText("Learn React");
});
