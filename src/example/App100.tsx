
import { test, expect } from "@playwright/experimental-ct-react";
import App100 from "./App100.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App100 />);
  await expect(component).toContainText("Learn React");
});
