
import { test, expect } from "@playwright/experimental-ct-react";
import App2634 from "./App2634.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2634 />);
  await expect(component).toContainText("Learn React");
});
