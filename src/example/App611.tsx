
import { test, expect } from "@playwright/experimental-ct-react";
import App611 from "./App611.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App611 />);
  await expect(component).toContainText("Learn React");
});
