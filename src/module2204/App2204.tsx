
import { test, expect } from "@playwright/experimental-ct-react";
import App2204 from "./App2204.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2204 />);
  await expect(component).toContainText("Learn React");
});
