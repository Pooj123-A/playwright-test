
import { test, expect } from "@playwright/experimental-ct-react";
import App409 from "./App409.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App409 />);
  await expect(component).toContainText("Learn React");
});
