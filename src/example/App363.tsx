
import { test, expect } from "@playwright/experimental-ct-react";
import App363 from "./App363.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App363 />);
  await expect(component).toContainText("Learn React");
});
