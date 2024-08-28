
import { test, expect } from "@playwright/experimental-ct-react";
import App1820 from "./App1820.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1820 />);
  await expect(component).toContainText("Learn React");
});
