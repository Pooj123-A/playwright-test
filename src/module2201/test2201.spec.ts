
import { test, expect } from "@playwright/experimental-ct-react";
import App2201 from "./App2201.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2201 />);
  await expect(component).toContainText("Learn React");
});
