
import { test, expect } from "@playwright/experimental-ct-react";
import App453 from "./App453.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App453 />);
  await expect(component).toContainText("Learn React");
});
