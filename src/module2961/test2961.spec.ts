
import { test, expect } from "@playwright/experimental-ct-react";
import App2961 from "./App2961.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2961 />);
  await expect(component).toContainText("Learn React");
});
