
import { test, expect } from "@playwright/experimental-ct-react";
import App2527 from "./App2527.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2527 />);
  await expect(component).toContainText("Learn React");
});
