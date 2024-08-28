
import { test, expect } from "@playwright/experimental-ct-react";
import App975 from "./App975.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App975 />);
  await expect(component).toContainText("Learn React");
});
