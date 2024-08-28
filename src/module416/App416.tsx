
import { test, expect } from "@playwright/experimental-ct-react";
import App416 from "./App416.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App416 />);
  await expect(component).toContainText("Learn React");
});
