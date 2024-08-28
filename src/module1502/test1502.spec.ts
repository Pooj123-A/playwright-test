
import { test, expect } from "@playwright/experimental-ct-react";
import App1502 from "./App1502.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1502 />);
  await expect(component).toContainText("Learn React");
});
