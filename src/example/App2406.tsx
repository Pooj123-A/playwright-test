
import { test, expect } from "@playwright/experimental-ct-react";
import App2406 from "./App2406.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2406 />);
  await expect(component).toContainText("Learn React");
});
