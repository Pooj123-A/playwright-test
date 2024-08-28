
import { test, expect } from "@playwright/experimental-ct-react";
import App2331 from "./App2331.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2331 />);
  await expect(component).toContainText("Learn React");
});
