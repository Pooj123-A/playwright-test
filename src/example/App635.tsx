
import { test, expect } from "@playwright/experimental-ct-react";
import App635 from "./App635.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App635 />);
  await expect(component).toContainText("Learn React");
});
