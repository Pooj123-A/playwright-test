
import { test, expect } from "@playwright/experimental-ct-react";
import App1688 from "./App1688.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1688 />);
  await expect(component).toContainText("Learn React");
});
