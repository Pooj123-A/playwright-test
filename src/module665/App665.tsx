
import { test, expect } from "@playwright/experimental-ct-react";
import App665 from "./App665.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App665 />);
  await expect(component).toContainText("Learn React");
});
