
import { test, expect } from "@playwright/experimental-ct-react";
import App2702 from "../example/App2702.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2702 />);
  await expect(component).toContainText("Learn React");
});
