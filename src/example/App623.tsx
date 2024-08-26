
import { test, expect } from "@playwright/experimental-ct-react";
import App623 from "./App623.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App623 />);
  await expect(component).toContainText("Learn React");
});
