
import { test, expect } from "@playwright/experimental-ct-react";
import App414 from "./App414.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App414 />);
  await expect(component).toContainText("Learn React");
});
