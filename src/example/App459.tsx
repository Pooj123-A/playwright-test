
import { test, expect } from "@playwright/experimental-ct-react";
import App459 from "./App459.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App459 />);
  await expect(component).toContainText("Learn React");
});
