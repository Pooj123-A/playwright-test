
import { test, expect } from "@playwright/experimental-ct-react";
import App2206 from "./App2206.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2206 />);
  await expect(component).toContainText("Learn React");
});
