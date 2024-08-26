
import { test, expect } from "@playwright/experimental-ct-react";
import App2311 from "./App2311.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2311 />);
  await expect(component).toContainText("Learn React");
});
