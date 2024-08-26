
import { test, expect } from "@playwright/experimental-ct-react";
import App2044 from "./App2044.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2044 />);
  await expect(component).toContainText("Learn React");
});
