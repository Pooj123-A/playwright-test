
import { test, expect } from "@playwright/experimental-ct-react";
import App1436 from "./App1436.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1436 />);
  await expect(component).toContainText("Learn React");
});
