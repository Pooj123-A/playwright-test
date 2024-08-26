
import { test, expect } from "@playwright/experimental-ct-react";
import App995 from "./App995.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App995 />);
  await expect(component).toContainText("Learn React");
});
