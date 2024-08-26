
import { test, expect } from "@playwright/experimental-ct-react";
import App592 from "./App592.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App592 />);
  await expect(component).toContainText("Learn React");
});
