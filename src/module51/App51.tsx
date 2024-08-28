
import { test, expect } from "@playwright/experimental-ct-react";
import App51 from "./App51.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App51 />);
  await expect(component).toContainText("Learn React");
});
