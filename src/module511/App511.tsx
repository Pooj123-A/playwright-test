
import { test, expect } from "@playwright/experimental-ct-react";
import App511 from "./App511.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App511 />);
  await expect(component).toContainText("Learn React");
});
