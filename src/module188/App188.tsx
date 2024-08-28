
import { test, expect } from "@playwright/experimental-ct-react";
import App188 from "./App188.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App188 />);
  await expect(component).toContainText("Learn React");
});
