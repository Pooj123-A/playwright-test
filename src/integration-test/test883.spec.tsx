
import { test, expect } from "@playwright/experimental-ct-react";
import App883 from "../example/App883.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App883 />);
  await expect(component).toContainText("Learn React");
});
