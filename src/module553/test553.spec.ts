
import { test, expect } from "@playwright/experimental-ct-react";
import App553 from "./App553.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App553 />);
  await expect(component).toContainText("Learn React");
});
