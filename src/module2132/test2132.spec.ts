
import { test, expect } from "@playwright/experimental-ct-react";
import App2132 from "./App2132.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2132 />);
  await expect(component).toContainText("Learn React");
});
