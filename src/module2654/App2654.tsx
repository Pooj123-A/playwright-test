
import { test, expect } from "@playwright/experimental-ct-react";
import App2654 from "./App2654.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2654 />);
  await expect(component).toContainText("Learn React");
});
