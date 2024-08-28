
import { test, expect } from "@playwright/experimental-ct-react";
import App667 from "./App667.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App667 />);
  await expect(component).toContainText("Learn React");
});
