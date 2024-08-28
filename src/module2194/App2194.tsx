
import { test, expect } from "@playwright/experimental-ct-react";
import App2194 from "./App2194.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2194 />);
  await expect(component).toContainText("Learn React");
});
