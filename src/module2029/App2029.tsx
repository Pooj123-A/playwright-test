
import { test, expect } from "@playwright/experimental-ct-react";
import App2029 from "./App2029.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2029 />);
  await expect(component).toContainText("Learn React");
});
