
import { test, expect } from "@playwright/experimental-ct-react";
import App2834 from "../example/App2834.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2834 />);
  await expect(component).toContainText("Learn React");
});
