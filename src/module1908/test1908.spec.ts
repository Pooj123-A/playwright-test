
import { test, expect } from "@playwright/experimental-ct-react";
import App1908 from "./App1908.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1908 />);
  await expect(component).toContainText("Learn React");
});
