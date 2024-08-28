
import { test, expect } from "@playwright/experimental-ct-react";
import App1653 from "./App1653.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1653 />);
  await expect(component).toContainText("Learn React");
});
