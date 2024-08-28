
import { test, expect } from "@playwright/experimental-ct-react";
import App2892 from "./App2892.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2892 />);
  await expect(component).toContainText("Learn React");
});
