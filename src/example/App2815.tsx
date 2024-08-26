
import { test, expect } from "@playwright/experimental-ct-react";
import App2815 from "./App2815.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2815 />);
  await expect(component).toContainText("Learn React");
});
