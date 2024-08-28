
import { test, expect } from "@playwright/experimental-ct-react";
import App374 from "./App374.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App374 />);
  await expect(component).toContainText("Learn React");
});
