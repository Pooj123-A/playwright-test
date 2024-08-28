
import { test, expect } from "@playwright/experimental-ct-react";
import App2671 from "./App2671.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2671 />);
  await expect(component).toContainText("Learn React");
});
