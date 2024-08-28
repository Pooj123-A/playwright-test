
import { test, expect } from "@playwright/experimental-ct-react";
import App2982 from "./App2982.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2982 />);
  await expect(component).toContainText("Learn React");
});
