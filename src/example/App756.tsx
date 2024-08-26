
import { test, expect } from "@playwright/experimental-ct-react";
import App756 from "./App756.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App756 />);
  await expect(component).toContainText("Learn React");
});
