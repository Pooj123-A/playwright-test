
import { test, expect } from "@playwright/experimental-ct-react";
import App1572 from "./App1572.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1572 />);
  await expect(component).toContainText("Learn React");
});
