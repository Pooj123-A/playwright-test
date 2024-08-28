
import { test, expect } from "@playwright/experimental-ct-react";
import App2396 from "./App2396.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2396 />);
  await expect(component).toContainText("Learn React");
});
