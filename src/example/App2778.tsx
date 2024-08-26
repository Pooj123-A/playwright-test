
import { test, expect } from "@playwright/experimental-ct-react";
import App2778 from "./App2778.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2778 />);
  await expect(component).toContainText("Learn React");
});
