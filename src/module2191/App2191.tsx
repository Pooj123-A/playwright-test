
import { test, expect } from "@playwright/experimental-ct-react";
import App2191 from "./App2191.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2191 />);
  await expect(component).toContainText("Learn React");
});
