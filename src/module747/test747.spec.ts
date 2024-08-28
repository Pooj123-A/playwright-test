
import { test, expect } from "@playwright/experimental-ct-react";
import App747 from "./App747.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App747 />);
  await expect(component).toContainText("Learn React");
});
