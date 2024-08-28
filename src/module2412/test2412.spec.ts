
import { test, expect } from "@playwright/experimental-ct-react";
import App2412 from "./App2412.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2412 />);
  await expect(component).toContainText("Learn React");
});
