
import { test, expect } from "@playwright/experimental-ct-react";
import App2559 from "./App2559.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2559 />);
  await expect(component).toContainText("Learn React");
});