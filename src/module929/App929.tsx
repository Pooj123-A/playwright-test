
import { test, expect } from "@playwright/experimental-ct-react";
import App929 from "./App929.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App929 />);
  await expect(component).toContainText("Learn React");
});
