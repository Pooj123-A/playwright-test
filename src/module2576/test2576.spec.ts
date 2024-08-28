
import { test, expect } from "@playwright/experimental-ct-react";
import App2576 from "./App2576.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2576 />);
  await expect(component).toContainText("Learn React");
});
