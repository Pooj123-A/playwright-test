
import { test, expect } from "@playwright/experimental-ct-react";
import App2121 from "./App2121.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2121 />);
  await expect(component).toContainText("Learn React");
});
