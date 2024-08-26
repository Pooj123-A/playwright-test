
import { test, expect } from "@playwright/experimental-ct-react";
import App2246 from "../example/App2246.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2246 />);
  await expect(component).toContainText("Learn React");
});
