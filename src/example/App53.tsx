
import { test, expect } from "@playwright/experimental-ct-react";
import App53 from "./App53.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App53 />);
  await expect(component).toContainText("Learn React");
});
