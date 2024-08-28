
import { test, expect } from "@playwright/experimental-ct-react";
import App2392 from "./App2392.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2392 />);
  await expect(component).toContainText("Learn React");
});
