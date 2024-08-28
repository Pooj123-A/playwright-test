
import { test, expect } from "@playwright/experimental-ct-react";
import App1755 from "./App1755.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1755 />);
  await expect(component).toContainText("Learn React");
});
