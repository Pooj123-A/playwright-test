
import { test, expect } from "@playwright/experimental-ct-react";
import App759 from "./App759.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App759 />);
  await expect(component).toContainText("Learn React");
});
