
import { test, expect } from "@playwright/experimental-ct-react";
import App2216 from "./App2216.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2216 />);
  await expect(component).toContainText("Learn React");
});
