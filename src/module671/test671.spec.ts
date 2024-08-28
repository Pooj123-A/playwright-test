
import { test, expect } from "@playwright/experimental-ct-react";
import App671 from "./App671.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App671 />);
  await expect(component).toContainText("Learn React");
});
