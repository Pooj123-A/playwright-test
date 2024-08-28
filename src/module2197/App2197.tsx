
import { test, expect } from "@playwright/experimental-ct-react";
import App2197 from "./App2197.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2197 />);
  await expect(component).toContainText("Learn React");
});
