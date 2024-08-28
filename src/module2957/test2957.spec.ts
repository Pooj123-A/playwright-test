
import { test, expect } from "@playwright/experimental-ct-react";
import App2957 from "./App2957.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2957 />);
  await expect(component).toContainText("Learn React");
});
