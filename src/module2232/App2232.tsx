
import { test, expect } from "@playwright/experimental-ct-react";
import App2232 from "./App2232.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2232 />);
  await expect(component).toContainText("Learn React");
});
