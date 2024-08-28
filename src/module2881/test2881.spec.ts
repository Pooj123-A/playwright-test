
import { test, expect } from "@playwright/experimental-ct-react";
import App2881 from "./App2881.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2881 />);
  await expect(component).toContainText("Learn React");
});
