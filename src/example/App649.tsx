
import { test, expect } from "@playwright/experimental-ct-react";
import App649 from "./App649.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App649 />);
  await expect(component).toContainText("Learn React");
});
