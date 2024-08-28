
import { test, expect } from "@playwright/experimental-ct-react";
import App2785 from "./App2785.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2785 />);
  await expect(component).toContainText("Learn React");
});
