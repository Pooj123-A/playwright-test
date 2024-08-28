
import { test, expect } from "@playwright/experimental-ct-react";
import App137 from "./App137.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App137 />);
  await expect(component).toContainText("Learn React");
});
