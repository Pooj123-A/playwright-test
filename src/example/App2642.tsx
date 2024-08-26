
import { test, expect } from "@playwright/experimental-ct-react";
import App2642 from "./App2642.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2642 />);
  await expect(component).toContainText("Learn React");
});
