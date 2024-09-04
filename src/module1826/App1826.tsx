
import { test, expect } from "@playwright/experimental-ct-react";
import App1826 from "./App1826.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1826 />);
  await expect(component).toContainText("Learn React");
});
