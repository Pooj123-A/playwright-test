
import { test, expect } from "@playwright/experimental-ct-react";
import App2372 from "./App2372.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2372 />);
  await expect(component).toContainText("Learn React");
});
