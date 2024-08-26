
import { test, expect } from "@playwright/experimental-ct-react";
import App2606 from "./App2606.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2606 />);
  await expect(component).toContainText("Learn React");
});
