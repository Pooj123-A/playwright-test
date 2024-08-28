
import { test, expect } from "@playwright/experimental-ct-react";
import App2574 from "./App2574.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2574 />);
  await expect(component).toContainText("Learn React");
});
