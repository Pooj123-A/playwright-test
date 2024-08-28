
import { test, expect } from "@playwright/experimental-ct-react";
import App2895 from "./App2895.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2895 />);
  await expect(component).toContainText("Learn React");
});
