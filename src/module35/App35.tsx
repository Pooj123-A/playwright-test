
import { test, expect } from "@playwright/experimental-ct-react";
import App35 from "./App35.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App35 />);
  await expect(component).toContainText("Learn React");
});
