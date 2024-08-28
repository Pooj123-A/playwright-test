
import { test, expect } from "@playwright/experimental-ct-react";
import App2178 from "./App2178.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2178 />);
  await expect(component).toContainText("Learn React");
});
