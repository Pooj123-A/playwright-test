
import { test, expect } from "@playwright/experimental-ct-react";
import App2995 from "./App2995.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2995 />);
  await expect(component).toContainText("Learn React");
});
