
import { test, expect } from "@playwright/experimental-ct-react";
import App96 from "./App96.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App96 />);
  await expect(component).toContainText("Learn React");
});
