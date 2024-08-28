
import { test, expect } from "@playwright/experimental-ct-react";
import App705 from "./App705.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App705 />);
  await expect(component).toContainText("Learn React");
});
