
import { test, expect } from "@playwright/experimental-ct-react";
import App604 from "./App604.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App604 />);
  await expect(component).toContainText("Learn React");
});
