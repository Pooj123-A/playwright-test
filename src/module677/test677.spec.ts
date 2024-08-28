
import { test, expect } from "@playwright/experimental-ct-react";
import App677 from "./App677.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App677 />);
  await expect(component).toContainText("Learn React");
});
