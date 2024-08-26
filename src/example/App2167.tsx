
import { test, expect } from "@playwright/experimental-ct-react";
import App2167 from "./App2167.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2167 />);
  await expect(component).toContainText("Learn React");
});
