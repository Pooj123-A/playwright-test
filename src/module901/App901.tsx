
import { test, expect } from "@playwright/experimental-ct-react";
import App901 from "./App901.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App901 />);
  await expect(component).toContainText("Learn React");
});
