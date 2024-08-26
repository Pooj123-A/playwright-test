
import { test, expect } from "@playwright/experimental-ct-react";
import App264 from "../example/App264.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App264 />);
  await expect(component).toContainText("Learn React");
});
