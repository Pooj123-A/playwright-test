
import { test, expect } from "@playwright/experimental-ct-react";
import App484 from "./App484.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App484 />);
  await expect(component).toContainText("Learn React");
});
