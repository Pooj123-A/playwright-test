
import { test, expect } from "@playwright/experimental-ct-react";
import App2663 from "./App2663.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2663 />);
  await expect(component).toContainText("Learn React");
});
