
import { test, expect } from "@playwright/experimental-ct-react";
import App2575 from "./App2575.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2575 />);
  await expect(component).toContainText("Learn React");
});
