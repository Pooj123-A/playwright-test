
import { test, expect } from "@playwright/experimental-ct-react";
import App1817 from "./App1817.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1817 />);
  await expect(component).toContainText("Learn React");
});
