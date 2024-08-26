
import { test, expect } from "@playwright/experimental-ct-react";
import App590 from "../example/App590.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App590 />);
  await expect(component).toContainText("Learn React");
});
