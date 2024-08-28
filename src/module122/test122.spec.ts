
import { test, expect } from "@playwright/experimental-ct-react";
import App122 from "./App122.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App122 />);
  await expect(component).toContainText("Learn React");
});
