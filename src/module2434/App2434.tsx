
import { test, expect } from "@playwright/experimental-ct-react";
import App2434 from "./App2434.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2434 />);
  await expect(component).toContainText("Learn React");
});
