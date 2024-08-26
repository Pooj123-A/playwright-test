
import { test, expect } from "@playwright/experimental-ct-react";
import App2384 from "./App2384.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2384 />);
  await expect(component).toContainText("Learn React");
});
