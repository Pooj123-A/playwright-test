
import { test, expect } from "@playwright/experimental-ct-react";
import App2087 from "./App2087.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2087 />);
  await expect(component).toContainText("Learn React");
});
