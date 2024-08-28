
import { test, expect } from "@playwright/experimental-ct-react";
import App402 from "./App402.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App402 />);
  await expect(component).toContainText("Learn React");
});
