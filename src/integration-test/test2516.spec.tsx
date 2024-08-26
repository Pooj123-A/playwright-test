
import { test, expect } from "@playwright/experimental-ct-react";
import App2516 from "../example/App2516.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2516 />);
  await expect(component).toContainText("Learn React");
});
