
import { test, expect } from "@playwright/experimental-ct-react";
import App558 from "./App558.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App558 />);
  await expect(component).toContainText("Learn React");
});
