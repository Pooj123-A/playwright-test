
import { test, expect } from "@playwright/experimental-ct-react";
import App2039 from "./App2039.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2039 />);
  await expect(component).toContainText("Learn React");
});
