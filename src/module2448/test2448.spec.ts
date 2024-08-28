
import { test, expect } from "@playwright/experimental-ct-react";
import App2448 from "./App2448.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2448 />);
  await expect(component).toContainText("Learn React");
});
