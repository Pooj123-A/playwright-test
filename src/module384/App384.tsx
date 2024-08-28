
import { test, expect } from "@playwright/experimental-ct-react";
import App384 from "./App384.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App384 />);
  await expect(component).toContainText("Learn React");
});
