
import { test, expect } from "@playwright/experimental-ct-react";
import App1456 from "./App1456.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1456 />);
  await expect(component).toContainText("Learn React");
});
