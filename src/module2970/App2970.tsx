
import { test, expect } from "@playwright/experimental-ct-react";
import App2970 from "./App2970.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2970 />);
  await expect(component).toContainText("Learn React");
});
