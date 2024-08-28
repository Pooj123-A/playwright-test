
import { test, expect } from "@playwright/experimental-ct-react";
import App2439 from "./App2439.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2439 />);
  await expect(component).toContainText("Learn React");
});
