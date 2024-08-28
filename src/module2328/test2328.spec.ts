
import { test, expect } from "@playwright/experimental-ct-react";
import App2328 from "./App2328.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2328 />);
  await expect(component).toContainText("Learn React");
});
