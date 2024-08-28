
import { test, expect } from "@playwright/experimental-ct-react";
import App454 from "./App454.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App454 />);
  await expect(component).toContainText("Learn React");
});
