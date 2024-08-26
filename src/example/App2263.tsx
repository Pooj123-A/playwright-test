
import { test, expect } from "@playwright/experimental-ct-react";
import App2263 from "./App2263.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2263 />);
  await expect(component).toContainText("Learn React");
});
