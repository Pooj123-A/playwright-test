
import { test, expect } from "@playwright/experimental-ct-react";
import App327 from "./App327.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App327 />);
  await expect(component).toContainText("Learn React");
});
