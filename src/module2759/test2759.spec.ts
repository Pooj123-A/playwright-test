
import { test, expect } from "@playwright/experimental-ct-react";
import App2759 from "./App2759.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2759 />);
  await expect(component).toContainText("Learn React");
});
