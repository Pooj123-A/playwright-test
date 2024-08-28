
import { test, expect } from "@playwright/experimental-ct-react";
import App793 from "./App793.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App793 />);
  await expect(component).toContainText("Learn React");
});
