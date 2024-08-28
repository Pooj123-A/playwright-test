
import { test, expect } from "@playwright/experimental-ct-react";
import App908 from "./App908.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App908 />);
  await expect(component).toContainText("Learn React");
});
