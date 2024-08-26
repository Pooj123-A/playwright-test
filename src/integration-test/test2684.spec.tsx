
import { test, expect } from "@playwright/experimental-ct-react";
import App2684 from "../example/App2684.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2684 />);
  await expect(component).toContainText("Learn React");
});
