
import { test, expect } from "@playwright/experimental-ct-react";
import App2843 from "./App2843.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2843 />);
  await expect(component).toContainText("Learn React");
});
