
import { test, expect } from "@playwright/experimental-ct-react";
import App609 from "./App609.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App609 />);
  await expect(component).toContainText("Learn React");
});
