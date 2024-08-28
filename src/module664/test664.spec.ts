
import { test, expect } from "@playwright/experimental-ct-react";
import App664 from "./App664.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App664 />);
  await expect(component).toContainText("Learn React");
});
