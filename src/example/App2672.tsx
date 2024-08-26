
import { test, expect } from "@playwright/experimental-ct-react";
import App2672 from "./App2672.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2672 />);
  await expect(component).toContainText("Learn React");
});
