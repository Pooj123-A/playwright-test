
import { test, expect } from "@playwright/experimental-ct-react";
import App1528 from "./App1528.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1528 />);
  await expect(component).toContainText("Learn React");
});
