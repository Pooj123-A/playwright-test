
import { test, expect } from "@playwright/experimental-ct-react";
import App2394 from "./App2394.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2394 />);
  await expect(component).toContainText("Learn React");
});
