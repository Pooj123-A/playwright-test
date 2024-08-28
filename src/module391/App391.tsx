
import { test, expect } from "@playwright/experimental-ct-react";
import App391 from "./App391.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App391 />);
  await expect(component).toContainText("Learn React");
});
