
import { test, expect } from "@playwright/experimental-ct-react";
import App663 from "./App663.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App663 />);
  await expect(component).toContainText("Learn React");
});
