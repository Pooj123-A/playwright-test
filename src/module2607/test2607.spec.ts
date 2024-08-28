
import { test, expect } from "@playwright/experimental-ct-react";
import App2607 from "./App2607.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2607 />);
  await expect(component).toContainText("Learn React");
});
