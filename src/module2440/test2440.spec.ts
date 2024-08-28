
import { test, expect } from "@playwright/experimental-ct-react";
import App2440 from "./App2440.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2440 />);
  await expect(component).toContainText("Learn React");
});
