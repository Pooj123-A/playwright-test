
import { test, expect } from "@playwright/experimental-ct-react";
import App600 from "./App600.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App600 />);
  await expect(component).toContainText("Learn React");
});
