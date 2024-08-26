
import { test, expect } from "@playwright/experimental-ct-react";
import App124 from "./App124.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App124 />);
  await expect(component).toContainText("Learn React");
});
