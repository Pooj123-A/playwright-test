
import { test, expect } from "@playwright/experimental-ct-react";
import App2679 from "./App2679.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2679 />);
  await expect(component).toContainText("Learn React");
});
