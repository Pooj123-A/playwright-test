
import { test, expect } from "@playwright/experimental-ct-react";
import App119 from "../example/App119.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App119 />);
  await expect(component).toContainText("Learn React");
});
