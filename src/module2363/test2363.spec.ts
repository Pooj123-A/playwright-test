
import { test, expect } from "@playwright/experimental-ct-react";
import App2363 from "./App2363.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2363 />);
  await expect(component).toContainText("Learn React");
});
