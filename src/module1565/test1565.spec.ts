
import { test, expect } from "@playwright/experimental-ct-react";
import App1565 from "./App1565.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1565 />);
  await expect(component).toContainText("Learn React");
});
