
import { test, expect } from "@playwright/experimental-ct-react";
import App2639 from "../example/App2639.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2639 />);
  await expect(component).toContainText("Learn React");
});
