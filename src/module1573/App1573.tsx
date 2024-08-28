
import { test, expect } from "@playwright/experimental-ct-react";
import App1573 from "./App1573.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1573 />);
  await expect(component).toContainText("Learn React");
});
