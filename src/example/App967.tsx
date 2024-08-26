
import { test, expect } from "@playwright/experimental-ct-react";
import App967 from "./App967.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App967 />);
  await expect(component).toContainText("Learn React");
});
