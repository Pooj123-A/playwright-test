
import { test, expect } from "@playwright/experimental-ct-react";
import App2644 from "./App2644.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2644 />);
  await expect(component).toContainText("Learn React");
});
