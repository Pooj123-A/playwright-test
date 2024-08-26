
import { test, expect } from "@playwright/experimental-ct-react";
import App71 from "../example/App71.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App71 />);
  await expect(component).toContainText("Learn React");
});
