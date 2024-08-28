
import { test, expect } from "@playwright/experimental-ct-react";
import App290 from "./App290.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App290 />);
  await expect(component).toContainText("Learn React");
});
