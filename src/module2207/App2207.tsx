
import { test, expect } from "@playwright/experimental-ct-react";
import App2207 from "./App2207.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2207 />);
  await expect(component).toContainText("Learn React");
});
