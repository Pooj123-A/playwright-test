
import { test, expect } from "@playwright/experimental-ct-react";
import App2149 from "./App2149.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2149 />);
  await expect(component).toContainText("Learn React");
});
