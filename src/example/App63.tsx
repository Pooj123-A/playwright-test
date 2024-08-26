
import { test, expect } from "@playwright/experimental-ct-react";
import App63 from "./App63.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App63 />);
  await expect(component).toContainText("Learn React");
});
