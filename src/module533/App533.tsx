
import { test, expect } from "@playwright/experimental-ct-react";
import App533 from "./App533.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App533 />);
  await expect(component).toContainText("Learn React");
});
