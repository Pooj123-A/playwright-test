
import { test, expect } from "@playwright/experimental-ct-react";
import App2217 from "./App2217.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2217 />);
  await expect(component).toContainText("Learn React");
});
