
import { test, expect } from "@playwright/experimental-ct-react";
import App2284 from "../example/App2284.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2284 />);
  await expect(component).toContainText("Learn React");
});