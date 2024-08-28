
import { test, expect } from "@playwright/experimental-ct-react";
import App433 from "./App433.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App433 />);
  await expect(component).toContainText("Learn React");
});
