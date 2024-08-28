
import { test, expect } from "@playwright/experimental-ct-react";
import App32 from "./App32.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App32 />);
  await expect(component).toContainText("Learn React");
});
