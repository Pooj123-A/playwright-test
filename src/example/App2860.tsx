
import { test, expect } from "@playwright/experimental-ct-react";
import App2860 from "./App2860.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2860 />);
  await expect(component).toContainText("Learn React");
});
