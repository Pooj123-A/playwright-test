
import { test, expect } from "@playwright/experimental-ct-react";
import App899 from "./App899.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App899 />);
  await expect(component).toContainText("Learn React");
});
