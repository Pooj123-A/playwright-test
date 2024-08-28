
import { test, expect } from "@playwright/experimental-ct-react";
import App309 from "./App309.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App309 />);
  await expect(component).toContainText("Learn React");
});
