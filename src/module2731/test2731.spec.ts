
import { test, expect } from "@playwright/experimental-ct-react";
import App2731 from "./App2731.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2731 />);
  await expect(component).toContainText("Learn React");
});
