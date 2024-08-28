
import { test, expect } from "@playwright/experimental-ct-react";
import App2594 from "./App2594.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2594 />);
  await expect(component).toContainText("Learn React");
});
