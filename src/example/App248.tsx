
import { test, expect } from "@playwright/experimental-ct-react";
import App248 from "./App248.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App248 />);
  await expect(component).toContainText("Learn React");
});
