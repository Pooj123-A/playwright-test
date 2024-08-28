
import { test, expect } from "@playwright/experimental-ct-react";
import App2495 from "./App2495.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2495 />);
  await expect(component).toContainText("Learn React");
});
