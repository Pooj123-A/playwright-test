
import { test, expect } from "@playwright/experimental-ct-react";
import App1895 from "./App1895.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1895 />);
  await expect(component).toContainText("Learn React");
});
