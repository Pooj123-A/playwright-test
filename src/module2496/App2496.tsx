
import { test, expect } from "@playwright/experimental-ct-react";
import App2496 from "./App2496.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2496 />);
  await expect(component).toContainText("Learn React");
});
