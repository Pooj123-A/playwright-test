
import { test, expect } from "@playwright/experimental-ct-react";
import App56 from "./App56.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App56 />);
  await expect(component).toContainText("Learn React");
});
