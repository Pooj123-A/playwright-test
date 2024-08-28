
import { test, expect } from "@playwright/experimental-ct-react";
import App563 from "./App563.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App563 />);
  await expect(component).toContainText("Learn React");
});
