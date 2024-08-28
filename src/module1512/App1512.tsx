
import { test, expect } from "@playwright/experimental-ct-react";
import App1512 from "./App1512.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1512 />);
  await expect(component).toContainText("Learn React");
});
