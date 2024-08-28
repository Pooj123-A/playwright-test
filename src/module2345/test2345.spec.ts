
import { test, expect } from "@playwright/experimental-ct-react";
import App2345 from "./App2345.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2345 />);
  await expect(component).toContainText("Learn React");
});
