
import { test, expect } from "@playwright/experimental-ct-react";
import App689 from "./App689.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App689 />);
  await expect(component).toContainText("Learn React");
});
