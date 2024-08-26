
import { test, expect } from "@playwright/experimental-ct-react";
import App218 from "./App218.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App218 />);
  await expect(component).toContainText("Learn React");
});
