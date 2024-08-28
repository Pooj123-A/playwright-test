
import { test, expect } from "@playwright/experimental-ct-react";
import App2381 from "./App2381.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2381 />);
  await expect(component).toContainText("Learn React");
});
