
import { test, expect } from "@playwright/experimental-ct-react";
import App761 from "./App761.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App761 />);
  await expect(component).toContainText("Learn React");
});
