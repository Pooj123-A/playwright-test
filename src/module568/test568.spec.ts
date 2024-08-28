
import { test, expect } from "@playwright/experimental-ct-react";
import App568 from "./App568.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App568 />);
  await expect(component).toContainText("Learn React");
});
