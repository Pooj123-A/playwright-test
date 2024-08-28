
import { test, expect } from "@playwright/experimental-ct-react";
import App2873 from "./App2873.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2873 />);
  await expect(component).toContainText("Learn React");
});
