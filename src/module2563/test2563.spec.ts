
import { test, expect } from "@playwright/experimental-ct-react";
import App2563 from "./App2563.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2563 />);
  await expect(component).toContainText("Learn React");
});