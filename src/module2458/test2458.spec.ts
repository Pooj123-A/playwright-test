
import { test, expect } from "@playwright/experimental-ct-react";
import App2458 from "./App2458.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2458 />);
  await expect(component).toContainText("Learn React");
});
