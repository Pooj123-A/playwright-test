
import { test, expect } from "@playwright/experimental-ct-react";
import App283 from "./App283.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App283 />);
  await expect(component).toContainText("Learn React");
});
