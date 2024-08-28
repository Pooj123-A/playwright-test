
import { test, expect } from "@playwright/experimental-ct-react";
import App666 from "./App666.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App666 />);
  await expect(component).toContainText("Learn React");
});
