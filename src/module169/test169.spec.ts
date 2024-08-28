
import { test, expect } from "@playwright/experimental-ct-react";
import App169 from "./App169.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App169 />);
  await expect(component).toContainText("Learn React");
});
