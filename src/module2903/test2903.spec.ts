
import { test, expect } from "@playwright/experimental-ct-react";
import App2903 from "./App2903.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2903 />);
  await expect(component).toContainText("Learn React");
});
