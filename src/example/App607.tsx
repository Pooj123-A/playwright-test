
import { test, expect } from "@playwright/experimental-ct-react";
import App607 from "./App607.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App607 />);
  await expect(component).toContainText("Learn React");
});
