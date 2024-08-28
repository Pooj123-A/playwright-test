
import { test, expect } from "@playwright/experimental-ct-react";
import App60 from "./App60.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App60 />);
  await expect(component).toContainText("Learn React");
});
