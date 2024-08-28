
import { test, expect } from "@playwright/experimental-ct-react";
import App273 from "./App273.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App273 />);
  await expect(component).toContainText("Learn React");
});
