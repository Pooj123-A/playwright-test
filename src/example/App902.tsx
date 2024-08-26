
import { test, expect } from "@playwright/experimental-ct-react";
import App902 from "./App902.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App902 />);
  await expect(component).toContainText("Learn React");
});
