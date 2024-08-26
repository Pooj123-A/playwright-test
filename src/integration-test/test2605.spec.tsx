
import { test, expect } from "@playwright/experimental-ct-react";
import App2605 from "../example/App2605.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2605 />);
  await expect(component).toContainText("Learn React");
});
