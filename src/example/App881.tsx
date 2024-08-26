
import { test, expect } from "@playwright/experimental-ct-react";
import App881 from "./App881.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App881 />);
  await expect(component).toContainText("Learn React");
});
