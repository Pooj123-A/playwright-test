
import { test, expect } from "@playwright/experimental-ct-react";
import App2283 from "./App2283.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2283 />);
  await expect(component).toContainText("Learn React");
});
