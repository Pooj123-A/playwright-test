
import { test, expect } from "@playwright/experimental-ct-react";
import App479 from "./App479.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App479 />);
  await expect(component).toContainText("Learn React");
});
