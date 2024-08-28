
import { test, expect } from "@playwright/experimental-ct-react";
import App50 from "./App50.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App50 />);
  await expect(component).toContainText("Learn React");
});
