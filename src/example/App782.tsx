
import { test, expect } from "@playwright/experimental-ct-react";
import App782 from "./App782.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App782 />);
  await expect(component).toContainText("Learn React");
});
