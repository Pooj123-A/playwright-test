
import { test, expect } from "@playwright/experimental-ct-react";
import App2264 from "../example/App2264.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2264 />);
  await expect(component).toContainText("Learn React");
});
