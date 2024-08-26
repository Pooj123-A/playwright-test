
import { test, expect } from "@playwright/experimental-ct-react";
import App2580 from "./App2580.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2580 />);
  await expect(component).toContainText("Learn React");
});
