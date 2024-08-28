
import { test, expect } from "@playwright/experimental-ct-react";
import App2911 from "./App2911.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2911 />);
  await expect(component).toContainText("Learn React");
});
