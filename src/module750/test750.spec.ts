
import { test, expect } from "@playwright/experimental-ct-react";
import App750 from "./App750.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App750 />);
  await expect(component).toContainText("Learn React");
});
