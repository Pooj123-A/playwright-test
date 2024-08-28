
import { test, expect } from "@playwright/experimental-ct-react";
import App2199 from "./App2199.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2199 />);
  await expect(component).toContainText("Learn React");
});
