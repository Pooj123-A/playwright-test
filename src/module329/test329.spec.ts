
import { test, expect } from "@playwright/experimental-ct-react";
import App329 from "./App329.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App329 />);
  await expect(component).toContainText("Learn React");
});
