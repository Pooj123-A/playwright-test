
import { test, expect } from "@playwright/experimental-ct-react";
import App2624 from "./App2624.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2624 />);
  await expect(component).toContainText("Learn React");
});
