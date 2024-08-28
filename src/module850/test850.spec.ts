
import { test, expect } from "@playwright/experimental-ct-react";
import App850 from "./App850.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App850 />);
  await expect(component).toContainText("Learn React");
});
