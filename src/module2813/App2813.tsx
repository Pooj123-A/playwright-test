
import { test, expect } from "@playwright/experimental-ct-react";
import App2813 from "./App2813.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2813 />);
  await expect(component).toContainText("Learn React");
});
