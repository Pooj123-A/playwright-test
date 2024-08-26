
import { test, expect } from "@playwright/experimental-ct-react";
import App1558 from "./App1558.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1558 />);
  await expect(component).toContainText("Learn React");
});
