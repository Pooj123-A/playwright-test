
import { test, expect } from "@playwright/experimental-ct-react";
import App2617 from "./App2617.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2617 />);
  await expect(component).toContainText("Learn React");
});
