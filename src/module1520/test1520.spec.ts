
import { test, expect } from "@playwright/experimental-ct-react";
import App1520 from "./App1520.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1520 />);
  await expect(component).toContainText("Learn React");
});
