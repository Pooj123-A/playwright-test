
import { test, expect } from "@playwright/experimental-ct-react";
import App2749 from "./App2749.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2749 />);
  await expect(component).toContainText("Learn React");
});
