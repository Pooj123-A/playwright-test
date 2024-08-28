
import { test, expect } from "@playwright/experimental-ct-react";
import App1988 from "./App1988.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1988 />);
  await expect(component).toContainText("Learn React");
});
