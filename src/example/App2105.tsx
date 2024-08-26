
import { test, expect } from "@playwright/experimental-ct-react";
import App2105 from "./App2105.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2105 />);
  await expect(component).toContainText("Learn React");
});
