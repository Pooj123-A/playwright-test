
import { test, expect } from "@playwright/experimental-ct-react";
import App2630 from "../example/App2630.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2630 />);
  await expect(component).toContainText("Learn React");
});
