
import { test, expect } from "@playwright/experimental-ct-react";
import App2818 from "./App2818.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2818 />);
  await expect(component).toContainText("Learn React");
});
