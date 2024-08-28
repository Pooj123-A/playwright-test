
import { test, expect } from "@playwright/experimental-ct-react";
import App1667 from "./App1667.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1667 />);
  await expect(component).toContainText("Learn React");
});
