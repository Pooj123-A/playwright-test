
import { test, expect } from "@playwright/experimental-ct-react";
import App2975 from "./App2975.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2975 />);
  await expect(component).toContainText("Learn React");
});
