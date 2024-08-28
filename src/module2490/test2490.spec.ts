
import { test, expect } from "@playwright/experimental-ct-react";
import App2490 from "./App2490.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2490 />);
  await expect(component).toContainText("Learn React");
});
