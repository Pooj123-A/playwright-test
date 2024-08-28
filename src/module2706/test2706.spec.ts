
import { test, expect } from "@playwright/experimental-ct-react";
import App2706 from "./App2706.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2706 />);
  await expect(component).toContainText("Learn React");
});
