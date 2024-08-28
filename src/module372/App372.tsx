
import { test, expect } from "@playwright/experimental-ct-react";
import App372 from "./App372.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App372 />);
  await expect(component).toContainText("Learn React");
});
