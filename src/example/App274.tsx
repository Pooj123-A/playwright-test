
import { test, expect } from "@playwright/experimental-ct-react";
import App274 from "./App274.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App274 />);
  await expect(component).toContainText("Learn React");
});
