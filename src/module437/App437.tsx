
import { test, expect } from "@playwright/experimental-ct-react";
import App437 from "./App437.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App437 />);
  await expect(component).toContainText("Learn React");
});
