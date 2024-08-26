
import { test, expect } from "@playwright/experimental-ct-react";
import App185 from "./App185.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App185 />);
  await expect(component).toContainText("Learn React");
});
