
import { test, expect } from "@playwright/experimental-ct-react";
import App2484 from "./App2484.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2484 />);
  await expect(component).toContainText("Learn React");
});
