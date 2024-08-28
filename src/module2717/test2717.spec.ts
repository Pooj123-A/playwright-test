
import { test, expect } from "@playwright/experimental-ct-react";
import App2717 from "./App2717.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2717 />);
  await expect(component).toContainText("Learn React");
});
