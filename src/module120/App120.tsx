
import { test, expect } from "@playwright/experimental-ct-react";
import App120 from "./App120.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App120 />);
  await expect(component).toContainText("Learn React");
});
