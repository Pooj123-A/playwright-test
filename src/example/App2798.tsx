
import { test, expect } from "@playwright/experimental-ct-react";
import App2798 from "./App2798.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2798 />);
  await expect(component).toContainText("Learn React");
});
