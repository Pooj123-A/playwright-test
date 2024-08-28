
import { test, expect } from "@playwright/experimental-ct-react";
import App2537 from "./App2537.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2537 />);
  await expect(component).toContainText("Learn React");
});
