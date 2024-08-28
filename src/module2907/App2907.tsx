
import { test, expect } from "@playwright/experimental-ct-react";
import App2907 from "./App2907.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2907 />);
  await expect(component).toContainText("Learn React");
});
