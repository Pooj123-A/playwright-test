
import { test, expect } from "@playwright/experimental-ct-react";
import App77 from "./App77.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App77 />);
  await expect(component).toContainText("Learn React");
});
