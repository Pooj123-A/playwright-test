
import { test, expect } from "@playwright/experimental-ct-react";
import App305 from "./App305.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App305 />);
  await expect(component).toContainText("Learn React");
});
