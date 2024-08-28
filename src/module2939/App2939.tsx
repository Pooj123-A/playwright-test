
import { test, expect } from "@playwright/experimental-ct-react";
import App2939 from "./App2939.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2939 />);
  await expect(component).toContainText("Learn React");
});
