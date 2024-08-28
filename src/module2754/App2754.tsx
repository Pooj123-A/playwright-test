
import { test, expect } from "@playwright/experimental-ct-react";
import App2754 from "./App2754.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2754 />);
  await expect(component).toContainText("Learn React");
});
