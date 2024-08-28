
import { test, expect } from "@playwright/experimental-ct-react";
import App2758 from "./App2758.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2758 />);
  await expect(component).toContainText("Learn React");
});
