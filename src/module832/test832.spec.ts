
import { test, expect } from "@playwright/experimental-ct-react";
import App832 from "./App832.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App832 />);
  await expect(component).toContainText("Learn React");
});
