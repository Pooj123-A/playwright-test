
import { test, expect } from "@playwright/experimental-ct-react";
import App567 from "./App567.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App567 />);
  await expect(component).toContainText("Learn React");
});
