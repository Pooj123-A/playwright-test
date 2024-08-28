
import { test, expect } from "@playwright/experimental-ct-react";
import App1696 from "./App1696.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1696 />);
  await expect(component).toContainText("Learn React");
});
