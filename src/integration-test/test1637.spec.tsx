
import { test, expect } from "@playwright/experimental-ct-react";
import App1637 from "../example/App1637.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1637 />);
  await expect(component).toContainText("Learn React");
});
