
import { test, expect } from "@playwright/experimental-ct-react";
import App2071 from "./App2071.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2071 />);
  await expect(component).toContainText("Learn React");
});
