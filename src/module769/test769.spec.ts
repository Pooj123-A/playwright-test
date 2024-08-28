
import { test, expect } from "@playwright/experimental-ct-react";
import App769 from "./App769.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App769 />);
  await expect(component).toContainText("Learn React");
});
