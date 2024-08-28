
import { test, expect } from "@playwright/experimental-ct-react";
import App95 from "./App95.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App95 />);
  await expect(component).toContainText("Learn React");
});
