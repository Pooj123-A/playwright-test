
import { test, expect } from "@playwright/experimental-ct-react";
import App2326 from "./App2326.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2326 />);
  await expect(component).toContainText("Learn React");
});
