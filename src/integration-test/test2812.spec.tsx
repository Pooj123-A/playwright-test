
import { test, expect } from "@playwright/experimental-ct-react";
import App2812 from "../example/App2812.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2812 />);
  await expect(component).toContainText("Learn React");
});
