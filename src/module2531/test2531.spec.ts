
import { test, expect } from "@playwright/experimental-ct-react";
import App2531 from "./App2531.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2531 />);
  await expect(component).toContainText("Learn React");
});
