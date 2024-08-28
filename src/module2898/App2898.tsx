
import { test, expect } from "@playwright/experimental-ct-react";
import App2898 from "./App2898.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2898 />);
  await expect(component).toContainText("Learn React");
});
