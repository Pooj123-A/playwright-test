
import { test, expect } from "@playwright/experimental-ct-react";
import App2200 from "./App2200.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2200 />);
  await expect(component).toContainText("Learn React");
});
