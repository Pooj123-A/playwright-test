
import { test, expect } from "@playwright/experimental-ct-react";
import App261 from "./App261.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App261 />);
  await expect(component).toContainText("Learn React");
});
