
import { test, expect } from "@playwright/experimental-ct-react";
import App2248 from "./App2248.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2248 />);
  await expect(component).toContainText("Learn React");
});
