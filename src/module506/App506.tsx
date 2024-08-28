
import { test, expect } from "@playwright/experimental-ct-react";
import App506 from "./App506.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App506 />);
  await expect(component).toContainText("Learn React");
});
