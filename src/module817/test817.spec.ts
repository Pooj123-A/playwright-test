
import { test, expect } from "@playwright/experimental-ct-react";
import App817 from "./App817.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App817 />);
  await expect(component).toContainText("Learn React");
});
