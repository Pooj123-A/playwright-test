
import { test, expect } from "@playwright/experimental-ct-react";
import App946 from "./App946.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App946 />);
  await expect(component).toContainText("Learn React");
});
