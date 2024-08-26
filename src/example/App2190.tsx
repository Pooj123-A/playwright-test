
import { test, expect } from "@playwright/experimental-ct-react";
import App2190 from "./App2190.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2190 />);
  await expect(component).toContainText("Learn React");
});
