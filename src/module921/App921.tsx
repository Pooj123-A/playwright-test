
import { test, expect } from "@playwright/experimental-ct-react";
import App921 from "./App921.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App921 />);
  await expect(component).toContainText("Learn React");
});
