
import { test, expect } from "@playwright/experimental-ct-react";
import App2928 from "./App2928.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2928 />);
  await expect(component).toContainText("Learn React");
});
