
import { test, expect } from "@playwright/experimental-ct-react";
import App2558 from "./App2558.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2558 />);
  await expect(component).toContainText("Learn React");
});
