
import { test, expect } from "@playwright/experimental-ct-react";
import App1795 from "./App1795.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1795 />);
  await expect(component).toContainText("Learn React");
});
