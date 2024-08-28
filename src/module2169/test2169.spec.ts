
import { test, expect } from "@playwright/experimental-ct-react";
import App2169 from "./App2169.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2169 />);
  await expect(component).toContainText("Learn React");
});
