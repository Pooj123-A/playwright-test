
import { test, expect } from "@playwright/experimental-ct-react";
import App2788 from "./App2788.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2788 />);
  await expect(component).toContainText("Learn React");
});
