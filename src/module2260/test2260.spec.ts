
import { test, expect } from "@playwright/experimental-ct-react";
import App2260 from "./App2260.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2260 />);
  await expect(component).toContainText("Learn React");
});
