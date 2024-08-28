
import { test, expect } from "@playwright/experimental-ct-react";
import App661 from "./App661.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App661 />);
  await expect(component).toContainText("Learn React");
});
