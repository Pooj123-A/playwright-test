
import { test, expect } from "@playwright/experimental-ct-react";
import App2313 from "./App2313.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2313 />);
  await expect(component).toContainText("Learn React");
});
