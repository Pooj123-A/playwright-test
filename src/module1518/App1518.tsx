
import { test, expect } from "@playwright/experimental-ct-react";
import App1518 from "./App1518.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1518 />);
  await expect(component).toContainText("Learn React");
});
