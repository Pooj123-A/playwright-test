
import { test, expect } from "@playwright/experimental-ct-react";
import App2262 from "./App2262.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2262 />);
  await expect(component).toContainText("Learn React");
});
