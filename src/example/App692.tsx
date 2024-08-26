
import { test, expect } from "@playwright/experimental-ct-react";
import App692 from "./App692.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App692 />);
  await expect(component).toContainText("Learn React");
});
