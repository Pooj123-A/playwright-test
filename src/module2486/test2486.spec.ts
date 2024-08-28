
import { test, expect } from "@playwright/experimental-ct-react";
import App2486 from "./App2486.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2486 />);
  await expect(component).toContainText("Learn React");
});
