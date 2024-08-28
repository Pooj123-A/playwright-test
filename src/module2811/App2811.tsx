
import { test, expect } from "@playwright/experimental-ct-react";
import App2811 from "./App2811.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2811 />);
  await expect(component).toContainText("Learn React");
});
