
import { test, expect } from "@playwright/experimental-ct-react";
import App798 from "./App798.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App798 />);
  await expect(component).toContainText("Learn React");
});
