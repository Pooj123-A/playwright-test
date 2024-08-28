
import { test, expect } from "@playwright/experimental-ct-react";
import App2856 from "./App2856.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2856 />);
  await expect(component).toContainText("Learn React");
});
