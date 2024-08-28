
import { test, expect } from "@playwright/experimental-ct-react";
import App2637 from "./App2637.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2637 />);
  await expect(component).toContainText("Learn React");
});
