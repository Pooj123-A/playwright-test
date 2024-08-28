
import { test, expect } from "@playwright/experimental-ct-react";
import App2948 from "./App2948.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2948 />);
  await expect(component).toContainText("Learn React");
});
