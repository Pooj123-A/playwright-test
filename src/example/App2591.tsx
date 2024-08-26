
import { test, expect } from "@playwright/experimental-ct-react";
import App2591 from "./App2591.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2591 />);
  await expect(component).toContainText("Learn React");
});
