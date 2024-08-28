
import { test, expect } from "@playwright/experimental-ct-react";
import App2521 from "./App2521.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2521 />);
  await expect(component).toContainText("Learn React");
});
