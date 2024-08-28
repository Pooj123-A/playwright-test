
import { test, expect } from "@playwright/experimental-ct-react";
import App614 from "./App614.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App614 />);
  await expect(component).toContainText("Learn React");
});
