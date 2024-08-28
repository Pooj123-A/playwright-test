
import { test, expect } from "@playwright/experimental-ct-react";
import App408 from "./App408.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App408 />);
  await expect(component).toContainText("Learn React");
});
