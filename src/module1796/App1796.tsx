
import { test, expect } from "@playwright/experimental-ct-react";
import App1796 from "./App1796.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1796 />);
  await expect(component).toContainText("Learn React");
});
