
import { test, expect } from "@playwright/experimental-ct-react";
import App298 from "./App298.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App298 />);
  await expect(component).toContainText("Learn React");
});
