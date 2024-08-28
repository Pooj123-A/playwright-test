
import { test, expect } from "@playwright/experimental-ct-react";
import App2583 from "./App2583.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2583 />);
  await expect(component).toContainText("Learn React");
});
