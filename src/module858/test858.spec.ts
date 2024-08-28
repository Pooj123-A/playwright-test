
import { test, expect } from "@playwright/experimental-ct-react";
import App858 from "./App858.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App858 />);
  await expect(component).toContainText("Learn React");
});
