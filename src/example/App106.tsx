
import { test, expect } from "@playwright/experimental-ct-react";
import App106 from "./App106.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App106 />);
  await expect(component).toContainText("Learn React");
});
