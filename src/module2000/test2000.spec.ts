
import { test, expect } from "@playwright/experimental-ct-react";
import App2000 from "./App2000.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2000 />);
  await expect(component).toContainText("Learn React");
});
