
import { test, expect } from "@playwright/experimental-ct-react";
import App2120 from "./App2120.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2120 />);
  await expect(component).toContainText("Learn React");
});
