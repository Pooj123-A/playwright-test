
import { test, expect } from "@playwright/experimental-ct-react";
import App998 from "./App998.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App998 />);
  await expect(component).toContainText("Learn React");
});
