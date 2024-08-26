
import { test, expect } from "@playwright/experimental-ct-react";
import App620 from "./App620.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App620 />);
  await expect(component).toContainText("Learn React");
});
