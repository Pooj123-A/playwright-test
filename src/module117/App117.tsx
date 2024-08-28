
import { test, expect } from "@playwright/experimental-ct-react";
import App117 from "./App117.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App117 />);
  await expect(component).toContainText("Learn React");
});
