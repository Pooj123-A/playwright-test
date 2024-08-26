
import { test, expect } from "@playwright/experimental-ct-react";
import App2479 from "../example/App2479.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2479 />);
  await expect(component).toContainText("Learn React");
});
