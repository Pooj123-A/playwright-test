
import { test, expect } from "@playwright/experimental-ct-react";
import App796 from "./App796.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App796 />);
  await expect(component).toContainText("Learn React");
});
