
import { test, expect } from "@playwright/experimental-ct-react";
import App2110 from "./App2110.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2110 />);
  await expect(component).toContainText("Learn React");
});
