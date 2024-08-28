
import { test, expect } from "@playwright/experimental-ct-react";
import App366 from "./App366.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App366 />);
  await expect(component).toContainText("Learn React");
});
