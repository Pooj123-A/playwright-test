
import { test, expect } from "@playwright/experimental-ct-react";
import App542 from "../example/App542.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App542 />);
  await expect(component).toContainText("Learn React");
});
