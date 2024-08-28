
import { test, expect } from "@playwright/experimental-ct-react";
import App2045 from "./App2045.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2045 />);
  await expect(component).toContainText("Learn React");
});
