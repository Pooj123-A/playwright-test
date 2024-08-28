
import { test, expect } from "@playwright/experimental-ct-react";
import App922 from "./App922.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App922 />);
  await expect(component).toContainText("Learn React");
});
