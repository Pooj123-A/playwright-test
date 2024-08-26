
import { test, expect } from "@playwright/experimental-ct-react";
import App54 from "./App54.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App54 />);
  await expect(component).toContainText("Learn React");
});
