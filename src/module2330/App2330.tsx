
import { test, expect } from "@playwright/experimental-ct-react";
import App2330 from "./App2330.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2330 />);
  await expect(component).toContainText("Learn React");
});
