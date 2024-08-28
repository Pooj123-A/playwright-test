
import { test, expect } from "@playwright/experimental-ct-react";
import App1527 from "./App1527.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1527 />);
  await expect(component).toContainText("Learn React");
});
