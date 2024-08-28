
import { test, expect } from "@playwright/experimental-ct-react";
import App2348 from "./App2348.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2348 />);
  await expect(component).toContainText("Learn React");
});
