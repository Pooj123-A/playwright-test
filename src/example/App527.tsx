
import { test, expect } from "@playwright/experimental-ct-react";
import App527 from "./App527.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App527 />);
  await expect(component).toContainText("Learn React");
});
