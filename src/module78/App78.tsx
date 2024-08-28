
import { test, expect } from "@playwright/experimental-ct-react";
import App78 from "./App78.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App78 />);
  await expect(component).toContainText("Learn React");
});
