
import { test, expect } from "@playwright/experimental-ct-react";
import App691 from "./App691.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App691 />);
  await expect(component).toContainText("Learn React");
});
