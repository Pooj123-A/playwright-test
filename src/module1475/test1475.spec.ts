
import { test, expect } from "@playwright/experimental-ct-react";
import App1475 from "./App1475.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1475 />);
  await expect(component).toContainText("Learn React");
});
